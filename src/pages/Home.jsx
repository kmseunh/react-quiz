import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
    // AuthContext로부터 사용자 정보와 로그인, 로그아웃 함수 가져오기
    const { user, loginUser, logoutUser } = useContext(AuthContext);

    return (
        <div>
            <h1>퀴즈 게임 앱</h1>
            <p>다양한 주제와 난이도의 퀴즈를 풀어보세요!</p>
            {user ? (
                <div>
                    <p>안녕하세요, {user.username}님!</p>
                    <button onClick={logoutUser}>로그아웃</button>
                    <Link to='/quiz'>
                        <button>퀴즈 시작</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <p>로그인이 필요합니다.</p>
                    <button onClick={loginUser}>로그인</button>
                </div>
            )}
            <Link to='/leaderboard'>랭킹 보기</Link>
            &nbsp;
            <Link to='/profile'>프로필 관리</Link>
        </div>
    );
};

export default Home;
