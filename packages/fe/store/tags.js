export const state = () => {
  return {
    tags: []
  }
}

export const mutations = {
  ADD_TAGS(state, tag) {
    state.tags.push(...tag)
  },
  DEL_TAG(state, tag) {
    const { tags } = state
    const index = tags.findIndex(({ text }) => text === tag.text)
    tags.splice(index, 1)
    state.tags = tags
  }
}

export const actions = {
  async addTag({ commit }, tag) {
    await this.$axios.$post(`tags/${tag.text}`, tag)
    commit('ADD_TAGS', [tag])
  },
  async delTag({ commit }, tag) {
    const result = await this.$axios.$delete(`tags/${tag.text}`)
    commit('DEL_TAG', tag)
  },
  async getTags() {
    const tags = await this.$axios.$post('tags')
    commit('ADD_TAGS', tags)
  }
}
