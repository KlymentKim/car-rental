import React from "react";
import Container from "../Container/Container";
import Header from "../Pages/Header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from "./Layout.module.css";
import LoaderSpiner from "../LoaderSpiner/LoaderSpiner";

const Layout = () => {
  return (
    <>
      <header className={css.background}>
        <Container>
          <Header />
        </Container>
      </header>
      <Container>
        <main>
          <div className={css.background}></div>
          <Suspense fallback={<LoaderSpiner />}>
            <Outlet />
            {/* <p style={{ color: "#080707", marginTop: 30 }}>Group#4</p> */}
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default Layout;
