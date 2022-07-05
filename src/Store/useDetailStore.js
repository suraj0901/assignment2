import { customStore } from '../Store/useStore';

export default customStore([], {
  addDetail(state, payload) {
    state.push(payload);
  },
  updateDetail(state, id, payload) {
    state[id] = payload;
  },
  delteDetail(state, id) {
    state.splice(id, 1);
  },
});
