import Navbar from "../fragments/Navbar";
import { GoGoal } from "react-icons/go";

const About = () => {
  return (
    <div className="w-full flex justify-center">
      <Navbar />
      <div className="w-[50%] h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold mb-6">About Ginta</h1>
        <p className="text-justify mb-3">
          Ginta adalah aplikasi web sederhana untuk membantu pengguna memantau
          asupan gizi harian secara praktis. Dirancang dengan tampilan yang
          mudah digunakan, Ginta cocok untuk siapa saja yang ingin mulai hidup
          lebih sehat.
        </p>
        <p className="text-justify mb-6">
          Fitur-fitur seperti pencatatan makanan, kalkulasi gizi, dan tantangan
          harian disediakan agar proses menjaga pola makan jadi lebih ringan dan
          menyenangkan.
        </p>
        <div className="w-[30em] h-[100px] flex flex-col justify-center items-center bg-dark-green rounded-[5px]">
          <div className="flex justify-center items-center gap-2">
            <GoGoal className="text-white text-[25px]" />
            <h1 className="text-white text-[18px] font-semibold">Our Goal</h1>
          </div>
          <h1 className="text-white font-[12px]">
            Mempermudah pemantauan gizi harian dan membantu membangun kebiasaan
            makan sehat
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
