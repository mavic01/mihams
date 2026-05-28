const icon1 = "./LeftDashIcon1.png";
const icon2 = "./LeftDashIcon2.png";
const icon3 = "./LeftDashIcon3.png";

const DashboardSidebarPanel = () => {
  return (
    <section
      className="
      bg-white
      px-2 py-4 lg:py-16
      flex flex-row lg:flex-col
      items-center justify-around lg:justify-start
      gap-6 lg:gap-12
    "
    >
      <div className="cursor-pointer">
        <img className="w-[22px] h-[19px]" src={icon1} alt="Dashboard Icon" />
      </div>

      <div className="cursor-pointer">
        <img className="w-[22px] h-[19px]" src={icon2} alt="User Icon" />
      </div>

      <div className="cursor-pointer">
        <img className="w-[22px] h-[16px]" src={icon3} alt="Card Icon" />
      </div>
    </section>
  );
};

export default DashboardSidebarPanel;
