import { App } from 'vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export function useElementPlus(app: App) {
    app.use(ElementPlus, { size: 'small', zIndex: 3000, locale: zhCn })
}