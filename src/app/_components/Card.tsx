import Link from "next/link";

type CardType = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export function Card(props: CardType) {
  return (
    <div className="relative group overflow-hidden rounded-lg" key={props.id}>
      <Link className="absolute inset-0 z-10" href="#">
        <span className="sr-only">View</span>
      </Link>
      <div className="h-[300px] bg-gray-50"></div>
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="font-semibold text-lg md:text-xl">{props.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {props.description}
        </p>
        <h4 className="font-semibold text-base md:text-lg">${props.price}</h4>
      </div>
    </div>
  );
}
