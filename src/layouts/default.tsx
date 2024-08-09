import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./default.styles";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
