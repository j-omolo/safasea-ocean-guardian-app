
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import RecentReports from "@/components/home/RecentReports";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Stats />
      <RecentReports />
      <UpcomingEvents />
      <CallToAction />
    </Layout>
  );
};

export default Index;
