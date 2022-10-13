<template>
  <div class="wrapper">
    <the-sidebar></the-sidebar>
    <div class="content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheSidebar from './TheSidebar.vue';

export default {
  data() {
    return {
      collapse: false,
    };
  },
  components: {
    TheSidebar,
  },
};
</script>
<style scoped>
.wrapper {
  height: 100%;
  display: flex;
}
.content-box {
  flex: 1;
  padding: 24px;
}
</style>
