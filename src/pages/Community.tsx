
import Layout from "@/components/layout/Layout";
import CommunitySection from "@/components/community/CommunitySection";

const Community = () => {
  return (
    <Layout>
      <div className="bg-ocean bg-opacity-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Ocean Guardian Community</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with fellow ocean conservationists, join local groups, participate in discussions,
              and work together to make a bigger impact.
            </p>
          </div>
          <CommunitySection />
        </div>
      </div>
    </Layout>
  );
};

export default Community;
