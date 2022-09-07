import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import PageNotFound from './components/PageNotFound';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import { useContext } from 'react';

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        {/* <Route path="/" element={<Feed />}/> */}
        {/* <Route path="/profile" element={<Profile />}/> */}
        <Route path="/" element={<Navigate replace to="/feed" />} />
        <Route path="/feed" element={ <PrivateRoute> <Feed /> </PrivateRoute>}/>
        <Route path="/profile" element={ <PrivateRoute> <Profile /> </PrivateRoute>}/>
        <Route path="/login" element={<ReDirectToFeed> <Login /> </ReDirectToFeed>}/>
        <Route path="/signup" element={<ReDirectToFeed> <Signup /> </ReDirectToFeed>}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </AuthContextProvider>
    </BrowserRouter>
  );
}

function PrivateRoute({children}){
  const user = useContext(AuthContext);
  // console.log(user);

  return user.cUser != null ? children : <Navigate to="/login" />;
}

function ReDirectToFeed({children}){
  const user = useContext(AuthContext);
  // console.log(user);

  return user.cUser == null ? children : <Navigate to="/feed" />;
}

export default App;
