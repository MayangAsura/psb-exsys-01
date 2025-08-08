// All components mapping with path for internal routes

import { lazy } from 'react'

const Landing = lazy(() => import('../landing/Landing'))
// const Landing = lazy(() => import('../landing/components/pages/Landing/main'))
const Exam = lazy(() => import('../landing/components/pages/ExamPage/ExamPage'))
const FrontLogin = lazy(() => import('../landing/components/pages/Login/Login'))
const FrontRegister = lazy(() => import('../landing/components/pages/Register/Register'))
const MCExam = lazy(() => import('../landing/components/sections/Exams/MCExam'))
// const FrontRegister = lazy(() => import('../landing/components/pages/Register/Register'))

const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))


const routes = [
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  // {
  //   path: '/lanfing', // the url
  //   component: A, // view rendered
  // },
  {
    path: '/exam', // the url
    component: Exam, // view rendered
  },
  {
    path: '/landing', // the url
    component: Landing, // view rendered
  },
  {
    path: '/login',
    component: FrontLogin,
  },
  {
    path: '/register',
    component: FrontRegister,
  },
  {
    path: 'u/exam/:id/show',
    component: MCExam,
  },
  {
    path: '/u/exam/:id/start',
    component: MCExam,
  },
  {
    path: '/leads',
    component: Leads,
  }
  ,
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/settings-billing',
    component: Bills,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
