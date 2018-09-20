<template>
  <div>
    <button @click="test">Test Custom Event Handler</button>
  </div>
</template>

<script>
export default {
  name: "error-in-custom-event-handler",
  methods: {
    test() {
      this.$emit("test");
    }
  }
};
</script>
