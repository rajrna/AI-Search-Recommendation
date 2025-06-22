import React, { useRef } from "react";
import HeroSection from "./components/HeroSection";
import ImageSearch from "./components/ImageSearch";
import AboutSection from "./components/AboutSection";
import RecommendedSection from "./components/RecommendedSection";
import FloatingSearchButton from "./components/FloatingSearchButton";

const Home = () => {
  const data = {
    name: "VisuoFind",
  };

  const searchRef = useRef(null);

  const scrollToSearch = () => {
    searchRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ marginTop: "11rem" }}>
      <HeroSection myData={data} onFindClick={scrollToSearch} />
      <div ref={searchRef} id="search-section">
        {" "}
        {/* ref is like a bookmark on a part of the page. */}
        <ImageSearch />
      </div>
      <RecommendedSection />
      <AboutSection />
      <FloatingSearchButton onSearchClick={scrollToSearch} />{" "}
      {/*onSearchClick is passed into the FloatingSearchButton section as prop, so in there, scrollToSearch will be used/called using onSearchClick.*/}
    </div>
  );
};

export default Home;
