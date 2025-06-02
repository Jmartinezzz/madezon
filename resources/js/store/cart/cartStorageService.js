const getStorageKey = (userId) => {
  return userId ? `cart_items_user_${userId}` : 'cart_items_guest';
};

export const cartStorageService = {
  load: (userId) => {
    try {
      const key = getStorageKey(userId);
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  save: (userId, items) => {
    try {
      const key = getStorageKey(userId);
      localStorage.setItem(key, JSON.stringify(items));
    } catch {}
  },

  clear: (userId) => {
    try {
      const key = getStorageKey(userId);
      localStorage.removeItem(key);
    } catch {}
  }
};
