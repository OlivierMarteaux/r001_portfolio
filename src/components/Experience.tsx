import Link from "next/link";

export default function Experience() {
  return (
  
    <section className="mb-8">
      <h3 className="text-2xl font-semibold mb-6">Experience</h3>

      <div className="space-y-8">

        <div className="border-l-2 border-sky-400 pl-6">
          <h4 className="font-semibold">
            Android Developer Projects Training <br />
			OpenClassrooms <br />
			2025-2026
          </h4>
          <p className="text-slate-400">
            Built MVVM Android apps - <Link href="/projects" className="text-sky-400 hover:text-sky-300 underline">examples shown in Projects section</Link>
          </p>
        </div>

        <div className="border-l-2 border-sky-400 pl-6">
          <h4 className="font-semibold">
            Aerospace Hardware Engineer <br />
			Thales Alenia Space <br />
			2008–2024
          </h4>
          <p className="text-slate-400">
            I have worked for 16 years in the space industry, starting as a production engineer, then 6 years as a mechanical engineer, and finally 9 years as a product architect. My dismissal in October 2024 led me to change my career path to become an Android developer.
          </p>
        </div>

      </div>
    </section>
	
  );
}
