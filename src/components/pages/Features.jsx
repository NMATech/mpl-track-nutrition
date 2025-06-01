import CardFeatures from "../fragments/CardFeatures";
import Navbar from "../fragments/Navbar";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { IoIosBody } from "react-icons/io";
import { FaDiceFive } from "react-icons/fa6";

const Features = () => {
  const features = [
    {
      name: "Hitung Kalori",
      icon: (
        <MdOutlineLocalFireDepartment className="text-[100px] text-dark-green" />
      ),
      desc: "Hitung otomatis kalori harian dari makanan yang kamu konsumsi",
    },
    {
      name: "Catatan Kalori",
      icon: <FaNoteSticky className="text-[100px] text-dark-green" />,
      desc: "Buat log makanan harian dan lack asupan kalori tiap hari",
    },
    {
      name: "BMI Kalkulator",
      icon: <IoIosBody className="text-[100px] text-dark-green" />,
      desc: "Ketahui berat badan idealmu berdasarkan kalkulasi BMI",
    },
    {
      name: "Hitung Kalori",
      icon: <FaDiceFive className="text-[100px] text-dark-green" />,
      desc: "Dapatkan tantangan makanan sehat baru setiap hari",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <Navbar />
      <div className="w-[50%] h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold mb-6">Kenapa Pakai Ginta?</h1>
        <div className="flex gap-[30px] justify-center items-center mt-[50px]">
          {features.map((features) => {
            return (
              <CardFeatures
                name={features.name}
                icon={features.icon}
                desc={features.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
