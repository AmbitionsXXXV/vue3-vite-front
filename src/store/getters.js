export default {
    // 简单访问
    categorys: state => state.category.categorys,
    /**
    * 当前主题
    */
    themeType: (state) => state.theme.themeType,
    /**
     * category选中项
     */
    currentCategory: (state) => state.app.currentCategory,
    /**
     * category选中项下标
     */
    currentCategoryIndex: (state, getters) => {
        return getters.categorys.findIndex(
            (item) => item.id === getters.currentCategory.id
        )
    },
    /**
     * 搜索历史
     */
    historys: (state) => state.search.historys,
    /**
   * 搜索文本
   */
    searchText: (state) => state.app.searchText,
}