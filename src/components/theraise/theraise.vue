<template>
  <div class="theraise">
    <div class="div1">
      <span>当前剩余总量</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "343"
    };
  },
  mounted() {
    this.$store.commit("size", this.$route.params.name);
  }
};
</script>

<style scoped>
</style>
