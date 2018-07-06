export default {
  namespace: 'layouts',
  state: {
  },
  subscriptions: {},
  effects: {},
  reducers: {
    update_state: function (state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
};
