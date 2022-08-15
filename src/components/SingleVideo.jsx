import React from "react";

const SingleVideo = ({ data }) => {
  return (
    <tr className="container my-grid border rounded-3xl h-32 p-2 border-gray-300 border-opacity-30 place-items-center">
      <span>{data.id}</span>
      <img
        src={data.photo}
        className="object-cover w-32 h-24 rounded-2xl"
        alt={data.title}
      />
      <p>{data.title}</p>
      <div className="justify-self-start">
        <img
          src={data.photo}
          alt=""
          className="object-cover w-6 h-6 rounded-full inline"
        />
        <span className="ml-3 my-text-secondary">{data.username}</span>
      </div>
      <span>
        {data.like} <span className="my-text-secondary">&uarr;</span>
      </span>
    </tr>
  );
};

export default SingleVideo;
