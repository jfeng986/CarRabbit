import Image from "next/image";
import test02 from "../images/test02.webp";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "../icons/SearchIcon";
import { Button } from "@nextui-org/react";

const GetHelp = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <Image
        src={test02}
        layout="fill"
        objectFit="cover"
        alt="Background"
        className="z-0"
      />

      <div className="bg-white p-12 rounded-md shadow-lg w-3/5 z-10">
        <h1 className="text-4xl font-bold mb-4">Get help. Gain happiness.</h1>
        <p className="text-gray-600 mb-6">Just task.</p>
        <div className="mb-6 flex justify-between">
          <div className="flex w-3/4 flex-wrap md:flex-nowrap gap-4">
            <Input
              type="text"
              classNames={{
                //outerWrapper: "w-full",
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-white",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "!cursor-text",
                ],
              }}
              radius="sm"
              isClearable={true}
              placeholder="I need help with..."
              variant="bordered"
              startContent={
                <SearchIcon className="text-black/50  text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
          <Button color="success" variant="solid" radius="sm">
            <p className="text-white">Get help today</p>
          </Button>
        </div>
        <div className="flex space-x-4 justify-center">
          <Button color="success" variant="bordered" radius="sm">
            Car Beauty
          </Button>
          <Button color="success" variant="bordered" radius="sm">
            Car Maintenance
          </Button>
          <Button color="success" variant="bordered" radius="sm">
            Car Repair
          </Button>
          <Button color="default" variant="light" radius="sm">
            See More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetHelp;
