import Vue from 'vue'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor, Viewer } from '@toast-ui/vue-editor'
import uml from '@toast-ui/editor-plugin-uml'
import 'highlight.js/styles/github.css'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)

export default (ctx, inject) => {
  console.log(ctx)
  if (!process.server) {
    Vue.editorOptions = {
      plugins: [uml, [codeSyntaxHighlight, { hljs }]]
    }
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
