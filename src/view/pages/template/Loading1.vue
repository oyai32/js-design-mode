<template>
  <div>
    <el-button :loading="loading" @click="handleClick"> 获取时间1 </el-button>
    <br /><br />
    {{ data }}
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  setup() {
    function mockData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(new Date());
        }, 1000);
      });
    }

    const loading = ref(false);
    const data = ref(null);

    async function handleClick() {
      loading.value = true;
      data.value = null;
      try {
        const response = await mockData();
        data.value = response;
      } catch (error) {
        console.log('错误处理', error);
      } finally{
        loading.value = false;
      }
    }

    return {
      handleClick,
      loading,
      data,
    };
  },
};
</script>