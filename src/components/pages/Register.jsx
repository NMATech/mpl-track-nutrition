import { useState } from "react";
import background from "../../assets/img/background.png";
import logo from "../../assets/img/logo.png";
import Button from "../elements/button/Button";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const Forms = [
    {
      title: "Name",
      type: "text",
      width: "300px",
    },
    {
      title: "Email",
      type: "email",
      width: "300px",
    },
    {
      title: "Password",
      type: "password",
      width: "300px",
    },
    {
      title: "Confirm Password",
      type: "password",
      width: "300px",
    },
  ];

  const register = (username, email, password, confirmPassword) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Cek apakah username sudah terdaftar
    const isExist = users.some((user) => user.username === username);
    if (isExist) {
      return { success: false, message: "Username sudah digunakan" };
    }

    // Simpan user baru
    if (password === confirmPassword) {
      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      return { success: true, message: "Registrasi berhasil" };
    } else {
      return {
        success: false,
        message: "Your password doesn't match with your confirm password!",
      };
    }
  };

  const handleRegister = (username, email, password, confirmPassword) => {
    const result = register(username, email, password, confirmPassword);
    console.log(result.message);
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
        <h1 className="font-bold text-2xl mb-[30px]">Register</h1>
        <div className="bg-white w-[90%] flex flex-col justify-center gap-2 rounded-[20px] p-3 mb-3">
          <form className="w-full flex flex-col justify-center items-center">
            {Forms.map((form, index) => {
              const setter = {
                Name: setUsername,
                Email: setEmail,
                Password: setPassword,
                "Confirm Password": setConfirmPassword,
              };

              const value = {
                Name: username,
                Email: email,
                Password: password,
                "Confirm Password": confirmPassword,
              };

              return (
                <div className="text-start flex flex-col mb-3" key={index}>
                  <h1 className="mb-2 font-bold">{form.title}</h1>
                  <input
                    type={form.type}
                    value={value[form.title]}
                    onChange={(e) => setter[form.title](e.target.value)}
                    className="w-[300px] rounded-[5px] border border-[#333] p-1 placeholder:text-gray-400"
                    placeholder={form.title}
                  />
                </div>
              );
            })}
            <div className="flex flex-col justify-center items-center mt-3">
              <Button
                widht={"150px"}
                bg={"bg-dark-green"}
                colorText={"text-white"}
                hover="hover:bg-dark-green/80"
                func={() =>
                  handleRegister(username, email, password, confirmPassword)
                }
              >
                Sign Up
              </Button>
              <p className="mt-2">
                Already have an account? Login{" "}
                <a href="/login" className="hover:text-dark-green">
                  Here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
