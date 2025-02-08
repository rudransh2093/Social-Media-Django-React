import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import UserProfile from './routes/user_profile';
import Layout from './components/Layout';
import Login from './routes/login';
import Register from './routes/register';
import { AuthProvider } from './contexts/useAuth';
import PrivateRoute from './components/private_route';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<Layout><PrivateRoute><UserProfile/></PrivateRoute></Layout>} path='/:username'/>
            <Route element={<Layout><Login/></Layout>} path='/login'/>
            <Route element={<Layout><Register/></Layout>} path='/register'/>
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
