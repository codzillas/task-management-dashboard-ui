import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("User logged out.");
    navigate("/login");
  };

  return { handleLogout };
};

export default useLogout;
