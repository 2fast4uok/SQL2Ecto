import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import serverstack from 'public/static/images/serverstack.png'
import Image from 'next/image'
import { useRouter } from 'next/router';

const MAX_DISPLAY = 50

export default function Home({ posts }) {
  const basic_posts = posts.filter((post) => post.level == 'Basic')
  const intermediate_posts = posts.filter((post) => post.level == 'Intermediate')
  const IntroductionPost = posts.find((post) => post.title === 'Introduction');
  const IntroductionUrl = IntroductionPost ? `/blog/${IntroductionPost.slug}` : '/'; 
  return (
    <>
      <div className='dark:bg-gray-950'>
        {/*     <!-- Hero Section -->
           */}{" "}
        <div className="grid md:grid-cols-2 mt-28">
          <div className="space-y-8">
            <h1 className="md:text-7xl text-5xl font-semibold text-blue-900 dark:text-blue-400">
              Welcome to the SQL to Ecto Tutorial
            </h1>
            <h2 className="text-2xl xl:pr-7 dark:text-white">
              {siteMetadata.description}
            </h2>
            <Link href={IntroductionUrl}>
              <button className="px-8 py-3 mt-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-white dark:text-white font-semibold rounded">
                Get Started
              </button>
            </Link>
          </div>
          <div className="md:grid hidden justify-items-end">
            <Image
              src={serverstack}
              width={300}
              height={300}
              alt="Server Stack Image"
            />
          </div>
        </div>
        <div className="mt-28 mb-10">
          <h2
            id="Basic"
            className="md:text-center md:text-5xl text-3xl font-semibold text-blue-900 dark:text-blue-400"
          >
            Basic SQL to Ecto
          </h2>
        </div>
        <div className="grid md:grid-cols-3 md:gap-x-5 md:gap-y-10 gap-y-4 ">
          {!basic_posts.length && 'No basic posts found.'}
          {basic_posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, title, summary, lesson, } = post
            return (
              <Link key={slug} href={`/blog/${slug}`} className="group overflow-hidden hover:scale-105 duration-300 bg-blue-50 rounded-xl p-4 md:p-8 dark:shadow-inner hover:dark:shadow-lg hover:dark:shadow-blue-500 shadow-md hover:bg-blue-800 transition-all h-fit">
                <p className="text-blue-950 uppercase text-[10px] md:text-xs font-medium group-hover:text-white pb-4">
                  {lesson}
                </p>
                <h3 className="text-blue-900 text-xl md:text-3xl h-10 md:h-24 group-hover:text-white text-clip overflow-hidden font-medium line-clamp-2"
                >
                  {title}
                </h3>
                <div className="group-hover:text-white md:text-lg text-base line-clamp-2">
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
        <div className="mt-28 mb-10">
          <h2
            id="Intermediate"
            className="md:text-center md:text-5xl font-semibold text-3xl text-blue-900 dark:text-blue-400"
          >
            Intermediate SQL to Ecto
          </h2>
        </div>
        <div className="grid md:grid-cols-3 md:gap-x-5 md:gap-y-10 gap-y-4 ">
          {!intermediate_posts.length && 'No intermediate posts found.'}
          {intermediate_posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, title, summary, lesson } = post
            return (
              <Link key={slug} href={`/blog/${slug}`} className="group overflow-hidden hover:scale-105 duration-300 bg-blue-50 rounded-xl p-4 md:p-8 dark:shadow-inner hover:dark:shadow-lg hover:dark:shadow-blue-500 shadow-md hover:bg-blue-800 transition-all h-fit">
                <p className="text-blue-950 uppercase text-[10px] md:text-xs font-medium group-hover:text-white pb-4">
                  {lesson}
                </p><h3 className="text-blue-900 text-xl md:text-3xl h-10 md:h-24 group-hover:text-white text-clip overflow-hidden font-medium line-clamp-2"
                >
                  {title}
                </h3>
                <div className="group-hover:text-white md:text-lg text-base line-clamp-2">
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
      </div>
    </>
  )
}
