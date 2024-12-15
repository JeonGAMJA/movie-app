import { Link, useNavigate } from "react-router-dom";
import Input from "../Signup/model/Input";
import { useState } from "react";
import { kakaoLogin, supabaseLogin } from "../../f_shared/lib/supabaseService";

const LOGIN_INPUT_CONFIG = [
  { label: "email", type: "email", placeholder: "email", name: "email" },
  {
    label: "Password",
    type: "password",
    placeholder: "password",
    name: "password",
  },
];

const initialFormValue = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValues, setFormValues] = useState(initialFormValue);
  const navigate = useNavigate();

  const handleInputChange = (field) => (e) => {
    setFormValues((prevValue) => ({
      ...prevValue,
      [field]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await supabaseLogin({
      email: formValues.email,
      password: formValues.password,
      onSuccess: () => {
        setFormValues(initialFormValue);
        console.log("로그인 성공!");
        navigate("/");
      },
    });
  };

  const handleKakaoLogin = async () => {
    await kakaoLogin({
      onSuccess: () => navigate("/"),
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
        <div className="w-full flex flex-col gap-[100px] items-center">
          <span className="text-5xl font-black">Log in</span>
          <form
            className="flex flex-col gap-20 w-full"
            onSubmit={(e) => handleLogin(e)}
          >
            <div className="flex flex-col gap-10">
              {LOGIN_INPUT_CONFIG.map((config) => (
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
              <button className="w-full bg-red-600 rounded-md font-medium py-[15px] pw-[20px] text-[20px]">
                Log in
              </button>
              <button
                className="bg-yellow-500 w-full rounded-md font-medium py-[15px] pw-[20px] text-[20px] text-amber-950"
                onClick={handleKakaoLogin}
              >
                Kakao 로그인
              </button>
              <Link to="/signup">
                <span className="text-gray-300">회원가입 하러가기</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
