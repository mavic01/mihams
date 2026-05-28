export default function DashBoardWidgetKeypad() {
  const rows = [
    ["1", "2", "3", "*"],
    ["4", "5", "6", "#"],
    ["7", "8", "9", "0"],
  ];

  return (
      <div className="w-full overflow-hidden bg-white">
        {/* Control row */}
        <div className="grid grid-cols-4 bg-[#2BDA5333]/20 font-sf font-medium">
          {["C", "<", ">"].map((label) => (
            <button
              key={label}
              className="py-3.5 text-[#013C61]  font-medium text-[26px] font-sf border-r border-green-200 hover:bg-green-200 active:scale-95 transition-all"
            >
              {label}
            </button>
          ))}
          <button className="py-3.5 flex items-center justify-center hover:bg-green-200 active:scale-95 transition-all">
            <svg
              width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="#14532d"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
              <line x1="18" y1="9" x2="12" y2="15" />
              <line x1="12" y1="9" x2="18" y2="15" />
            </svg>
          </button>
        </div>

        {/* Number grid */}
        <div className="grid grid-cols-4">
          {rows.map((row, ri) =>
            row.map((key, ci) => {
              const isSpecial = key === "*" || key === "#" || key === "0";
              return (
                <button
                  key={`${ri}-${ci}`}
                  className={`py-5 text-[32px] text-[#013C61] font-medium font-sf active:scale-90 transition-all
                    ${isSpecial ? "bg-[#2BDA5333]/20 hover:bg-green-100" : "bg-white hover:bg-gray-50"}
                    ${ci < 3 ? "border-r border-gray-100" : ""}
                    ${ri < 2 ? "border-b border-gray-100" : ""}
                  `}
                >
                  {key}
                </button>
              );
            })
          )}
        </div>

      </div>
  );
}