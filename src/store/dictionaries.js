import apiCache from '@/utils/apiCache'

const data = {
  1: [
    {
      label: 'telnet',
      value: '1',
    },
    {
      label: 'Sybase',
      value: '10',
    },
  ],
  2: [
    {
      label: '超危',
      value: '1',
    },
    {
      label: '高危',
      value: '2',
    },
  ],
  3: [
    {
      label: '未处理',
      value: '1',
    },
    {
      label: '处理中',
      value: '2',
    },
    {
      label: '已完成',
      value: '3',
    },
  ],
};

function mock() {
  console.log('request');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    });
  });
}

class Dictionaries {
  /**
   * 获取所有字典值数据
   */
  @apiCache
  getData() {
    return mock();
  }
  
  async getOptions(key) {
    const result = await this.getData();
    return result[key];
  }
}

export default new Dictionaries();
