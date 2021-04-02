<template>
  <div id="app">
    <div class="container" style="padding-top: 25px">
      <div class="row">
        <div class="col-xs-12">
          <h2>动态组件</h2>
          <button
            class="btn btn-success"
            @click="selectedComponent = 'appQuote'"
          >
            Quote
          </button>
          <button
            class="btn btn-primary"
            @click="selectedComponent = 'appAuthor'"
          >
            Author
          </button>
          <button class="btn btn-info" @click="selectedComponent = 'appNew'">
            New
          </button>
          <hr />
          <keep-alive>
            <component :is="selectedComponent">
              <h2 slot="title">{{ quoteTitle }}</h2>
              <p>A wonderful Quote</p>
            </component>
          </keep-alive>
          <!-- <app-quote>
            <h2 slot="title">{{ quoteTitle }}</h2>
            <p>A wonderful Quote</p>
          </app-quote> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorVue from "./components/Author.vue";
import NewVue from "./components/New.vue";
import Quote from "./components/Quote.vue";

export default {
  name: "App",
  data() {
    return {
      quoteTitle: "The Quote 120",
      selectedComponent: null,
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: AuthorVue,
    appNew: NewVue,
  },
};
</script>

<style>
</style>
