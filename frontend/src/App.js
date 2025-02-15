import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import UserProfile from './routes/user_profile';
import Layout from './components/Layout';
import Login from './routes/login';
import Register from './routes/register';
import { AuthProvider } from './contexts/useAuth';
import PrivateRoute from './components/private_route';
import CreatePost from './routes/create_post';
import Home from './routes/home';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<Layout><PrivateRoute><UserProfile/></PrivateRoute></Layout>} path='/:username'/>
            <Route element={<Layout><PrivateRoute><CreatePost /></PrivateRoute></Layout>} path='/create/post'/>
            <Route element={<Layout><PrivateRoute><Home /></PrivateRoute></Layout>} path='/'/>
            <Route element={<Layout><Login/></Layout>} path='/login'/>
            <Route element={<Layout><Register/></Layout>} path='/register'/>
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
