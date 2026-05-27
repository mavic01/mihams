const DashoardWidgetPanel = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Blue top */}
      <div className="bg-blue-950 text-white p-6">
        <p className="text-sm mb-6">GETCHANGE WIDGET</p>

        <input
          type="text"
          placeholder="08012345678"
          className="bg-transparent border-b border-gray-500 w-full text-4xl outline-none"
        />
      </div>

      {/* Keypad */}
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 text-2xl">
          <button>1</button>
          <button>2</button>
          <button>3</button>

          <button>4</button>
          <button>5</button>
          <button>6</button>

          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>

        <button className="w-full border rounded py-3 mt-8">Query</button>

        <button className="w-full bg-green-500 text-white rounded py-3 mt-4">
          Generate
        </button>
      </div>
    </section>
  );
};

export default DashoardWidgetPanel;
