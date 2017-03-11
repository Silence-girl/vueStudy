import Hello from '@/components/Hello.vue'
import List from '@/pages/list.vue'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }
]

export default routes
