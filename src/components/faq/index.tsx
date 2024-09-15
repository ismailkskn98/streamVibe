import Link from 'next/link'
import React from 'react'

const Faq = () => {
  return (
    <section className='w-full flex flex-col gap-20'>
        <main className='w-full flex items-center justify-between'>
            <article className='flex flex-col gap-[14px]'>
                <h2 className='text-white text-4xl font-bold whitespace-nowrap'>Frequently Asked Questions</h2>
                <p className='text-grey-60 text-lg font-light'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
            </article>
            <Link href={'/'} className='bg-red-45 text-white px-6 py-[18px] text-lg font-semibold rounded-lg'>Ask a Question</Link>
        </main>
        <main></main>
    </section>
  )
}

export default Faq