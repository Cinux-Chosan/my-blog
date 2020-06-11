export const state = () => {
  return {
    tags: []
  }
}

export const mutations = {
  SAVE_TAGS(state, tag) {
    state.tags = tag
  },
  ADD_TAG(state, tags) {
    state.tags.push(...tags)
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
    commit('ADD_TAG', [tag])
  },
  async delTag({ commit }, tag) {
    const result = await this.$axios.$delete(`tags/${tag.text}`)
    commit('DEL_TAG', tag)
  },
  async getTags() {
    const tags = await this.$axios.$post('tags')
    commit('SAVE_TAGS', tags)
  }
}
