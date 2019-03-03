<template>
  <div id="app">
    <h1>Test Error / Warn Capturing</h1>
    <div class="buttons">
      <button
        @click="test = 'ErrorCapturedInComponent'"
        :disabled="test === 'ErrorCapturedInComponent'"
      >
        Error Captured in Component
      </button>
      <button
        @click="test = 'ErrorInAsyncFunction'"
        :disabled="test === 'ErrorInAsyncFunction'"
      >
        Error in Async Funtion
      </button>
      <button
        @click="test = 'ErrorInComputedFunction'"
        :disabled="test === 'ErrorInComputedFunction'"
      >
        Error in Computed Function
      </button>
      <button
        @click="test = 'ErrorInDataFunction'"
        :disabled="test === 'ErrorInDataFunction'"
      >
        Error in Data Function
      </button>
      <button
        @click="test = 'ErrorInDirectiveHook'"
        :disabled="test === 'ErrorInDirectiveHook'"
      >
        Error in Directive Hook
      </button>
      <button
        @click="test = 'ErrorInFilterFunction'"
        :disabled="test === 'ErrorInFilterFunction'"
      >
        Error in Filter Function
      </button>
      <button
        @click="test = 'ErrorInLifecycleHook'"
        :disabled="test === 'ErrorInLifecycleHook'"
      >
        Error in Lifecycle Hook
      </button>
      <button
        @click="test = 'ErrorInMethodCalledInTemplate'"
        :disabled="test === 'ErrorInMethodCalledInTemplate'"
      >
        Error in Method Called in Template
      </button>
      <button
        @click="test = 'ErrorInNextTickCallback'"
        :disabled="test === 'ErrorInNextTickCallback'"
      >
        Error in 'nextTick' Callback
      </button>
      <button
        @click="test = 'ErrorInSetTimeoutCallback'"
        :disabled="test === 'ErrorInSetTimeoutCallback'"
      >
        Error in 'setTimeout' Callback
      </button>
      <button
        @click="test = 'ErrorInWatcherFunction'"
        :disabled="test === 'ErrorInWatcherFunction'"
      >
        Error in Watcher Function
      </button>
      <button
        @click="test = 'ErrorNoSuchComponent'"
        :disabled="test === 'ErrorNoSuchComponent'"
      >
        No Such Component
      </button>
      <button
        @click="test = 'ErrorNoSuchProperty'"
        :disabled="test === 'ErrorNoSuchProperty'"
      >
        No Such Property
      </button>
      <button @click="testDomClick">Error in DOM Event Handler</button>
      <CustomEventComponent @test="testCustomEvent">
        Error in Custom Event Handler
      </CustomEventComponent>
    </div>
    <div>
      <component v-if="test" :is="test" />
    </div>
  </div>
</template>

<script>
import CustomEventComponent from "./components/CustomEventComponent";
import ErrorCapturedInComponent from "./components/ErrorCapturedInComponent";
import ErrorInAsyncFunction from "./components/ErrorInAsyncFunction";
import ErrorInComputedFunction from "./components/ErrorInComputedFunction";
import ErrorInDataFunction from "./components/ErrorInDataFunction";
import ErrorInDirectiveHook from "./components/ErrorInDirectiveHook";
import ErrorInFilterFunction from "./components/ErrorInFilterFunction";
import ErrorInLifecycleHook from "./components/ErrorInLifecycleHook";
import ErrorInMethodCalledInTemplate from "./components/ErrorInMethodCalledInTemplate";
import ErrorInNextTickCallback from "./components/ErrorInNextTickCallback";
import ErrorInSetTimeoutCallback from "./components/ErrorInSetTimeoutCallback";
import ErrorInWatcherFunction from "./components/ErrorInWatcherFunction";
import ErrorNoSuchComponent from "./components/ErrorNoSuchComponent";
import ErrorNoSuchProperty from "./components/ErrorNoSuchProperty";

export default {
  name: "app",
  components: {
    CustomEventComponent,
    ErrorCapturedInComponent,
    ErrorInAsyncFunction,
    ErrorInComputedFunction,
    ErrorInDataFunction,
    ErrorInDirectiveHook,
    ErrorInLifecycleHook,
    ErrorInFilterFunction,
    ErrorInNextTickCallback,
    ErrorInMethodCalledInTemplate,
    ErrorInSetTimeoutCallback,
    ErrorInWatcherFunction,
    ErrorNoSuchComponent,
    ErrorNoSuchProperty
  },
  data() {
    return {
      test: null
    };
  },
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
