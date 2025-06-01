import { MdCancel } from "react-icons/md";
import Form from "../elements/form/Form";
import Button from "../elements/button/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCalori, updateCalori } from "../../redux/slices/caloriLogSlice";

const CardEditCaloriLog = ({ func, data = null }) => {
  const [date, setDate] = useState("");
  const [food, setFood] = useState("");
  const [calori, setCalori] = useState("");

  const dispatch = useDispatch();
  const caloriList = useSelector((state) => state.cart); // Pastikan 'cart' adalah nama reducer-nya

  useEffect(() => {
    setDate(data.date);
    setFood(data.food);
    setCalori(data.calori);
  }, []);

  const Forms = [
    {
      title: "Tanggal",
      type: "date",
      width: "300px",
      handle: setDate,
      value: date,
    },
    {
      title: "Makanan",
      type: "text",
      width: "300px",
      handle: setFood,
      value: food,
    },
    {
      title: "Kalori",
      type: "number",
      width: "300px",
      handle: setCalori,
      value: calori,
    },
  ];

  const handleSubmit = () => {
    if (!date || !food || !calori) {
      alert("Mohon lengkapi semua data!");
      return;
    }

    // Gunakan ID dari data lama (yang sedang di-edit)
    dispatch(updateCalori({ id: data.id, date, food, calori }));

    // Reset form (optional)
    setDate("");
    setFood("");
    setCalori("");

    // Tutup modal
    func();
  };

  return (
    <div className="fixed z-[55] w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
      <div className="w-[400px] bg-white rounded-[30px] p-3">
        <div className="flex justify-end">
          <button onClick={func}>
            <MdCancel className="text-red-500 text-[40px]" />
          </button>
        </div>
        <h1 className="font-bold text-xl text-center">Edit KALORI LOG</h1>
        <div className="w-[90%] flex flex-col items-center gap-2 mx-auto mt-[20px] mb-[20px]">
          {Forms.map((form, index) => (
            <Form
              key={index}
              title={form.title}
              type={form.type}
              width={form.width}
              handleChange={form.handle}
              value={form.value}
            />
          ))}
        </div>
        <div className="flex justify-center items-center mb-[20px]">
          <Button
            width={"200px"}
            bg={"bg-dark-green"}
            colorText={"text-white"}
            hover={"hover:bg-dark-green/80"}
            func={handleSubmit}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardEditCaloriLog;
