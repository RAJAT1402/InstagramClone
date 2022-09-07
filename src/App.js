import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import PageNotFound from './components/PageNotFound';
import { AuthContextProvider } from './context/AuthContext';
function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
