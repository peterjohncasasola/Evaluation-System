<?php

namespace App\Http\Requests;

use App\Rules\AlphaSpaceDash;
use App\Rules\Propercase;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdateInstructorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $me = $this;
        return [
            'department_id' => 'exists:departments,id',
            'first_name' => ['required', 'max:50', new AlphaSpaceDash, new Propercase, Rule::unique('instructors')->where(function ($query) use ($me) {
                return $query->where([
                    ['first_name', $me->first_name],
                    ['middle_name',$me->middle_name],
                    ['last_name', $me->last_name],
                    ['id', '!=', $me->id],
                ]);
            })],
            'contract_status' => ['required', Rule::in(['Permanent','Temporary Permanent', 'Temporary','Part-Time'])],
            'min_units' => 'required',
            'max_units' => 'required',
            'last_name' => ['required', 'max:50', new AlphaSpaceDash, new Propercase],
            'middle_name' => ['max:50', new AlphaSpaceDash, new Propercase],
            'specialization' => ['required', new AlphaSpaceDash],
        ];
    }

    public function messages()
    {
        return [
            'first_name.unique' => "{$this->last_name} , {$this->first_name} {$this->middle_name} already exist",
        ];

    }
}
