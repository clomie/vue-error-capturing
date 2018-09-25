<template>
  <div>error-in-nexttick-callback</div>
</template>

<script>
export default {
  name: "error-in-nexttick-callback",
  mounted() {
    this.$nextTick(() => {
      throw new Error("from nextTick callback");
    });
  }
};
</script>
