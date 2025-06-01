import { useEffect, useState } from "react";
import Button from "../elements/button/Button";
import CardProfile from "../fragments/CardProfile";
import NavbarUser from "../fragments/NavbarUser";
import CardAddCaloriLog from "../fragments/CardAddCaloriLog";
import { useSelector } from "react-redux";
import CardEditCaloriLog from "../fragments/CardEditCaloriLog";

const CatatanKalori = () => {
  const [isProfileClicked, setisProfileClicked] = useState(false);
  const [isAddedClicked, setIsAddedClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const caloriLogs = useSelector((state) => state.cart);
  const [selectedLog, setSelectedLog] = useState(null);

  console.log(caloriLogs);
  const handleAddKalori = () => {
    setIsAddedClicked((prev) => !prev);
  };
  const handleEditKalori = () => {
    setIsEditClicked((prev) => !prev);
  };

  const clickProfile = () => {
    setisProfileClicked((prev) => !prev);
  };

  useEffect(() => {
    console.log("log added");
  }, [caloriLogs]);

  return (
    <div className="w-full min-h-screen bg-background flex flex-col items-center">
      <NavbarUser
        setisProfileClicked={setisProfileClicked}
        clickProfile={clickProfile}
      />

      <div className="flex-1 flex flex-col justify-center items-center text-center w-full">
        <div className="mt-[-8em]">
          <h1 className="text-3xl font-bold mb-[10px]">Kalori Log</h1>
          <Button
            widht="230px"
            bg="bg-dark-green"
            colorText="text-white"
            hover={"hover:bg-dark-green/80"}
            func={handleAddKalori}
          >
            Tambah Catatan
          </Button>
        </div>

        <div className="w-[40%] bg-white mt-[30px] p-5 rounded-lg shadow-md">
          <div className="w-fit border rounded-md overflow-hidden mx-auto mt-5">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-white border-b">
                <tr>
                  <th className="px-4 py-2 font-medium">Tanggal</th>
                  <th className="px-4 py-2 font-medium">Makanan</th>
                  <th className="px-4 py-2 font-medium">Kalori</th>
                  <th className="px-4 py-2 font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {caloriLogs.map((data, index) => (
                  <tr key={index} className="bg-white border-t">
                    <td className="px-4 py-2">{data.date}</td>
                    <td className="px-4 py-2">{data.food}</td>
                    <td className="px-4 py-2">{data.calori}</td>
                    <td className="px-4 py-2">
                      <Button
                        bg="bg-dark-green"
                        colorText="text-white"
                        hover={"hover:bg-dark-green/80"}
                        func={() => {
                          setSelectedLog(data);
                          handleEditKalori();
                        }}
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {caloriLogs && (
              <div className="w-full mt-3 flex justify-center">
                <h1>NO DATA</h1>
              </div>
            )}
          </div>
        </div>
      </div>

      {isAddedClicked && <CardAddCaloriLog func={handleAddKalori} />}
      {isEditClicked && (
        <CardEditCaloriLog func={handleEditKalori} data={selectedLog} />
      )}
      {isProfileClicked && <CardProfile />}
    </div>
  );
};

export default CatatanKalori;
