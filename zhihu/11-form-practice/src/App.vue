<template>
  <div id="app" class="container">
    <form v-if="!submitted">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <app-full-name v-model="fullName"></app-full-name>

          <div class="form-group">
            <label>Mail：</label>
            <input type="text" class="form-control" v-model="mail" />
          </div>

          <div class="form-group">
            <label>Password：</label>
            <input type="password" class="form-control" v-model="password" />
          </div>

          <div class="form-group">
            <label>Store Data：</label>
            <label
              ><input type="radio" value="Yes" v-model="storeData" /> Yes
              <input type="radio" value="No" v-model="storeData" />
              No
            </label>
          </div>

          <div class="form-group">
            <button class="btn btn-primary" @click="submitted = true">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>
              Full Name: <strong>{{ fullName }}</strong>
            </p>
            <p>
              Mail: <strong>{{ mail }}</strong>
            </p>
            <p>
              Password: <strong>{{ password }}</strong>
            </p>
            <p>
              Store in Database?: <strong>{{ storeData }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullNameVue from "./components/FullName.vue";
export default {
  name: "App",
  components: {
    appFullName: FullNameVue,
  },
  data() {
    return {
      fullName: "Hyram Tang",
      mail: "",
      password: "",
      storeData: "Yes",
      submitted: false,
    };
  },
};
</script>

<style>
</style>
