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
  getDictionaries() {
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
    const result = await this.getDictionaries();
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
  async getDictionaries() {
    let promise = cacheMap.get('dictionaries');
    if (!promise) {
      const result = await getDictionaries();
      cacheMap.set('dictionaries', result);
      console.log('cacheMap', cacheMap);
      return result;
    }
    return promise;
  }

  /**
   * 获取其他数据
   */
  async getUserInfo() {
    let promise = cacheMap.get('userInfo');
    if (!promise) {
      const result = await getUserInfo();
      cacheMap.set('userInfo', result);
      console.log('cacheMap', cacheMap);
      return result;
    }
    return promise;
  }

  async getOptions(key) {
    const result = await this.getDictionaries();
    return result[key];
  }
}

export default new Dictionaries();
// export default new DictionariesNormal();
