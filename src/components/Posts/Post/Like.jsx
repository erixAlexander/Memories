import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt.js";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAlt.js";

const Like = ({ post, user }) => {

  if (post.likes.length > 0) {
    return post.likes.find(
      (like) => like === (user?.userInfo?.googleId || user?.userInfo?._id)
    ) ? (
      <>
        <ThumbUpAltIcon fontSize="small" />
        &nbsp;
        {post.likes.length > 2
          ? `You and ${post.likes.length - 1} others`
          : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
      </>
    ) : (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
      </>
    );
  }

  return (
    <>
      <ThumbUpAltOutlined fontSize="small" />
      &nbsp;Like
    </>
  );
};

export default Like;
