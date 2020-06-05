export const state = () => {
  return {
    posts: {}
  }
}

export const mutations = {
  SAVE_POST(state, post) {
    state.posts[post._id] = post
  },
  SAVE_POSTS(state, posts) {
    state.posts = posts
  }
}
