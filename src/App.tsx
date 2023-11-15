import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Messages from './routes/Messages'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/messages',
      element: <Messages />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
