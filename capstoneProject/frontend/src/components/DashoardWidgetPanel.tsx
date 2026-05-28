import DashBoardWidgetKeypad from "./DashBoardWidgetKeypad";

const DashoardWidgetPanel = () => {
  return (
    <section className="bg-white w-full overflow-hidden">
      {/* Blue top */}
      <div className="bg-[#013C61] text-white p-6 rounded">
        <p className="text-sm mb-8 text-[#FFFFFF] font-sf">GETCHANGE WIDGET</p>
        <div className="w-full flex items-center gap-6 mb-4">
          <p className="text-white/50 font-sf">Amount</p>
          <sub className="w-[80%] h-[0.5px] bg-white/41"></sub>
        </div>
        <div className="flex gap-8 justify-end mb-8">
          <div className="flex items-center gap-2">
            <p className="cursor-pointer w-2 h-2 rounded-full bg-[#2BDA53]"></p>
            <span className="text-white/50 font-sf">Airtime</span>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer w-2 h-2 rounded-full bg-transparent border-1 border-white/50"></p>
            <span className="text-white/50 font-sf">IOU Voucher</span>
          </div>
        </div>
        <input
          type="text"
          placeholder="08012345678"
          className="bg-transparent text-center placeholder:text-white w-full text-4xl outline-none font-sf"
        />
      </div>

      {/* Keypad */}
      <div>
        <DashBoardWidgetKeypad />

        <button className="w-full border border-[#013C61]/70 rounded py-3 mt-8 text-[#013C61] font-sf cursor-pointer hover:bg-[#013C61]/10">
          Query
        </button>

        <button className="w-full bg-[#2BDA53] text-white rounded py-3 mt-4 font-sf cursor-pointer hover:bg-[#09bc33]">
          Generate
        </button>
      </div>
    </section>
  );
};

export default DashoardWidgetPanel;
