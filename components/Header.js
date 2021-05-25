import Image from "next/image";
import { signOut, useSession } from "next-auth/client";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  const [session] = useSession();
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Header Left */}
      <div className="flex items-center">
        <Image
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
          alt="facebook"
          width={40}
          height={40}
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Header Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Header Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          src={session.user.image}
          width="40"
          height="40"
          className="rounded-full cursor-pointer"
          layout="fixed"
        />

        <p className="hidden md:flex whitespace-nowrap font-semi-bold pr-3">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </header>
  );
}

export default Header;
