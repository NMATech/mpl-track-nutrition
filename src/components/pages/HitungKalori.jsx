import { useState } from "react";
import Button from "../elements/button/Button";
import Form from "../elements/form/Form";
import FormDropdown from "../elements/form/FormDropdown";
import CardProfile from "../fragments/CardProfile";
import NavbarUser from "../fragments/NavbarUser";

const HitungKalori = () => {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("");
  const [calories, setCalories] = useState(null);
  const JenisKelamin = ["Pria", "Wanita"];
  const TujuanKalori = ["Cutting", "Bulking"];
  const [isProfileClicked, setisProfileClicked] = useState(false);

  const hitungKalori = ({ gender, weight, height, age, goal }) => {
    let bmr = 0;

    if (gender === "Pria") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "Wanita") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      return 0;
    }

    let tdee = bmr * 1.2; // Aktivitas ringan default

    if (goal === "Cutting") {
      tdee -= 500;
    } else if (goal === "Bulking") {
      tdee += 500;
    }

    setCalories(Math.round(tdee));
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
          <h1 className="text-3xl font-bold mb-[10px]">Hitung Kalori</h1>
          <p>
            Masukkan detail Anda untuk menghitung kebutuhan kalori harian Anda
          </p>
        </div>

        <div className="w-[40%] bg-white mt-[30px] p-5 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-[15px]">
            <FormDropdown
              title={"Jenis Kelamin"}
              width={"230px"}
              options={JenisKelamin}
              handleChange={setGender}
            />
            <Form
              title={"Berat Badan"}
              type={"number"}
              placeholder="Kg"
              width={"230px"}
              handleChange={setWeight}
            />
          </div>
          <div className="flex justify-between items-center mb-[15px]">
            <Form
              title={"Usia"}
              type={"number"}
              width={"230px"}
              handleChange={setAge}
            />
            <Form
              title={"Tinggi Badan"}
              type={"number"}
              placeholder=". . . cm"
              width={"230px"}
              handleChange={setHeight}
            />
          </div>
          <div className="flex justify-center items-center mb-[20px]">
            <FormDropdown
              title={"Tujuan Kalori"}
              width={"31.5em"}
              options={TujuanKalori}
              handleChange={setGoal}
            />
          </div>
          <div className="text-center">
            <Button
              width="200px"
              bg="bg-dark-green"
              colorText="text-white"
              hover={"hover:bg-dark-green/80"}
              func={() => hitungKalori({ gender, weight, height, age, goal })}
            >
              Hitung
            </Button>
          </div>
        </div>

        <div className="mt-5">
          {calories && (
            <div className="mt-5">
              <h1 className="text-xl font-semibold">
                Kebutuhan Kalori Harian Anda
              </h1>
              <p className="text-[18px]">{calories} Kalori</p>
            </div>
          )}
        </div>
      </div>

      {isProfileClicked && <CardProfile />}
    </div>
  );
};

export default HitungKalori;
