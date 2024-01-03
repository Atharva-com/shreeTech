import { Models } from "appwrite";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


type PostStatsProps = {
    post: Models.Document;
    userId: string;
};
const PostStats = ({ post, userId }: PostStatsProps) => {
    const location = useLocation();

    const containerStyles = location.pathname.startsWith("/profile")
        ? "w-full"
        : "";
    return (
        <div
            className={`flex justify-between items-center z-20 ${containerStyles}`}>
            <div className="flex gap-2 mr-5">
                <img
                    src="/assets/icons/like.svg"
                    alt="like"
                    width={20}
                    height={20}
                    //   onClick={(e) => handleLikePost(e)}
                    className="cursor-pointer"
                />
                <p className="small-medium lg:base-medium">10</p>
            </div>

            <div className="flex gap-2">
                <img
                    src="/assets/icons/save.svg"
                    alt="share"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                //   onClick={(e) => handleSavePost(e)}
                />
            </div>
        </div>
    )
}

export default PostStats