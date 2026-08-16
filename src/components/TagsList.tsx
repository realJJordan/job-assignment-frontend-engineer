import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

const TagsList = () => (
  <div className="">
    <p className="font-bold text-lg">Popular Tags</p>

    <div className="flex flex-wrap gap-2 mt-2">
      <Link to="">
        <Badge variant="ghost">programming</Badge>
      </Link>
      <Link to="" className="tag-pill tag-default">
        <Badge variant="ghost">javascript</Badge>
      </Link>
      <Link to="" className="tag-pill tag-default">
        <Badge variant="ghost">emberjs</Badge>
      </Link>
      <Link to="" className="tag-pill tag-default">
        <Badge variant="ghost">angularjs</Badge>
      </Link>
      <Link to="" className="tag-pill tag-default">
        <Badge variant="ghost">react</Badge>
      </Link>
      <Link to="" className="tag-pill tag-default">
        <Badge variant="ghost">mean</Badge>
      </Link>
      <Link to="" className="tag-pill tag-default">
        <Badge variant="ghost">node</Badge>
      </Link>
      <Link to="" className="tag-pill tag-default">
        <Badge variant="ghost">rails</Badge>
      </Link>
    </div>
  </div>
);

export default TagsList;
