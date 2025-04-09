
const stats = [
  { label: "Pollution Reports", value: "12,580+" },
  { label: "Active Users", value: "8,450+" },
  { label: "Cleanup Events", value: "432" },
  { label: "Tons of Waste Collected", value: "175" },
];

const Stats = () => {
  return (
    <div className="bg-ocean py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-ocean-dark bg-opacity-50 p-6 rounded-lg text-center animate-fade-in"
            >
              <dt className="text-sm font-medium text-gray-200 truncate">
                {stat.label}
              </dt>
              <dd className="mt-2 text-4xl font-semibold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;
