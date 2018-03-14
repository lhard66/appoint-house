// Vue computed中的计算函数。-->可以认为是 store 的计算属性
export const filteredList = state => {
  return state.list.filter(item => item < 10);
}