<template>
  <div class="sidebar">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="selectFn"
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.name" :key="item.name">
            <template slot="title">
              <i :class="[item.icon]"></i
              ><span slot="title">{{ getTitle(item) }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.name"
                :key="subItem.name"
              >
                <template slot="title">{{ getTitle(subItem) }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.name"
                >
                  {{ getTitle(threeItem) }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :key="subItem.name" :index="subItem.name">
                {{ getTitle(subItem) }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.name" :key="item.name">
            <i :class="[item.icon]"></i
            ><span slot="title">{{ getTitle(item) }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import menu from '@/configs/menu';

export default {
  data() {
    return {
      collapse: false,
      // key为路由的name，value为路由的路径和title
      routeMap: {},
      defaultActive: '',
      // 定义菜单的结构，每个对象都需要有name
      items: menu,
    };
  },
  created() {
    this.defaultActive = this.$route.meta.nav || this.$route.name;
    let pageList = this.getAllRoutes(this.$router.options.routes);
    let routeMap = {};
    for (let item of pageList) {
      if (item.name) {
        routeMap[item.name] = { path: item.path, title: item.meta.title };
      }
    }
    this.routeMap = routeMap;
  },
  methods: {
    getTitle(item) {
      if (item.subs && item.subs.length > 0) {
        return item.title;
      } else {
        return (
          item.title ||
          (this.routeMap[item.name] && this.routeMap[item.name].title)
        );
      }
    },
    // 选中菜单的方法（点击菜单进入，需刷新页面）
    selectFn(name) {
      this.$router.push({ name });
    },
    // 递归查所有既有name又有path的路由
    getAllRoutes(list) {
      let allRoutes = [];
      for (let item of list) {
        if (item.children) {
          allRoutes.push(...this.getAllRoutes(item.children));
        } else if (item.path && item.name) {
          allRoutes.push(item);
        }
      }
      return allRoutes;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100%;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}

.sidebar > ul {
  height: 100%;
}
</style>
