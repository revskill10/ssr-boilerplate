import Index from './components/index'
import List from './components/list'
import {getText} from './api'

const routes = [
  {
    path: '/',
    exact: true,
    component: Index,
  },
  {
    path: '/list',
    component: List,
    getInitialProps: async (context) => {
      context.text = await getText();
    }
  }
]

export default routes;