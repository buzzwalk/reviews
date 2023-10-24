import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import CreateReview from './routes/CreateReview'
import profData from "./sampleProfData"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/homepage/Landing'
import ReviewOverview from './components/ProffessorsReviewOverview'
import ProffessorsReviewOverview from './components/ProffessorsReviewOverview'
import ClassesReviewOverview from './components/ClassesReviewOverview'
import ApartmentReviewOverview from './components/ApartmentReviewOverview'
import DiningReviewOverview from './components/DiningReviewOverview'

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
    element: <ProffessorsReviewOverview />
  },
  {
    path: "/classes",
    element: <ClassesReviewOverview />
  },
  {
    path: "/apartments",
    element: <ApartmentReviewOverview />
  },
  {
    path: "/dininghalls",
    element: <DiningReviewOverview />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
