(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Registration.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Registration.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_TitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TitleBar */ "./resources/js/components/TitleBar.vue");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apiClient */ "./resources/js/apiClient.js");
/* harmony import */ var _components_HeroBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/HeroBar */ "./resources/js/components/HeroBar.vue");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Registration",
  components: {
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_6__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    TitleBar: _components_TitleBar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      curriculums: [],
      errors: {},
      isNew: true,
      paramId: this.$route.params.id,
      isLoading: false,
      form: {
        student_id: "",
        curriculum_year: "",
        course: {}
      },
      currentTab: 0,
      searchStudent: "",
      settings: {
        currentSem: {}
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({
    titleStack: function titleStack() {
      return ["Transactions", "Registration"];
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("courseSubject", ["coursesSubjects"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("students", ["students"])), {}, {
    filteredStudents: function filteredStudents() {
      var _this = this;

      return this.students.filter(function (opt) {
        return opt.full_name.toString().toLowerCase().indexOf(_this.searchStudent.toLowerCase()) >= 0;
      });
    }
  }),
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.fetchStudents();

            case 2:
              _context.next = 4;
              return _this2.fetchCoursesSubjects();

            case 4:
              _this2.getCurrentSem();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("courses", ["fetchCourses"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("courseSubject", ["fetchCoursesSubjects"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("students", ["fetchStudents"])), {}, {
    getCurrentSem: function getCurrentSem() {
      var _this3 = this;

      _apiClient__WEBPACK_IMPORTED_MODULE_5__["default"].get("/settings/semesters/current").then(function (_ref) {
        var data = _ref.data;
        _this3.settings.currentSem = data.data[0];
      });
    },
    setSelectedStudent: function setSelectedStudent(option) {
      console.log(option);

      if (option) {
        this.form.student_id = option.student_id;
        this.form.curriculum_year = option.curriculum_year;
        this.form.course = option.course;
      }
    },
    submit: function submit() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4.errors = {};
                response = null;
                _this4.form.birth_date = moment(_this4.bday).format("YYYY-MM-DD");

                if (!_this4.isNew) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 6;
                return _this4.createStudent(_this4.form);

              case 6:
                response = _context2.sent;

                if (response == undefined || response == null) {
                  _this4.showNotification("Successfully Saved.", "success");
                } else {
                  _this4.errors = response.errors;
                }

                _context2.next = 12;
                break;

              case 10:
                _context2.next = 12;
                return _this4.update();

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    update: function update() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                response = null;
                _context3.next = 3;
                return _this5.updateStudent(_this5.form);

              case 3:
                response = _context3.sent;

                if (response == undefined || response == null) {
                  _this5.showNotification("Successfully updated", "success");
                } else {
                  _this5.errors = response.errors;
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    reset: function reset() {
      this.form = lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default()(this.form, function (item) {
        if (item && _typeof(item) === "object") {
          return [];
        }

        return null;
      });
      this.$buefy.snackbar.open({
        message: "Reset successfully",
        queue: false
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Registration.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Registration.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.input:-moz-read-only {\r\n  background: #f4f4f4 !important;\n}\n.input:read-only {\r\n  background: #f4f4f4 !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/mapValues.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/mapValues.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js");

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Registration.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Registration.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Registration.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Registration.vue?vue&type=template&id=111cccd8&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Registration.vue?vue&type=template&id=111cccd8& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("title-bar", { attrs: { "title-stack": _vm.titleStack } }),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section is-main-section" },
        [
          _c("card-component", { attrs: { title: "Forms", icon: "ballot" } }, [
            _c("div", { staticClass: "container-fluid" }, [
              _c(
                "form",
                {
                  attrs: { novalidate: "" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-one-half" },
                      [
                        _c(
                          "b-field",
                          { attrs: { label: "Academic Year", horizontal: "" } },
                          [
                            _c("b-input", {
                              attrs: { readonly: "", value: "2020 - 2021" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-one-half" },
                      [
                        _c(
                          "b-field",
                          { attrs: { label: "Semester", horizontal: "" } },
                          [
                            _c("b-input", {
                              attrs: {
                                readonly: "",
                                value: _vm.settings.currentSem.semester
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-one-half" },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: { label: "Search Student", horizontal: "" }
                          },
                          [
                            _c("b-autocomplete", {
                              attrs: {
                                placeholder: "e.g Cruz, Juan Dela",
                                "open-on-focus": true,
                                data: _vm.filteredStudents,
                                field: "full_name",
                                clearable: true
                              },
                              on: {
                                select: function(option) {
                                  return _vm.setSelectedStudent(option)
                                }
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function(props) {
                                    return [
                                      _c("strong", [
                                        _vm._v(
                                          _vm._s(props.option.student_id) +
                                            " |\n                      " +
                                            _vm._s(props.option.full_name)
                                        )
                                      ])
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.searchStudent,
                                callback: function($$v) {
                                  _vm.searchStudent = $$v
                                },
                                expression: "searchStudent"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-one-half" },
                      [
                        _c(
                          "b-field",
                          { attrs: { label: "ID Number", horizontal: "" } },
                          [
                            _c("b-input", {
                              staticClass: "bg-color",
                              attrs: {
                                readonly: "",
                                value: _vm.form.student_id
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      { staticClass: "column is-one-half" },
                      [
                        _c(
                          "b-field",
                          { attrs: { label: "Course", horizontal: "" } },
                          [
                            _c("b-input", {
                              attrs: {
                                readonly: "",
                                value: _vm.form.course.description
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column is-one-half" },
                      [
                        _c(
                          "b-field",
                          { attrs: { label: "Curriculum", horizontal: "" } },
                          [
                            _c("b-input", {
                              attrs: {
                                readonly: "",
                                value: _vm.form.curriculum_year
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("card-component", [
            _c("div", { staticClass: "container-fluid" }, [
              _c("hr"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "columns" },
                [
                  _c(
                    "b-tabs",
                    {
                      model: {
                        value: _vm.currentTab,
                        callback: function($$v) {
                          _vm.currentTab = $$v
                        },
                        expression: "currentTab"
                      }
                    },
                    [
                      _c(
                        "b-tab-item",
                        { attrs: { label: "Course Subjects" } },
                        [
                          _c(
                            "div",
                            { staticClass: "column is-one-half" },
                            [
                              _c(
                                "b-table",
                                {
                                  attrs: {
                                    loading: _vm.isLoading,
                                    paginated: true,
                                    bordered: true,
                                    checkable: true,
                                    hoverable: true,
                                    data: _vm.coursesSubjects
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "default",
                                      fn: function(props) {
                                        return [
                                          _c(
                                            "b-table-column",
                                            {
                                              attrs: {
                                                searchable: "",
                                                width: "20%",
                                                label: "Subject Code",
                                                field: "subject_code",
                                                sortable: ""
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(props.row.subject_code)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-table-column",
                                            {
                                              attrs: {
                                                searchable: "",
                                                label: "Descriptive Title",
                                                field: "subject_description",
                                                width: "50%",
                                                sortable: ""
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  props.row.subject_description
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-table-column",
                                            {
                                              attrs: {
                                                searchable: "",
                                                width: "10%",
                                                label: "Units",
                                                field: "units",
                                                sortable: ""
                                              }
                                            },
                                            [_vm._v(_vm._s(props.row.units))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-table-column",
                                            {
                                              attrs: {
                                                width: "10%",
                                                label: "Year Level",
                                                field: "year_level",
                                                sortable: ""
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(props.row.year_level)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-table-column",
                                            {
                                              staticClass: "is-actions-cell",
                                              attrs: { "custom-key": "actions" }
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "buttons is-right"
                                                },
                                                [
                                                  _c(
                                                    "b-tooltip",
                                                    {
                                                      attrs: {
                                                        label: "Click to edit",
                                                        position: "is-left"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "button is-link is-small",
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.edit(
                                                                props.row
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("b-icon", {
                                                            attrs: {
                                                              icon: "pencil",
                                                              size: "is-small"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "b-tooltip",
                                                    {
                                                      attrs: {
                                                        label:
                                                          "Click to Delete",
                                                        position: "is-left"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "button is-danger",
                                                          attrs: {
                                                            type: "button"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.deleteConfirmation(
                                                                props.row
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("b-icon", {
                                                            attrs: {
                                                              icon: "trash-can",
                                                              size: "is-small"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ]
                                      }
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c(
                                    "section",
                                    {
                                      staticClass: "section",
                                      attrs: { slot: "empty" },
                                      slot: "empty"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "content has-text-grey has-text-centered"
                                        },
                                        [
                                          _vm.isLoading
                                            ? [
                                                _c(
                                                  "p",
                                                  [
                                                    _c("b-icon", {
                                                      attrs: {
                                                        icon: "dots-horizontal",
                                                        size: "is-large"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("p", [
                                                  _vm._v("Fetching data...")
                                                ])
                                              ]
                                            : [
                                                _c("p", [
                                                  _vm._v("Nothing's here…")
                                                ])
                                              ]
                                        ],
                                        2
                                      )
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-tab-item", { attrs: { label: "Added Subjects" } }, [
                        _c(
                          "div",
                          { staticClass: "column is-one-half" },
                          [
                            _c(
                              "b-table",
                              {
                                attrs: {
                                  loading: _vm.isLoading,
                                  paginated: true,
                                  bordered: true,
                                  checkable: true,
                                  narrowed: true,
                                  hoverable: true,
                                  data: _vm.coursesSubjects
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(props) {
                                      return [
                                        _c(
                                          "b-table-column",
                                          {
                                            attrs: {
                                              searchable: "",
                                              width: "20%",
                                              label: "Subject Code",
                                              field: "subject_code",
                                              sortable: ""
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(props.row.subject_code)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-table-column",
                                          {
                                            attrs: {
                                              searchable: "",
                                              label: "Descriptive Title",
                                              field: "subject_description",
                                              width: "60%",
                                              sortable: ""
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                props.row.subject_description
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-table-column",
                                          {
                                            staticClass: "is-actions-cell",
                                            attrs: { "custom-key": "actions" }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "buttons is-right"
                                              },
                                              [
                                                _c(
                                                  "b-tooltip",
                                                  {
                                                    attrs: {
                                                      label: "Click to edit",
                                                      position: "is-left"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "button is-link is-small",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.edit(
                                                              props.row
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("b-icon", {
                                                          attrs: {
                                                            icon: "pencil",
                                                            size: "is-small"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-tooltip",
                                                  {
                                                    attrs: {
                                                      label: "Click to Delete",
                                                      position: "is-left"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "button is-danger is-small",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.deleteConfirmation(
                                                              props.row
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("b-icon", {
                                                          attrs: {
                                                            icon: "trash-can",
                                                            size: "is-small"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ])
                              },
                              [
                                _vm._v(" "),
                                _c(
                                  "section",
                                  {
                                    staticClass: "section",
                                    attrs: { slot: "empty" },
                                    slot: "empty"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "content has-text-grey has-text-centered"
                                      },
                                      [
                                        _vm.isLoading
                                          ? [
                                              _c(
                                                "p",
                                                [
                                                  _c("b-icon", {
                                                    attrs: {
                                                      icon: "dots-horizontal",
                                                      size: "is-large"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("p", [
                                                _vm._v("Fetching data...")
                                              ])
                                            ]
                                          : [
                                              _c("p", [
                                                _vm._v("Nothing's here…")
                                              ])
                                            ]
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Registration.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Registration.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registration_vue_vue_type_template_id_111cccd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=111cccd8& */ "./resources/js/views/Registration.vue?vue&type=template&id=111cccd8&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/views/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registration.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Registration.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_vue_vue_type_template_id_111cccd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registration_vue_vue_type_template_id_111cccd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Registration.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Registration.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Registration.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Registration.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Registration.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Registration.vue?vue&type=template&id=111cccd8&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Registration.vue?vue&type=template&id=111cccd8& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_111cccd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=template&id=111cccd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Registration.vue?vue&type=template&id=111cccd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_111cccd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_111cccd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);