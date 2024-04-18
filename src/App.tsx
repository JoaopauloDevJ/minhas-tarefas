import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import store from './store/index'
import Home from './pages/home'
import CadastraTarefa from './pages/cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novatarefa',
    element: <CadastraTarefa />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
