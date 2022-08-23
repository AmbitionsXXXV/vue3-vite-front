import store from '@/store'
import { watch } from 'vue'
import { THEME_LIGHT, THEME_DARK } from '@/constants'

/**
 * 初始化主题
 */
export default () => {
    // 1.当主题发生改变或者进入系统时，可以进行html css 的配置
    watch(
        () => store.getters.themeType,
        (val) => {
            // html 的 class
            let themeClassName = ''
            switch (val) {
                case THEME_LIGHT:
                    themeClassName = 'light'
                    break
                case THEME_DARK:
                    themeClassName = 'dark'
                    break
            }
            // 修改 html 的 class
            document.querySelector('html').className = themeClassName
        },
        {
            // 初始执行一次
            immediate: true
        }
    )
}
