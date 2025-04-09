
import Layout from "@/components/layout/Layout";
import EducationResources from "@/components/education/EducationResources";

const Learn = () => {
  return (
    <Layout>
      <div className="bg-ocean bg-opacity-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Educational Resources</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our collection of articles, videos, and research to learn more about
              marine pollution and what you can do to help protect our oceans.
            </p>
          </div>
          <EducationResources />
        </div>
      </div>
    </Layout>
  );
};

export default Learn;
