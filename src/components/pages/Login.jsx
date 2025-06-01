import { useState } from "react";
import background from "../../assets/img/background.png";
import logo from "../../assets/img/logo.png";
import Button from "../elements/button/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Forms = [
    {
      title: "Email",
      type: "email",
      width: "300px",
      value: email,
      setter: setEmail,
    },
    {
      title: "Password",
      type: "password",
      width: "300px",
      value: password,
      setter: setPassword,
    },
  ];

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Login berhasil!");
      navigate("/hitungkalori"); // Ganti sesuai route halaman setelah login
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div>
      <div className="w-full h-screen">
        <img src={background} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] bg-light-green flex flex-col justify-center items-center rounded-[20px] p-1">
        <div className="w-[95%] flex justify-start items-center">
          <img src={logo} alt="" className="w-[80px]" />
        </div>
        <h1 className="font-bold text-2xl mb-[30px]">Login</h1>
        <div className="bg-white w-[90%] flex flex-col justify-center items-center gap-2 rounded-[20px] p-3 mb-3">
          {Forms.map((form, index) => (
            <div
              className="text-start flex flex-col justify-center"
              key={index}
            >
              <h1 className="mb-2 font-bold">{form.title}</h1>
              <input
                type={form.type}
                value={form.value}
                onChange={(e) => form.setter(e.target.value)}
                className="w-[300px] rounded-[5px] border border-[#333] p-1 placeholder:text-gray-400"
                placeholder={form.title}
              />
            </div>
          ))}
          <div className="flex flex-col justify-center items-center mt-3">
            <Button
              widht={"150px"}
              bg={"bg-dark-green"}
              colorText={"text-white"}
              hover="hover:bg-dark-green/80"
              func={handleLogin}
            >
              Sign In
            </Button>
            <p className="mt-2">
              Don't have an account? Register{" "}
              <a href="/register" className="hover:text-dark-green">
                Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
