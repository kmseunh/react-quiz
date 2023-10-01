import { createContext, useState } from 'react';

//초기 상태
const initialUser = null;

//AuthContext 생성
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // 사용자 상태 관련 함수
    const [user, setUser] = useState(initialUser);

    // 로그인 함수
    const loginUser = () => {
        const exUser = {
            id: 'user1234',
            password: 1234,
            username: 'User1234',
        };
        setUser(exUser);
    };

    // 로그아웃 함수
    const logoutUser = () => {
        setUser(initialUser);
    };

    // Context 값 정의
    const authContextValue = {
        user,
        loginUser,
        logoutUser,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
