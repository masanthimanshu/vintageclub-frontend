import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Login, Details, NotHave, Products, Redirect } from "./components";
import { ReadContext } from "./context";

export default function Router() {
  const { auth } = ReadContext();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={<Redirect />} />
        <Route path="/login" element={<Login />} />
        {auth ? (
          <>
            <Route path="/category/:type" element={<Products />} />
            <Route path="/detail/:id" element={<Details />} />
            <Route path="/not-have" element={<NotHave />} />
          </>
        ) : (
          <Route path="*" element={<Redirect />} />
        )}
      </Routes>
    </>
  );
}
