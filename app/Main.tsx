import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
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
        <ul className="grid md:grid-cols-3 md:gap-x-5 md:gap-y-10 gap-y-4">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
