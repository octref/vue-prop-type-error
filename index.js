"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var foo = vue_1.default.extend({
    props: {
        bar: Array
    },
    created: function () {
        this.bar = 5;
    }
});
