import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './Login.vue'

@Component({
    name: 'Login',
    mixins: [template],
    components: {}
})
export default class Login extends Vue {}
