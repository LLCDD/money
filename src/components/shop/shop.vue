<template>
  <div class="div1">{{ msg }}</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "这是矿机商城"
    };
  },
  mounted(){
    this.$store.commit("size", this.$route.params.name);
  }
};
</script>
<style scoped>
</style>