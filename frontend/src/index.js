import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import CreateReview from './routes/CreateReview'
import profData from "./sampleProfData"

import { BrowserRouter, createBrowserRouter, HashRouter, RouterProvider, Routes , Route} from 'react-router-dom'
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
  }, 
  {
    path: "/classreviews",
    element: <ViewClassesReviewInfo />
  }, 
  {
    path: "/profreviews",
    element: <ViewProfessorReviewInfo />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      
      <HashRouter >
        <Routes >
          <Route path="/" element={ <App></App>} />
          <Route path="/review" element={<AddReview></AddReview>} />
          <Route path="/landing" element={<Landing></Landing> } />
          <Route path="/professors" element={<ProfessorsReviewOverview /> } />
          <Route path="/classes" element={ <ClassesReviewOverview />} />
          <Route path="/apartments" element={ <ApartmentReviewOverview />} />
          <Route path="/dininghalls" element={ <DiningReviewOverview />} />
          <Route path="/dininghallreviews" element={ <ViewDiningHallReviewInfo />} />
          <Route path="/dormreviews" element={  <ViewDormReviewInfo />} />
          <Route path="/classreviews" element={<ViewClassesReviewInfo />} />
          <Route path="/profreviews" element={<ViewProfessorReviewInfo />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
)
