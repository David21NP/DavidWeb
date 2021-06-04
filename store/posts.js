/**
 * @JSON format of post
 * {
 *    title: @String ,
 *    description: @String ,
 *    author: @String ,
 *    date: @Date ,
 *    tags: @List ,
 *    categories: @List ,
 *    content: @String ,
 *    coments: @List , Tentative
 * }
 * @returns post
 */

export const state = () => ({
  list: [],
})

export const getters = {
  postCount: (state) => {
    return state.list.lenght
  },
  getPostByViews: (state) => (views) => {
    state.list.find((post) => post.views >= views)
  },
}

export const mutations = {
  addPosts(state, post) {
    state.list.push(post)
  },
  removePost(state, post) {
    state.list.splice(state.list.indexOf(post), 1)
  },
}

export const actions = {
  add({ commit }) {
    commit('addPosts', { text: 'adios' })
  },
}
