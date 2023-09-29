import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Leaderboard from './pages/Leaderboard';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<UserProfile />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
            </Routes>
        </>
    );
};

export default App;
