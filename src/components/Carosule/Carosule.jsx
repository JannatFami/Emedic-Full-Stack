// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carosule = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="">
            <div class="hero h-[100vh] 2xl:h-[100vh]  bg-base-200">
              <div class="hero-content flex-col lg:flex-row">
                <img src="./ui.svg" class="max-w-sm rounded-lg" />
                <div>
                  <h1 class="text-5xl font-bold">Service</h1>
                  <p class="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button class="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img src="./ui2.svg" class="max-w-sm rounded-lg" />
              <div>
                <h1 class="text-5xl font-bold">Service</h1>
                <p class="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
              <img src="./ui3.svg" class="max-w-sm rounded-lg" />
              <div>
                <h1 class="text-5xl font-bold">Service</h1>
                <p class="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
