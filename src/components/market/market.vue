<template>
  <div>{{ msg }}</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "交易"
    };
  },
  mounted() {
    this.$store.commit("size", this.$route.params.name);
  }
};
</script>
<style scoped>
</style>