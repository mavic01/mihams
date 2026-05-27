import { useState } from "react";
import { Link } from "react-router-dom"

import RegisterStep1 from "../components/RegisterStep1";
import RegisterStep2 from "../components/RegisterStep2";
import RegisterStep3 from "../components/RegisterStep3";

const sigupImage = "./SignupImageCropped.png";
const sigupImage2 = "./SignupImage2(1).png";

const Register = () => {
  const [step, setStep] = useState(1);

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
          <h2 className="text-[24px] font-sf text-white font-medium text-center">
            No Hazzles
          </h2>
          <p className="text-[24px] font-sf text-white tracking-[-0.58px] text-center leading-[36px] signin-img-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <p className="flex gap-[24px] items-center justify-center">
            <span
              className="boost-btn active cursor-pointer relative"
              aria-label="Boost active"
            ></span>
            <span
              className="boost-btn cursor-pointer relative"
              aria-label="Boost inactive"
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
      <div className="flex flex-1 px-6 py-4">
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

          <RegisterStep3 step={step} formData={formData} />
        </div>
      </div>
    </section>
  );
};

export default Register;
