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
            >Stock Trader</router-link
          >
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
          <ul class="nav navbar-nav">
            <router-link tag="li" active-class="active" to="/portfolio" exact
              ><a>Portfolio</a></router-link
            >
            <router-link tag="li" active-class="active" to="/stocks" exact
              ><a>Stocks</a></router-link
            >
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">End Day</a></li>
            <li
              class="dropdown"
              :class="active ? 'active open' : ''"
              @click="active = !active"
            >
              <a href="#" class="dropdown-toggle"
                >Save & Load <span class="caret"></span
              ></a>
              <ul class="dropdown-menu">
                <li><a href="#">Save Data</a></li>
                <li><a href="#">Load Data</a></li>
              </ul>
            </li>
            <li><label class="navbar-text">Funds: $10000</label></li>
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
  methods: {
    saveData() {},
    loadData() {},
  },
};
</script>
