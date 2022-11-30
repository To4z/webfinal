import Posts from "./Posts";
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
const Post = ({ id, userName, useImg, img, cap }) => {
    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img
                    src={useImg}
                    className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
                    alt=""
                    width={100}
                    height={100}
                />
                <p className="flex-1 font-bold">{userName}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>
            {/* img */}
            <img src={img} className="objject-cover w-full" alt="" />
            {/* bottons */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex scale-x-4">
                    <HeartIcon className="btn" />
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn" />
                </div>

                <BookmarkIcon className="btn"></BookmarkIcon>
            </div>
            {/* cap */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{userName}</span>
                {cap}
            </p>
            {/* cmt */}

            {/* inb */}
            <div>
                <form action="" className="flex items-center p-4 ">
                    <EmojiHappyIcon className="h-7" />
                    <input
                        type="text"
                        placeholder="Thêm bình luận..."
                        className="border-none flex-1 focus:ring-0 outline-none"
                    />
                    <button className="font-bold text-blue-400">
                        Đăng
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Post;
