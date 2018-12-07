<template>
  <div class="div1">
    <lg-header></lg-header>
    <lc-conent></lc-conent>
  </div>
</template>

<script>
import LgHeader from "./components/LoginHeader";
import LcConent from "./components/LoginContent";
export default {
  components: {
    LgHeader,
    LcConent
  },
  created() {
    this.$store.state.headerStatus = false;
  }
};
</script>

<style scoped>
.div1 {
  height: 100%;
  background: url("../../assets/img/0EC71FD4-8CEB-4e94-9B09-75256D4FEA95.png")
    no-repeat bottom;
  background-size: cover;
}
</style>