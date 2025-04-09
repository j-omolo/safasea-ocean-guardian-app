
import Layout from "@/components/layout/Layout";
import ReportForm from "@/components/report/ReportForm";

const Report = () => {
  return (
    <Layout>
      <div className="bg-ocean bg-opacity-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Report Marine Pollution</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Help us identify and address pollution hotspots by reporting incidents you observe. 
              Your reports contribute to global conservation efforts.
            </p>
          </div>
          <ReportForm />
        </div>
      </div>
    </Layout>
  );
};

export default Report;
