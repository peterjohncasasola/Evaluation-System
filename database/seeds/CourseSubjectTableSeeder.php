<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSubjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\CourseSubject::class, 20)->create();
        DB::insert("INSERT INTO `course_subjects` (`id`, `course_id`, `subject_id`, `sy_id`, `prerequisite`, `year_level`, `semester`, `created_at`, `updated_at`, `deleted_at`) VALUES
        (1, 4, 82, 11, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:40', NULL),
        (2, 1, 52, 9, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:40', NULL),
        (3, 3, 41, 6, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:40', NULL),
        (4, 3, 50, 6, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:41', NULL),
        (5, 1, 16, 1, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:41', NULL),
        (6, 2, 78, 2, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:42', NULL),
        (7, 2, 85, 10, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:42', NULL),
        (8, 4, 86, 10, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:42', NULL),
        (9, 2, 9, 11, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:42', NULL),
        (10, 4, 91, 7, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:43', NULL),
        (11, 3, 61, 11, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:43', NULL),
        (12, 4, 84, 10, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:43', NULL),
        (13, 4, 87, 5, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:43', NULL),
        (14, 2, 27, 4, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-10 11:41:00', '2020-10-10 11:41:00'),
        (15, 1, 96, 7, 'IT39', 'First Year', 'Second', '2020-10-07 13:16:40', '2020-10-10 12:26:57', NULL),
        (16, 3, 100, 6, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:44', NULL),
        (17, 1, 102, 9, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-10 11:06:42', NULL),
        (18, 3, 27, 6, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-10 11:41:08', '2020-10-10 11:41:08'),
        (19, 4, 55, 3, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-07 13:16:44', NULL),
        (20, 1, 101, 6, NULL, 'First Year', 'First', '2020-10-07 13:16:40', '2020-10-10 11:08:59', NULL),
        (21, 1, 102, 12, NULL, 'First Year', 'First', '2020-10-10 11:09:30', '2020-10-10 11:09:30', NULL),
        (22, 1, 101, 12, NULL, 'First Year', 'First', '2020-10-10 11:10:20', '2020-10-10 11:10:20', NULL),
        (23, 1, 71, 12, NULL, 'First Year', 'First', '2020-10-10 11:14:33', '2020-10-10 11:14:33', NULL),
        (24, 1, 59, 12, NULL, 'First Year', 'First', '2020-10-10 11:15:05', '2020-10-10 11:15:05', NULL),
        (25, 1, 30, 12, NULL, 'First Year', 'First', '2020-10-10 11:15:28', '2020-10-10 11:15:28', NULL),
        (26, 1, 27, 12, NULL, 'First Year', 'First', '2020-10-10 11:15:54', '2020-10-10 11:15:54', NULL),
        (27, 1, 22, 12, NULL, 'First Year', 'First', '2020-10-10 11:17:06', '2020-10-10 11:17:06', NULL),
        (28, 1, 24, 12, NULL, 'First Year', 'First', '2020-10-10 11:17:29', '2020-10-10 11:17:29', NULL),
        (29, 1, 62, 12, NULL, 'First Year', 'First', '2020-10-10 11:18:17', '2020-10-10 11:18:17', NULL),
        (30, 1, 57, 12, 'ENG11', 'First Year', 'Second', '2020-10-10 11:18:57', '2020-10-10 11:18:57', NULL),
        (31, 1, 64, 12, NULL, 'First Year', 'Second', '2020-10-10 11:41:46', '2020-10-10 11:41:46', NULL),
        (32, 1, 21, 12, 'MATH11', 'First Year', 'Second', '2020-10-10 11:42:30', '2020-10-10 11:42:30', NULL),
        (33, 1, 45, 12, 'IT30', 'First Year', 'Second', '2020-10-10 11:59:58', '2020-10-10 11:59:58', NULL),
        (34, 1, 23, 12, 'IT30', 'First Year', 'Second', '2020-10-10 12:00:44', '2020-10-10 12:00:44', NULL),
        (35, 1, 63, 12, 'IT30', 'First Year', 'Second', '2020-10-10 12:01:19', '2020-10-10 12:01:19', NULL);");
    }
}
