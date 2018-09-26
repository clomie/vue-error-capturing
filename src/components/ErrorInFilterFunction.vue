<template>
  <div>error-in-filter-function {{ value | test }}</div>
</template>

<script>
export default {
  name: "error-in-filter-function",
  data() {
    return {
      value: 1
    };
  },
  filters: {
    test() {
      throw new Error("from filter function");
    }
  }
};
</script>
