import Vue from 'vue'

const foo = Vue.extend({
  props: {
    a: Array,
    s: String,
    b: Boolean
  },
  created() {
    console.log(this.a)
    console.log(this.s)
    console.log(this.b)
  }
})
