import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import CreateReview from './routes/CreateReview'
import profData from "./sampleProfData"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/homepage/Landing'
import ProfessorsReviewOverview from './components/overview/ProfessorsReviewOverview'
import ClassesReviewOverview from './components/overview/ClassesReviewOverview'
import ApartmentReviewOverview from './components/overview/ApartmentReviewOverview'
import DiningReviewOverview from './components/overview/DiningReviewOverview'
import ViewDiningHallReviewInfo from './components/reviews/ViewDiningHallReviewInfo'
import ViewDormReviewInfo from './components/reviews/ViewDormReviewInfo'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme'
import AddReview from './components/AddReview'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/review',
    element: <AddReview />,
  },
  {
    path: "/landing",
    element: <Landing />
  },
  {
    path: "/professors",
    element: <ProfessorsReviewOverview />
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
  },
  {
    path: "/dininghallreviews",
    element: <ViewDiningHallReviewInfo />
  },
  {
    path: "/dormreviews",
    element: <ViewDormReviewInfo />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
