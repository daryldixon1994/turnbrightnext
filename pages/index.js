import HomePage from "@/components/HomePage";
import Head from "next/head";
import PublicLayout from "@/components/PublicLayout";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Turn B. Right</title>
      </Head>
      <HomePage />
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};
