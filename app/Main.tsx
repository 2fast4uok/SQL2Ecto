import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import serverstack from 'public/static/images/serverstack.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const MAX_DISPLAY = 50

export default function Home({ posts }) {
  const basic_posts = posts.filter((post) => post.level == 'Basic')
  const intermediate_posts = posts.filter((post) => post.level == 'Intermediate')
  const IntroductionPost = posts.find((post) => post.title === 'Introduction')
  const IntroductionUrl = IntroductionPost ? `/blog/${IntroductionPost.slug}` : '/'
  return (
    <>
      {/*     <!-- Hero Section -->
       */}{' '}
      <div className="mt-28 grid md:grid-cols-2">
        <div className="space-y-8">
          <h1 className="text-5xl font-semibold text-blue-900 dark:text-blue-400 md:text-7xl">
            Welcome to the SQL to Ecto Tutorial
          </h1>
          <h2 className="text-2xl dark:text-white xl:pr-7">{siteMetadata.description}</h2>
          <Link href={IntroductionUrl}>
            <button className="mt-10 rounded bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:text-white dark:focus:ring-cyan-800">
              Get Started
            </button>
          </Link>
        </div>
        <div className="hidden justify-items-end md:grid">
          <Image src={serverstack} width={300} height={300} alt="Server Stack Image" />
        </div>
      </div>
      <div className="mb-10 mt-28">
        <h2
          id="Basic"
          className="text-3xl font-semibold text-blue-900 dark:text-blue-400 md:text-center md:text-5xl"
        >
          Basic SQL to Ecto
        </h2>
      </div>
      <div className="grid gap-y-4 md:grid-cols-3 md:gap-x-5 md:gap-y-10 ">
        {!basic_posts.length && 'No basic posts found.'}
        {basic_posts.slice(0, MAX_DISPLAY).map((post) => {
          const { slug, title, summary, lesson } = post
          return (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group h-fit overflow-hidden rounded-xl bg-blue-50 p-4 shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-800 dark:bg-blue-100 dark:shadow-inner dark:hover:bg-blue-800 hover:dark:shadow-lg hover:dark:shadow-blue-600 md:p-8"
            >
              <p className="pb-4 text-[10px] font-medium uppercase text-blue-950 group-hover:text-white md:text-xs">
                {lesson}
              </p>
              <h3 className="line-clamp-2 h-10 overflow-hidden text-clip text-xl font-medium text-blue-900 group-hover:text-white md:h-24 md:text-3xl">
                {title}
              </h3>
              <div className="line-clamp-2 text-base group-hover:text-white md:text-lg">
                {summary}
              </div>
              <p className="text-md pt-2 font-semibold group-hover:text-white md:pt-4 md:text-lg">
                Read now &rarr;
              </p>
            </Link>
          )
        })}
      </div>
      <div className="mb-10 mt-28">
        <h2
          id="Intermediate"
          className="text-3xl font-semibold text-blue-900 dark:text-blue-400 md:text-center md:text-5xl"
        >
          Intermediate SQL to Ecto
        </h2>
      </div>
      <div className="grid gap-y-4 md:grid-cols-3 md:gap-x-5 md:gap-y-10 ">
        {!intermediate_posts.length && 'No intermediate posts found.'}
        {intermediate_posts.slice(0, MAX_DISPLAY).map((post) => {
          const { slug, title, summary, lesson } = post
          return (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group h-fit overflow-hidden rounded-xl bg-blue-50 p-4 shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-800 dark:bg-blue-100 dark:shadow-inner dark:hover:bg-blue-800 hover:dark:shadow-lg hover:dark:shadow-blue-600 md:p-8"
            >
              <p className="pb-4 text-[10px] font-medium uppercase text-blue-950 group-hover:text-white md:text-xs">
                {lesson}
              </p>
              <h3 className="line-clamp-2 h-10 overflow-hidden text-clip text-xl font-medium text-blue-900 group-hover:text-white md:h-24 md:text-3xl">
                {title}
              </h3>
              <div className="line-clamp-2 text-base group-hover:text-white md:text-lg">
                {summary}
              </div>
              <p className="text-md pt-2 font-semibold group-hover:text-white md:pt-4 md:text-lg">
                Read now &rarr;
              </p>
            </Link>
          )
        })}
      </div>
    </>
  )
}
