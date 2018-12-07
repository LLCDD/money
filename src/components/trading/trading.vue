<template>
  <div>{{ msg }}</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "我的交易"
    };
  },
  mounted() {
    this.$store.commit("size", this.$route.params.name);
  }
};
</script>
<style>
</style>
