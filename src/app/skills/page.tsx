import { skills } from "@/data/skills";

export default function Skills() {

  return (
    <section>
      <h2 className="text-3xl font-bold mb-10">
        Skills
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gradient-to-br from-slate-800 via-slate-500 to-slate-700 p-6 rounded-2xl hover:scale-105 transition transform"
          >
            <p className="text-sm font-medium text-slate-200 tracking-wide">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}