<template>
 <div id="app">
  <nav-bar />

  <aside-menu :menu="menu" />

  <router-view />

  <footer-bar />
 </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar";
import AsideMenu from "@/components/AsideMenu";
import FooterBar from "@/components/FooterBar";
import { mapGetters } from "vuex";
export default {
 name: "home",
 components: {
  FooterBar,
  AsideMenu,
  NavBar,
 },
 data() {
  return {
   isActive: true,
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
      label: "Dashboard",
     },
    ],
    "Master Files",
    [
     {
      to: { name: "students-list" },
      label: "Students",
      icon: "account-multiple",
      updateMark: true,
     },

     {
      to: { name: "academic-years-list" },
      label: "Academic Year",
      icon: "account-multiple",
      updateMark: true,
     },
     {
      to: { name: "subjects-list" },
      label: "Subjects",
      icon: "book-multiple",
     },
     {
      to: { name: "curriculums-list" },
      label: "Curriculums",
      icon: "book-multiple",
     },
     {
      to: { name: "instructors-list" },
      label: "Instructors",
      icon: "book-multiple",
     },
     {
      to: { name: "users-list" },
      label: "Users",
      icon: "book-multiple",
     },
     {
      to: { name: "courses-list" },
      label: "Courses",
      icon: "book-multiple",
     },
    ],
    "Transactions",
    [
     {
      to: "/enroll-student",
      label: "Registration",
      icon: "account-circle",
     },
     {
      label: "Submenus",
      subLabel: "Submenus Example",
      icon: "view-list",
      menu: [
       {
        href: "#void",
        label: "Sub-item One",
       },
       {
        href: "#void",
        label: "Sub-item Two",
       },
      ],
     },
    ],
   ];
  },
 },
 created() {
  axios
   .get("/user")
   .then((r) => {
    this.$store.commit("user", r.data.data);
   })
   .catch((err) => {
    this.$buefy.toast.open({
     message: `Error: ${err.message}`,
     type: "is-danger",
    });
   });
 },
};
</script>
