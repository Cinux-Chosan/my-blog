import Vue from 'vue'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor, Viewer } from '@toast-ui/vue-editor'

export default (ctx, inject) => {
  console.log(ctx);
  if (!process.server) {
    Vue.use({
      install(Vue) {
        Vue.mixin({
          components: {
            Editor,
            Viewer
          }
        })
      }
    })
  }
}
