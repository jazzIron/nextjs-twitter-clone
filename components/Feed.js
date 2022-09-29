import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import Post from "./Post";

function Feed() {
  const posts = [
    {
      id: "1",
      name: "jazzIron",
      username: "jaechul",
      userImg:
        "https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/248R/image/ROaVC_3cDfgEn_Wmmu0ew-6n0S8.jpg",
      img: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c29jY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "nice view!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "jazzIron",
      username: "jaechul",
      userImg:
        "https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/248R/image/ROaVC_3cDfgEn_Wmmu0ew-6n0S8.jpg",
      img: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      text: "nice shot!!",
      timestamp: "2 hours ago",
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
