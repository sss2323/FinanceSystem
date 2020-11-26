function myStorage(storage) {
  return {
    get(key) {
      let val = storage.getItem(key);
      if (/^!/.test(val)) val = JSON.parse(val.slice(1));
      return val;
    },
    set(key, value) {
      if (typeof value !== 'string') {
        value = '!' + JSON.stringify(value);
      }
      storage.setItem(key, value);
    },
    remove(keys) {
      if (!Array.isArray(keys)) {
        keys = [keys];
      }
      keys.forEach(key => {
        storage.removeItem(key);
      });
    },
    clear() {
      storage.clear();
    },
  };
};

// sessionStorage的封装
export const session = myStorage(sessionStorage);

// localStorage的封装
export const local = myStorage(localStorage);
