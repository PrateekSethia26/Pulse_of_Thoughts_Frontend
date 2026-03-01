import React from "react";
import TopSection from "../Home/TopSection";
import Trending from "../Home/Trending";
import Devotional from "../Home/Devotional";
import Creators from "../Home/Creator";

function Home() {
  return (
    <div>
      <TopSection />
      <Trending />
      <Devotional />
      <Creators />
    </div>
  );
}

export default Home;
