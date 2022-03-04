const characters = {
  store: {
      character: null,
      characters: [],
  },
  actions: {
      async getCharacter({ commit }, id) {
          const { data } = await this.$axios.get(`character/${id}`);
          commit('setCharacter', data);
      },
      async getCharacters({ commit }) {
          console.log('mensaje desde store');
          const {data}  = await this.$axios.get('character');
          console.log(data['results'])
          commit('setCharacter', data['results']);
      }
  },
  mutations: {
      setCharacter: (state, payload) => (state.character = payload),
      setCharacters: (state, payload) => (state.characters = payload)
  }
};


export const state = () => ({
  ...characters.store,
});

export const actions = {
  ...characters.actions,
};

export const mutations = {
  ...characters.mutations,
};
