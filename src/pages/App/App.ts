/**
 * App
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './App.vue'

@Component({
    name: 'App',
    mixins: [template]
})
export default class App extends Vue {}
