import './App.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routers/routes'

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
