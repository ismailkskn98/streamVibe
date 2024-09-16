
import React from 'react'
import FaqTitle from './FaqTitle';
import FaqAccordion from './FaqAccordion';

const Faq = () => {
  return (
    <section className='w-full flex flex-col gap-10 md:gap-14 2xl:gap-20'>
        <FaqTitle />
        <FaqAccordion />
    </section>
  )
}

export default Faq;