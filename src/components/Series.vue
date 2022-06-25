<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
@import "@/index.css";

button {
  font-weight: bold;
  color: red;
}
</style>
