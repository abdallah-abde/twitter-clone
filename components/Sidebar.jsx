import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  EllipsisHorizontalCircleIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      <div className="hoverEffect p-2 hover:bg-blue-100  flex items-center justify-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"
          width="50"
          height="50"
        ></Image>
      </div>
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>

      <button className="bg-blue-400 text-white rounded-full  w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          src="https://www.pinclipart.com/picdir/big/379-3796154_profile-clipart-john-doe-circle-png-download.png"
          alt="user image"
          className="w-10 h-10 rounded-full xl:mr-2"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Abdallah Abde</h4>
          <p className="text-gray-500">@abdallah-abde</p>
        </div>
        <EllipsisHorizontalCircleIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}
