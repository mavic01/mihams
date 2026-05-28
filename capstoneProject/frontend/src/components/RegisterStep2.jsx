const RegisterStep2 = ({ step, setStep, formData, handleChange }) => {
  if (step !== 2) return null;

  return (
    <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-sm">
      <div className="flex flex-col space-y-2">
        {/* <!-- Business Name --> */}
        <div>
          <label className="block text-sm text-[#6A7E8A] font-sf font-normal mb-1">
            Business Name
          </label>
          <div className="relative">
            <input
              value={formData.businessName}
              onChange={handleChange}
              name="businessName"
              type="text"
              placeholder="Josh Bakery Ventures"
              className="w-full px-2 py-3 border-b border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800"
            />

            <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
              <img
                src="./SignupOffice.png"
                className="w-4 h-4 object-contain"
                alt="Insights Icon"
              />
            </div>
          </div>
        </div>
        {/* <!-- Business Address --> */}
        <div>
          <label className="block text-sm text-[#6A7E8A] font-sf font-normal mb-1">
            Business Address
          </label>
          <div className="relative">
            <input
              value={formData.businessAddress}
              onChange={handleChange}
              name="businessAddress"
              type="text"
              placeholder="62, Bode Thomas, Surulere, Lagos"
              className="w-full px-2 py-3 border-b border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
              <img
                src="./SignupMapPin.png"
                className="w-4 h-4 object-contain"
                alt="Map Icon"
              />
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm text-[#6A7E8A] font-sf font-normal mb-1">
            Phone Number
          </label>
          <div className="relative">
            <input
              value={formData.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              type="text"
              placeholder="+2348012345678"
              className="w-full px-2 py-3 border-b border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
              <img
                src="./SignupPhone.png"
                className="w-4 h-4 object-contain"
                alt="Phone Icon"
              />
            </div>
          </div>
        </div>
        {/* <!-- Continue Button --> */}
        <div className="flex">
          <button
            onClick={() => setStep(3)}
            className="cursor-pointer ml-auto bg-[#2BDA53] hover:bg-green-600 text-white text-[18px] font-medium py-2 px-8 rounded-sm transition-colors mt-2"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterStep2;
