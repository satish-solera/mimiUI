import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-full ">
      <div className=" pl-14 pt-10 w-full mx-auto max-w-2xl h-full border-l border-gray-200 dark:border-gray-500">
        <p>
          Hey satish this side. <br />I make intractive, accessible ui.
        </p>
        <h1 className="text-xl pt-4 pb-4">Works</h1>
        <div className="w-20">
          <WorkBtn />
        </div>
        <div className="pt-4 flex gap-2">
          <HandleButton
            href="https://github.com/satish-solera"
            btnLabel="Github"
          />
          <HandleButton
            href="https://x.com/satishsolera"
            btnLabel="x (twitter)"
          />
          <HandleButton
            href="https://www.linkedin.com/in/satish-solera-120309288"
            btnLabel="LinkedIn"
          />
        </div>
      </div>
    </div>
  );
}

export const HandleButton = ({
  href,
  btnLabel,
}: {
  href: string;
  btnLabel: string;
}) => {
  return (
    <a href={href} target="_blank" rel="noopener">
      <button
        aria-label={btnLabel}
        className=" rounded-md  cursor-pointer  select-none "
      >
        {btnLabel}
      </button>
    </a>
  );
};

export const WorkBtn = () => {
  return (
    <Link href="/list">
      <div className="flex gap-1">
        <span>-</span>
        <button
          aria-label="list"
          className=" text-md hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          List
        </button>
      </div>
    </Link>
  );
};
