import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReadContext } from "../../context";

export const Redirect = () => {
  const { auth } = ReadContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) navigate("/category/teddy");
    else navigate("/login");
  }, []);

  return <></>;
};
