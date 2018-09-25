<template>
  <div>error-in-data-function</div>
</template>

<script>
export default {
  name: "error-in-data-function",
  data() {
    throw new Error("from data function");
  }
};
</script>
