import Reveal from "./Reveal";

export default function About() {
  return (
   <Reveal>
    <section
      id="about"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-pink-600 uppercase tracking-[0.3em] mb-4">
              Our Kingdom
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-8">
              BUILT FOR
              <span className="text-pink-600"> COMPETITION</span>
            </h2>

            <p className="text-white/90 leading-8 mb-6">
              Project Monarch is an APAC esports organization
              dedicated to developing talented players and building
              championship-caliber rosters.
            </p>

            <p className="text-white/90 leading-8 mb-6">
              We believe success is earned through discipline,
              preparation, teamwork, and a relentless drive to
              improve.
            </p>

            <p className="text-white/90 leading-8">
              From ranked grinders to competitive veterans,
              Project Monarch exists to create a place where
              ambition becomes achievement.
            </p>
          </div>

          <div className="relative">

            <img
              src="/monarch-banner.jpg"
              alt="Monarch"
              className="rounded-3xl border border-white/10"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />

          </div>

        </div>

      </div>
    </section>
	</Reveal>
  );
}