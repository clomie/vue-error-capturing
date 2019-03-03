<template>
  <div>error-in-async-lifecycle-hook</div>
</template>

<script>
export default {
  name: "error-in-async-lifecycle-hook",
  async mounted() {
    throw new Error("from async lifecycle hook");
  }
};
</script>
