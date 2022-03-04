const episodes = {
  store: {
      episode: null,
      episodes: [],
      episodesModal: false
  },
  actions: {
      async getEpisodeUrl({ commit }, url) {
          const { data } = await this.$axios.get(url);
          commit('setEpisode', data);
      },
      async getEpisodes({ commit }) {
          const {data}  = await this.$axios.get('episode');
          commit('setEpisodes', data['results']);
      }
  },
  mutations: {
      setEpisode: (state, payload) => (state.episode = payload),
      setEpisodes: (state, payload) => (state.episodes = payload),
      setEpisodeModal: (state, payload) => (state.episodeModal = payload)
  }
};


export const state = () => ({
  ...episodes.store,
});

export const actions = {
  ...episodes.actions,
};

export const mutations = {
  ...episodes.mutations,
};
