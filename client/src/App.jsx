import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import ReviewFormPage from './pages/ReviewFormPage';
import ReviewsPage from './pages/ReviewsPage';

import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <AuthProvider>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>

          <Route element={<ProtectedRoute/>}>
          <Route path='/reviews' element={<ReviewsPage/>}/>
          <Route path='/add-review' element={<ReviewFormPage/>}/>
          <Route path='/reviews/:id' element={<ReviewFormPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </AuthProvider>
   
   
  )
}

export default App