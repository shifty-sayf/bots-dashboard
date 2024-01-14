import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { Globe2, Bot, TrainTrack, Activity } from "lucide-react";

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
        <CardContent>asdfasd</CardContent>
      </section>
    </div>
  );
}
