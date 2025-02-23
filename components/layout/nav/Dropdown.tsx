/*
 * Dropdown
 */

export default function Dropdown({ children, show, onMouseEnter }) {
  return (
    <div
      className={`${show ? "flex" : "hidden"} absolute -top-10 bottom-0 left-0 h-fit rounded-lg bg-white py-2 shadow-lg`}
      onMouseEnter={onMouseEnter}
    >
      <ul className="flex flex-col items-center gap-2">{children}</ul>
    </div>
  );
}
