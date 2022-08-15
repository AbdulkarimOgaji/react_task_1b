import React from "react";
import SingleVideo from "./SingleVideo";

const VideoList = ({ data: videos }) => {
  return (
    <>
      {videos.map((vid) => (
        <SingleVideo data={vid} key={vid.id} />
      ))}
    </>
  );
};

export default VideoList;
