import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();

const HomePage = () => {
  return <div className="font-semibold text-5xl">hello</div>;
};

export default HomePage;
