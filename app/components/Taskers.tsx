import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Taskers = () => {
  const list = [
    {
      name: "Jeffrey C.",
      positiveReviews: "100% positive reviews",
      completedTasks: 174,
      featuredSkills: {
        "Help Moving": "$52.94/hr",
        "Home Repairs": "$52.94/hr",
        "Furniture Assembly": "$47.05/hr",
      },
      description:
        "I'm the right person for the job: I have supplies and resources available for helping you with your move ins, move outs and move aroun...",
      img: "/man.jpeg",
    },
    {
      name: "Jeffrey C.",
      positiveReviews: "100% positive reviews",
      completedTasks: 174,
      featuredSkills: {
        "Help Moving": "$52.94/hr",
        "Home Repairs": "$52.94/hr",
        "Furniture Assembly": "$47.05/hr",
      },
      description:
        "I'm the right person for the job: I have supplies and resources available for helping you with your move ins, move outs and move aroun...",
      img: "/man.jpeg",
    },
    {
      name: "Jeffrey C.",
      positiveReviews: "100% positive reviews",
      completedTasks: 174,
      featuredSkills: {
        "Help Moving": "$52.94/hr",
        "Home Repairs": "$52.94/hr",
        "Furniture Assembly": "$47.05/hr",
      },
      description:
        "I'm the right person for the job: I have supplies and resources available for helping you with your move ins, move outs and move aroun...",
      img: "/man.jpeg",
    },
  ];

  return (
    <div className="py-16">
      <div className="p-4 text-3xl font-bold">Taskers for Hire</div>
      <div className="gap-1 grid grid-cols-2 sm:grid-cols-3 p-4">
        {list.map((item, index) => (
          <div
            className="p-2 flex flex-col"
            style={{ height: "500px" }}
            key={index}
          >
            <Card
              shadow="sm"
              key={index}
              isPressable
              className="flex-grow flex flex-col justify-between"
            >
              <CardBody className="overflow-visible px-4 flex flex-col justify-start">
                <div className="flex justify-between py-6">
                  <Image
                    shadow="sm"
                    radius="lg"
                    alt={item.name}
                    className="w-[120px] h-[120px] object-cover"
                    src={item.img}
                  />
                  <div className="align-middle">
                    <b className="text-lg font-medium">{item.name}</b>
                    <p className="text-default-500">{item.positiveReviews}</p>
                    <p className="text-default-500">
                      {item.completedTasks} completed tasks
                    </p>
                  </div>
                </div>
                <div className="py-6">
                  <p className="py-2">Featured Skills</p>
                  {Object.entries(item.featuredSkills).map(([skill, price]) => (
                    <div key={skill} className="font-bold flex justify-between">
                      <p>{skill}:</p>
                      <span className="font-bold ">{price}</span>
                    </div>
                  ))}
                </div>
                <div className="text-small justify-center py-6">
                  <p className="text-default-500">{item.description}</p>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taskers;
