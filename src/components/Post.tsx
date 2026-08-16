import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface PostProps {
  title: string;
  description: string;
  date: string;
  avatarName: string;
  avatarUrl: string;
  avatarHref: string;
  href: string;
  tag?: string;
}

const Post = ({ title, description, date, avatarName, avatarUrl, avatarHref, href, tag }: PostProps) => (
  <Card className="relative w-full max-w-md hover:bg-muted transition-all duration-250">
    <Link to={href} className="absolute inset-0 z-0" aria-label={title} />

    <CardHeader className="relative z-10 pointer-events-none">
      <div className="flex gap-2">
        <Link to={avatarHref} className="pointer-events-auto">
          <Avatar>
            <AvatarImage src={avatarUrl} alt={`${avatarName}'s avatar`} />
            <AvatarFallback>
              {avatarName
                .split(" ")
                .map(n => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex flex-col">
          <p className="font-semibold leading-tight">{avatarName}</p>
          <p className="text-sm text-muted-foreground leading-tight">{date}</p>
        </div>
      </div>

      <CardAction />

      <CardTitle className="text-lg font-bold">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>

      {tag && <Badge variant="secondary">{tag}</Badge>}
    </CardHeader>
  </Card>
);

export default Post;
