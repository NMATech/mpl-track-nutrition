import { IoPersonCircleOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

const CardProfile = () => {
  return (
    <div className="w-[250px] bg-white fixed top-[7em] right-[5em] z-[51] flex flex-col justify-center items-center p-3 rounded-[10px]">
      <div className="flex justify-center items-center mt-3 mb-5">
        <IoPersonCircleOutline className="text-[80px]" />
      </div>
      <div className="mb-4">
        <h1>Name</h1>
        <div className="w-[200px] border-[1px] border-[#333] rounded-[10px] p-2">
          <h1>Nadindra Maulana Aziz</h1>
        </div>
      </div>
      <button className="mb-4">
        <div className="w-[200px] flex items-center gap-2 border-[1px] border-[#333] rounded-[10px] p-2 hover:bg-light-green">
          <RiLockPasswordFill className="text-[20px]" />
          <h1>Change Password</h1>
        </div>
      </button>
      <button>
        <div className="w-[200px] flex items-center gap-2 border-[1px] border-[#333] rounded-[10px] p-2 hover:bg-light-green">
          <IoLogOut className="text-[25px]" />
          <h1>Logout</h1>
        </div>
      </button>
    </div>
  );
};

export default CardProfile;
