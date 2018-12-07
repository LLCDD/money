<template>
  <div class="div">{{ msg }}</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "我的矿机"
    };
  },
  //   矿机状态的详情
  mounted() {
    console.log(this.$route.query);
    this.$store.commit("size", this.$route.query.name);

    // 我的矿机详情
    axios({
      method: "get",
      url: ""
    }).then(function(data) {
      console.log(data);
    });
  }
};
</script>
<style scoped>
.div {
  margin-top: 0.88rem;
}
</style>
