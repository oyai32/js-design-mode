import dataCache from '@/utils/dataCache';
import { getDictionaries, getUserInfo } from '@/services';

/**
 * 用装饰器的示例
 */
class Dictionaries {
  /**
   * 获取所有字典值数据
   */
  @dataCache('dictionaries')
  getDictionaryData() {
    return getDictionaries();
  }

  /**
   * 获取其他数据
   */
  @dataCache('userInfo')
  getUserInfo() {
    return getUserInfo();
  }

  async getOptions(key) {
    const result = await this.getDictionaryData();
    return result[key];
  }
}

const cacheMap = new Map();
/**
 * 不用装饰器的示例
 */
class DictionariesNormal {
  /**
   * 获取所有字典值数据
   */
  async getDictionaryData() {
    let promise = cacheMap.get('dictionaries');
    if (!promise) {
      promise = getDictionaries();

      cacheMap.set('dictionaries', promise);
      console.log('自己做 cacheMap', cacheMap);
    }
    return promise;
  }

  /**
   * 获取其他数据
   */
  async getUserInfo() {
    return cache(getUserInfo,'userInfo')
  }

  async getOptions(key) {
    const result = await this.getDictionaryData();
    return result[key];
  }
}

function cache(fn,key){
  let promise = cacheMap.get(key);
  if (!promise) {
    promise = fn();
    cacheMap.set(key, promise);
    console.log('cacheMap fn', cacheMap);
  }
  return promise;
}

// export default new Dictionaries();
export default new DictionariesNormal();

