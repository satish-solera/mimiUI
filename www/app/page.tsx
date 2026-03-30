import Link from "next/link"


export default function Home() {

  return (
    <div className="md:p-20 p-4 w-full">
      <div className="pb-10 flex gap-2">
        <a 
        href="https://github.com/satish-solera"
        target="_blank"
        rel="noopener"
        >

        <button 
        aria-label="github"
        className="border dark:border-gray-600/80 border-gray-200 py-2 px-6 rounded-md  cursor-pointer hover:bg-neutral-900 active:bg-neutral-900 select-none"
        >
          Github
        </button>
          </a>
        <button 
        aria-label="twitter"
        className="border dark:border-gray-600/80 border-gray-200 py-2 px-6 rounded-md  cursor-pointer hover:bg-neutral-900 active:bg-neutral-900 select-none"
        
        >
          Twitter (x)
        </button>
          <a href="https://www.linkedin.com/in/satish-solera-120309288">
        <button 
        aria-label="linkedIn"
        className="border dark:border-gray-600/80 border-gray-200 py-2 px-6 rounded-md  cursor-pointer hover:bg-neutral-900 active:bg-neutral-900 select-none"
        
        >
          LinkedIn
        </button>
          </a>
      </div>
      <p>
        Hey satish this side <br />
        I make intractive, accessible ui.
      </p>
      <h1 className="text-xl pt-10">
        Works
      </h1>
      <div className="w-20">
        <Link href='/list'>
        <p className="dark:hover:text-white/80 text-md">
          - List
        </p>
      </Link>
      </div>
    </div>
  );
}
