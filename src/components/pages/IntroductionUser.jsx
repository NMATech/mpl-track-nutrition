import background from "../../assets/img/background.png";
import logo from "../../assets/img/logo.png";
import Button from "../elements/button/Button";

const IntroductionUser = () => {
  const Forms = [
    {
      title: "Age",
      type: "number",
      width: "300px",
    },
    {
      title: "Weight",
      type: "number",
      placeholder: ". . . kg",
      width: "300px",
    },
    {
      title: "Height",
      type: "number",
      placeholder: ". . . cm",
      width: "300px",
    },
  ];
  return (
    <div>
      <div className="w-full h-screen">
        <img src={background} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] bg-light-green flex flex-col justify-center items-center rounded-[20px] p-1">
        <div className="w-[95%] flex justify-start items-center">
          <img src={logo} alt="" className="w-[80px]" />
        </div>
        <h1 className="font-bold text-2xl">Tell Us About Yourself</h1>
        <p className="mb-[30px]">
          Provide your personal details and select your goal.
        </p>
        <div className="bg-white w-[90%] flex flex-col justify-center gap-2 rounded-[20px] p-3 mb-3">
          {Forms.map((form, index) => {
            return (
              <div
                className="text-start flex flex-col justify-center"
                key={index}
              >
                <h1 className="mb-2 font-bold">{form.title}</h1>
                <input
                  style={{
                    width: form.title,
                  }}
                  placeholder={form.placeholder}
                  type={form.type}
                  className="rounded-[5px] border border-[#333] p-1 placeholder:text-gray-400"
                />
              </div>
            );
          })}
          <div className="text-start flex flex-col justify-center">
            <h1 className="mb-2 font-bold">Goals</h1>
            <select
              style={{
                width: "375px",
              }}
              className="rounded-[5px] border border-[#333] p-1 placeholder:text-gray-400"
            >
              <option value="" selected disabled>
                Select
              </option>
              <option value="Bulking">Bulking</option>
              <option value="Cutting">Cutting</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-center mt-3">
            <Button
              widht={"150px"}
              bg={"bg-dark-green"}
              colorText={"text-white"}
              hover="hover:bg-dark-green/80"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionUser;
