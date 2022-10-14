<template>
  <div>
    <el-button 
      :loading="loading"
      @click="getData"
    >
      获取时间
    </el-button>
    <br/><br/>
    {{ data }}
  </div>
</template>

<script>
import DealRequest from '@/utils/loading.js';

export default {
  name: 'Loading',
  data() {
    return {
      loading: false,
      data: null,
    }
  },
  methods: {
    async getData() {
      const dealRequest = new DealRequest({
        requestData:async ()=>{
          const {data} =  await this.mockData()
           this.data = data;
           return data;
        },
     
      })
      dealRequest.init();
      // this.loading = true;
      // try {
      //   const { data } = await this.mockData();
      //   this.data = data;
      // } catch (error) {
      //   console.log('错误处理', error);
      // }
      // this.loading = false;
    },

    mockData() {
      return new Promise (resolve => {
        setTimeout(() => {
          resolve({data: new Date()})
        }, 1000);
      })
    }
  }
}
</script>