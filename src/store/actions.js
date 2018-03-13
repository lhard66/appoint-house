// Vue methods中的方法。需要执行的方法，异步操作在此执行。
export const increment = context => {
  return new Promise(resolve => {
    setTimeout(() => {
      context.commit('increment');
      resolve('操作完成');
    }, 2000);
  })
}