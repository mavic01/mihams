import { useState } from "react";
import { Link } from "react-router-dom";

import RegisterStep1 from "../components/RegisterStep1";
import RegisterStep2 from "../components/RegisterStep2";
import RegisterStep3 from "../components/RegisterStep3";

const sigupImage = "./SignupImageCropped.png";
const sigupImage2 = "./SignupImage2(1).png";

const Register = () => {
  const [step, setStep] = useState(1);
  const [activeSlide, setActiveSlide] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    businessName: "",
    businessAddress: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="flex gap-16 h-screen overflow-hidden">
      {/* LEFT IMAGE */}
      <div className="hidden relative md:flex flex-1 h-screen overflow-hidden">
        <div className="absolute flex flex-col gap-2 bottom-12 left-1/2 -translate-x-1/2">
          {activeSlide === 1 && (
            <>
              <h2 className="text-[24px] font-sf text-white font-medium text-center">
                No Hazzles
              </h2>
              <p className="text-[24px] font-sf text-white tracking-[-0.58px] text-center leading-[36px] signin-img-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </>
          )}

          {activeSlide === 2 && (
            <>
              <h2 className="text-[24px] font-sf text-white font-medium text-center">
                No Worries
              </h2>
              <p className="text-[24px] font-sf text-white tracking-[-0.58px] text-center leading-[36px] signin-img-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </>
          )}

          <p className="flex gap-[24px] items-center justify-center">
            <span
              onClick={() => setActiveSlide(1)}
              className={`boost-btn cursor-pointer relative ${
                activeSlide === 1 ? "active" : ""
              }`}
              aria-label="No Hazzles"
            ></span>

            <span
              onClick={() => setActiveSlide(2)}
              className={`boost-btn cursor-pointer relative ${
                activeSlide === 2 ? "active" : ""
              }`}
              aria-label="No Worries"
            ></span>
          </p>
        </div>
        <img
          className="h-full w-full object-cover object-left"
          src={step === 2 || step === 3 ? sigupImage2 : sigupImage}
          alt="signUp Image"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex-1 flex flex-col">
        <div className="flex px-6 py-4">
          <div className="space-y-4 w-full">
            <h2 className="text-[34px] text-[#013C61] font-sf font-medium">
              Create your free account
            </h2>
            <p className="text-[#013C61] text-[18px] font-sf font-normal">
              Already registered?{" "}
              <Link to="/login" className="text-[#2BDA53]">
                Sign in
              </Link>
            </p>
            {/* STEPS */}
            <form action="">
                <RegisterStep1
                  step={step}
                  setStep={setStep}
                  formData={formData}
                  handleChange={handleChange}
                />
                <RegisterStep2
                  step={step}
                  setStep={setStep}
                  formData={formData}
                  handleChange={handleChange}
                />
            </form>
            <RegisterStep3 step={step} formData={formData} />
          </div>
        </div>

        {/* Terms and Policy */}
        <div className="flex items-center justify-betweeen gap-20 mt-auto mb-10">
          <p className="text-xs text-[#6A7E8A]">
            By siging up, you agree to our{" "}
            <a href="#" className="text-[#2BDA53]">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#2BDA53]">
              Privacy Policy
            </a>
          </p>
          <p className="text-xs text-[#6A7E8A] font-sf">
            © {new Date().getFullYear()} Tinylabs. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
