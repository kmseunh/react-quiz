import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// 사용자 인증 관련 커스텀 Hook
export const useAuth = () => {
    // AuthContext로부터 사용자 정보와 로그인, 로그아웃 함수 가져오기
    const { user, loginUser, logoutUser } = useContext(AuthContext);

    // 커스텀 Hook에서 사용자 정보와 로그인, 로그아웃 함수 반환
    return { user, loginUser, logoutUser };
};
