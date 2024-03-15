import { useState, useEffect } from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import { AnimatePresence, motion } from "framer-motion";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, []);

  // const posts = [
  //   {
  //     id: "1",
  //     name: "Abdallah Abde",
  //     username: "abdallah-abde",
  //     userImg:
  //       "https://www.pinclipart.com/picdir/big/379-3796154_profile-clipart-john-doe-circle-png-download.png",
  //     img: "https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     text: "Nice view",
  //     timestamp: "2 hours ago",
  //   },
  //   {
  //     id: "2",
  //     name: "Abdallah Abde",
  //     username: "abdallah-abde",
  //     userImg:
  //       "https://www.pinclipart.com/picdir/big/379-3796154_profile-clipart-john-doe-circle-png-download.png",
  //     img: "https://images.unsplash.com/photo-1707343843344-011332037abb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     text: "Wow!",
  //     timestamp: "2 days ago",
  //   },
  // ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex items-center py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Post key={post.id} post={post} id={post.id} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
