import Button from "../elements/button/Button";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  const menus = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Features",
      link: "/features",
    },
    {
      title: "About",
      link: "/about",
    },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[80%] bg-light-green flex justify-between items-center p-[10px] rounded-[20px] shadow-md">
      <div>
        <img src={logo} alt="logo ginta" className="w-[80px]" />
      </div>
      <div className="w-[60%] flex justify-between">
        <div className="w-[50%] flex justify-evenly mr-[50px]">
          {menus.map((menu) => {
            return (
              <div>
                <a
                  href={menu.link}
                  className="font-semibold text-lg hover:text-dark-green"
                >
                  {menu.title}
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between gap-3">
          <Button
            widht={"96px"}
            bg={"bg-white"}
            colorText={"text-black"}
            colorBorder={"#333"}
            hover={"hover:bg-white/80"}
          >
            <a href="/register">Register</a>
          </Button>
          <Button
            widht={"96px"}
            bg={"bg-dark-green"}
            colorText={"text-white"}
            colorBorder={"false"}
            hover={"hover:bg-dark-green/80"}
          >
            <a href="/login">Login</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
