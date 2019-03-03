<template>
  <div>error-in-unreturned-promise</div>
</template>

<script>
export default {
  name: "error-in-unreturned-promise",
  mounted() {
    this.test();
  },
  methods: {
    async test() {
      throw new Error("from unreturned promise");
    }
  }
};
</script>
