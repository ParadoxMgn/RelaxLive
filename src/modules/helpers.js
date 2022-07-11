export const debounce = (func, ms = 300) => {
  let id;

  return (...arg) => {
    clearTimeout(id);
    id = setTimeout(() => { func.apply(this, arg); }, ms);
  };
};