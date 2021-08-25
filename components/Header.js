import HeaderOptions from "./HeaderOptions";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <div className="flex flex-col p-3 items-center sm:space-y-3 md:flex-row md:justify-between lg:pl-56 lg:pr-20">
      <div className="flex space-x-3 sm:space-x-5 md:space-x-7 lg:space-x-9">
        <HeaderOptions Icon={HomeIcon} title={"Home"} />
        <HeaderOptions Icon={BadgeCheckIcon} title={"home"} />
        <HeaderOptions Icon={CollectionIcon} title={"home"} />
        <HeaderOptions Icon={LightningBoltIcon} title={"home"} />
        <HeaderOptions Icon={SearchIcon} title={"home"} />
        <HeaderOptions Icon={UserIcon} title={"User"} />
      </div>
      <div>
        <h1 className="text-xl font-bold tracking-wider uppercase">
          MovieMania
        </h1>
      </div>
    </div>
  );
};

export default Header;
