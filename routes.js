import Index from './components/index'
import List from './components/list'
import fetch from 'isomorphic-unfetch'
const getText = async () => {
  const res = await fetch('https://api.github.com/users/octocat');
  return await res.json()
}
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