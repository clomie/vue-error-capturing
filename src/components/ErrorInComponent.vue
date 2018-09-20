<template>
  <h1>{{ noSuchProperty }}</h1>
</template>

<script>
export default {
  name: "error-in-template",
  data() {
    throw new Error("from data function");
  }
};
</script>
