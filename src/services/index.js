import { get } from './http';

export const getDictionaries = () => get(`/dictionaries`);
