import Image from "next/image";
import Link from "next/link";

function LogoWhite() {
  return (
    <Link href="/">
      <Image
        className="cursor-pointer"
        alt="Macvoorminder logo White"
        src="https://cdn.shopify.com/s/files/1/0878/4684/6800/files/Logo_White.svg?v=1739968974"
        width={200}
        height={50}
      />
    </Link>
  );
}

function LogoBlack() {
  return (
    <Link href="/">
      <Image
        className="cursor-pointer"
        alt="Macvoorminder logo White"
        src="https://cdn.shopify.com/s/files/1/0878/4684/6800/files/Logo_Black.svg?v=1739968997"
        width={200}
        height={50}
      />
    </Link>
  );
}

export { LogoWhite, LogoBlack };
