import vegetables from "../../assets/icon/vegetables.png";
import arrowDown from "../../assets/icon/arrow-down.png";

const Welcome = () => {
  return (
    <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-center items-center gap-2">
        <img src={vegetables} alt="vegetables icon" />
        <h1 className="text-2xl text-white font-bold">Welcome to Ginta!</h1>
      </div>
      <div className="text-center text-white">
        <p className="font-semibold text-[24px]">
          Teman harianmu untuk melacak asupan gizi dengan mudah.
        </p>
        <p className="w-[80%] mx-auto text-[16px]">
          Buat catatan makanan harianmu, pantau kebutuhan nutrisi, dan bangun
          kebiasaan makan sehat secara konsisten—tanpa ribet, tanpa stres.
        </p>
      </div>
      <div className="flex justify-center mt-3">
        <img src={arrowDown} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
