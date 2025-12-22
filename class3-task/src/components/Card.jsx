import React from "react";

const Card = ({ user }) => {
  return (
    <div className="m-10 h-96 w-72 bg-white rounded flex flex-col justify-center items-center gap-5">

      <div className="h-16 w-16 rounded-full overflow-hidden">
        <img
          src={user.profile}
          alt={user.fullName}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="text-center">
        <h2 className="font-semibold text-2xl">{user.fullName}</h2>
        <h4 className="text-gray-500 text-sm">@{user.fullName.split(" ")[0]}</h4>
      </div>

      <p className="text-sm text-center px-4">{user.title}</p>

      <div className="flex gap-5">
        <div className="flex flex-col items-center">
          <h2 className="font-bold">{user.postCount}</h2>
          <span className="text-sm">Posts</span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold">{user.likesCount}</h2>
          <span className="text-sm">Likes</span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold">{user.viewsCount}</h2>
          <span className="text-sm">Views</span>
        </div>
      </div>

    </div>
  );
};

export default Card;
