import React from "react";
import NewsList from "../widgets/Newslist/NewsList";
import Slider from "../widgets/Slider/slider";
import VideosList from "../widgets/videolist/videolist";
const Home = () => {
  return (
    <div>
      <Slider />

      <NewsList type="card" loadmore={true} start={3} amount={3} />

      <VideosList
        type="card"
        title={true}
        loadmore={false}
        start={0}
        amount={3}
      />
    </div>
  );
};

export default Home;
