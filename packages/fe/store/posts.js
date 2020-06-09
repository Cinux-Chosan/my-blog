export const state = () => {
  return {
    posts: {}
  }
}

export const mutations = {
  SAVE_POSTS(state, postList) {
    const posts = {}
    console.log('psotList', postList)
    postList.forEach(post => (posts[post._id] = post))
    state.posts = posts
  }
}
