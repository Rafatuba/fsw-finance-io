import Image from "next/image";
import { Button } from "./_components/ui/button";

const Home = () => {
  return (
    <div className="flex w-screen items-center justify-center">
      <h1 className="p-5 text-4xl font-bold text-green-500">
        Eu gostaria de merendar!
      </h1>
      <Image
        src="https://media.gazetadopovo.com.br/2017/08/b066c490f08cc59bf26457ce6d9a0561-gpLarge.jpg"
        alt="Tiririca"
        width={500}
        height={500}
      />
      <Button variant={"outline"}>Hello World</Button>
    </div>
  );
};

export default Home;
