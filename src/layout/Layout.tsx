import { Outlet } from "react-router-dom";
import Header from "../components/Header";
export default function Layout() {
  return (
    <div
      className="xl:flex xl:gap-[3rem] xl:pt-[9.4rem]
      xl:max-w-[111rem] xl:mx-auto"
    >
      <Header />
      <Outlet />
    </div>
  );
}
