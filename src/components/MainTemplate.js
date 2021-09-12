import React from "react";
import "./MainTemplate.scss";
import MainHeader from "./MainHeader";
import MainContentsList from "./MainContentsList";
import Ranking from "./Ranking";
import SimpleSlider from "./SimpleSlider";
import MainLeftSider from "./MainLeftSider";
import Category from "./Category";
import Footer from "./Footer";

const MainTemplate = () => {
  return (
    <div id="MainTemplate">
      <header id="header">
        <MainHeader></MainHeader>
      </header>
      <section id="contents-head">
        <SimpleSlider></SimpleSlider>
      </section>
      <aside id="left-sidebar">
        <MainLeftSider></MainLeftSider>
        <Category></Category>
      </aside>
      <aside id="right-sidebar">
        <Ranking></Ranking>
      </aside>
      <section id="contents">
        <MainContentsList></MainContentsList>
      </section>
      <footer id="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainTemplate;
