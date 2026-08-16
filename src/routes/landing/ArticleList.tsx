import TagsList from "@components/TagsList";
import Post from "@components/Post";
import { ToggleGroup, ToggleGroupItem } from "@components/ui/toggle-group";

export default function ArticleList() {
  return (
    <>
      <div className="flex flex-col-reverse md:grid grid-cols-[1fr_auto_1fr] gap-8">
        <span />

        <div className="min-w-2xs sm:min-w-sm md:min-w-md flex flex-col gap-4">
          <ToggleGroup variant="outline" defaultValue={["your"]}>
            <ToggleGroupItem value="your">Your Feed</ToggleGroupItem>
            <ToggleGroupItem value="global">Global Feed</ToggleGroupItem>
          </ToggleGroup>

          <Post
            title="How to build webapps that scale"
            description="This is the description for the post."
            date="January 20th"
            avatarName="Eric Simons"
            avatarUrl="http://i.imgur.com/Qr71crq.jpg"
            avatarHref="/profile/ericsimmons"
            href="/how-to-build-webapps-that-scale"
          />
          <Post
            title="The song you won&lsquo;t ever stop singing. No matter how hard you try."
            description="This is the description for the post."
            date="January 15, 2023"
            avatarName="Albert Pai"
            avatarUrl="http://i.imgur.com/N4VcUeJ.jpg"
            avatarHref="/profile/albertpai"
            href="/the-song-you-wont-ever-stop-singing"
          />
        </div>

        <TagsList />
      </div>
    </>
  );
}
