const routes = [
  {
    path: '/login',
    component: ()=> <p>Login</p>,
    visitorOnly: true,
    withoutLayout: true,
  },
  {
    path: '/dashboard',
    component: ()=> <p>Dashboard</p>,
  },

  {
    path: '/',
    component: ()=> <p>404 for visitors</p>,
    visitorOnly: true,
    withoutLayout: true
  },
]

export default routes;