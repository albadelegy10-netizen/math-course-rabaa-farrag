const cache = new Set();
const obj = {};
obj.a = obj;
try {
  JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        return undefined;
      }
      cache.add(value);
    }
    return value;
  });
  console.log("Success");
} catch (e) {
  console.log("Error:", e.message);
}
