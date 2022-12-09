import React from 'react'
import Head from 'next/head'

import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'

import Layout from '../components/Layout'
import PostSummary from '../components/PostSummary'
import SubscribeInput from '../components/SubscribeInput'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>jackbcodes</title>
      </Head>
      <section className='bg-white dark:bg-gray-900 mb-20'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='mx-auto max-w-screen-sm text-center lg:mb-20 mb-8'>
            <h2 className='mb-4 text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white'>Hey, I'm Jack</h2>
            <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
              A software developer who's all about building quality products and helping others do the same. If you want
              to stay in the loop, hit that subscribe button for my newsletter.
            </p>
            <SubscribeInput />
          </div>
          <div className='grid gap-8 lg:grid-cols-2'>
            {allPosts.map((post) => (
              <PostSummary
                title={post.title}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
                type={post.type}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'type'])

  return {
    props: { allPosts },
  }
}
