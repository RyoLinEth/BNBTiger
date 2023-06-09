import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import ContactOne from "@/components/Contact/ContactOne";
import Roadmap from "@/components/Roadmap/Roadmap";
import Sales from "@/components/Sales/Sales";
import TeamOne from "@/components/Team/TeamOne";
import TopPartners from "@/components/TopPartners/TopPartners";
import WhitePaper from "@/components/WhitePaper/WhitePaper";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Burn from "@/components/Burn/Burn";
import LayoutOne from "@/layouts/LayoutOne";

export default function Home() {
  return (
    <>
      <Head>
        <title>BNBTiger - The Greatest MEME in BSC</title>
        <meta name="description" content="" />
      </Head>

      <LayoutOne>
        <main className="fix">
          <Banner />
          <WhoWeAre />

          <WhyChooseUs />
          <Sales />
          <Burn />

          <div className="area-bg">
            <Roadmap />
          </div>

          <ContactOne />
        </main>
      </LayoutOne>
    </>
  );
}
