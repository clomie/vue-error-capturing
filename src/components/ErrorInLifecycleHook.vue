<template>
  <div>error-in-lifecycle-hook</div>
</template>

<script>
export default {
  name: "error-in-lifecycle-hook",
  mounted() {
    throw new Error("from lifecycle hook");
  }
};
</script>
