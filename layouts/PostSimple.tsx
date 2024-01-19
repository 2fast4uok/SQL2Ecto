import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, slug, date, title } = content
  const isIntroduction = title === 'Introduction'

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 text-lg font-medium leading-9 tracking-wide dark:prose-invert">
                {children}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-16 text-center text-xl font-semibold hover:text-neutral-600 dark:border-gray-700 dark:text-white dark:hover:text-neutral-300">
            <Link href="/">Back to Homepage</Link>
          </div>

          {/* I have switched the postitions of the prev/next paths as the navigation order has to be as it is on Main.tsx */}
          <footer
            className={`flex flex-row text-sm font-medium sm:text-xl ${
              isIntroduction ? 'justify-end' : 'justify-between'
            }`}
          >
            {next && next.path && (
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${next.path}`}
                  className="text-blue-900 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                  aria-label={`Next post: ${next.title}`}
                >
                  {isIntroduction ? `${next.title} →` : `← ${next.title}`}
                </Link>
              </div>
            )}
            {prev && prev.path && (
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${prev.path}`}
                  className="text-blue-900 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                  aria-label={`Previous post: ${prev.title}`}
                >
                  {isIntroduction ? ` ${prev.title}→` : `${prev.title} →`}
                </Link>
              </div>
            )}
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
