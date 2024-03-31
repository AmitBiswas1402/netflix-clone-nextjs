import Image from "next/image";
import { ReactNode } from "react";
import bgimg from "../../public/login_background.jpg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Image
        src={bgimg}
        alt=""
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      {children}
    </div>
  );
}
