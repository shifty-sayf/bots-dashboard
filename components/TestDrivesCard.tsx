import React from "react";

export type TestDrivesProps = {
  robotId: string;
  robotName: string;
  result: string;
};

export default function TestDrivesCard(props: TestDrivesProps) {
  const { result, robotName, robotId } = props;
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            width={200}
            height={200}
            src={`https://api.dicebear.com/7.x/identicon/svg?seed=${robotName}`}
            alt="avatar"
          />
        </div>
        <div className="text-sm ">
          <p>{robotName}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {robotId}
          </div>
        </div>
      </section>
      <p>{result}</p>
    </div>
  );
}
