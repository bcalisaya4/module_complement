const characters = {
  store: {
      character: null,
      characters: [],
      characterModal: false
  },
  actions: {
      async getCharacter({ commit }, id) {
          const { data } = await this.$axios.get(`character/${id}`);
          commit('setCharacter', data);
      },
      async getFilter({ commit }, variable,parametro) {
        console.log(parametro[0],'--',variable[0])
        if (parametro.length ==1){
          const { data } = await this.$axios.get(`character/?${parametro[0]}=${variable[0]}`);
          commit('setCharacters', data);

        }else{
          const { data } = await this.$axios.get(`character/?${parametro[0]}=${variable[0]}/${parametro[1]}=${variable[1]}`);
          //console.log(data)
          commit('setCharacter', data);
        }
    },

      async getCharacters({ commit }) {
          const {data}  = await this.$axios.get('character');
          //console.log(data)
          commit('setCharacters', data['results']);
      }
  },
  mutations: {
      setCharacter: (state, payload) => (state.character = payload),
      setCharacters: (state, payload) => (state.characters = payload),
      setCharacterModal: (state, payload) => (state.characterModal = payload)
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
