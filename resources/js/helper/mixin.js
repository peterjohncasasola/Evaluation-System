import Vue from 'vue';
import moment from 'moment';


Vue.mixin({
  methods: {

    formatDate(date) {
      return moment(date).format('MMMM Do YYYY');
    },

    formatBDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },

    formatTransactionDate(date) {
      return moment(date).format('MM/DD/YYYY');
    },


    currentDate() {
      return moment().format('MM/DD/YYYY');
    },

    capitalize(text) {
      if (!text) return '';
      text = text.toString();
      return text.charAt(0).toUpperCase() + text.slice(1);
    },

    dateDiff(date) {
      var now = moment();
      var diffInDays = moment(date, 'MM-DD-YYYY').diff(
        moment(now, 'MM-DD-YYYY'),
        'days'
      );

      return diffInDays + 1;
    },
  },
});
