import { STATIC_QUESTIONS } from './questions';

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

findCircular(STATIC_QUESTIONS);
console.log('Done checking STATIC_QUESTIONS');
