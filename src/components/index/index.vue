<template>
  <div id="div1">
    <img class="img" src="../../assets/img/1.png" alt>
    <div class="div2">
      <div class="div3">
        <p class="p1">用户呢称</p>
        <p class="p2">账&nbsp;&nbsp;号&nbsp;&nbsp;：{{ this.$store.state.account }}</p>
        <p class="p2">推荐人&nbsp;：{{ this.$store.state.person }}</p>
        <p class="p2">余&nbsp;&nbsp;额&nbsp;&nbsp;：{{ this.$store.state.money }}</p>
        <p class="p2">钱包地址：{{ this.$store.state.wallet }}</p>
      </div>
      <div class="div4">
        <div>
          <img src="../../assets/img/1.png" alt>
        </div>
        <button @click="top()">一键获取</button>
      </div>
    </div>
    <div class="div5">
      <router-link to="/mill/我的矿机" tag="div">
        <i class="iconfont" style="color:#2b77cf">&#xe78d;</i>
        <br>
        <span>我的矿机</span>
      </router-link>
      <router-link to="/code" tag="div">
        <i class="iconfont" style="color:#2178d9">&#xe620;</i>
        <br>
        <span>推广码</span>
      </router-link>
      <router-link to="/trading/我的交易" tag="div">
        <i class="iconfont" style="color:#df9a01">&#xe719;</i>
        <br>
        <span>我的交易</span>
      </router-link>
      <router-link to="/transfer/我的交易" tag="div">
        <i class="iconfont" style="color:#da9c00">&#xe620;</i>
        <br>
        <span>LTB转账</span>
      </router-link>
      <router-link to="/mall" tag="div">
        <i class="iconfont" style="color:#de1100">&#xe6bd;</i>
        <br>
        <span>商城应用</span>
      </router-link>
      <router-link to="/detail" tag="div">
        <i class="iconfont" style="color:#df9309">&#xe61f;</i>
        <br>
        <span>收支明细</span>
      </router-link>
      <router-link to="/phone" tag="div">
        <i class="iconfont" style="color:#58ba63">&#xe62a;</i>
        <br>
        <span>话费充值</span>
      </router-link>
      <router-link to="/card" tag="div">
        <i class="iconfont" style="color:#57b962">&#xe68f;</i>
        <br>
        <span>油卡充值</span>
      </router-link>
      <router-link to="/electricity" tag="div">
        <i class="iconfont" style="color:#dd9600">&#xe77f;</i>
        <br>
        <span>电费充值</span>
      </router-link>
      <router-link to="/water" tag="div">
        <i class="iconfont" style="color:#148fd3">&#xe643;</i>
        <br>
        <span>水费充值</span>
      </router-link>
      <router-link to="/gas" tag="div">
        <i class="iconfont" style="color:#dd9600">&#xe603;</i>
        <br>
        <span>燃气充值</span>
      </router-link>
      <router-link to="/Mfriend" tag="div">
        <i class="iconfont" style="color:#148fd3">&#xe7b3;</i>
        <br>
        <span>我的好友</span>
      </router-link>
      <router-link to="/ticket" tag="div">
        <i class="iconfont" style="color:#d49100">&#xe637;</i>
        <br>
        <span>火车票</span>
      </router-link>
      <router-link to="/certification" tag="div">
        <i class="iconfont" style="color:#1157d0">&#xe69e;</i>
        <br>
        <span>实名认证</span>
      </router-link>
      <router-link to="/contact" tag="div">
        <i class="iconfont" style="color:#1293cc">&#xe6a2;</i>
        <br>
        <span>联系我们</span>
      </router-link>
      <router-link to="/set" tag="div">
        <i class="iconfont" style="color:#df0e09">&#xe609;</i>
        <br>
        <span>安全设置</span>
      </router-link>
    </div>
    <h3 class="h3">
      <span class="span">最新资讯</span>
      <span class="span1">Latest information</span>
    </h3>
    <div class="div6">
      <div v-for="(item,index) in list" :key="index">
        <router-link tag="div" :to="'/details/'+item.look">
          <img :src="item.imag" alt>
          <h3 class="h3l">{{ item.txt }}</h3>
          <span>{{ item.time }}</span>
          <span class="vspan1">
            <i class="iconfont" style="color:#999999;font-size:0.1rem">&#xe61b;</i>
            {{ item.look }}
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "这是主页",
      wallet: "", // 钱包地址
      person: "", // 推荐人
      money: "", // 余额
      account: "", // 账号
      list: [
        // 自己模拟的数据
        {
          imag: "../../assets/img/1.png",
          txt: "从市场流通分析DTB走势",
          time: "2018-10-12",
          look: "800"
        },
        {
          imag: "../../assets/img/2.png",
          txt: "从市场流通分析DTB走势",
          time: "2018-10-13",
          look: "81231"
        }
      ]
    };
  },
  methods: {
    //   一键收取的事件
    top() {
      console.log("a");
    }
  },
  mounted() {
    // 获取 用户的信息
    this.$store.commit("account", "账号");
    this.$store.commit("person", "推荐人");
    this.$store.commit("money", "余额");
    this.$store.commit("wallet", "钱包地址");
    // 修改头部的信息
    // console.log(this.$route.params.name);
    this.$store.commit("size", this.$route.params.name);
  }
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("../../assets/font/iconfont.woff") format("woff");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.img {
  width: 100%;
  margin-top: 0.86rem;
  height: 8.64rem;
  display: block;
}
.div2 {
  margin-top: -1px;
  height: 4.04rem;
  width: 100%;
  background: url("../../assets/img/2.png") no-repeat top;
  background-size: cover;
  /* margin-bottom: 1rem; */
}
.div3 {
  color: #fff;
  margin-left: 0.66rem;
  width: 60%;
  float: left;
}
.p1 {
  font-size: 0.34rem;
  padding-top: 0.7rem;
  margin-bottom: 0.24rem;
}
.p2 {
  font-size: 0.24rem;
  margin-bottom: 0.18rem;
}
.div4 > div {
  height: 1.42rem;
  width: 1.42rem;
  margin-top: 0.7rem;
  float: left;
  border-radius: 50%;
  overflow: hidden;
}
.div4 > div > img {
  width: 100%;
  height: 100%;
}
.div4 > button {
  border: 0;
  width: 1.4rem;
  border-radius: 0.2rem;
  margin-top: 0.36rem;
  background: #c2a47e;
  color: #fff;
  font-size: 0.22rem;
}
.div5 {
  margin: 0 auto;
  width: 93.3%;
  height: 5.98rem;
  background: #ffffff;
  border-radius: 0.14rem;
  margin-top: -0.52rem;
  padding-top: 0.6rem;
  padding-left: 0.6rem;
  padding-right: 0.52rem;
  box-shadow: 1px 1px 10px #ccc;
}
.div5 > div > i {
  font-size: 0.48rem;
}
.div5 > div > span {
  display: inline-block;
  margin-top: 0.16rem;
}
.div5 > div {
  width: 24.8%;
  height: 24.8%;
  float: left;
  text-align: center;
}
.h3 {
  margin-top: 0.5rem;
  margin-left: 0.26rem;
  height: 0.4rem;
  font-size: 0.36rem;
  border-left: 0.1rem solid #c2a67f;
  margin-bottom: 0.32rem;
  color: #6a6a6a;
}
.span {
  margin-left: 0.1rem;
}
.span1 {
  margin-left: 0.1rem;
  font-size: 0.2rem;
}
.div6 {
  width: 100%;
  margin-bottom: 1rem;
}
.div6 > div > div {
  background: #fff;
  margin-bottom: 0.2rem;
  height: 1.76rem;
}
.div6 > div > div > img {
  height: 1.3rem;
  width: 1.9rem;
  float: left;
  border: 1px solid yellow;
  margin-top: 0.24rem;
  margin-left: 0.24rem;
  margin-right: 0.32rem;
}
.div6 > div > div > .h3l {
  font-size: 0.34rem;
  line-height: 1.1rem;
}
.div6 > div > div > .vspan1 {
  float: right;
  margin-right: 0.8rem;
}
</style>