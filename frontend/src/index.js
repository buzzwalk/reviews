import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import CreateReview from './routes/CreateReview'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/homepage/Landing'
import ReviewOverview from './components/ReviewOverview'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/review',
    element: <CreateReview />,
  },
  {
    path: "/landing",
    element: <Landing />
  },
  {
    path: "/proffessors",
    element: <ReviewOverview name="Proffessors"/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
