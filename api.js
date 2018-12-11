import fetch from 'isomorphic-unfetch'
export const getText = async () => {
  const res = await fetch('https://api.github.com/users/octocat');
  return await res.json()
}
