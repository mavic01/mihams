import { useState } from "react"
import DashboardMainContent from "../components/DashboardMainContent"
import DashboardNav from "../components/DashboardNav"
import DashboardSidebarPanel from "../components/DashboardSidebarPanel"
import DashoardWidgetPanel from "../components/DashoardWidgetPanel"

const Dashboard = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <div>
        <DashboardNav />
        {/* main content */}
        <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_320px] gap-4 p-2 lg:p-4">
          <DashboardSidebarPanel isActive={isActive} setIsActive={setIsActive} />
          <DashboardMainContent isActive={isActive} setIsActive={setIsActive} />
          <DashoardWidgetPanel isActive={isActive} setIsActive={setIsActive} />
        </div>
    </div>
  )
}

export default Dashboard