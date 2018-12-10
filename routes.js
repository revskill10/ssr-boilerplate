import Index from './components/index'
import List from './components/list'

const routes = [
  {
    path: '/',
    exact: true,
    component: Index,
  },
  {
    path: '/list',
    component: List
  }
]

export default routes;