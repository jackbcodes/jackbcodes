import Link from 'next/link'
import { ReactNode } from 'react'

import { FiArrowRight, FiArrowUpRight, FiBook } from 'react-icons/fi'

type PostSummaryProps = {
  title: string
  date: string
  slug: string
  excerpt: string
  type: string
}

function timeSince(date: Date) {
  var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)

  var interval = seconds / 31536000

  if (interval > 1) {
    return Math.floor(interval) + 'yr ago'
  }
  interval = seconds / 2592000
  if (interval > 1) {
    return Math.floor(interval) + 'mo ago'
  }
  interval = seconds / 86400
  if (interval > 1) {
    return Math.floor(interval) + 'd ago'
  }
  interval = seconds / 3600
  if (interval > 1) {
    return Math.floor(interval) + 'hr ago'
  }
  interval = seconds / 60
  if (interval > 1) {
    return Math.floor(interval) + 'min ago'
  }
  return 'Just now'
}

const PostSummary = ({ title, date, slug, excerpt, type }: PostSummaryProps) => {
  return (
    <article className='flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center mb-5 text-gray-500'>
          <span className='bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800'>
            <FiBook className='mr-1 w-3 h-3' />
            {type}
          </span>
          <span className='text-sm'>{timeSince(new Date(date))}</span>
        </div>
        <h2 className='mb-2 text-2xl font-bold text-gray-900 dark:text-white'>
          <Link href={`/posts/${slug}`}>{title}</Link>
        </h2>
        <p className='mb-5 font-light text-gray-500 dark:text-gray-400 max line-clamp-3'>{excerpt}</p>
      </div>
      <div className='flex flex-1 justify-end items-end'>
        <Link
          href={`/posts/${slug}`}
          className='group inline-flex items-center font-medium text-primary-600 dark:text-primary-500 underline-offset-4 hover:underline'
        >
          Read more
          <FiArrowRight className='ml-2 w-4 h-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1' />
        </Link>
      </div>
    </article>
  )
}

export default PostSummary
