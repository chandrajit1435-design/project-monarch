const players = [
  ["SEISHIN","Duelist"],
  ["?????","Initiator"],
  ["SHURA","Controller"],
  ["BOLT","Sentinel"],
  ["ZEN","Flex"]
];

export default function Roster() {

  return (
    <section
      id="roster"
      className="py-24 max-w-6xl mx-auto px-6"
    >

      <h2 className="text-5xl font-black mb-12">
        ROSTER
      </h2>

      <div className="grid md:grid-cols-5 gap-6">

        {players.map(([name,role])=>(
          <div
            key={name}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-pink-600 transition"
          >
            <h3 className="font-bold">
              {name}
            </h3>

            <p className="text-pink-600 mt-2">
              {role}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}