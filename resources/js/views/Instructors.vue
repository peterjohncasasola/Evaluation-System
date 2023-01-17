<template>
  <div>
    <title-bar :title-stack="['Master Files', 'Instructors', 'List']" />
    <hero-bar>
      Instructors
      <button class="button is-default" @click="showModal()" slot="right">
        <b-icon icon="file-plus" custom-size="default" class="i" />
        <span>New Instructor</span>
      </button>
    </hero-bar>
    <section class="section is-main-section">
      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Instructors"
      >
        <card-toolbar>

          <b-select v-model="perPage" slot="left">
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="15">15 per page</option>
            <option value="20">20 per page</option>
          </b-select>

           <download-excel
            class="button is-success"
            :data="instructors"
            :fields="json_fields"
            worksheet="Instructors"
            name="instructors.xls"
            v-slot="right"
          >
            Export
          </download-excel>
        </card-toolbar>

        <b-modal :active.sync="isModalActive" has-modal-card :can-cancel="[]">
          <form @submit.prevent="save()" novalidate>
            <div class="modal-card">
              <header class="modal-card-head">
                <h3 class="modal-card-title">
                  {{ isNew ? "Creating Instructor" : "Editing Instructor" }}
                </h3>
                <button type="button" class="delete" @click="cancel" />
              </header>
              <section class="modal-card-body">
                <b-field
                  label="First Name"
                  :type="errors.first_name == null ? '' : 'is-danger'"
                  :message="errors.first_name == null ? '' : errors.first_name"
                >
                  <b-input
                    placeholder="Enter First Name"
                    type="text"
                    v-model="formData.first_name"
                    required
                  ></b-input>
                </b-field>

                <b-field
                  label="Middle Name"
                  :type="errors.middle_name == null ? '' : 'is-danger'"
                  :message="errors.middle_name == null ? '' : errors.middle_name"
                >
                  <b-input
                    placeholder="Enter Middle Name"
                    type="text"
                    v-model="formData.middle_name"
                    required
                  ></b-input>
                </b-field>

                <b-field
                  label="Last Name"
                  :type="errors.last_name == null ? '' : 'is-danger'"
                  :message="errors.last_name == null ? '' : errors.last_name"
                >
                  <b-input
                    placeholder="Enter Last Name"
                    type="text"
                    v-model="formData.last_name"
                    required
                  ></b-input>
                </b-field>

                <b-field
                  label="Specialization"
                  :type="errors.specialization == null ? '' : 'is-danger'"
                  :message="errors.specialization == null ? '' : errors.specialization"
                >
                  <b-input
                    placeholder="Specialization"
                    type="text"
                    v-model="formData.specialization"
                    required
                  ></b-input>
                </b-field>

                <b-field
                  label="Minimum Units"
                  :type="errors.min_units == null ? '' : 'is-danger'"
                  :message="errors.min_units == null ? '' : errors.min_units"
                >
                  <b-input
                    placeholder="Minimum Units"
                    type="text"
                    v-model="formData.min_units"
                    required
                  ></b-input>
                </b-field>

                <b-field
                  label="Max Units"
                  :type="errors.max_units == null ? '' : 'is-danger'"
                  :message="errors.max_units == null ? '' : errors.max_units"
                >
                  <b-input
                    placeholder="Maximum Units"
                    type="text"
                    v-model="formData.max_units"
                    required
                  ></b-input>
                </b-field>

                <b-field
                  label="Department"
                  :type="errors.department_id == null ? '' : 'is-danger'"
                  :message="errors.department_id == null ? '' : errors.department_id"
                >
                  <b-select
                    expanded
                    placeholder="Department"
                    v-model="formData.contract_status"
                    required
                  >
                    <option
                      v-for="(status, index) in contractStatus"
                      :key="index"
                      :value="status"
                    >
                      {{ status }}
                    </option>
                  </b-select>
                </b-field>

                <b-field
                  label="Status"
                  :type="errors.contract_status == null ? '' : 'is-danger'"
                  :message="errors.contract_status == null ? '' : errors.contract_status"
                >
                  <b-select
                    expanded
                    placeholder="Select Contract Status"
                    v-model="formData.contract_status"
                    required
                  >
                    <option
                      v-for="(status, index) in contractStatus"
                      :key="index"
                      :value="status"
                    >
                      {{ status }}
                    </option>
                  </b-select>
                </b-field>

              </section>
              <footer class="modal-card-foot">
                <button type="submit" class="button is-success">
                  {{ isNew ? "Save" : "Update" }}
                </button>
                <a class="button" @click="cancel()">Cancel</a>
              </footer>
            </div>
          </form>
        </b-modal>

        <b-table
          :checked-rows.sync="checkedRows"
          :loading="isLoading"
          :paginated="true"
          :per-page="perPage"
          :hoverable="true"
          :bordered="true"
          :narrowed="true"
          :draggable="true"
          :draggable-column="true"
          default-sort="last_name"
          :data="instructors"
        >
          <template slot-scope="props">
            <b-table-column
              searchable
              label="First Name"
              field="first_name"
              sortable
              >{{ props.row.first_name }}</b-table-column
            >

            <b-table-column
              searchable
              label="Middle Name"
              field="middle_name"
              sortable
              >{{ props.row.middle_name }}</b-table-column
            >

            <b-table-column
              searchable
              label="Last Name"
              field="last_name"
              sortable
              >{{ props.row.last_name }}</b-table-column
            >

            <b-table-column
              searchable
              label="Specialization"
              field="specialization"
              sortable
            >{{ props.row.specialization }}</b-table-column
            >

            <b-table-column
              searchable
              label="Min. Units"
              field="min_units"
              sortable
            >{{ props.row.min_units }}</b-table-column
            >

            <b-table-column
              searchable
              label="Max Units"
              field="max_units"
              sortable
            >{{ props.row.max_units }}</b-table-column
            >

            <b-table-column
              searchable
              label="Contract Status"
              field="contract_status"
              sortable
            >{{ props.row.contract_status }}</b-table-column
            >

            <b-table-column custom-key="actions" class="is-actions-cell">
              <div class="buttons is-right">
                <b-tooltip label="Click to edit" position="is-left">
                  <button
                    class="button is-link btn-rounded"
                    @click="edit(props.row)"
                  >
                    <b-icon icon="pencil" size="is-small" />
                  </button>
                </b-tooltip>
                <b-tooltip label="Click to Delete" position="is-left">
                  <button
                    class="button is-danger btn-rounded"
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
      </card-component>
    </section>
  </div>
</template>

<script>
import map from "lodash/map";
import CardComponent from "@/components/CardComponent";
import ModalBox from "@/components/ModalBox";
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
import CardToolbar from "@/components/CardToolbar";
import { mapGetters, mapActions } from "vuex";
import Vue from "vue";
import JsonExcel from "vue-json-excel";
Vue.component("downloadExcel", JsonExcel);

export default {
  components: {
    CardToolbar,
    HeroBar,
    TitleBar,
    ModalBox,
    CardComponent
  },
  data() {
    return {
      isModalActive: false,
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: [],
      errors: {},
      isNew: true,
      contractStatus: ['Permanent','Temporary Permanent', 'Temporary','Part-Time'],
      formData: {
        id: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        specialization: "",
        min_units: "",
        max_units: "",
        is_active: true
      },
      json_fields: {
        "First Name": "first_name",
        "Middle Name": "middle_name",
        "Last Name": "last_name",
        "Contract Status": "contract_status"
      }
    };
  },
  computed: {
    ...mapGetters("instructors", ["instructors", "instructor"])
  },

  created() {
    this.fetchInstructors();
  },

  methods: {
    ...mapActions("instructors", [
      "fetchInstructors",
      "createInstructor",
      "updateInstructor",
      "deleteInstructor"
    ]),

    edit(data) {
      this.isModalActive = true;
      this.isNew = false;
      Object.assign(this.formData, data);
    },

    deleteConfirmation(trashObject = null) {
      this.trashObject = trashObject;

      if (trashObject || this.checkedRows.length) {
        this.$buefy.dialog.confirm({
          title: "Deleting",
          message: `Are you sure you want to <b>delete ${trashObject.first_name} ${trashObject.last_name}</b>? This action cannot be undone.`,
          confirmText: "Delete",
          type: "is-danger",
          hasIcon: true,
          onConfirm: () => {
            this.remove(this.trashObject);
          }
        });
      }
    },

    async save() {
      this.errors = {};
      if (this.isNew) {
        let response = await this.createInstructor(this.formData);
        if (response == undefined || response == null) {
          this.isModalActive = false;
          this.showNotification("Successfully created", "success");
        } else {
          this.errors = response.errors;
          this.showErrorMessage(response, "danger");
        }
      } else {
        let response = await this.updateInstructor(this.formData);
        if (response == undefined || response == null) {
          this.isModalActive = false;

          this.showNotification("Successfully updated", "success");
        } else {
          this.errors = response.errors;
          this.showErrorMessage(response, "danger");
        }
      }
    },

    remove(data) {
      this.deleteInstructor(data);
      this.showNotification("Successfully deleted", "info");
    },

    cancel() {
      this.isModalActive = false;
    },
    showModal() {
      this.clearForm();
      this.isModalActive = true;
      this.isNew = true;
    },

    clearForm() {
      this.formData = {
        id: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        is_active: true
      };
    }
  }
};
</script>
