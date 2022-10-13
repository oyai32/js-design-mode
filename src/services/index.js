import { get } from './http';

export const getDictionaries = () => {
  console.log('request /dictionaries');
  return get(`/dictionaries`);
};

export const getUserInfo = () => get(`/getUserInfo`);
