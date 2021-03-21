import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/api/config";

// see: https://github.com/gothinkster/vue-realworld-example-app/blob/master/src/common/api.service.js

const ApiService = {
    init() {
      Vue.use(VueAxios, axios);
      Vue.axios.defaults.baseURL = API_URL;
    },

    query(resource) {
      var data = axios.get(resource).catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
      return data;
    },

    get(resource, slug = "") {
      return Vue.axios.get(`${resource}/${slug}`).catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
    },

    post(resource, params) {
      return Vue.axios.post(`${resource}`, params);
    },

    update(resource, slug, params) {
      return Vue.axios.put(`${resource}/${slug}`, params);
    },

    put(resource, params) {
      return Vue.axios.put(`${resource}`, params);
    },

    delete(resource) {
      return Vue.axios.delete(resource).catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
    }
  };

  export default ApiService;