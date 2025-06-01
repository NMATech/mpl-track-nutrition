import Button from "../elements/button/Button";

const CardFeatures = ({ icon, name, desc }) => {
  return (
    <div className="w-[220px] flex flex-col gap-3 justify-center items-center">
      {icon}
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-[14px] mb-[20px]">{desc}</p>
      <Button
        widht={"220px"}
        bg={"bg-dark-green"}
        colorText={"text-white"}
        colorBorder={"false"}
        hover={"hover:bg-dark-green/80"}
      >
        Coba Sekarang
      </Button>
    </div>
  );
};

export default CardFeatures;
