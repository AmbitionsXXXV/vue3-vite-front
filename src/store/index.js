import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import category from './modules/category'
import theme from './modules/theme'

const store = createStore({
    getters,
    modules: {
        category,
        theme
    },
    plugins: [
        createPersistedState({
            // 保存到 localStorage 中的 key
            key: 'OOR-front',
            // 需要保存的模块
            path: ['category', 'theme']
        })
    ]
})

export default store