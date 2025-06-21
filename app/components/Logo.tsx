import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2  ">
      <Image src="/icons/Zavira_logo.svg" alt="Logo" width={32} height={50} />
    </div>
  );
}