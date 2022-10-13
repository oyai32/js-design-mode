<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
html,
body,
.app {
  height: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
</style>
