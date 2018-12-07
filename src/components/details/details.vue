<template>
  <div class="div">{{ msg }}</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "底部的详情"
    };
  },
  mounted() {
    //   首页的信息 列表
    console.log(this.$route.params.id);
    axios({
      method: "get",
      url: ""
    }).then(function(data) {
      console.log(data.data.data);
    });
  }
};
</script>
<style scoped>
.div {
  margin-top: 0.88rem;
}
</style>