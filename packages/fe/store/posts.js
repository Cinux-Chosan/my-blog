export const state = () => {
  return {
    postList: [],
    pagination: {
      page: 1,
      total: 0,
      limit: 10
    },
    typeList: []
  }
}

export const mutations = {
  SAVE_POSTS(state, postList) {
    state.postList = postList
  },

  SAVE_TYPES(state, typeList) {
    state.typeList = typeList
  },

  UPDATE_PAGINATION(state, pagination) {
    state.pagination = pagination
  }
}

export const getters = {
  posts(state) {
    return state.postList.reduce(
      (map, post) => Object.assign(map, { [post._id]: post }),
      {}
    )
  }
}
