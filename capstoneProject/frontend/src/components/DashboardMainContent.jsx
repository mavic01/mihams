
import { useState } from "react";

const centerDashArrowLeft = "./centerDashArrowLeft.png";
const centerDashArrowRight = "./centerDashArrowRight.png";

const DashboardMainContent = () => {
  const [topUpModal, setTopUpModal] = useState(false);
  
  return (
    <section className="bg-[#F6F8F8] px-4 lg:p-8">
      {/* MODAL */}
      {topUpModal && (
        <div className="fixed inset-0 bg-[#1B2420]/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Top Up Wallet</h2>

            <p className="text-pink-500">Dummy Modal Content</p>

            <button
              onClick={() => setTopUpModal(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* TOP CARD 1 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 md:px-6 py-4 rounded-sm bg-white">
        <p className="text-[18px] text-[#013C61] font-sf font-bold">
          Store Wallet
        </p>

        <p className="text-[28px] md:text-[34px] text-[#013C61] font-sf font-medium">
          <sup className="text-[16px] md:text-[20px]">₦ </sup>2,500
        </p>

        <button
          onClick={() => setTopUpModal(true)}
          className="w-full md:w-auto text-white text-[16px] md:text-[18px]
          bg-[#2BDA53] hover:bg-[#09bc33]
          font-sf font-bold rounded-sm px-6 md:px-10 py-3 cursor-pointer"
        >
          Top up wallet
        </button>
      </div>

      {/* TOP CARD 2 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 md:px-6 py-4 rounded-sm bg-white mt-4 md:mt-6">
        <p className="text-[18px] text-[#013C61] font-sf font-bold">
          Total Disbursed
        </p>

        <p className="text-[28px] md:text-[34px] text-[#013C61] font-sf font-medium">
          <sup className="text-[16px] md:text-[20px]">₦ </sup>12,000
        </p>

        <a
          href="#"
          className="w-full md:w-auto text-center
          text-[#013C61] hover:text-white hover:bg-[#013C61]
          border border-[#013C61]/20
          text-[16px] md:text-[18px]
          font-sf font-bold rounded-sm px-6 md:px-10 py-3 cursor-pointer"
        >
          View History
        </a>
      </div>

      {/* TABLE SECTION */}
      <div className="mt-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="font-bold font-sf text-lg text-[#013C61]">
            Recent Activities
          </h2>

          <div className="flex items-center justify-between md:justify-end gap-4">
            <span className="flex items-center gap-2">
              <span className="font-normal font-sf px-2 rounded-md border border-[#013c61]/10">
                1
              </span>
              <span className="font-normal font-sf text-[#013C61]">
                of 8
              </span>
            </span>

            <span className="flex items-center gap-2">
              <img
                className="cursor-pointer w-[18px] h-[18px]"
                src={centerDashArrowLeft}
                alt="Left Arrow"
              />
              <img
                className="cursor-pointer w-[18px] h-[18px]"
                src={centerDashArrowRight}
                alt="Right Arrow"
              />
            </span>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-[700px] w-full text-left border-separate border-spacing-y-3">
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
                <td className="px-2 py-4">1</td>
                <td className="px-2 py-4">Wallet top up</td>
                <td className="px-2 py-4">06 Aug, 2019</td>
                <td className="px-2 py-4">12:24PM</td>
                <td className="px-2 py-4">Admin</td>
                <td className="px-2 py-4">NGN2000</td>
              </tr>

              <tr className="bg-white">
                <td className="px-2 py-4">2</td>
                <td className="px-2 py-4">Top for 081359491**</td>
                <td className="px-2 py-4">06 Aug, 2019</td>
                <td className="px-2 py-4">10:44AM</td>
                <td className="px-2 py-4">Jane</td>
                <td className="px-2 py-4">NGN55.00</td>
              </tr>

              <tr className="bg-white">
                <td className="px-2 py-4">3</td>
                <td className="px-2 py-4">Top for 080234578**</td>
                <td className="px-2 py-4">06 Aug, 2019</td>
                <td className="px-2 py-4">09:14AM</td>
                <td className="px-2 py-4">Hannah</td>
                <td className="px-2 py-4">NGN400.00</td>
              </tr>

              <tr className="bg-white">
                <td className="px-2 py-4">4</td>
                <td className="px-2 py-4">IOU for 081478491**</td>
                <td className="px-2 py-4">05 Aug, 2019</td>
                <td className="px-2 py-4">01:30PM</td>
                <td className="px-2 py-4">John</td>
                <td className="px-2 py-4">BRM***K</td>
              </tr>

              <tr className="bg-white">
                <td className="px-2 py-4">5</td>
                <td className="px-2 py-4">IOU for 081359491**</td>
                <td className="px-2 py-4">05 Aug, 2019</td>
                <td className="px-2 py-4">11:24AM</td>
                <td className="px-2 py-4">Admin</td>
                <td className="px-2 py-4">SAM***G</td>
              </tr>

              <tr className="bg-white">
                <td className="px-2 py-4">6</td>
                <td className="px-2 py-4">Top for 081359491**</td>
                <td className="px-2 py-4">04 Aug, 2019</td>
                <td className="px-2 py-4">12:45PM</td>
                <td className="px-2 py-4">Jane</td>
                <td className="px-2 py-4">NGN105.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DashboardMainContent;
