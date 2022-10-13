const Mock = require('mockjs');
import { BASE_URL } from '@/configs/env.js';

Mock.mock(`${BASE_URL}/dictionaries`, {
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
});
