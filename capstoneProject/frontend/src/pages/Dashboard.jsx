import DashboardMainContent from "../components/DashboardMainContent"
import DashboardNav from "../components/DashboardNav"
import DashboardSidebarPanel from "../components/DashboardSidebarPanel"
import DashoardWidgetPanel from "../components/DashoardWidgetPanel"

const Dashboard = () => {
  return (
    <div>
        <DashboardNav />
        {/* main content */}
        <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_320px]">
          <DashboardSidebarPanel />
          <DashboardMainContent />
          <DashoardWidgetPanel />
        </div>
    </div>
  )
}

export default Dashboard