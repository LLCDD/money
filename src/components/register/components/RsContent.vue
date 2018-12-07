<template>
  <div class="footer">
    <div class="entry">
      <img class="img1" src="../../../assets/img/yonghu.png" alt>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <img class="img1 img2" src="../../../assets/img/shouji1.png" alt>
      <input type="text" placeholder="请输入手机号" v-model="phone">
      <p>
        <img class="img1 img3" src="../../../assets/img/erweima.png" alt>
        <input type="text" placeholder="输入手机验证码" v-model="phone_code">
        <span v-show="inentify" @click="send">发送验证码</span>
        <span v-show="timer">{{count}}s</span>
      </p>
      <img class="img1 img4" src="../../../assets/img/duanxin.png" alt>
      <input type="text" placeholder="请输入邀请码" v-model="recommend">
      <img class="img1 img5" src="../../../assets/img/suo.png" alt>
      <input type="password" placeholder="请输入密码" v-model="password">
      <img class="img1 img6" src="../../../assets/img/suo.png" alt>
      <input type="password" placeholder="请再次输入密码" v-model="password_confirmation">
      <!-- <input type="password" placeholder="输入支付密码" v-model="security">
      <input type="password" placeholder="请再次输入支付密码" v-model="security_confirmation">-->
    </div>
    <div class="foot" @click="register">立即注册</div>
  </div>
</template>

<script>
export default {
  name: "marketfoot",
  data() {
    return {
      username: "",
      phone: "",
      password: "",
      password_confirmation: "",
      // security: "",
      // security_confirmation: "",
      recommend: "",
      phone_code: "",
      inentify: true,
      timer: false,
      count: 60,
      time: ""
    };
  },
  methods: {
    // 一个简单的定时器 点击的时候 计入倒计时 如果倒计时等于1的时候显示点击按钮清除定时器
    async send() {
      if (!this.phone) {
        this.$toasted.error("请输入手机号", { icon: "error" }).goAway(2000);
        return;
      }
      try {
        // await等待一个异步返回的结果 如果没有await 会报user is undefined 获取不到
        let res = await this.http.post("/api/send_code", {
          phone: this.phone
        });
        console.log(res);
        this.$toasted.success("发送成功").goAway(1500);
      } catch (error) {
        this.$toasted.error(error.message, { icon: "error" }).goAway(2000);
      }
      (this.inentify = !this.inentify),
        (this.timer = true),
        (this.time = setInterval(() => {
          this.count -= 1;
          if (this.count == 0) {
            clearInterval(this.time);
            this.inentify = !this.inentify;
            this.timer = false;
            this.count = 60;
          }
        }, 1000));
    },
    async register() {
      if (
        !this.phone ||
        !this.username ||
        !this.password ||
        !this.password_confirmation ||
        // !this.security ||
        // !this.security_confirmation ||
        !this.phone_code
      ) {
        this.$toasted.error("请输入完善信息", { icon: "error" }).goAway(2000);
        return;
      }

      try {
        // await等待一个异步返回的结果 如果没有await 会报user is undefined 获取不到
        let res = await this.http.post("/api/register", {
          username: this.username,
          phone: this.phone,
          password: this.password,
          password_confirmation: this.password_confirmation,
          // security: this.security,
          // security_confirmation: this.security_confirmation,
          phone_code: this.phone_code,
          recommend: this.recommend
        });
        console.log(res);
        this.$toasted.success("注册成功").goAway(1500);
        this.$router.replace({ name: "login" });
      } catch (error) {
        this.$toasted.error(error.message, { icon: "error" }).goAway(2000);
      }
    }
  }
};
</script>

<style scoped>
.footer {
  margin-top: 0.4rem;
  width: 100%;
  padding: 0 4%;
}
.entry {
  height: 7.1rem;
  margin: 0 auto;
  position: relative;
}
.entry > input {
  width: 100%;
  padding: 0.05rem 0rem 0.05rem 0.96rem;
  height: 0.88rem;
  margin-bottom: 0.14rem;
}
.entry p {
  display: flex;
  margin-bottom: 0.12rem;
  position: relative;
}
.entry p input {
  width: 4.7rem;
  padding: 0.05rem 0rem 0.05rem 0.96rem;
  height: 100%;
  height: 0.88rem;
  background: #fff;
  /* background: url("../../../../public/image/yanzhengma.png") no-repeat center;
  background-size: 0.4rem 0.48rem;
  background-position: 0.16rem; */
}
.entry p span {
  width: 2.2rem;
  height: 0.88rem;
  background: #ffffff;
  margin-left: 0.14rem;
  text-align: center;
  line-height: 0.88rem;
  color: red;
  font-size: 0.22rem;
}
/* .entry > :nth-child(1) {
  background: url("../../../../public/image/zhanghuicon.png") no-repeat center;
  background-size: 0.4rem 0.48rem;
  background-position: 0.16rem;
  margin-bottom: 0.12rem;
}
.entry > :nth-child(2) {
  background: url("../../../../public/image/Nickname.png") no-repeat center;
  background-size: 0.45rem 0.48rem;
  background-position: 0.16rem;
}
.entry > :nth-child(4) {
  background: url("../../../../public/image/password.png") no-repeat center;
  background-size: 0.45rem 0.48rem;
  background-position: 0.16rem;
}
.entry > :nth-child(6) {
  background: url("../../../../public/image/Securitypassword.png") no-repeat
    center;
  background-size: 0.45rem 0.48rem;
  background-position: 0.16rem;
}
.entry > :nth-child(7) {
  background: url("../../../../public/image/Securitypassword.png") no-repeat
    center;
  background-size: 0.45rem 0.48rem;
  background-position: 0.16rem;
  margin-top: 0.12rem;
  margin-bottom: 0.12rem;
}
.entry > :nth-child(8) {
  background: url("../../../../public/image/yaoqingma.png") no-repeat center;
  background-size: 0.45rem 0.48rem;
  background-position: 0.16rem;
}
.entry > :nth-child(5) {
  background: url("../../../../public/image/password.png") no-repeat center;
  background-size: 0.45rem 0.48rem;
  background-position: 0.16rem;
  margin-top: 0.12rem;
  margin-bottom: 0.12rem;
}
.entry input::-webkit-input-placeholder {
  text-align: left;
  font-size: 0.24rem;
} */
.foot {
  border-radius: 0.3rem;
  height: 0.8rem;
  background: #c0a580;
  margin: auto;
  /* margin-top: 0.84rem; */
  margin-bottom: 0.35rem;
  text-align: center;
  line-height: 0.8rem;
  color: #ffffff;
  width: 100%;
}
input {
  background: white !important;
  border: 0 !important;
}
.img1 {
  width: 0.4rem;
  position: absolute;
  top: 0.24rem;
  left: 0.48rem;
}
.img2 {
  top: 1.3rem;
}
.img4 {
  top: 3.3rem;
}
.img5 {
  top: 4.3rem;
}
.img6 {
  top: 5.3rem;
}
</style>


