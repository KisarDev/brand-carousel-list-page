import { useZyph } from "usezyph";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import getData from "./data.js"
import { Map, Shop } from "./types.js";

export default function App({ appId }: { appId: string }) {
  const sdk = useZyph(appId);
  const [imgByBrand] = sdk.prop<Map>("imgByBrand");
  const [title] = sdk.prop<string>("title");
  const [slideConfig] = sdk.prop<any>("slideConfig");
  const arrayShops: Shop[] = getData({ object: window });
  // const objetoInterno: Record<string, string> = {
  //   "Lavor": "url_da_img0",
  //   "Util": "url_da_img1",
  //   "Flash": "url_da_img2",
  //   "Limp": "url_da_img3"
  // }
  arrayShops && imgByBrand && arrayShops.map(objetoShops => objetoShops.img = imgByBrand[`${objetoShops.name}`])
  console.log(arrayShops)
  return (
    <div className='swiper mySwiper-destaques swiper-destaques ' id="carrosselDestaques">
      {title && (
        <h2 className="destaques-title">
          <span>
            {title}
          </span>
        </h2>
      )}
      {slideConfig && (

        <Swiper 
        slidesPerView={3}
        spaceBetween={10} 
        navigation={true}
        pagination={{ clickable: true }}  
        loop={true} 
        breakpoints={{ 
          768: {
            slidesPerView: slideConfig.itemsPerSlide || 5,
            spaceBetween: slideConfig.spaceBetween || 10
          },
        }}
        modules={[ Navigation, Pagination ]}
        >
        {arrayShops && arrayShops.map((item: Shop, index: number) => (
          <SwiperSlide key={index} className="swiper-slide">
                <a href={item.url}>
                  <img id={`image-destaques-${index}`} className="image-destaques" src={item.img} alt={item.name}/>
                  <p className="swiper-item-title">{item.name}</p>
                </a>
          </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
}
