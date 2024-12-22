import { useNavigate } from "react-router-dom";

const useGoback = () => {
  const navigate = useNavigate();
  const handleGoback = () => navigate(-1);

  return handleGoback;
};

export default useGoback;
