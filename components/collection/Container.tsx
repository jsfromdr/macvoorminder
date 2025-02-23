export default function Container({ children }: { children: JSX }) {
  return <main className="flex items-start gap-8 p-4 pb-64">{children}</main>;
}
