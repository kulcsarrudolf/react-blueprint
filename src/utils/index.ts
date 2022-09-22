import { v4 as uuid } from 'uuid';

export const getKey = uuid;
export const capitalize = (s: string) => (s && s[0].toUpperCase() + s.slice(1)) || '';

export default null;
