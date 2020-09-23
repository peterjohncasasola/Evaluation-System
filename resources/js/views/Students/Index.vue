<template>
 <div>
  <title-bar :title-stack="['Master Files', 'Students', 'List']" />
  <hero-bar>
   Students
   <button class="button is-default" @click="showModal()" slot="right">New Course</button>
  </hero-bar>
  <section class="section is-main-section">
   <card-component class="has-table has-mobile-sort-spaced" title="Students">
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

    <b-table
     :checked-rows.sync="checkedRows"
     :loading="isLoading"
     :paginated="true"
     :per-page="perPage"
     :checkable="true"
     :hoverable="true"
     default-sort="lastName"
     :data="students"
    >
     <template slot-scope="props">
      <b-table-column
       searchable
       label="Student ID"
       field="studentId"
       sortable
      >{{ props.row.student_id }}</b-table-column>

      <b-table-column
       searchable
       label="First Name"
       field="firstName"
       sortable
      >{{ props.row.first_name }}</b-table-column>

      <b-table-column
       searchable
       label="Last Name"
       field="lastName"
       sortable
      >{{ props.row.last_name }}</b-table-column>

      <b-table-column custom-key="actions" class="is-actions-cell">
       <div class="buttons is-right">
        <b-tooltip label="Click to edit" position="is-left">
         <button class="button is-warning is-small" @click="edit(props.row)">
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
        <b-tooltip label="Click to view subjects" position="is-left">
         <button
          class="button is-info is-small"
          type="button"
          @click.prevent="deleteConfirmation(props.row)"
         >
          <b-icon icon="clipboard-list" size="is-small" />
          <span>View Subjects</span>
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
import { mapState, mapGetters, mapActions } from "vuex";

export default {
 name: "CourseIndex",
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
    course_code: "",
    description: "",
   },
  };
 },
 computed: {
  ...mapGetters("students", ["students", "student", "errors"]),
 },

 created() {
  this.fetchStudents();
 },

 methods: {
  ...mapActions("students", ["fetchStudents", "deleteStudent"]),

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
    queue: false,
   });
  },

  remove(data) {
   this.deleteStudent(data);
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
    course_code: "",
    description: "",
   };
  },
 },
};
</script>
