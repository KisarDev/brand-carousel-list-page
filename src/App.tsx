import { useZyph } from "usezyph";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import getData from "./data.js"

export default function App({ appId }: { appId: string }) {
  const sdk = useZyph(appId);
  const [categories] = sdk.prop<any>("categories");
  const [title] = sdk.prop<string>("title");
  const [slideConfig] = sdk.prop<any>("slideConfig");
  console.log(getData({ object: window }));
  
  

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
        {categories && categories.map((category: any, index: number) => (
          <SwiperSlide key={index} className="swiper-slide">
                <a href={category.url}>
                  <img id={`image-destaques-${index}`} className="image-destaques" src={category.img} alt={category.title}/>
                  <p className="swiper-item-title">{category.title}</p>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
}
