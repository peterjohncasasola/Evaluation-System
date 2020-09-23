<template>
 <div>
  <title-bar :title-stack="['Master Files', 'Subjects', 'List']" />
  <hero-bar>
   Subjects
   <button class="button is-default" @click="showModal()" slot="right">
    <b-icon icon="file-plus" custom-size="default" class="i" />
    <span>New Subject</span>
   </button>
  </hero-bar>
  <section class="section is-main-section">
   <card-component class="has-table has-mobile-sort-spaced" title="Courses">
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
      <span v-show="!!checkedRows.length">({{ checkedRows.length }})</span>
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
        <h3 class="modal-card-title">{{ isNew ? "Creating Subject" : "Editing Subject" }}</h3>
        <button type="button" class="delete" @click="cancel" />
       </header>
       <section class="modal-card-body">
        <b-field label="Subject Code">
         <b-input
          placeholder="Subject Code"
          type="text"
          v-model="formData.code"
          required
          minlength="3"
          maxlength="10"
         ></b-input>
        </b-field>

        <b-field label="Subject Description">
         <b-input
          placeholder="Subject Description"
          type="text"
          v-model="formData.description"
          required
          minlength="10"
          maxlength="200"
         ></b-input>
        </b-field>

        <b-field label="Units">
         <b-input
          placeholder="Number of Units"
          type="number"
          v-model="formData.unit"
          required
          minlength="1"
          maxlength="3"
         ></b-input>
        </b-field>

        <b-field label="Laboratory Hours">
         <b-input
          placeholder="Lab"
          type="number"
          v-model="formData.lab"
          required
          minlength="1"
          maxlength="2"
         ></b-input>
        </b-field>

        <b-field label="Lecture Hours">
         <b-input
          placeholder="Lecture"
          type="number"
          v-model="formData.lec"
          required
          minlength="1"
          maxlength="2"
         ></b-input>
        </b-field>
       </section>
       <footer class="modal-card-foot">
        <button
         type="submit"
         class="button is-success"
        >{{ isNew ? "Save Course" : "Update Course" }}</button>
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
     :checkable="true"
     :hoverable="true"
     default-sort="subject_code"
     :data="subjects"
    >
     <template slot-scope="props">
      <b-table-column searchable label="Subject Code" field="code" sortable>{{ props.row.code }}</b-table-column>

      <b-table-column
       searchable
       label="Subject Description"
       field="description"
       sortable
       class="wrap-text"
       width="50%"
      >{{ props.row.description }}</b-table-column>
      <b-table-column label="Units" field="unit" width="8%" sortable>
       {{
       props.row.unit
       }}
      </b-table-column>

      <b-table-column label="Laboratory" field="lab" width="8%" sortable>
       {{
       props.row.lab
       }}
      </b-table-column>

      <b-table-column label="Lectures" field="lec" width="8%" sortable>
       {{
       props.row.lec
       }}
      </b-table-column>

      <b-table-column custom-key="actions" class="is-actions-cell" width="10%">
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
import map from "lodash/map";
import CardComponent from "@/components/CardComponent";
import ModalBox from "@/components/ModalBox";
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
import CardToolbar from "@/components/CardToolbar";
import { mapGetters, mapActions } from "vuex";

export default {
 components: {
  CardToolbar,
  HeroBar,
  TitleBar,
  ModalBox,
  CardComponent,
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
    code: "",
    description: "",
    unit: "",
    lab: "",
    lec: "",
   },
  };
 },
 computed: {
  ...mapGetters("subjects", ["subjects", "subject"]),
 },

 created() {
  this.fetchSubjects();
 },

 methods: {
  ...mapActions("subjects", [
   "fetchSubjects",
   "fetchSubject",
   "createSubject",
   "updateSubject",
   "deleteSubject",
  ]),

  edit(data) {
   this.isModalActive = true;
   this.isNew = false;
   Object.assign(this.formData, data);
   console.log(this.formData);
  },

  deleteConfirmation(trashObject = null) {
   this.trashObject = trashObject;

   if (trashObject || this.checkedRows.length) {
    this.$buefy.dialog.confirm({
     title: "Deleting",
     message: `Are you sure you want to <b>delete ${trashObject.code}</b> this? This action cannot be undone.`,
     confirmText: "Delete",
     type: "is-danger",
     hasIcon: true,
     onConfirm: () => {
      this.remove(this.trashObject);
     },
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
    qeue: false,
    autoClose: true,
   });
  },

  async save() {
   let response = null;
   if (this.isNew) {
    response = await this.createSubject(this.formData);
    if (response == undefined) {
     this.isModalActive = false;
     this.showNotification("Successfully created", "success");
    } else {
     var key = Object.keys(response.errors);
     var message = response.errors[key[0]][0];

     this.showNotification(message, "danger");
    }
   } else {
    let response = await this.updateSubject(this.formData);
    if (response == undefined) {
     this.isModalActive = false;

     this.showNotification("Successfully updated", "success");
    } else {
     var key = Object.keys(response.errors);
     var message = response.errors[key[0]][0];
     this.showNotification(message, "error");
    }
   }
  },

  remove(data) {
   this.deleteSubject(data);
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
   this.form = {
    id: "",
    course_code: "",
    description: "",
   };
  },
 },
};
</script>
