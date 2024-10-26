import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function DefaultLayout() {
  return (
    <>
    <Header />
      <main style={{ height: "100%" }} >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
