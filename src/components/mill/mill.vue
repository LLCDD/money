<template>
  <div class="div">
    <div v-for="(item,index) in list" :key="index">
      <router-link tag="div" :to="{name:'milldetails',query:{id:item.id,name:'我的矿机详情'}}">
        <img :src="item.img" alt class="img">
        <p class="p1">{{ item.name }} -- {{item.tiemr}}</p>
        <p class="p2">算力/小时：{{ item.tiemr }}</p>
        <p class="p2">运行周期：{{ item.run }}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我的矿机",
      list: [
        {
          id: 1,
          img: "../../assets/img/1.png",
          name: "微型云矿机",
          tiemr: "234324",
          run: "33小时"
        },
        {
          id: 1,
          img: "../../assets/img/2.png",
          name: "微型云矿机",
          tiemr: "234324",
          run: "33小时"
        }
      ]
    };
  },
  mounted() {
    this.$store.commit("size", this.msg);
    console.log(this.$route.params.name);
  }
};
</script>
<style scoped>
.div {
  background: #f3f3f3;
  /* height: 100%; */
  margin-top: 0.88rem;
  overflow: hidden;
}
.div > div > div {
  height: 2.26rem;
  border: 1px solid pink;
  margin-top: 0.2rem;
  background: #ffffff;
}
.div > div > div > p {
  font-size: 0.26rem;
}
.img {
  height: 100%;
  width: 2.18rem;
  float: left;
  border: 1px solid red;
  margin-right: 0.26rem;
}
.p1 {
  margin-top: 0.52rem;
  margin-bottom: 0.22rem;
}
.p2 {
  margin-bottom: 0.16rem;
}
</style>