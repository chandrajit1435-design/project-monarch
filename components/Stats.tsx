export default function Stats() {

  const stats = [
    ["120+","Scrims"],
    ["8","Events"],
    ["2","Premier Seasons"],
    ["95%","Activity"]
  ];

  return (
    <section
      id="stats"
      className="py-24 max-w-6xl mx-auto px-6"
    >

      <h2 className="text-5xl font-black mb-12">
        KINGDOM RECORDS
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {stats.map(([value,label])=>(
          <div
            key={label}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
          >
            <h3 className="text-5xl font-black text-pink-600">
              {value}
            </h3>

            <p className="text-gray-400 mt-3">
              {label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}