const icon1 = "./LeftDashIcon1.png"
const icon2 = "./LeftDashIcon2.png"
const icon3 = "./LeftDashIcon3.png"

const DashboardSidebarPanel = () => {
  return (
    <section className="bg-white h-full rounded-xl shadow-sm px-2 py-16 flex flex-col items-center gap-12">

      <div className="cursor-pointer"><img className="w-[22px] h-[19px]" src={icon1} alt="Dashboard Icon" /></div>
      <div className="cursor-pointer"><img className="w-[22px] h-[19px]" src={icon2} alt="User Icon" /></div>
      <div className="cursor-pointer"><img className="w-[22px] h-[16px]" src={icon3} alt="Card Icon" /></div>
    </section>
  );
};

export default DashboardSidebarPanel;
