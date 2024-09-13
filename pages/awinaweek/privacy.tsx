import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Privacy() {
  return (
    <Layout>
      <article className='container mx-auto px-5 mb-32'>
        <Head>
          <title>AWinAWeek | Privacy Policy</title>
        </Head>
        <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
          <div className='mx-auto w-full max-w-2xl'>
            <article className='format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
              <header className='mb-4 lg:mb-6 not-format'>
                <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>
                  Privacy Policy
                </h1>
              </header>
              <h3>Introduction</h3>
              <p>
                This Privacy Policy describes how <strong>AWinAWeek</strong> ("we", "us", or "our") handles the personal
                information of users ("you" or "your") when using our mobile application. By using{' '}
                <strong>AWinAWeek</strong>, you agree to the collection, storage, and use of your data as described
                below.
              </p>

              <h3>1. No Account Required</h3>
              <p>
                You do not need to create an account to use <strong>AWinAWeek</strong>. We do not collect any personally
                identifiable information such as your name, email address, or any other contact details.
              </p>

              <h3>2. Local Data Storage</h3>
              <p>
                All information you record in <strong>AWinAWeek</strong>, such as achievements and related data, is
                stored locally on your device. We do not transmit or store any data on external servers. You have full
                control over your data, and we do not have access to it.
              </p>

              <h3>3. Data Security</h3>
              <p>
                Since your data is stored locally on your device, it is subject to the security settings and measures on
                your device. We recommend that you use secure passwords, enable encryption, and take precautions to
                protect your device from unauthorized access.
              </p>

              <h3>4. No Third-Party Access</h3>
              <p>
                We do not share or sell your data to any third parties. Additionally, <strong>AWinAWeek</strong> does
                not use any third-party services or integrations that collect or access your data.
              </p>

              <h3>5. User Control</h3>
              <p>
                You can modify or delete your achievements and other recorded data at any time directly within the app.
                Once deleted, this data cannot be recovered.
              </p>

              <h3>6. Changes to the Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. If we make any significant changes, we will notify
                you through the app.
              </p>
            </article>
          </div>
        </main>
      </article>
    </Layout>
  )
}
