const cacheMap = new Map();

export default function apiCache(target, name, descriptor) {
  // 拿到函数体并保存
  const fn = descriptor.value;
  // 修改函数体
  descriptor.value = function () {
    const key = name;
    let promise = cacheMap.get(key);
    if (!promise) {
      // 设定promise
      promise = fn.apply(this, arguments).catch((error) => {
        // 在请求回来后，如果出现问题，把promise从cache中删除
        cacheMap.delete(key);
        // 返回错误
        return Promise.reject(error);
      });

      // 使用缓存，缓存过期之后再次get就会获取null，而从服务端继续请求
      cacheMap.set(key, promise);
      console.log('ExpiresCache.cacheMap', cacheMap);
    }
    return promise;
  };
  return descriptor;
}
