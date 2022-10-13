<template>
  <div>
    <h2>DEMO 2 ------ {{ name }}</h2>
    <el-select v-model="value1" placeholder="请选择">
      <el-option
        v-for="item in options1"
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
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      options1: [],
      value1: '1',
      name: '',
    };
  },
  async created() {
    await this.init();
  },
  methods: {
    async init() {
      this.options1 = await dictionaries.getOptions(1);
      const { name } = await dictionaries.getUserInfo();
      this.name = name;
    },
  },
};
</script>
