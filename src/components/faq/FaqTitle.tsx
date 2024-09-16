import React from 'react'
import Link from 'next/link'
import Button from '../common/Button'

const FaqTitle = () => {
  return (
    <main className='w-full flex md:items-center justify-between flex-col md:flex-row gap-5'>
    <article className='flex flex-col gap-[10px] 2xl:gap-[14px]'>
        <h2 className='text-white text-xl md:text-[28px] 2xl:text-4xl font-bold whitespace-nowrap'>Sıkça Sorulan Sorular</h2>
        <p className='text-grey-60 text-[14px] md:text-base 2xl:text-lg font-light'>Sorularınız mı var? Cevaplarımız var! StreamVibe hakkında en sık sorulan soruların yanıtlarını bulmak için SSS bölümümüze göz atın.</p>
    </article>
    <Button title='Soru Sor' url="/" />
  </main>
  )
}

export default FaqTitle