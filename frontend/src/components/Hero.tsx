import { getHomeInfo } from "@/app/lib/get-home-info";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const Hero = async () => {
  const homeInfo = await getHomeInfo();
  const {title, description, image} = homeInfo;

  return (
    <section>
      <div>
        <h1>{title}</h1>
        <div>
            <BlocksRenderer content={description} />
        </div>
        <div>
            <img src={`${process.env.STRAPI_HOST}${image.url}`} />
            
        </div>
      </div>
    </section>
  );
};
