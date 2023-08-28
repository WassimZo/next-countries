"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="my-4 xl:my-8 px-6 py-2 bg-white dark:bg-slate-700 shadow-lg inline-flex text-md items-center gap-3"
      onClick={() => router.back()}
    >
      <Image src="/back.svg" width={18} height={18} alt="back icon" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
