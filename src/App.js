import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null); // 로그인된 사용자 정보
  const [loading, setLoading] = useState(true); // 초기 로딩 상태

  // 페이지 로드 시 사용자 정보 가져오기
  useEffect(() => {
    axios
      .get("http://localhost:5003/api/user", { withCredentials: true })
      .then((res) => {
        setUser(res.data); // 사용자 정보 설정
        setLoading(false); // 로딩 완료
      })
      .catch((err) => {
        console.error("Failed to fetch user:", err);
        setLoading(false); // 로딩 완료
      });
  }, []);

  // 로딩 중일 때 표시할 UI
  if (loading) {
    return <div>Loading...</div>;
  }

  // 로그인 상태에 따라 컴포넌트 렌더링
  return <div>{user ? <Dashboard user={user} /> : <Login />}</div>;
}

export default App;
