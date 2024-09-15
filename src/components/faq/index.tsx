import Link from 'next/link'
import React from 'react'

const Faq = () => {
  return (
    <section className='w-full flex flex-col gap-10 md:gap-14 2xl:gap-20'>
        <main className='w-full flex md:items-center justify-between flex-col md:flex-row gap-5'>
            <article className='flex flex-col gap-[10px] 2xl:gap-[14px]'>
                <h2 className='text-white text-xl md:text-[28px] 2xl:text-4xl font-bold whitespace-nowrap'>Frequently Asked Questions</h2>
                <p className='text-grey-60 text-[14px] md:text-base 2xl:text-lg font-light'>Got questions? We&apos;ve got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
            </article>
            <Link href={'/'} className='w-min bg-red-45 text-white px-5 2xl:px-6 py-4 2xl:py-[18px] text-[14px] 2xl:text-lg font-semibold rounded-md 2xl:rounded-lg whitespace-nowrap'>Ask a Question</Link>
        </main>
        <main></main>
    </section>
  )
}

export default Faq;