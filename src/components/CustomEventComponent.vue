<template>
  <div>
    <button @click="test">Test Custom Event</button>
  </div>
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
