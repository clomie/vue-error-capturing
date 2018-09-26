<template>
  <div>
    error-captured-in-component
    <ErrorInLifecycleHook />
  </div>
</template>

<script>
import ErrorInLifecycleHook from "./ErrorInLifecycleHook";
export default {
  name: "error-captured-in-component",
  components: {
    ErrorInLifecycleHook
  },
  errorCaptured(err, vm, info) {
    console.log(`Captured in component#errorCaptured: ${info}`, err);
    return false;
  }
};
</script>

<style>
</style>
