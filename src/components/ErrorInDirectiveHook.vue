<template>
  <div v-error>error-in-directive-hook</div>
</template>

<script>
export default {
  name: "error-in-computed-function",
  directives: {
    error: {
      inserted() {
        throw new Error("from directive hook");
      }
    }
  }
};
</script>
