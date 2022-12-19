import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import Link from 'next/link'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import SubscribeInput from '../../components/SubscribeInput'
import DateFormatter from '../../components/DateFormatter'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const title = `${post.title} | jackbcodes`

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left'>
          Loading...
        </h1>
      ) : (
        <>
          <article className='container mx-auto px-5 mb-32'>
            <Head>
              <title>{title}</title>
              {/* <meta property='og:image' content={post.ogImage.url} /> */}
            </Head>
            <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
              <div className='mx-auto w-full max-w-2xl'>
                <div className='mb-6'>
                  <Link
                    href='/'
                    className='group inline-flex items-center font-medium text-primary-600 dark:text-primary-500 underline-offset-4 hover:underline'
                  >
                    <FiArrowLeft className='mr-2 w-4 h-4 transition-transform duration-200 ease-in-out group-hover:-translate-x-1' />
                    Back to home
                  </Link>
                </div>
                <article className='format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
                  <header className='mb-4 lg:mb-6 not-format'>
                    <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>
                      {post.title}
                    </h1>
                    <DateFormatter dateString={post.date} />
                  </header>
                  <p className='lead'>{post.lead}</p>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
              </div>
            </main>

            {/* <aside aria-label='Related articles' className='py-8 lg:py-24 bg-gray-50 dark:bg-gray-800 rounded-lg'>
              <div className='px-4 mx-auto max-w-screen-xl'>
                <h2 className='mb-8 text-2xl font-bold text-gray-900 dark:text-white'>Other articles</h2>
                <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-4'>
                  <article className='max-w-xs'>
                    <a href='#'>
                      <img
                        src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png'
                        className='mb-5 rounded-lg'
                        alt='Image 1'
                      />
                    </a>
                    <h2 className='mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white'>
                      <a href='#'>Our first office</a>
                    </h2>
                    <p className='mb-4 font-light text-gray-500 dark:text-gray-400'>
                      Over the past year, Volosoft has undergone many changes! After months of preparation.
                    </p>
                    <Link
                      href={`/posts/123`}
                      className='group inline-flex items-center font-medium text-primary-600 underline-offset-4 dark:text-primary-500 hover:underline'
                    >
                      Read more
                      <FiArrowRight className='ml-2 w-4 h-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1' />
                    </Link>
                  </article>
                  <article className='max-w-xs'>
                    <a href='#'>
                      <img
                        src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png'
                        className='mb-5 rounded-lg'
                        alt='Image 2'
                      />
                    </a>
                    <h2 className='mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white'>
                      <a href='#'>Enterprise design tips</a>
                    </h2>
                    <p className='mb-4 font-light text-gray-500 dark:text-gray-400'>
                      Over the past year, Volosoft has undergone many changes! After months of preparation.
                    </p>
                    <Link
                      href={`/posts/123`}
                      className='group inline-flex items-center font-medium text-primary-600 underline-offset-4 dark:text-primary-500 hover:underline'
                    >
                      Read more
                      <FiArrowRight className='ml-2 w-4 h-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1' />
                    </Link>
                  </article>
                  <article className='max-w-xs'>
                    <a href='#'>
                      <img
                        src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png'
                        className='mb-5 rounded-lg'
                        alt='Image 3'
                      />
                    </a>
                    <h2 className='mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white'>
                      <a href='#'>We partnered with Google</a>
                    </h2>
                    <p className='mb-4 font-light text-gray-500 dark:text-gray-400'>
                      Over the past year, Volosoft has undergone many changes! After months of preparation.
                    </p>
                    <Link
                      href={`/posts/123`}
                      className='group inline-flex items-center font-medium text-primary-600 underline-offset-4 dark:text-primary-500 hover:underline'
                    >
                      Read more
                      <FiArrowRight className='ml-2 w-4 h-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1' />
                    </Link>
                  </article>
                  <article className='max-w-xs'>
                    <a href='#'>
                      <img
                        src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png'
                        className='mb-5 rounded-lg'
                        alt='Image 4'
                      />
                    </a>
                    <h2 className='mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white'>
                      <a href='#'>Our first project with React</a>
                    </h2>
                    <p className='mb-4 font-light text-gray-500 dark:text-gray-400'>
                      Over the past year, Volosoft has undergone many changes! After months of preparation.
                    </p>
                    <Link
                      href={`/posts/123`}
                      className='group inline-flex items-center font-medium text-primary-600 underline-offset-4 dark:text-primary-500 hover:underline'
                    >
                      Read more
                      <FiArrowRight className='ml-2 w-4 h-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1' />
                    </Link>
                  </article>
                </div>
              </div>
            </aside> */}

            <section className='bg-white dark:bg-gray-900 mt-6'>
              <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
                <div className='mx-auto max-w-screen-md text-center'>
                  <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
                    Sign up to my newsletter
                  </h2>
                  <p className='mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400'>
                    Did you find this useful? Subscribe to stay in the loop and receive email notifications when I post
                    something new.
                  </p>
                  <SubscribeInput />
                </div>
              </div>
            </section>
          </article>
        </>
      )}
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
