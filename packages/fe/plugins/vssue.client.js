import Vue from 'vue'
import Vssue from 'vssue'
import GithubV4 from '@vssue/api-github-v4'
import 'vssue/dist/vssue.css'
import cert from '../../../config/cert'
const { vssueCert } = cert
Vue.use(Vssue, {
  api: GithubV4,
  ...vssueCert
})
