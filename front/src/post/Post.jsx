import {useState, useEffect} from "react";
import "./post.css";

const Post = ({text, img_url, author, tags, next_post}) => {
    const maxLen = 600;
    return (
        <div>
            <div
                className="post flex flex-col rounded-2xl max-w-lg h-full
      mx-auto my-5 text-sm bg-gradient-to-r from-slate-900 to-slate-800 p-4 text-white"
                style={{animation: animation ? "fromCenterToBottom 1.5s" : ""}}
            >
                <div className="h-1/3">
                    <img
                        className="object-cover h-full w-full m-auto shadow"
                        src={img_url}
                    />
                </div>
                <div className="font-bold text-lg mt-3 text-center text-blue-300">
                    {name}
                </div>
                <div className="mt-3 font-bold text-indigo-300">
                    {author}: {tags.join(", ")}
                </div>
                <div className="">{text.slice(0, maxLen) + "..."}</div>
                <div className="flex justify-around mt-auto mt-5">
                    <img className="w-1/12" src="./src/post/heart.svg"/>

                    <img className="w-1/12" src="./src/post/comment.svg"/>

                    <img
                        className="w-1/12"
                        src="./src/post/next.svg"
                        onClick={() => {
                            next_post();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Post;
