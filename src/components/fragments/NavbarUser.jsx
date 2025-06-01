import logo from "../../assets/img/logo.png";
import { IoPersonCircleOutline } from "react-icons/io5";

const NavbarUser = ({ isProfileClicked, clickProfile }) => {
  const menus = [
    {
      title: "Hitung Kalori",
      link: "/hitungkalori",
    },
    {
      title: "BMI Kalkulator",
      link: "/bmicalculator",
    },
    {
      title: "Catatan Kalori",
      link: "/catatankalori",
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
      <div className="w-[50%] flex justify-between mr-3">
        <div className="w-full flex justify-evenly mr-[50px]">
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
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={clickProfile}
        >
          <IoPersonCircleOutline className="text-dark-green text-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
