const RegisterStep1 = ({ step, setStep, formData, handleChange }) => {
  if (step !== 1) return null;

  return (
    // <div className="space-y-4 mt-6">
    <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-sm">

      <form action="">
        <div className="space-y-4">
                  {/* <!-- First Name & Last Name --> */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-[#6A7E8A] font-sf font-normal mb-1">
                        First Name
                      </label>
                      <div className="relative">
                        <input
                        onChange={handleChange}
                        value={formData.firstName}
                          type="text"
                          placeholder="Joshua"
                          className="w-full px-2 py-3 border-b border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <img
                            src="./user.png"
                            className="w-4 h-4 object-contain"
                            alt="User Image"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-[#6A7E8A] font-sf font-normal mb-1">
                        Last Name
                      </label>
                      <div className="relative">
                        <input
                        onChange={handleChange}
                        value={formData.lastName}
                          type="text"
                          placeholder="Bakare"
                          className="w-full px-2 py-3 border-b border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <img
                            src="./user.png"
                            className="w-4 h-4 object-contain"
                            alt="User Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Email --> */}
                  <div>
                    <label className="block text-sm text-[#6A7E8A] font-sf font-normal mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <input
                      onChange={handleChange}
                      value={formData.email}
                        type="email"
                        placeholder="josh.bakery@gmail.com"
                        className="w-full px-2 py-3 border-b border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <img
                          src="./@.png"
                          className="w-4 h-4 object-contain"
                          alt="Email Icon"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- Password --> */}
                  <div>
                    <label className="block text-sm text-[#6A7E8A] font-sf font-normal mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                      onChange={handleChange}
                      value={formData.password}
                        type="password"
                        placeholder="*************"
                        className="w-full px-2 py-3 border-b border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-gray-800"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
                        <img
                          src="./eye.png"
                          className="w-4 h-4 object-contain"
                          alt="Eye Image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- Continue Button --> */}
                  <div className="flex">
                    <button
                      onClick={() => setStep(2)}
                      className="cursor-pointer ml-auto bg-[#2BDA53] hover:bg-green-600 text-white text-[18px] font-medium py-2 px-8 rounded-sm transition-colors mt-2"
                    >
                      Continue
                    </button>
                  </div>
                </div>
      </form>

    </div>
  );
};

export default RegisterStep1;