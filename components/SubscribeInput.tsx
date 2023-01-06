import { z } from 'zod'
import { useZorm } from 'react-zorm'
import { useMutation, useQuery } from 'react-query'

import { FiMail } from 'react-icons/fi'

const FORM_ID = '3850466'

const FormSchema = z.object({
  email_address: z
    .string()
    .email('Please enter a valid email')
    .transform((email) => email.toLowerCase()),
})

const SubscribeInput = () => {
  const subscribeSuccess = useQuery(
    'subscribeSuccess',
    () => {
      return fetch(`https://app.convertkit.com/forms/success?form_id=${FORM_ID}`)
    },
    { enabled: false },
  )

  const subscribe = useMutation(
    (data: { email_address?: string }) => {
      return fetch(`https://app.convertkit.com/forms/${FORM_ID}/subscriptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    },
    {
      onSettled: () => {
        subscribeSuccess.refetch()
      },
    },
  )

  const zo = useZorm('subscribe', FormSchema, {
    onValidSubmit: async (e) => {
      e.preventDefault()
      subscribe.mutate(e.data)
    },
  })

  if (subscribeSuccess.isSuccess)
    return (
      <div className='mx-auto max-w-screen-sm text-md text-center mt-12 text-gray-500 dark:text-gray-300'>
        Thank you for subscribing! Please check your email to confirm your subscription.
      </div>
    )

  return (
    <>
      <form
        data-sv-form={FORM_ID}
        data-uid='eaa19e34e7'
        data-format='inline'
        data-version='5'
        min-width='400 500 600 700 800 900 1000 1100'
        className='mt-12'
        ref={zo.ref}
        noValidate
      >
        <div className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'>
          <div className='relative w-full'>
            <label
              htmlFor={zo.fields.email_address()}
              className='hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Email address
            </label>
            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
              <FiMail className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </div>
            <input
              className='block z-1 p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Enter your email'
              type='email'
              id='email_address'
              name={zo.fields.email_address()}
            />
          </div>
          <div>
            <button
              type='submit'
              disabled={zo.validation?.success === false || subscribe.isLoading}
              className='py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
            >
              {subscribe.isLoading ? 'Submitting...' : 'Subscribe'}
            </button>
          </div>
        </div>

        <div className='mx-auto max-w-screen-sm text-sm text-left text-red-400 newsletter-form-footer mb-3'>
          {zo.errors.email_address((e) => (
            <p>{e.message}</p>
          ))}
        </div>

        <div className='mx-auto max-w-screen-sm text-sm text-left text-red-400 newsletter-form-footer mb-3'>
          {subscribeSuccess.isError || subscribe.isError
            ? 'Uh oh, there has been an error. Please try again or contact me if the issue persists'
            : undefined}
        </div>

        <div className='mx-auto max-w-screen-sm text-sm text-center text-gray-500 newsletter-form-footer dark:text-gray-400'>
          I send out a newsletter every other week on Mondays. No more, no less.
        </div>
      </form>
    </>
  )
}

export default SubscribeInput
