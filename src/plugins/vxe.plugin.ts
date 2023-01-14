import { App } from 'vue'

import zhCN from 'vxe-table/es/locale/lang/zh-CN'
import XEUtils from 'xe-utils'
import {
    VXETable,
    Filter,
    Toolbar,
    Table,
    Column,
    Grid,
} from 'vxe-table'


VXETable.setup({
    i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
})

export function useVxeTable(app: App) {
    app.use(Filter).use(Table).use(Column).use(Grid).use(Toolbar)
}