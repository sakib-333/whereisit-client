import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Goback = () => {
  const navigate = useNavigate();
  const handleGoback = () => navigate(-1);

  return (
    <button className="btn-primary" onClick={handleGoback}>
      <IoMdArrowRoundBack /> <span>Back</span>
    </button>
  );
};

export default Goback;
