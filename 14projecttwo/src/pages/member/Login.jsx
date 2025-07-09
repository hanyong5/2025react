import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" h-[calc(100vh-56px)] flex justify-center items-center">
      <div className="w-[400px] bg-gray-200 px-6 py-8 rounded-2xl shadow-2xl">
        <h3 className="text-3xl font-bold mb-4">Login</h3>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">이메일</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="이메일입력"
            name="email"
          />
        </fieldset>

        <fieldset className="fieldset mb-4">
          <legend className="fieldset-legend">패스워드</legend>
          <input
            type="password"
            className="input w-full"
            placeholder="패스워드입력"
            name="pw"
          />
        </fieldset>

        <button className="btn btn-primary w-full mb-4">로그인</button>

        <div className="flex justify-between">
          <div className="text-sm text-gray-600">아이디/비밀번호찾기</div>
          <div className="text-sm text-gray-600">
            <Link to="/member/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
