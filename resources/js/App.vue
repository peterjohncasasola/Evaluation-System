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
      to: "/",
      icon: "desktop-mac",
      label: "Dashboard",
     },
    ],
    "Master Files",
    [
     {
      to: "/students",
      label: "Students",
      icon: "account-multiple",
      updateMark: true,
     },

     {
      to: "/academic-years",
      label: "Academic Year",
      icon: "account-multiple",
      updateMark: true,
     },
     {
      to: "/subjects",
      label: "Subjects",
      icon: "book-multiple",
     },
     {
      to: "/curriculums/view",
      label: "Curriculums",
      icon: "book-multiple",
     },
     {
      to: "/school-year",
      label: "School Year",
      icon: "book-multiple",
     },
     {
      to: "/instructors",
      label: "Instructors",
      icon: "book-multiple",
     },
     {
      to: "/users",
      label: "Users",
      icon: "book-multiple",
     },
     {
      to: "/courses",
      label: "Courses",
      icon: "book-multiple",
     },
     {
      to: "/courses/index",
      label: "Courses View",
      icon: "book-multiple",
     },
    ],
    "Transactions",
    [
     {
      to: "/tables",
      label: "Tables",
      icon: "table",
     },

     {
      to: "/open-subjects",
      label: "Subject Offer",
      icon: "account-circle",
     },
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
