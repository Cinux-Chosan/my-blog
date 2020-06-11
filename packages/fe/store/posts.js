export const state = () => {
  return {
    posts: {},
    pagination: {
      page: 1,
      total: 0,
      limit: 10
    }
  }
}

export const mutations = {
  SAVE_POSTS(state, postList) {
    const posts = {}
    console.log('psotList', postList)
    postList.forEach(post => (posts[post._id] = post))
    state.posts = posts
  },

  UPDATE_PAGINATION(state, pagination) {
    state.pagination = pagination
  }
}
