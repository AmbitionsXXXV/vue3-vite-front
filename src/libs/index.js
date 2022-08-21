import svgIcon from './svg-icon/index.vue'
import popup from './popup/index.vue'
import { defineAsyncComponent } from 'vue'

export default {
    install(app) {
        // 1.获取当前路劲下所有文件夹中的index.vue
        const components = import.meta.glob('./*/index.vue')
        // 2.遍历获取到的组件模块
        for (const [key, value] of Object.entries(components)) {
            const componentName = 'm-' + key.replace('./', '').split('/')[0]
            // 3.利用 app.component 进行注册
            app.component(componentName, defineAsyncComponent(value))
        }
    }
}
