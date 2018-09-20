<template>
  <div id="app">
    <h1>Test Error / Warn Capturing</h1>
    <div>
      <button @click="testDomClick">Test DOM Click</button>
    </div>
    <CustomEventComponent v-test @test="testCustomEvent"/>
    <h1>{{ count }} / {{ errorInComputed }}</h1>
    <ErrorInComponent />
    <NoSuchTemplate />
  </div>
</template>

<script>
import ErrorInComponent from "./components/ErrorInComponent.vue";
import CustomEventComponent from "./components/CustomEventComponent.vue";

export default {
  name: "app",
  components: {
    ErrorInComponent,
    CustomEventComponent
  },
  data() {
    return {
      count: 0
    };
  },
  computed: {
    errorInComputed() {
      if (this.count > 0) {
        throw new Error("from computed");
      } else {
        return this.count;
      }
    }
  },
  directives: {
    test: {
      inserted() {
        throw new Error("from directive hook");
      }
    }
  },
  watch: {
    count() {
      throw new Error("from watcher for data property");
    },
    errorInComputed() {
      throw new Error("from watcher for computed property");
    }
  },
  methods: {
    testDomClick() {
      this.count++;
      this.$nextTick(() => {
        throw new Error("from nextTick callback");
      });
      throw new Error("from DOM event handler");
    },
    testCustomEvent() {
      throw new Error("from custom event handler");
    }
  },
  created() {
    setTimeout(() => {
      throw new Error("from setTimeout callback");
    });
    throw new Error("from lifecycle hook");
  },
  async mounted() {
    throw new Error("from async function");
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
