import Vue from "vue";
import Vuex from 'vuex'
import { createLogger } from "vuex";


Vue.use(Vuex)

const debug = process.env.NODE.ENV !== 'production'


export default new Vuex.Store(
{
    strict: debug,
    plugins: debug ? [createLogger()] : [],
    state: {},
    getters: {},
    actions: {},
    mutations: {} 
} 
)