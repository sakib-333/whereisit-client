import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Goback = () => {
  const navigate = useNavigate();
  const handleGoback = () => navigate(-1);

  return (
    <button
      className="px-4 w-fit flex items-center gap-1 py-2 bg-gray-500 text-white font-bold hover:bg-gray-400 rounded-lg"
      onClick={handleGoback}
    >
      <IoMdArrowRoundBack /> <span>Back</span>
    </button>
  );
};

export default Goback;
