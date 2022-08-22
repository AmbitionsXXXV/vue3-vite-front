/**
 * 处理 navigationBar 中的数据 categorys
 */
import { getCategory } from '@/api/category'
import { ALL_CATEGORY_ITEM } from '@/constants'

export default {
    // 独立作用域
    namespaced: true,
    state: () => ({
        // navigationBar 展示的数据源
        categorys: [ALL_CATEGORY_ITEM]
    }),
    mutations: {
        /**
         * 为 categorys 赋值
         */
        setCategorys(state, categorys) {
            state.categorys = [ALL_CATEGORY_ITEM, ...categorys]
        }
    },
    actions: {
        /**
         * 获取 category 数据，并自动保存到 vuex 中
         */
        async useCategoryData(context) {
            const { categorys } = await getCategory()
            context.commit('setCategorys', categorys)
        }
    }
}
