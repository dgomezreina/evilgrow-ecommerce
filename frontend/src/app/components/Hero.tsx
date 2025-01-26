import { getHomeInfo } from "@/app/lib/get-home-info";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const Hero = async () => {
  const homeInfo = await getHomeInfo();
  const { title, description, image } = homeInfo;

  return (
    <section className="bg-gray-100 dark:bg-zinc-900 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="text-lg mb-8">
          <BlocksRenderer content={description} />
        </div>
        <div className="flex justify-center">
          {image?.url && (
            <img
              src={`${process.env.STRAPI_HOST}${image.url}`}
              alt={title}
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          )}
        </div>
      </div>
    </section>
  );
};
