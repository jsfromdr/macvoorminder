import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <main className="flex items-start gap-8 p-4 pb-64">{children}</main>;
}
