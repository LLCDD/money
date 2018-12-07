<template>
  <div class="div">
    <div class="div1">
      <div class="div2">
        <img class="img img1" src="../../assets/img/shouji.png" alt>
        <input class="text1" type="text" placeholder="请输入手机号">
      </div>
      <div class="div2">
        <img class="img" src="../../assets/img/erweima.png" alt>
        <input class="text2 text3" type="text" placeholder="请输入验证码">
        <p class="span" @click="send()">获取验证码</p>
      </div>
      <div class="div2">
        <img class="img" src="../../assets/img/suo.png" alt>
        <input class="text2" type="password" placeholder="请重置密码">
      </div>
      <div class="div2">
        <img class="img" src="../../assets/img/suo.png" alt>
        <input class="text2" type="password" placeholder="请确认密码">
      </div>
      <button @click="top()">确定</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "找回密码"
    };
  },
  methods: {
    //   最后用户确定的事件
    top() {
      console.log("确定的事件");
    },
    // 短信验证的事件
    send() {
      console.log("短信验证的事件");
    }
  },
  mounted() {
    this.$store.commit("size", this.$route.params.name);
    this.$store.commit("headerStatus", true);
    if (this.$route.params.name == "忘记密码") {
    }
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

.div {
  margin-top: 0.88rem;
  height: 100%;
}
.div1 {
  width: 92%;
  height: 100%;
  margin: 0 auto;
}
input {
  height: 0.9rem;
  width: 6.9rem;
  margin: 0 auto;
  padding: 0 0.9rem;
}
.text1 {
  margin-top: 0.3rem;
  margin-bottom: 0.1rem;
}
.text2 {
  margin-bottom: 0.1rem;
}
.text3 {
  width: 66%;
}
.span {
  display: inline-block;
  height: 0.9rem;
  background: #ffffff;
  text-align: center;
  line-height: 1rem;
  margin-left: 0.16rem;
  width: 30%;
}
button {
  margin-top: 0.58rem;
  width: 100%;
  height: 0.88rem;
  background: #c0a580;
  border-radius: 0.5rem;
}
.div2 {
  position: relative;
}
.img {
  height: 0.4rem;
  position: absolute;
  top: 0.26rem;
  left: 0.4rem;
}
.img1 {
  top: 0.56rem;
}
</style>