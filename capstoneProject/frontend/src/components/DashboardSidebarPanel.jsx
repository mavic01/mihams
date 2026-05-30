// import { Link } from "react-router-dom";

const icon1Normal = "./LeftDashIcon1Normal.png";
const icon1Active = "./LeftDashIcon1Active.png";

const icon2Normal = "./LeftDashIcon2Normal.png";
const icon2Active = "./LeftDashIcon2Active.png";

const icon3Normal = "./LeftDashIcon3Normal.png";
const icon3Active = "./LeftDashIcon3Active.png";

const DashboardSidebarPanel = ({isActive, setIsActive}) => {
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
      <div className={`cursor-pointer ${isActive === 1 && "md:border-l-2 md:border-[#2BDA53] md:pl-4"}`} onClick={() => setIsActive(1)}>
        <img className="w-[22px] h-[19px]" src={`${isActive === 1 ? icon1Active : icon1Normal}`} alt="Dashboard Icon" />
      </div>

      {/* <Link to="/employees"> */}
        <div className={`cursor-pointer ${isActive === 2 && "md:border-l-2 md:border-[#2BDA53] md:pl-4"}`} onClick={() => setIsActive(2)}>
          <img className="w-[22px] h-[19px]" src={`${isActive === 2 ? icon2Active : icon2Normal}`} alt="User Icon" />
        </div>
      {/* </Link> */}

      <div className={`cursor-pointer ${isActive === 3 && "md:border-l-2 md:border-[#2BDA53] md:pl-4"}`} onClick={() => setIsActive(3)}>
        <img className="w-[22px] h-[16px]" src={`${isActive === 3 ? icon3Active : icon3Normal}`} alt="Card Icon" />
      </div>
    </section>
  );
};

export default DashboardSidebarPanel;
