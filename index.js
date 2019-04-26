"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var foo = vue_1.default.extend({
    props: {
        a: Array,
        s: String,
        b: Boolean
    },
    created: function () {
        console.log(this.a);
        console.log(this.s);
        console.log(this.b);
    }
});
