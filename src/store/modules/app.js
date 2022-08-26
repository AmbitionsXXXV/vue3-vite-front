import { ALL_CATEGORY_ITEM } from '@/constants'

export default {
    namespaced: true,
    state: () => ({
        // 当前选中的分类
        currentCategory: ALL_CATEGORY_ITEM
    }),
    mutations: {
        /**
         * 切换选中分类
         */
        changeCurrentCategory(state, newCategory) {
            state.currentCategory = newCategory
        },
        /**
         * 修改 searchText
         */
        changeSearchText(state, newSearchText) {
            state.searchText = newSearchText
        },
    }
}
