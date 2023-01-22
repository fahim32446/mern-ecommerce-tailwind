import React from "react";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://ae01.alicdn.com/kf/Sc9dae33c7ee145a18f1750cfb7f005b90/Funny-Shark-Patchwork-Hoodies-Man-Autumn-Kawaii-Sweatshirt-2021-Casual-Long-Sleeve-Pullover-School-Couple-Clothes.jpg_Q90.jpg_.webp",
      img2: "https://ae01.alicdn.com/kf/Sbbdf605d40504f8cb0206626de30a50bP/Funny-Shark-Patchwork-Hoodies-Man-Autumn-Kawaii-Sweatshirt-2021-Casual-Long-Sleeve-Pullover-School-Couple-Clothes.jpg_Q90.jpg_.webp",
      title: "New Hoodies for Men",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 2,
      img: "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Watch for Men",
      isNew: true,
      oldPrice: 25,
      price: 15,
    },

    {
      id: 3,
      img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1254502/pexels-photo-1254502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "New Hoodies for Men",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 4,
      img: "https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/7698739/pexels-photo-7698739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Complete suit for Men",
      isNew: true,
      oldPrice: 39,
      price: 30,
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 space-y-8 space-x-2">
      <div className="flex flex-col xl:flex-row justify-between">
        <h1 className="font-bold text-2xl capitalize flex-1">{type} products</h1>
        <p className="text-gray-400 flex-[2]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur cum ex eius placeat qui, iusto libero blanditiis porro optio incidunt, adipisci debitis sapiente suscipit praesentium quisquam ad ullam?
        </p>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 gap-y-[20px]">
        {data.map((item) => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
