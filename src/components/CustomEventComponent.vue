<template>
  <button @click="test">Error in Custom Event</button>
</template>

<script>
export default {
  name: "custom-event-component",
  methods: {
    test() {
      this.$emit("test");
    }
  }
};
</script>
