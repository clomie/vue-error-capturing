<template>
  <div id="app">
    <h1>Test Error / Warn Capturing</h1>
    <div>
      <button @click="testDomClick">Test DOM Click</button>
    </div>
    <ErrorInCustomEventHandler @test="testCustomEvent"/>
    <h1>{{ count }} / {{ errorInComputed }}</h1>
    <ErrorInTemplate />
    <NoSuchTemplate />
  </div>
</template>

<script>
import ErrorInTemplate from "./components/ErrorInTemplate.vue";
import ErrorInCustomEventHandler from "./components/ErrorInCustomEventHandler.vue";

export default {
  name: "app",
  components: {
    ErrorInTemplate,
    ErrorInCustomEventHandler
  },
  data() {
    return {
      count: 0
    };
  },
  computed: {
    errorInComputed() {
      if (this.count > 0) {
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
    testDomClick() {
      this.count++;
      this.$nextTick(() => {
        throw new Error("from nextTick");
      });
      throw new Error("from DOM Event Handler");
    },
    testCustomEvent() {
      throw new Error("from Component Custom Event Handler");
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
