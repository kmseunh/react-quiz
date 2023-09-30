import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import UserProfile from './pages/UserProfile';
import Leaderboard from './pages/Leaderboard';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/profile' element={<UserProfile />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
            </Routes>
        </>
    );
};

export default App;
