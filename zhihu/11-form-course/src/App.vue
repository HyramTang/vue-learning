<template>
  <div id="app" class="container">
    <form>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="userData.email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy="userData.password"
            />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model.number.lazy="userData.age"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="message">Message</label><br />
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="message"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <div class="form-group">
            <label for="sendmail">
              <input
                type="checkbox"
                id="sendmail"
                value="SendMailv"
                v-model="sendMail"
              />
              Send Mail
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMailv"
                v-model="sendMail"
              />
              Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="male">
            <input
              type="radio"
              id="male"
              value="Male"
              v-model="userData.gender"
            />
            Male
          </label>
          <label for="female">
            <input
              type="radio"
              id="female"
              value="Female"
              v-model="userData.gender"
            />
            Female
          </label>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group"
        >
          <label for="priority">Priority</label>
          <select id="priority" class="form-control" v-model="priority">
            <option value="" disabled>--请选择--</option>
            <option
              v-for="item in prioritys"
              :key="item.value"
              :value="item.value"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <hr />
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <button class="btn btn-primary" @click.prevent="submit">
            Submit!
          </button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmited">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>
              Mail：<strong>{{ userData.email }}</strong>
            </p>
            <p>
              Password：<strong>{{ userData.password }}</strong>
            </p>
            <p>
              Age：<strong>{{ userData.age }}</strong>
            </p>
            <p style="white-space: pre">Message：{{ message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul v-if="sendMail">
              <li v-for="item in sendMail" :key="item">{{ item }}</li>
            </ul>
            <p>
              Gender：<strong>{{ userData.gender }}</strong>
            </p>
            <p>
              Priority：<strong>{{ priority }}</strong>
            </p>
            <p>
              Switched：<strong>{{ dataSwitch }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwitchVue from "./Switch.vue";
export default {
  components: {
    appSwitch: SwitchVue,
  },
  data() {
    return {
      userData: {
        email: "hyram.tang@gmail.com",
        password: "abc123",
        age: 27,
        gender: "male",
      },
      message: "A new Text",
      sendMail: [],
      prioritys: [
        {
          name: "P1-紧急",
          value: "P1",
        },
        {
          name: "P2-次要",
          value: "P2",
        },
        {
          name: "P3-普通",
          value: "P3",
        },
      ],
      priority: "P1",
      dataSwitch: true,
      isSubmited: false,
    };
  },
  methods: {
    submit() {
      this.isSubmited = true;
    },
  },
};
</script>

<style>
</style>
