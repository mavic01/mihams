import { Link } from "react-router-dom";

const RegisterStep3 = ({ step }) => {
  if (step !== 3) return null;

  return (
    <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-sm">

    
    <div className="space-y-4 flex flex-col items-center justify-center">
      <h2 className="font-sf font-medium text-[34px] text-center text-[#013C61] md:whitespace-nowrap">
        Great to have you onboard
      </h2>
      <p className="font-sf text-[18px] text-center text-[#6A7E8A]">
        We just mailed you a confirmation link to josh.bakery@gmail.com.
        Complete registration by following the link.
      </p>
      <Link to="/dashboard" className="cursor-pointer bg-[#2BDA53] hover:bg-green-600 text-white text-[18px] font-medium py-2 px-8 rounded-sm transition-colors mt-2">
        Dashboard -&gt;
      </Link>
    </div>
    </div>
  );
};

export default RegisterStep3;