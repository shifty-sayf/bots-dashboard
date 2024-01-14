import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import TestDrivesCard, { TestDrivesProps } from "@/components/TestDrivesCard";
import { Globe2, Bot, TrainTrack, Activity } from "lucide-react";
import dynamic from "next/dynamic";

const cardData: CardProps[] = [
  {
    label: "Countries",
    amount: "12",
    description: "+10.0% from last month",
    icon: Globe2,
  },
  {
    label: "Robots",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: Bot,
  },
  {
    label: "Distance",
    amount: "+12,234",
    description: "+19% from last month",
    icon: TrainTrack,
  },
  {
    label: "Hrs Played",
    amount: "+573",
    description: "+201 since last month",
    icon: Activity,
  },
];

const testDrivesData: TestDrivesProps[] = [
  {
    robotId: "123456",
    robotName: "Patches",
    result: "Success",
  },
  {
    robotId: "123456",
    robotName: "Abby",
    result: "Failed",
  },
  {
    robotId: "123456",
    robotName: "Zoey",
    result: "In Progress",
  },
  {
    robotId: "123456",
    robotName: "Cuddles",
    result: "Success",
  },
];

const DynamicMap = dynamic(() => import("@/components/CustomMap"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, i) => (
          <Card
            key={i}
            amount={data.amount}
            description={data.description}
            icon={data.icon}
            label={data.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent className="flex p-10">
          <DynamicMap
            zoom={13}
            position={[51.505, -0.09]}
            className="flex overflow-hidden"
          />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Test Drives</p>
            <p className="text-sm text-gray-400">
              There were 20 test drives in the last 7 days.
            </p>
          </section>
          {testDrivesData.map((data, i) => (
            <TestDrivesCard
              key={i}
              robotId={data.robotId}
              robotName={data.robotName}
              result={data.result}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
