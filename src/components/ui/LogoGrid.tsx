import Image from "next/image";

const companies = [
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Infosys", logo: "/logos/infosys.svg" },
  { name: "Accenture", logo: "/logos/accenture.svg" },
  { name: "TCS", logo: "/logos/tcs.svg" },
];

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-2 items-center gap-10 sm:grid-cols-3 lg:grid-cols-6">
      {companies.map((company) => (
        <div
          key={company.name}
          className="flex justify-center transition-opacity duration-300 hover:opacity-70"
        >
          <Image
            src={company.logo}
            alt={company.name}
            width={140}
            height={50}
            className="h-10 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}