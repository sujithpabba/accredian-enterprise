const companies = ["NORTHSTAR", "Aster Labs", "vertex", "Lumio", "MOTION", "orbit"];

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-6">
      {companies.map((company) => (
        <div key={company} className="flex h-20 items-center justify-center bg-white px-4 text-sm font-bold tracking-wide text-slate-500">
          {company}
        </div>
      ))}
    </div>
  );
}
