<template>
  <div class="content">
    <!-- <img class="icon" src="../../../assets/img/shouji.png" alt> -->
    <div class="divll">
      <img class="img1 img2" src="../../../assets/img/shouji.png" alt>
      <input class="phone" type="text" placeholder="请输入账号" v-model="phone">
    </div>
    <div class="divl">
      <img class="img1" src="../../../assets/img/suo.png" alt>
      <input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <div class="divl">
      <img class="img1" src="../../../assets/img/yanzhengma.png" alt>
      <input type="text" placeholder="请输入验证码" v-model="code" class="code">
      <div class="divl1" ref="divl1">{{ sun }}</div>
    </div>
    <div class="login" @click="login">登录</div>
    <div class="problem">
      <router-link tag="span" to="/register">注册会员</router-link>
      <router-link tag="span" to="/retrieve/忘记密码">找回密码</router-link>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      phone: "",
      password: "",
      code: ""
    };
  },
  computed: {
    sun() {
      return Math.floor(Math.random() * 10000);
    }
  },
  methods: {
    async login() {
      var _this = this;
      // this.code = this.$refs.divl1.innerHTML;
      console.log(this.$refs.divl1.innerHTML);
      if (!this.phone || !this.password || !this.code) {
        this.$toasted.error("请输入完善信息", { icon: "error" }).goAway(2000);
        return;
      }

      try {
        // await等待一个异步返回的结果 如果没有await 会报user is undefined 获取不到
        let res = await this.http.post("/api/login", {
          username: this.phone,
          password: this.password
        });
        if (this.code == _this.$refs.divl1.innerHTML) {
          if (res.code == 200) {
            this.$store.commit("loginbanner", res.data.banners);
            this.$store.dispatch("login", res.data.user);
            this.$toasted.success("登录成功").goAway(1500);
            // this.$router.replace({ name: "home" });
            if (this.$store.state.username.length > 0) {
              this.$router.push("/index/雷特币");

              this.$store.commit("tabBar", true);
              this.$store.commit("headerStatus", true);
            }
          } else {
            this.$toasted.error(res.message, { icon: "error" }).goAway(2000);
          }
          //
        } else {
          this.$toasted
            .error("请输入正确验证码", { icon: "error" })
            .goAway(2000);
        }
      } catch (error) {
        this.$toasted.error(error.message, { icon: "error" }).goAway(2000);
      }
    }
  }
};
</script>

<style scoped>
.content {
  width: 94%;
  height: 3.7rem;
  margin: 0 auto;
}

.phone {
  border-top-left-radius: 0.15rem;
  border-top-right-radius: 0.15rem;
}
.content > :nth-child(2) {
  border-radius: 0;
}
.code {
  border-bottom-left-radius: 0.15rem;
  border-bottom-right-radius: 0.15rem;
  width: 60%;
}
.content input {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid #2f2413;
  padding: 0.05rem 0rem 0.05rem 0.8rem;
}
.login {
  width: 100%;
  height: 0.8rem;
  border-radius: 0.4rem;
  background: #c0a580;
  margin-top: 0.32rem;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.3rem;
  color: #ffffff;
}
.problem {
  width: 100%;
  height: 0.44rem;
  display: flex;
  justify-content: space-between;
}
.problem span {
  width: 1.2rem;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  font-size: 0.24rem;
  color: #ffffff;
  margin-top: 0.4rem;
}
.divl {
  position: relative;
  width: 100%;
  margin: 0 auto;
}
.img1 {
  width: 0.4rem;
  display: inline-block;
  position: absolute;
  top: 0.15rem;
  left: 0.14rem;
}
.divl1 {
  height: 80%;
  width: 26%;
  position: absolute;
  top: 10%;
  right: 2%;
  font-size: 0.5rem;
  padding: 1% 4%;
}
.divll {
  position: relative;
}
.img2 {
  position: absolute;
  top: 1.3rem;
}
</style>