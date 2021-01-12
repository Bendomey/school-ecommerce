import { Fragment } from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 2000,
  // pauseOnHover: true,
  cssEase: "linear",
  customPaging: function (i) {
    return (
      <div
        className={"dark:bg-gray-400 bg-gray-200"}
        style={{ height: "1vh" }}
      ></div>
    );
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
      },
    },
  ],
};

const data = [
  "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
  "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
  "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
  "https://tailwindui.com/img/logos/laravel-logo-gray-400.svg",
  "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
  "https://tailwindui.com/img/logos/statamic-logo-gray-400.svg",
];
const LogoCloudComponents = () => {
  return (
    <Fragment>
      <Slider {...settings}>
        {data.map((logo: string, i: number) => (
          <Fragment key={i}>
            <div className={""}>
              <img
                className="h-10 sm:h-10 md:h-14"
                src={logo}
                // src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
          </Fragment>
        ))}
      </Slider>
    </Fragment>
  );
};

export default LogoCloudComponents;
