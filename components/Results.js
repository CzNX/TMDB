import { base_img_path } from "../config";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

base_img_path;

const Results = ({
  backdrop_path,
  title,
  poster_path,
  vote_count,
  id,
  release_date,
  overview,
  original_name,
  first_air_date,
}) => {
  return (
    <div className="m-1 p-1  ">
      <Image
        src={`${base_img_path}${backdrop_path || poster_path}`}
        width="1920"
        height="1080"
        layout="responsive"
        className="cursor-pointer"
      />
      <p className="truncate">{overview}</p>
      <p className="font-semibold text-green-500">{title || original_name}</p>
      <p className="flex  items-center text-gray-400 text-sm">
        {release_date || first_air_date}
        <span>
          <ThumbUpIcon className="h-4 ml-4 mr-1" />
        </span>
        {vote_count}
      </p>
    </div>
  );
};

export default Results;
