<template>
  <div>
    <el-button :loading="loading" @click="handleClick"> 获取时间2 </el-button>
    <br /><br />
    {{ data }}
  </div>
</template>

<script>
import dealLoading from '@/utils/loading.js';

export default {
  setup() {
    function mockData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(new Date());
        }, 1000);
      });
    }

    const { execute: handleClick, loading, data } = dealLoading(mockData);

    return {
      handleClick,
      loading,
      data,
    };
  },
};
</script>
