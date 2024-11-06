import Image from "next/image";
import { Button } from "./_components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { dark } from "@clerk/themes";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  return (
    <div className="flex h-full w-screen flex-col items-center justify-center">
      <div className="solid rounded-xl border p-5">
        <p className="mb-4 text-sm text-gray-400">Isso é do login</p>
        <UserButton showName />
      </div>
      <h1 className="p-5 text-4xl font-bold text-green-500">
        Eu gostaria de merendar!
      </h1>
      <Image
        src="https://media.gazetadopovo.com.br/2017/08/b066c490f08cc59bf26457ce6d9a0561-gpLarge.jpg"
        alt="Tiririca"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Home;
