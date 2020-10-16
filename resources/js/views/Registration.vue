<template>
  <div>
    <title-bar :title-stack="titleStack" />

    <section class="section is-main-section">
      <card-component title="Forms" icon="ballot">
        <div class="container-fluid">
          <form @submit.prevent="submit" novalidate>
            <div class="columns">
              <div class="column is-one-half">
                <b-field label="Academic Year" horizontal>
                  <b-input readonly value="2020 - 2021" />
                </b-field>
              </div>
              <div class="column is-one-half">
                <b-field label="Semester" horizontal>
                  <b-input readonly :value="settings.currentSem.semester" />
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-half">
                <b-field label="Search Student" horizontal>
                  <b-autocomplete
                    placeholder="e.g Cruz, Juan Dela"
                    :open-on-focus="true"
                    v-model="searchStudent"
                    :data="filteredStudents"
                    field="full_name"
                    @select="option => setSelectedStudent(option)"
                    :clearable="true"
                  >
                    <template slot-scope="props">
                      <strong
                        >{{ props.option.student_id }} |
                        {{ props.option.full_name }}</strong
                      >
                    </template>
                  </b-autocomplete>
                </b-field>
              </div>
              <div class="column is-one-half">
                <b-field label="ID Number" horizontal>
                  <b-input class="bg-color" readonly :value="form.student_id" />
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column is-one-half">
                <b-field label="Course" horizontal>
                  <b-input readonly :value="form.course.description" />
                </b-field>
              </div>
              <div class="column is-one-half">
                <b-field label="Curriculum" horizontal>
                  <b-input readonly :value="form.curriculum_year" />
                </b-field>
              </div>
            </div>
          </form>
        </div>
      </card-component>
      <card-component>
        <div class="container-fluid">
          <hr />
          <div class="columns">
            <b-tabs v-model="currentTab">
              <b-tab-item label="Course Subjects">
                <div class="column is-one-half">
                  <b-table
                    :loading="isLoading"
                    :paginated="true"
                    :bordered="true"
                    :checkable="true"
                    :hoverable="true"
                    :data="coursesSubjects"
                  >
                    <template slot-scope="props">
                      <b-table-column
                        searchable
                        width="20%"
                        label="Subject Code"
                        field="subject_code"
                        sortable
                        >{{ props.row.subject_code }}</b-table-column
                      >

                      <b-table-column
                        searchable
                        label="Descriptive Title"
                        field="subject_description"
                        width="50%"
                        sortable
                        >{{ props.row.subject_description }}</b-table-column
                      >

                      <b-table-column
                        searchable
                        width="10%"
                        label="Units"
                        field="units"
                        sortable
                        >{{ props.row.units }}</b-table-column
                      >

                      <b-table-column
                        width="10%"
                        label="Year Level"
                        field="year_level"
                        sortable
                        >{{ props.row.year_level }}</b-table-column
                      >

                      <b-table-column
                        custom-key="actions"
                        class="is-actions-cell"
                      >
                        <div class="buttons is-right">
                          <b-tooltip label="Click to edit" position="is-left">
                            <button
                              class="button is-link is-small"
                              @click="edit(props.row)"
                            >
                              <b-icon icon="pencil" size="is-small" />
                            </button>
                          </b-tooltip>
                          <b-tooltip label="Click to Delete" position="is-left">
                            <button
                              class="button is-danger"
                              type="button"
                              @click.prevent="deleteConfirmation(props.row)"
                            >
                              <b-icon icon="trash-can" size="is-small" />
                            </button>
                          </b-tooltip>
                        </div>
                      </b-table-column>
                    </template>

                    <section class="section" slot="empty">
                      <div class="content has-text-grey has-text-centered">
                        <template v-if="isLoading">
                          <p>
                            <b-icon icon="dots-horizontal" size="is-large" />
                          </p>
                          <p>Fetching data...</p>
                        </template>
                        <template v-else>
                          <p>Nothing's here&hellip;</p>
                        </template>
                      </div>
                    </section>
                  </b-table>
                </div>
              </b-tab-item>

              <b-tab-item label="Added Subjects">
                <div class="column is-one-half">
                  <b-table
                    :loading="isLoading"
                    :paginated="true"
                    :bordered="true"
                    :checkable="true"
                    :narrowed="true"
                    :hoverable="true"
                    :data="coursesSubjects"
                  >
                    <template slot-scope="props">
                      <b-table-column
                        searchable
                        width="20%"
                        label="Subject Code"
                        field="subject_code"
                        sortable
                        >{{ props.row.subject_code }}</b-table-column
                      >

                      <b-table-column
                        searchable
                        label="Descriptive Title"
                        field="subject_description"
                        width="60%"
                        sortable
                        >{{ props.row.subject_description }}</b-table-column
                      >
                      <b-table-column
                        custom-key="actions"
                        class="is-actions-cell"
                      >
                        <div class="buttons is-right">
                          <b-tooltip label="Click to edit" position="is-left">
                            <button
                              class="button is-link is-small"
                              @click="edit(props.row)"
                            >
                              <b-icon icon="pencil" size="is-small" />
                            </button>
                          </b-tooltip>
                          <b-tooltip label="Click to Delete" position="is-left">
                            <button
                              class="button is-danger is-small"
                              type="button"
                              @click.prevent="deleteConfirmation(props.row)"
                            >
                              <b-icon icon="trash-can" size="is-small" />
                            </button>
                          </b-tooltip>
                        </div>
                      </b-table-column>
                    </template>

                    <section class="section" slot="empty">
                      <div class="content has-text-grey has-text-centered">
                        <template v-if="isLoading">
                          <p>
                            <b-icon icon="dots-horizontal" size="is-large" />
                          </p>
                          <p>Fetching data...</p>
                        </template>
                        <template v-else>
                          <p>Nothing's here&hellip;</p>
                        </template>
                      </div>
                    </section>
                  </b-table>
                </div>
              </b-tab-item>
            </b-tabs>
          </div>
        </div>
      </card-component>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TitleBar from "@/components/TitleBar";
import CardComponent from "@/components/CardComponent";
import mapValues from "lodash/mapValues";
import apiClient from "../apiClient";
import HeroBar from "@/components/HeroBar";
export default {
  name: "Registration",
  components: {
    HeroBar,
    CardComponent,
    TitleBar
  },
  data() {
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
  computed: {
    titleStack() {
      return ["Transactions", "Registration"];
    },
    ...mapGetters("courseSubject", ["coursesSubjects"]),
    ...mapGetters("students", ["students"]),
    filteredStudents() {
      return this.students.filter(opt => {
        return (
          opt.full_name
            .toString()
            .toLowerCase()
            .indexOf(this.searchStudent.toLowerCase()) >= 0
        );
      });
    }
  },
  async created() {
    await this.fetchStudents();
    await this.fetchCoursesSubjects();
    this.getCurrentSem();
  },

  methods: {
    ...mapActions("courses", ["fetchCourses"]),
    ...mapActions("courseSubject", ["fetchCoursesSubjects"]),
    ...mapActions("students", ["fetchStudents"]),

    getCurrentSem() {
      apiClient.get("/settings/semesters/current").then(({ data }) => {
        this.settings.currentSem = data.data[0];
      });
    },

    setSelectedStudent(option) {
      console.log(option);
      if (option) {
        this.form.student_id = option.student_id;
        this.form.curriculum_year = option.curriculum_year;
        this.form.course = option.course;
      }
    },

    async submit() {
      this.errors = {};
      let response = null;
      this.form.birth_date = moment(this.bday).format("YYYY-MM-DD");
      if (this.isNew) {
        response = await this.createStudent(this.form);

        if (response == undefined || response == null) {
          this.showNotification("Successfully Saved.", "success");
        } else {
          this.errors = response.errors;
        }
      } else {
        await this.update();
      }
    },

    async update() {
      let response = null;
      response = await this.updateStudent(this.form);
      if (response == undefined || response == null) {
        this.showNotification("Successfully updated", "success");
      } else {
        this.errors = response.errors;
      }
    },

    reset() {
      this.form = mapValues(this.form, item => {
        if (item && typeof item === "object") {
          return [];
        }
        return null;
      });

      this.$buefy.snackbar.open({
        message: "Reset successfully",
        queue: false
      });
    }
  }
};
</script>

<style>
.input:read-only {
  background: #f4f4f4 !important;
}
</style>
