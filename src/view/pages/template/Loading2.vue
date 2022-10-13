<template>
  <div>
    <el-button 
      :loading="loading"
      @click="getData"
    >
      获取时间
    </el-button>
    <br/><br/>
    {{ time }}
  </div>
</template>
<script>
export default {
  name: 'Loading',
  data() {
    return {
      loading: false,
      time: null,
    }
  },
  methods: {
    async getData() {
      this.loading = true;
      const { time } = await this.mockData();
      this.time = time;
      this.loading = false;
    },

    mockData() {
      return new Promise (resolve => {
        setTimeout(() => {
          resolve({time: new Date()})
        }, 1000);
      })
    }
  }
}
</script>