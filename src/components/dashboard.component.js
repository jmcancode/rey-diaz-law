import React from "react";
import { Container } from "react-bootstrap";
import SidebarExample from "./sidebar";

import TopNav from "../components/navBar";

export default function Dashboard() {
  return (
    <>
      <div>
        <TopNav />
        <SidebarExample />
      </div>
    </>
  );
}
