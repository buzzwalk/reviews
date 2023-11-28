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
import ViewClassesReviewInfo from './components/reviews/ViewClassesReviewInfo'
import ViewProfessorReviewInfo from './components/reviews/ViewProfessorReviewInfo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/reviews/review',
    element: <AddReview />,
  },
  {
    path: "/reviews/landing",
    element: <Landing />
  },
  {
    path: "/reviews/professors",
    element: <ProfessorsReviewOverview />
  },
  {
    path: "/reviews/classes",
    element: <ClassesReviewOverview />
  },
  {
    path: "/reviews/apartments",
    element: <ApartmentReviewOverview />
  },
  {
    path: "/reviews/dininghalls",
    element: <DiningReviewOverview />
  },
  {
    path: "/reviews/dininghallreviews",
    element: <ViewDiningHallReviewInfo />
  },
  {
    path: "/reviews/dormreviews",
    element: <ViewDormReviewInfo />
  }, 
  {
    path: "/reviews/classreviews",
    element: <ViewClassesReviewInfo />
  }, 
  {
    path: "/reviews/profreviews",
    element: <ViewProfessorReviewInfo />
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
