<template>
  <div id="wx-nav">
    <nav id="nav">
      <span @click="top()" class="span2">
        <router-link to="/index/雷特币">
          <i class="iconfont" :style="{'color':color}">&#xe60c;</i>
          <span class="l-span" ref="tit1" :style="{'color':color}">首页</span>
        </router-link>
      </span>
      <span @click="top1()">
        <router-link to="/shop/矿机商城" exact>
          <i class="iconfont" :style="{'color':color1}">&#xe656;</i>
          <span class="l-span" ref="tit2" :style="{'color':color1}">矿机商城</span>
        </router-link>
      </span>
      <span @click="top2()">
        <router-link to="/theraise/众筹">
          <i class="iconfont" :style="{'color':color2}">&#xe60c;</i>
          <span class="l-span" ref="tit3" :style="{'color':color2}">众筹</span>
        </router-link>
      </span>
      <span @click="top3()">
        <router-link to="/market/交易">
          <i class="iconfont" :style="{'color':color3}">&#xe74f;</i>
          <span class="l-span" ref="tit4" :style="{'color':color3}">交易</span>
        </router-link>
      </span>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: "#c4a07e",
      color1: "#b2b2b2",
      color2: "#b2b2b2",
      color3: "#b2b2b2"
    };
  },
  methods: {
    top() {
      // this.$store.commit("size", "雷特币");
      this.color = "#c4a07e";
      this.color1 = this.color2 = this.color3 = "#b2b2b2";
    },
    top1() {
      // this.$store.commit("size", this.$refs.tit2.innerHTML);
      this.color1 = "#c4a07e";
      this.color = this.color2 = this.color3 = "#b2b2b2";
    },
    top2() {
      // this.$store.commit("size", this.$refs.tit3.innerHTML);
      this.color2 = "#c4a07e";
      this.color1 = this.color = this.color3 = "#b2b2b2";
    },
    top3() {
      // this.$store.commit("size", this.$refs.tit4.innerHTML);
      this.color3 = "#c4a07e";
      this.color1 = this.color = this.color2 = "#b2b2b2";
    }
  }
};
</script>
<style scoped>
@import "../../assets/css/wx-nav.css";
@import "../../assets/font/iconfont.css";
@import "../../assets/font/demo.css";
#wx-nav {
  width: 100%;
  height: 1rem;
}
a {
  width: 24.8% !important;
  text-align: center;
}
.l-span {
  width: 1.5rem !important;
  color: #c4a07e;
}

@font-face {
  font-family: "iconfont";
  src: url("../../assets/font/iconfont.woff") format("woff");
}
.iconfont {
  font-family: "iconfont" !important;
  display: block;
  font-size: 0.4rem;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0.18rem;
  margin-bottom: 0.1rem;
}
.span2 {
  color: red;
}
</style>
