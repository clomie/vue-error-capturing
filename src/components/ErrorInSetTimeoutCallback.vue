<template>
  <div>error-in-settimeout-callback</div>
</template>

<script>
export default {
  name: "error-in-settimeout-callback",
  mounted() {
    setTimeout(() => {
      throw new Error("from setTimeout callback");
    });
  }
};
</script>
