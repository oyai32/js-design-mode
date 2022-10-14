import { ref } from '@vue/composition-api';

function dealLoading(asyncFunction) {
  const loading = ref(null);
  const data = ref(null);

  const execute = async () => {
    // 请求开始时，设置 loading 为 true，清除已有数据和 error 状态
    loading.value = true;
    data.value = null;
    try {
      const response = await asyncFunction();
      data.value = response;
    } catch (error) {
      console.log('错误处理', error);
    } finally {
      loading.value = false;
    }
  };

  return { execute, loading, data };
}

export default dealLoading;
