const state = {
  list: [
    {
      id: 1,
      name: 'jim',
      sex: 'F',
      age: 18
    },
    {
      id: 2,
      name: 'lucy',
      sex: 'M',
      age: 22
    },
    {
      id: 3,
      name: 'tom',
      sex: 'F',
      age: 88
    }
  ],
  statues: 200,
  msg: '返回正确',
}

const getters = {
  getList: state => {
    return state.list;
  }
}

export default {
  state,
  getters,
}