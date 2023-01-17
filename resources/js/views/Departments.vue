<template>
  <div>
    <title-bar :title-stack="['Master Files', 'Departments', 'List']" />
    <hero-bar>
      Departments
      <button class="button is-default" @click="showModal()" slot="right">
        New Department
      </button>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Departments">
        <card-toolbar>
          <button
            slot="right"
            type="button"
            class="button is-danger has-checked-rows-number"
            @click="deleteConfirmation(null)"
            :disabled="!checkedRows.length"
          >
            <b-icon icon="trash-can" custom-size="default" class="i" />
            <span>Delete</span>
            <span v-show="!!checkedRows.length"
              >({{ checkedRows.length }})</span
            >
          </button>
          <b-select v-model="perPage" slot="left">
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="15">15 per page</option>
            <option value="20">20 per page</option>
          </b-select>
        </card-toolbar>

        <b-modal :active.sync="isModalActive" has-modal-card>
          <form @submit.prevent="save()" novalidate>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Department Entry</p>
                <button type="button" class="delete" @click="cancel" />
              </header>
              <section class="modal-card-body">
                <b-field label="Department Code">
                  <b-input
                    placeholder="Department"
                    type="text"
                    v-model="formData.name"
                    required
                    minlength="3"
                    maxlength="25"
                  ></b-input>
                </b-field>

                <b-field label="Description">
                  <b-input
                    placeholder="Description"
                    type="text"
                    v-model="formData.description"
                    required
                    maxlength="100"
                  ></b-input>
                </b-field>
              </section>
              <footer class="modal-card-foot">
                <button type="submit" class="button is-success">
                  {{ isNew ? "Save Department" : "Update Department" }}
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
          :narrowed="true"
          :hoverable="true"
          default-sort="name"
          :data="departments"
        >
          <template slot-scope="props">
            <b-table-column
              searchable
              label="Department Name"
              field="name"
              sortable
              >{{ props.row.name }}</b-table-column
            >

            <b-table-column
              searchable
              label="Department Description"
              field="description"
              sortable
              >{{ props.row.description }}</b-table-column
            >
            <b-table-column custom-key="actions" class="is-actions-cell">
              <div class="buttons is-right">
                <b-tooltip label="Click to edit" position="is-left">
                  <button class="button is-link" @click="edit(props.row)">
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
      </card-component>
    </section>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent";
import ModalBox from "@/components/ModalBox";
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
import CardToolbar from "@/components/CardToolbar";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DepartmentIndex",
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
      isNew: true,
      formData: {
        id: "",
        name: "",
        description: ""
      }
    };
  },
  computed: {
    ...mapGetters("departments", ["departments", "department", "errors"])
  },

  created() {
    this.fetchDepartments();
  },

  methods: {
    ...mapActions("departments", [
      "fetchDepartments",
      "fetchDepartment",
      "createDepartment",
      "updateDepartment",
      "deleteDepartment"
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
          message:
            "Are you sure you want to <b>delete</b> this? This action cannot be undone.",
          confirmText: "Delete",
          type: "is-danger",
          hasIcon: true,
          onConfirm: () => {
            this.removeDepartment(this.trashObject);
          }
        });
      }
    },

    showNotification(message, type) {
      this.$buefy.notification.open({
        duration: 4000,
        message: message,
        position: "is-bottom-right",
        type: `is-${type}`,
        hasIcon: true,
        closable: true,
        queue: false
      });
    },

    async save() {
      let response = null;
      if (this.isNew) {
        response = await this.createDepartment(this.formData);
        if (response == undefined || response == null) {
          this.showNotification("Successfully created", "success");
          this.isModalActive = false;
        } else {
          this.showErrorMessage(response);
        }
      } else {
        response = await this.updateDepartment(this.formData);
        if (response == undefined || response == null) {
          this.showNotification("Successfully created", "success");
          this.isModalActive = false;
        } else {
          this.showErrorMessage(response);
        }
      }
    },

    removeDepartment(data) {
      this.deleteDepartment(data);
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
        name: "",
        description: ""
      };
    }
  }
};
</script>
