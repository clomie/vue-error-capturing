<template>
  <div id="app">
    <h1>Test Error / Warn Capturing</h1>
    <div class="buttons">
      <button @click="testComponent = 'ErrorInAsyncFunction'" :disabled="testComponent === 'ErrorInAsyncFunction'">Error in Async Funtion</button>
      <button @click="testComponent = 'ErrorInComputedFunction'" :disabled="testComponent === 'ErrorInComputedFunction'">Error in Computed Function</button>
      <button @click="testComponent = 'ErrorInDataFunction'" :disabled="testComponent === 'ErrorInDataFunction'">Error in Data Function</button>
      <button @click="testComponent = 'ErrorInDirectiveHook'" :disabled="testComponent === 'ErrorInDirectiveHook'">Error in Directive Hook</button>
      <button @click="testComponent = 'ErrorInLifecycleHook'" :disabled="testComponent === 'ErrorInLifecycleHook'">Error in Lifecycle Hook</button>
      <button @click="testComponent = 'ErrorInNextTickCallback'" :disabled="testComponent === 'ErrorInNextTickCallback'">Error in 'nextTick' Callback</button>
      <button @click="testComponent = 'ErrorInSetTimeoutCallback'" :disabled="testComponent === 'ErrorInSetTimeoutCallback'">Error in 'setTimeout' Callback</button>
      <button @click="testComponent = 'ErrorInWatcherFunction'" :disabled="testComponent === 'ErrorInWatcherFunction'">Error in Watcher Function</button>
      <button @click="testComponent = 'ErrorNoSuchComponent'" :disabled="testComponent === 'ErrorNoSuchComponent'">No Such Component</button>
      <button @click="testComponent = 'ErrorNoSuchProperty'" :disabled="testComponent === 'ErrorNoSuchProperty'">No Such Property</button>
      <button @click="testDomClick">Error in DOM Event Handler</button>
      <CustomEventComponent @test="testCustomEvent">Error in Custom Event Handler</CustomEventComponent>
    </div>
    <div>
      <component v-if="testComponent" :is="testComponent" />
    </div>
  </div>
</template>

<script>
import CustomEventComponent from "./components/CustomEventComponent";
import ErrorInAsyncFunction from "./components/ErrorInAsyncFunction";
import ErrorInComputedFunction from "./components/ErrorInComputedFunction";
import ErrorInDataFunction from "./components/ErrorInDataFunction";
import ErrorInDirectiveHook from "./components/ErrorInDirectiveHook";
import ErrorInLifecycleHook from "./components/ErrorInLifecycleHook";
import ErrorInNextTickCallback from "./components/ErrorInNextTickCallback";
import ErrorInSetTimeoutCallback from "./components/ErrorInSetTimeoutCallback";
import ErrorInWatcherFunction from "./components/ErrorInWatcherFunction";
import ErrorNoSuchComponent from "./components/ErrorNoSuchComponent";
import ErrorNoSuchProperty from "./components/ErrorNoSuchProperty";

const components = {
  CustomEventComponent,
  ErrorInAsyncFunction,
  ErrorInComputedFunction,
  ErrorInDataFunction,
  ErrorInDirectiveHook,
  ErrorInLifecycleHook,
  ErrorInNextTickCallback,
  ErrorInSetTimeoutCallback,
  ErrorInWatcherFunction,
  ErrorNoSuchComponent,
  ErrorNoSuchProperty
};

export default {
  name: "app",
  components,
  data() {
    return {
      testComponent: null,
      components: Object.keys(components).filter(s => s.startsWith("Error"))
    };
  },
  // watch: {
  //   count() {
  //     throw new Error("from watcher for data property");
  //   },
  //   errorInComputed() {
  //     throw new Error("from watcher for computed property");
  //   }
  // },
  methods: {
    testDomClick() {
      throw new Error("from DOM event handler");
    },
    testCustomEvent() {
      throw new Error("from custom event handler");
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app > * {
  margin-top: 1em;
}
.buttons {
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(3, max-content);
  grid-gap: 1em;
}
button {
  font-size: 1.2em;
}
</style>
