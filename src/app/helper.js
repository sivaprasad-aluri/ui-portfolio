export const setStoreData = (data) => {
  localStorage.setItem("userInfo", data);
};

export const getStoredData = (key) => {
  if (!!localStorage.getItem) return JSON.parse(localStorage.getItem(key));
};
