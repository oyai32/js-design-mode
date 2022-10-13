<template>
  <div>
    <el-select v-model="value2" placeholder="请选择">
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-select v-model="value3" placeholder="请选择">
      <el-option
        v-for="item in options3"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>

import dictionaries from '@/store/dictionaries';

export default {
  name: 'About',
  props: {
    msg: String,
  },
  data() {
    return {
      options2: [],
      options3: [],
      value2: '',
      value3: '',
    };
  },
  async created() {
    await this.init();
  },
  methods: {
    async init(){
      this.options2 = await dictionaries.getOptions(2);
      this.options3 = await dictionaries.getOptions(3);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
