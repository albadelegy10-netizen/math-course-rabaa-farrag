import { LESSONS } from './constants';

function findCircular(obj: any, path: string = '', seen: Set<any> = new Set()) {
  if (obj && typeof obj === 'object') {
    if (seen.has(obj)) {
      console.log('Circular reference found at:', path);
      return true;
    }
    seen.add(obj);
    for (const key in obj) {
      if (findCircular(obj[key], path ? `${path}.${key}` : key, seen)) {
        return true;
      }
    }
    seen.delete(obj);
  }
  return false;
}

findCircular(LESSONS);
console.log('Done checking LESSONS');
