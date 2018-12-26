export default ({ store, redirect }) => {
  const accessToken = store.getters['accessToken']
  const loginUser = store.getters['loginUser']

  if (!accessToken || !loginUser) {
    redirect('/')
  }

  if (loginUser.role !== 0) {
    redirect('/')
  }
}
