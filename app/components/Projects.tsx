import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
//const CarMax = "../images/carmax.png";

const Projects = () => {
  const list = [
    {
      title: "Oil and Filter Changes",
      img: "./oilchange.jpeg",
      price: "Avg. $50 - $70",
    },
    {
      title: "Tire Rotation",
      img: "./tirerotation.jpeg",
      price: "Avg. $50 - $70",
    },
    {
      title: "Brake Service",
      img: "./brakeservice.jpeg",
      price: "Avg. $50 - $70",
    },
    {
      title: "Transmission Service",
      img: "./transmissionservice.jpeg",
      price: "Avg. $50 - $70",
    },
    {
      title: "Air Filter Replacement",
      img: "./airfilter.jpeg",
      price: "Avg. $50 - $70",
    },
    {
      title: "Battery Replacement",
      img: "./batteryreplacement.jpeg",
      price: "Avg. $50 - $70",
    },
    {
      title: "Engine Tune-up",
      img: "./enginetune-up.jpeg",
      price: "Avg. $50 - $70",
    },
    {
      title: "Wiper blades replacement",
      img: "./wiperblades.jpeg",
      price: "Avg. $50 - $70",
    },
  ];

  return (
    <div className="py-16">
      <div className="p-4 text-3xl font-bold">Popular projects in Portland</div>
      <div className="gap-1 grid grid-cols-2 sm:grid-cols-4 p-4">
        {list.map((item, index) => (
          <div
            className="p-2 flex flex-col"
            style={{ height: "300px" }}
            key={index}
          >
            <Card shadow="sm" key={index} isPressable className="flex-grow">
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[200px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-center">
                <div>
                  <b className="text-lg font-medium">{item.title}</b>
                  <p className="text-default-500">{item.price}</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
