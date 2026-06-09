import { Link } from "react-router-dom"
const navLogo = "./dashboardLogo.png"
const navDownArrow = "./dashboard-downArrow.png"

const DashboardNav = () => {
  return (
    <nav className="flex items-center justify-between p-6 sticky top-0 bg-white z-50 shadow-xs">
        <Link to="/"><img className="h-10" src={navLogo} alt="Dashboard Logo" /></Link>
        <div className="flex items-center gap-2">
            <span className="w-[35px] h-[35px] rounded-full bg-[#6A7E8A]"></span>
            <span className="text-[#013C61] font-sf font-medium">Hi, Joshua</span>   
            <img className="w-2 h-2 cursor-pointer font-sf font-medium" src={navDownArrow} alt="Down Arrow" />
        </div>
    </nav>
  )
}

export default DashboardNav