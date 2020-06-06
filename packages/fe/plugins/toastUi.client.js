import Vue from 'vue'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor, Viewer } from '@toast-ui/vue-editor'
// import tui-editor uml plugin
import uml from '@toast-ui/editor-plugin-uml'
// import tui-editor code syntax highlight plugin
import 'highlight.js/styles/github.css'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
// import tui-editor color syntax plugin
import 'tui-color-picker/dist/tui-color-picker.css'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
// import tui-editor chart plugin
import 'tui-chart/dist/tui-chart.css'
import chart from '@toast-ui/editor-plugin-chart'

// rigist highlight languages
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)

export default (ctx, inject) => {
  if (!process.server) {
    Vue.editorOptions = {
      plugins: [
        uml,
        colorSyntax,
        [chart, { minHeight: 200, width: 350 }],
        [codeSyntaxHighlight, { hljs }]
      ]
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
