<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <!-- We use the fluid option here to avoid overriding the fixed width of a normal container within the narrow content columns. -->
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-6"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" tag="a" class="navbar-brand"
            >Hyram's 股票交易所</router-link
          >
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
          <ul class="nav navbar-nav">
            <router-link tag="li" active-class="active" to="/portfolio" exact
              ><a>持有股票</a></router-link
            >
            <router-link tag="li" active-class="active" to="/stocks" exact
              ><a>购买股票</a></router-link
            >
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" @click="endDay">结束交易日</a></li>
            <li
              class="dropdown"
              :class="active ? 'active open' : ''"
              @click="active = !active"
            >
              <a href="#" class="dropdown-toggle"
                >保存&加载 <span class="caret"></span
              ></a>
              <ul class="dropdown-menu">
                <li><a href="#" @click="saveData">保存数据</a></li>
                <li><a href="#" @click="loadData">加载数据</a></li>
              </ul>
            </li>
            <li>
              <label class="navbar-text">余额: {{ funds | currency }}</label>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  computed: {
    funds() {
      return this.$store.getters['portfolio/funds'];
    },
  },
  methods: {
    endDay() {
      this.$store.dispatch('stocks/randomizeStocks');
      alert('👋结束了交易日，股票单价发生了变化🎢');
    },
    saveData() {
      this.$store.dispatch('saveData');
    },
    loadData() {
      this.$store.dispatch('loadData');
    },
  },
};
</script>
