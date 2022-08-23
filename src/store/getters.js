export default {
    // 简单访问
    categorys: state => state.category.categorys,
    /**
    * 当前主题
    */
    themeType: (state) => state.theme.themeType
}