<template>
  <div>error-in-async-function</div>
</template>

<script>
export default {
  name: "error-in-async-function",
  async mounted() {
    throw new Error("from async function");
  }
};
</script>
