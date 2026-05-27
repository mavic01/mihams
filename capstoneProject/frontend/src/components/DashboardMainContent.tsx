const centerDashArrowLeft = './centerDashArrowLeft.png'
const centerDashArrowRight = './centerDashArrowRight.png'

const DashboardMainContent = () => {
  return (
    <section className="bg-[#F6F8F8] rounded-xl py-6 px-8 shadow-sm">
      {/* Top cards */}
      <div className="flex items-center justify-between gap-6 px-6 py-4 rounded-sm bg-[#fff]">
        <p className="text-[18px] text-[#013C61] font-sf font-bold">Store Wallet</p>
        <p className="text-[34px] text-[#013C61] font-sf font-medium"><sup className="text-[20px]">₦ </sup>2,500</p>
        <a href="#" className="text-[#fff] text-[18px] bg-[#2BDA53] hover:bg-[#09bc33] font-sf font-bold rounded-sm px-10 py-3 cursor-pointer">Top up wallet</a>
      </div>

      <div className="flex items-center justify-between gap-6 px-6 py-4 rounded-sm bg-[#fff] mt-6">
        <p className="text-[18px] text-[#013C61] font-sf font-bold">Total Disbursed</p>
        <p className="text-[34px] text-[#013C61] font-sf font-medium"><sup className="text-[20px]">₦ </sup>12,000</p>
        <a href="#" className="text-[#013C61] hover:text-[#fff] hover:bg-[#013C61] border border-1px-[#013C61] text-[18px] bg-transparent font-sf font-bold rounded-sm px-10 py-3 cursor-pointer">View History</a>
      </div>

      {/* Table */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
            <h2 className="font-bold font-sf text-[18px] mb-4 ">Recent Activities</h2>
            <div className="flex">
                <span className="flex items-center justify-center gap-2">
                    <span className="font-normal font-sf px-2 rounded-md border border-1px-[#013c61] border-[#013c61]/10">1</span>
                    <span className="font-normal font-sf text-[#013C61]">of 8</span>
                </span>
                <span className="flex items-center justify-between gap-1 ml-2">
                    <img src={centerDashArrowLeft} alt="Left Arrow cursor-pointer h-[17px] w-[17px]" />
                    <img src={centerDashArrowRight} alt="Right Arrow cursor-pointer h-[17px] w-[17px]" />
                </span>
            </div>
        </div>

        <table className="w-full text-left">
          <thead className="text-[#013C61] text-sm font-sf">
            <tr>
              <th>#</th>
              <th>DESCRIPTION</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>STAFF</th>
              <th>AMOUNT</th>
            </tr>
          </thead>

          <tbody className="font-sf text-[#6A7E8A] text-base">
            <tr className="bg-white">
              <td className="py-4">1</td>
              <td>Wallet top up</td>
              <td>06 Aug, 2019</td>
              <td>12:24PM</td>
              <td>Admin</td>
              <td>NGN2000</td>
            </tr>
            <tr className="bg-white">
              <td className="py-4">2</td>
              <td>Wallet top up</td>
              <td>06 Aug, 2019</td>
              <td>12:24PM</td>
              <td>Admin</td>
              <td>NGN2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashboardMainContent;
