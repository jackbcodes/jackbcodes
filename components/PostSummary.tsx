import Link from 'next/link'
import { ReactNode } from 'react'

import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'

type PostSummaryProps = {
  title: string
  date: string
  slug: string
  excerpt: string
}

const PostSummary = ({ title, date, slug, excerpt }: PostSummaryProps) => {
  return (
    <article className='flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center mb-5 text-gray-500'>
          <span className='bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800'>
            <svg className='mr-1 w-3 h-3' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
            </svg>
            Tutorial
          </span>
          <span className='text-sm'>14 days ago</span>
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
