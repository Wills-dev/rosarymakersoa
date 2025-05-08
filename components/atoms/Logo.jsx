import Link from "next/link";
import Image from "next/image";

import { ROUTES } from "../../lib/constants/routes";

const Logo = () => (
  <div className="">
    <Link href={ROUTES?.HOME}>
      <Image
        src="/assets/images/RMOA-Logo.png"
        width={140}
        height={80}
        alt="logo"
        className="object-contain h-auto max-sm:w-28"
        priority
      />
    </Link>
  </div>
);

export default Logo;
