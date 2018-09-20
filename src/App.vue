<template>
  <div id="app">
    <h1>Test Error / Warn Capturing</h1>
    <div>
      <button @click="increment">increment</button>
    </div>
    <h1>count: {{ count }}</h1>
    <h1>errorInComputed: {{ errorInComputed }}</h1>
    <ErrorInTemplate />
    <NoSuchTemplate />
  </div>
</template>

<script>
import ErrorInTemplate from "./components/ErrorInTemplate.vue";

export default {
  name: "app",
  components: {
    ErrorInTemplate
  },
  data() {
    return {
      count: 0
    };
  },
  computed: {
    errorInComputed() {
      if (this.count % 2) {
        throw new Error("from Computed Property");
      } else {
        return this.count;
      }
    }
  },
  watch: {
    count() {
      throw new Error("from Watcher");
    }
  },
  methods: {
    increment() {
      this.count++;
      throw new Error("from DOM Event Handler");
    }
  },
  created() {
    throw new Error("from Lifecycle Hook");
  },
  async mounted() {
    throw new Error("from Async function");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
