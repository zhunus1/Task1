export const state = () => ({
    posts: []
})

export const getters = {
    getPosts(state) {
        return state.posts
    } 
}

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },
    
    // addPost(state, post) {
    //     state.posts.push(post)
    // }
}

export const actions = {
    async setPosts(vuexConext) {
        const posts = await this.$axios.$get('/posts/')
        vuexConext.commit('setPosts', posts)
    }, 

    // async addPost(vuexConext, data) {
    //     let formData = new FormData()

    //     for (let props in data) {
    //         if (data[props]) {
    //             formData.append(props, data[props])
    //         } else {
    //             console.log(data)
    //             alert('Please enter all fields!')
    //             return
    //         } 
    //     }

    //     const post = await this.$axios.$post('/posts/', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         }
    //     )
    //     vuexConext.commit('addPost', post)
    // } 
}