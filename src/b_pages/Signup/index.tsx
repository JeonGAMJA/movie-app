import { Link, useNavigate } from "react-router-dom";
import Input from "./model/Input";
import { useState } from "react";
import { supabaseSignup } from "../../f_shared/lib/supabaseService";

const SIGNUP_CONFIG = [
  { type: "text", placeholder: "홍길동", label: "이름", name: "username" },
  {
    type: "email",
    placeholder: "email@email.com",
    label: "이메일",
    name: "email",
  },
  {
    type: "password",
    placeholder: "비밀번호",
    label: "비밀번호",
    name: "password",
  },
  {
    type: "password",
    placeholder: "비밀번호 확인",
    label: "비밀번호 확인",
    name: "confirmPassword",
  },
];

const initialFormValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [formValues, setFormValues] = useState(initialFormValue);
  const navigate = useNavigate();
  const isMatch = formValues.password === formValues.confirmPassword;

  const handleInputChange = (field) => (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: e.target.value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!isMatch) {
      console.log("비밀번호가 일치하지 않습니다");
      return;
    }

    await supabaseSignup({
      email: formValues.email,
      password: formValues.password,
      onSuccess: () => {
        setFormValues(initialFormValue);
        console.log("회원가입 성공!");
        navigate("/login");
      },
    });
  };

  return (
    <div className="min-h-[100vh] flex flex-1">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://preview.redd.it/4fxxbm4opjd31.jpg?width=1080&crop=smart&auto=webp&s=b1e7078fa299f42b17591afdf120f823ba7a7d97"
        />
      </div>
      <div className="w-full h-full py-[100px] px-[100px] flex justify-center items-center">
        <form
          className="w-full flex flex-col gap-[100px] items-center"
          onSubmit={(e) => handleSignup(e)}
        >
          <span className="text-5xl font-black">Sign up</span>
          <div className="flex flex-col gap-20 w-full">
            <div className="flex flex-col gap-10">
              {SIGNUP_CONFIG.map((config) => (
                <Input
                  key={config.name}
                  label={config.label}
                  type={config.type}
                  name={config.name}
                  value={formValues[config.name]}
                  onChange={(e) => handleInputChange(config.name)(e)}
                  placeholder={config.placeholder}
                />
              ))}
            </div>
            <div className="w-full flex flex-col gap-7 items-center">
              <button
                className="w-full bg-red-600 rounded-md font-medium py-[15px] pw-[20px] text-[20px]"
                type="submit"
              >
                가입하기
              </button>
              <Link to="/login">
                <span className="text-gray-300">로그인 하러가기</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
