import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import serverstack from 'public/static/images/serverstack.png'
import Image from 'next/image'

const MAX_DISPLAY = 50

export default function Home({ posts }) {
  return (
    <>
      <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl  mx-auto px-4 md:px-0">
        {/*     <!-- Hero Section -->
           */}{" "}
        <div className="grid md:grid-cols-2 mt-28">
          <div className="space-y-8">
            <h1 className="md:text-7xl text-5xl text-blue-900">
              Welcome to the SQL Tutorial
            </h1>
            <h2 className="text-2xl xl:pr-7">
              {siteMetadata.description}
            </h2>
            <Link href="intro.html">
              <button className="px-8 py-3 mt-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 dark:text-white font-semibold rounded">
                Get Started
              </button>
            </Link>
          </div>
          <div className="md:grid hidden justify-items-end">
            <Image
              src={serverstack}
              width={270}
              height={270}
              alt="Server Stack Image"
            />
          </div>
        </div>
        <div className="mt-28 mb-10">
          <h2
            id="basic"
            className="md:text-center md:text-5xl text-3xl text-blue-900"
          >
            Basic SQL
          </h2>
        </div>
        <div className="grid md:grid-cols-3 md:gap-x-5 md:gap-y-10 gap-y-4 ">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, title, summary, lesson } = post
            return (
              <Link key={slug} href={`/blog/${slug}`} className="bg-white rounded-xl p-4 md:p-8 shadow group-hover:bg-blue-800 transition-all h-fit">
                <p className="text-blue-950 uppercase text-[10px] md:text-xs font-medium group-hover:text-white pb-4">
                  {lesson}
                </p><h3 className="text-blue-900 text-xl md:text-3xl h-10 md:h-24 group-hover:text-white text-clip overflow-hidden line-clamp-2"
                >
                  {title}
                </h3>
                <div className="prose group-hover:text-white md:text-lg text-base line-clamp-2">
                  {summary}
                </div>
                <p
                  className="text-md md:text-lg font-semibold pt-2 md:pt-4 group-hover:text-white"
                >
                  Read now &rarr;
                </p>
              </Link>

            )
          })}
        </div >
      </div >
      <footer>
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="mt-8 text-center items-center text-base text-gray-400">
            Made with{" "}
            <span className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>{" "}
            by tālam.
          </p>
        </div>
      </footer>
    </>
  )
}
