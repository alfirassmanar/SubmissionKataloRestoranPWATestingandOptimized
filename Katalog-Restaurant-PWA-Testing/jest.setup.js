// jest.setup.js
import 'fake-indexeddb/auto';
if (typeof global.structuredClone !== 'function') {
    global.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
  }
  