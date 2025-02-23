import Image from "next/image";

export default function Subfooter() {
  return (
    <div className="flex items-center justify-between bg-slate-900 p-6">
      <p className="text-gray-300">
        © 2025 Mac voor minder. All rights reserved
      </p>
      <div className="flex items-center gap-2">
        <Image
          className="first"
          src="https://www.macvoorminder.nl/wp-content/themes/treesign/assets/images/payments/ideal.svg"
          alt="Ideal"
          width={32}
          height={24}
        />
        <Image
          src="https://www.macvoorminder.nl/wp-content/themes/treesign/assets/images/payments/bancontact.svg"
          alt="Bancontact"
          width={32}
          height={24}
        />
        <Image
          src="https://www.macvoorminder.nl/wp-content/themes/treesign/assets/images/payments/creditcard.svg"
          alt="Creditcard"
          width={32}
          height={24}
        />
        <Image
          src="https://www.macvoorminder.nl/wp-content/themes/treesign/assets/images/payments/applepay.svg"
          alt="Applepay"
          width={32}
          height={24}
        />
      </div>
    </div>
  );
}
