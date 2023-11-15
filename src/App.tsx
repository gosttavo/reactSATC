import { RouterProvider, createBrowserRouter } from 'react-router-dom'
//import RootLayout from './layouts/RootLayout'
import Home from './routes/Home'
import Messages from './routes/Messages'

function App() {

  const router = createBrowserRouter([
    // {
    //   path: '/',
    //   element: <RootLayout />,
    //   children: [
    //     {
    //       path: '/',
    //       element: <Home />
    //     },
    //     {
    //       path: '/messages',
    //       element: <Messages />,
    //     }
    //   ]
    // }
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
