import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from 'lucide-react'
import Homepage from './routes/Homepage.jsx'
import PostListsPage from './routes/PostListsPage.jsx'
import Write from './routes/Write.jsx'
import LoginPage from './routes/LoginPage.jsx'
import RegisterPage from './routes/RegisterPage.jsx'
import SinglePostPage from './routes/SinglePostPage.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { QueryClient,QueryClientProvider,} from '@tanstack/react-query'

const queryClient = new QueryClient();

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
{
  element: <MainLayout/>,
  children: [
    {
      path: '/',
      element:  <Homepage/>,
    },
    {
      path: '/posts',
      element : <PostListsPage/>
    },
    {
      path: '/slug',
      element : <SinglePostPage/>
    },
    {
      path: '/write',
      element : <Write/>
    },
    {
      path: '/login',
      element : <LoginPage/>
    },
    {
      path: '/register',
      element : <RegisterPage/>
    }
  ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>,
)
