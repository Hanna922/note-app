import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { login } from "../api/auth";
import { useState } from "react";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }, // 중복 제출 방지
  } = useForm();
  // register를 통해 각 입력란을 등록, handleSubmit을 통해 form 요소에서 발생하는 submit 이벤트 처리

  const onSubmit = async (e) => {
    // e.preventDefault();
    const { email, password } = state;
    const response = await login({ email: email, password: password });
    console.log(response);
    // if ()
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="test@email.com"
        {...register("email")}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="****************"
        {...register("password")}
      />
      <Button type="submit" disabled={isSubmitting}>
        로그인
      </Button>
    </form>
  );
};

export default Login;
