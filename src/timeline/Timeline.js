import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Dulquer_Salman",
      postImage:
        "https://w0.peakpx.com/wallpaper/163/125/HD-wallpaper-dulquer-salmaan-dq-dqsalmaan-kunjikka.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "Haseeb",
      postImage:
        "https://img.republicworld.com/republic-prod/stories/images/xxhdpi/16876781616497ecd1155e9.jpeg",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "Munees_Gym",
      postImage:
        "https://rukminim1.flixcart.com/image/850/1000/l2z26q80/poster/9/4/e/medium-jeff-seid-body-builder-multicolor-wall-posters-18x12-original-image7ffxsuprekf.jpeg?q=90",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "Nafil_Husn",
      postImage:
        "https://welltech.com/wp-content/uploads/2022/10/not-so-obvious-questions-to-ask-nutritionist.jpg",
      likes: 14,
      timestamp: "2d",
    },
    {
      user: "Kareena_Kapoor",
      postImage:
        "https://static.toiimg.com/photo/84968264.cms",
      likes: 12548,
      timestamp: "8d",
    },
    {
      user: "Priyanka_Chopra",
      postImage:
        "https://www.byrdie.com/thmb/RJcVfukdYM7aPMtVhje050P4MYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-911199570-c7347dab092841efac74925488146989.jpg",
      likes: 54218,
      timestamp: "4d",
    },
    {
      user: "Saleena_Gomez",
      postImage:
        "https://chatelaine.com/wp-content/uploads/2018/06/short-haircut-inspiration-Selena-Gomez.jpg",
      likes: 5487325,
      timestamp: "7d",
    },
    {
      user: "Rayan_Renolds",
      postImage:
        "https://media1.popsugar-assets.com/files/thumbor/j8OmP4eyZE6KB0sCqgtqL0mIxKc=/fit-in/792x1188/filters:format_auto():upscale()/2016/02/03/048/n/1922398/b96203b44301ff51_GettyImages-507335078.jpg",
      likes: 47291,
      timestamp: "12d",
    },
    {
      user: "Ben_Afflek",
      postImage:
        "https://media1.popsugar-assets.com/files/thumbor/JbKMk7o9uuhoWggKuvrVylWhJ_c=/fit-in/792x1192/filters:format_auto():upscale()/2015/07/17/895/n/1922398/a1ab1e5af7b4ce0d_Affleck.jpg",
      likes: 423687,
      timestamp: "2d",
    },
    {
      user: "Jhonny_depp",
      postImage:
        "https://bestlifeonline.com/wp-content/uploads/sites/3/media/images/ext/763054202/Johnny_Depp_Haircut.jpg?quality=82&strip=all",
      likes: 52319,
      timestamp: "27d",
    },
    {
      user: "Anjali_vargees",
      postImage:
        "https://i.pinimg.com/736x/4b/e6/62/4be662974806bec72f4062e7a4d71e15.jpg",
      likes: 74589,
      timestamp: "27d",
    },
    {
      user: "Brad_pitt",
      postImage:
        "https://img.mensxp.com/media/content/2020/Sep/Male-Celebrities-Who-Have-Dabbled-With-Some-Really-Outlandish-1_5f62130740f8d.jpeg",
      likes: 56317,
      timestamp: "27d",
    },
    {
      user: "Morgan_Feeman",
      postImage:
        "https://imgix.ranker.com/user_node_img/81/1615040/original/1615040-photo-u102?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375",
      likes: 753298,
      timestamp: "27d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
