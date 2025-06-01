import { useState } from "react";
import Button from "../elements/button/Button";
import Form from "../elements/form/Form";
import CardProfile from "../fragments/CardProfile";
import NavbarUser from "../fragments/NavbarUser";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [isProfileClicked, setisProfileClicked] = useState(false);

  const hitungBMI = (weight, height) => {
    if (!weight || !height) return { bmi: 0, category: "Data tidak valid" };

    // Ubah tinggi dari cm ke meter
    const heightInMeter = height / 100;

    // Rumus BMI
    const bmi = weight / (heightInMeter * heightInMeter);
    const roundedBMI = parseFloat(bmi.toFixed(1));

    // Kategori BMI berdasarkan WHO
    let category = "";
    if (bmi < 18.5) {
      category = "Kurus";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Kelebihan berat badan";
    } else {
      category = "Obesitas";
    }

    setResult(category);
    setBmi(roundedBMI);
  };

  const clickProfile = () => {
    setisProfileClicked((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen bg-background flex flex-col items-center">
      <NavbarUser
        setisProfileClicked={setisProfileClicked}
        clickProfile={clickProfile}
      />

      <div className="flex-1 flex flex-col justify-center items-center text-center w-full">
        <div className="mt-[70px]">
          <h1 className="text-3xl font-bold mb-[10px]">BMI Kalculator</h1>
          <p>Masukan berat dan tinggi badan Anda untuk menghitung BMI Anda</p>
        </div>

        <div className="w-[40%] bg-white mt-[30px] p-5 rounded-lg shadow-md">
          <div className="w-[95%] mx-auto flex flex-col gap-2 justify-between items-center mb-[15px]">
            <Form
              title={"Berat Badan"}
              type={"number"}
              placeholder="Kg"
              width={"30em"}
              handleChange={setWeight}
            />
            <Form
              title={"Tinggi Badan"}
              type={"number"}
              placeholder="Cm"
              width={"30em"}
              handleChange={setHeight}
            />
          </div>
          <div className="text-center">
            <Button
              widht="200px"
              bg="bg-dark-green"
              colorText="text-white"
              hover={"hover:bg-dark-green/80"}
              func={() => hitungBMI(weight, height)}
            >
              Hitung
            </Button>
          </div>
        </div>

        <div className="mt-5">
          {result && bmi && (
            <>
              <h1 className="text-xl font-semibold">BMI Anda: {bmi}</h1>
              <p className="text-xl font-bold">({result})</p>
            </>
          )}
        </div>
      </div>

      {isProfileClicked && <CardProfile />}
    </div>
  );
};

export default BmiCalculator;
