<template>
  <div>
    <nav-bar />

    <aside-menu :menu="menu" />

    <router-view />

    <footer-bar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import AsideMenu from "@/components/AsideMenu";
import FooterBar from "@/components/FooterBar";
import { mapGetters } from "vuex";
import apiClient from "./apiClient";
export default {
  name: "home",
  components: {
    FooterBar,
    AsideMenu,
    NavBar
  },
  data() {
    return {
      isActive: true
    };
  },
  
  computed: {
    menu() {
      return [
        "General",
        [
          {
            to: { name: "home" },
            icon: "desktop-mac",
            label: "Dashboard"
          }
        ],
        "Master Files",
        [
          {
            to: { name: "students-list" },
            label: "Students",
            icon: "account-multiple",
            updateMark: true
          },

          {
            to: { name: "academic-years-list" },
            label: "Academic Year",
            icon: "calendar-month",
            updateMark: true
          },
          {
            to: { name: "subjects-list" },
            label: "Subjects",
            icon: "bookshelf"
          },
          {
            to: { name: "curriculums-list" },
            label: "Curriculums",
            icon: "notebook"
          },
          {
            to: { name: "instructors-list" },
            label: "Instructors",
            icon: "account-tie"
          },
          {
            to: { name: "users-list" },
            label: "Users",
            icon: "account-details"
          },
          {
            to: { name: "courses-list" },
            label: "Courses",
            icon: "book-multiple"
          },
           {
            to: { name: "sections-list" },
            label: "Sections",
            icon: "cogs"
          },
          {
            to: { name: "semesters" },
            label: "Settings",
            icon: "cogs"
          }
        ],
        "Transactions",
        [
          {
            to: { name: "subject.offering" },
            label: "Subject Offering",
            icon: "cogs"
          },
          {
            to: { name: "section.class" },
            label: "Section Class",
            icon: "cogs"
          },
          {
            to: { name: "subject.evaluation" },
            label: "Subject Evaluation",
            icon: "book-search"
          },
          // {
          //   to: "/students/subjects",
          //   label: "Students Subjects",
          //   icon: "folder-account-outline"
          // },

          // {
          //   to: "/transactions/credited-subjects",
          //   label: "Credit Subject",
          //   icon: "folder-plus"
          // },
          {
            to: { name: "grade.entry" },
            label: "Grade Entry",
            icon: "table-large-plus"
          }
          // {
          //   label: "Submenus",
          //   subLabel: "Submenus Example",
          //   icon: "view-list",
          //   menu: [
          //     {
          //       href: "#void",
          //       icon: "view-list",

          //       label: "Sub-item One"
          //     },
          //     {
          //       href: "#void",
          //       label: "Sub-item Two",
          //       icon: "view-list"
          //     }
          //   ]
          // }
        ]
      ];
    }
  },
  created() {
    document.getElementById("root").className = "has-spinner-active has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded";

    this.currentAY();
    this.currentSem();
  },
  methods: {
    currentAY() {
      apiClient
        .get("/sy/current")
        .then(response => {
          this.$store.commit("currentSY", response.data.data[0]);
        })
        .catch(error => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger"
          });
        });
    },
    currentSem() {
      apiClient
        .get("/settings/semesters/current")
        .then(response => {
          this.$store.commit("currentSem", response.data.data[0]);
        })
        .catch(error => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger"
          });
        });
    }
  }
};
</script>
