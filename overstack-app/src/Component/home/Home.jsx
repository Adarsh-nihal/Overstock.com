
import { Hero } from "./Hero";

import { Deals } from "./Deals";

import { Banners } from "./Banner"

import { StaticProd } from "./StaticProduct"

import { ImageSlider } from "./HomeCrousel"

export const Home = () => {

    const imagess = [
        {
          id: 1,
          src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_2.jpg?imwidth=1920",
          heading: "Storage With Style",
          subhead:
            "Keep your space neat with decorative storage and organization essentials.",
        },
        {
          id: 2,
          src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_3.jpg?imwidth=1920",
          heading: "New Arrivals : Tables",
          subhead:
            "Shop the latest living room with new coffee, console, sofa, and end tables.",
        },
        {
          id: 3,
          src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_5.jpg?imwidth=1920",
          heading: "Top Rated Lightning",
          subhead:
            "Brighten up your new year space with customer favorite lighting & ceiling fans.",
        },
        {
          id: 3,
          src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_5.jpg?imwidth=1920",
          heading: "Chic Shag Rugs​",
          subhead: "Opt for classic comforts with plush and pretty shag rugs.",
        },
        {
          id: 3,
          src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_5.jpg?imwidth=1920",
    
          heading: "Top-Rated Mattresses",
          subhead:
            "Stop counting sheep & start getting sleep with great deals on great mattresses.",
        },
        {
          id: 3,
          src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_1.jpg?imwidth=1920",
          heading: "Top-Rated Mattresses",
          subhead:
            "Stop counting sheep & start getting sleep with great deals on great mattresses.",
        },
      ];

      

      // --------------Home Static Products -------------///
  const Static_Products = [
    {
      src: "https://i.postimg.cc/DzNmvYz8/11192021-Cat-Silo-Furniture.png",
      Title: "Furniture",
    },
    {
      src: "https://i.postimg.cc/tT2ymTM0/11152021-Cat-Silo-Area-Rugs.png",
      Title: "Area Rugs",
    },
    {
      src: "https://i.postimg.cc/W4fcMKFj/11152021-Cat-Silo-Bed-Bath.png",
      Title: "Bed & Baths",
    },
    {
      src: "https://i.postimg.cc/Xv5k8BXJ/11152021-Cat-Silo-Decor.png",
      Title: "Home Decor",
    },
    {
      src: "https://i.postimg.cc/V6RMGqwY/Cat-Silo-Window-040721.jpg",
      Title: "Window Treatment",
    },
    {
      src: "https://i.postimg.cc/yYJgc4D6/11152021-Cat-Silo-Kitchen.png",
      Title: "Kitchen",
    },
    {
      src: "https://i.postimg.cc/3JPyZSGX/11192021-Cat-Silo-Outdoor.png",
      Title: "Outdoor",
    },
    {
      src: "https://i.postimg.cc/4dNn3rCg/01112021-Cat-Silo-Home-Imp.jpg",
      Title: "Home Improvement",
    },
    {
      src: "https://i.postimg.cc/hvW7NgSK/05062021-gnp-jewelrywatches-Pop-Cat-10.jpg",
      Title: "Jwellery & Watches Store",
    },
    {
      src: "https://i.postimg.cc/fTXhwsD6/06232021-gnp-gifts-219x219-Small-Appliances.jpg",
      Title: "Gift Ideas",
    },
    {
      src: "https://i.postimg.cc/wxN3j5Z3/11152021-Cat-Silo-Lighting.png",
      Title: "Lightning",
    },
    {
      src: "https://i.postimg.cc/SsMQjqZH/Cat-Silo-All-Deals-040721.jpg",
      Title: "Shop All Deals",
    },
  ];
  const Offer_Deals = [
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_2.svg?imwidth=1920",
      title: "Select Garden & Patio",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_1.svg?imwidth=1920",
      title: "Select Living Room Furniture",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_3.svg?imwidth=1920",
      title: "Select Dining Room Furniture",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_4.svg?imwidth=1920",
      title: "Select Home Decor",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_V3_HB_DOMESTIC_5.svg?imwidth=1920",
      title: "Select Bedding & Bath",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_6.svg?imwidth=1920",
      title: "Select Lighting & Ceiling Fans",
    },
  ];
    return (
        <>
            <Hero />
            <Deals offers={Offer_Deals} />
            <Banners src = {"https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_2.jpg?imwidth=1920"} title ={"Select Lighting & Ceiling Fans"} subtitle = {"Select Lighting & Ceiling Fans"} />
            
            <StaticProd prod = {Static_Products} />
            <ImageSlider imagess = {imagess} />

        </>
    )

}