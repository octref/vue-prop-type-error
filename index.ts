import Vue from 'vue'

const foo = Vue.extend({
  props: {
    bar: Array
  },
  created() {
    this.bar = 5
  }
})
