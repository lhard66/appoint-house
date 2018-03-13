// 只有mutations才能改变state数据
export const increment = state => {
  state.count++;
}

export const decrease = (state, n = 1) => {
  state.count -= n;
}
