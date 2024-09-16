'use client';
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import styles from './styles.module.css'
  
type AccordionItem = {
  id: string | number,
  title: string,
  description: string
}


const FaqAccordion = () => {

  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: "StreamVibe nedir?",
      description: "StreamVibe, filmleri ve dizileri isteğe bağlı olarak izlemenizi sağlayan bir yayın hizmetidir."
    },
    {
      id: 2,
      title: "StreamVibe'in maliyeti nedir?",
      description: "StreamVibe'in çeşitli abonelik seçenekleri bulunmaktadır ve fiyatlar aylık olarak değişkenlik göstermektedir."
    },
    {
      id: 3,
      title: "StreamVibe hangi içerikleri sunar?",
      description: "StreamVibe, geniş bir film, dizi ve belgesel arşivi sunar. Yeni içerikler düzenli olarak eklenmektedir."
    },
    {
      id: 4,
      title: "StreamVibe'e nasıl üye olabilirim?",
      description: "StreamVibe'e web sitesinden veya mobil uygulama üzerinden kayıt olarak kolayca üye olabilirsiniz."
    },
    {
      id: 5,
      title: "StreamVibe ücretsiz deneme sunuyor mu?",
      description: "Evet, StreamVibe yeni kullanıcılarına sınırlı bir süre için ücretsiz deneme fırsatı sunmaktadır."
    },
    {
      id: 6,
      title: "StreamVibe hangi cihazlarda kullanılabilir?",
      description: "StreamVibe, akıllı televizyonlar, telefonlar, tabletler ve bilgisayarlar gibi birçok cihazda kullanılabilir."
    },
    {
      id: 7,
      title: "StreamVibe çevrimdışı izleme imkanı sunuyor mu?",
      description: "Evet, StreamVibe bazı içerikleri çevrimdışı izlemek için indirmenize olanak sağlar."
    },
    {
      id: 8,
      title: "StreamVibe müşteri hizmetlerine nasıl ulaşabilirim?",
      description: "Müşteri hizmetlerine StreamVibe web sitesi üzerinden canlı sohbet, e-posta veya telefonla ulaşabilirsiniz."
    }
  ]
  
  const midPoint = Math.ceil(accordionData.length / 2);
  const firstColumnFaqs = accordionData.slice(0, midPoint); 
  const secondColumnFaqs = accordionData.slice(midPoint); 
    console.log(midPoint)
    console.log(firstColumnFaqs)
    console.log(secondColumnFaqs)
  return (
    <main className='w-full flex items-start justify-between flex-col xl:flex-row gap-x-5 md:gap-x-10 2xl:gap-x-20'>
        <Accordion type="single" collapsible className='w-full grid grid-cols-1'>
          {firstColumnFaqs.map((item, index)=> (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border-0">
                <article className='w-full flex items-center jus gap-4 2xl:gap-5 px-[10px] py-5 md:p-6 2xl:p-8'>
                <span className=' p-3 md:p-4 2xl:p-5 bg-black-12 font-semibold text-xl rounded-xl'>
                    {(index + 1) > 9 ? index : `0${index}`}
                </span>
                <div className='w-full space-y-5'>
                  <AccordionTrigger className='hover:underline-offset-1 text-lg md:text-xl 2xl:text-[22px] font-medium text-white p-0'>{item.title}</AccordionTrigger>
                  <AccordionContent className='text-grey-60 font-light text-sm md:text:base 2xl:text-lg'>
                    {item.description}
                  </AccordionContent>
                </div>
                </article>
              <div className={`${styles.faqBorder}`}></div>
            </AccordionItem>
          ))}
          {/* mobil */}
          <div className='w-full block xl:hidden'>
          {secondColumnFaqs.map((item, index)=> (
              <AccordionItem key={index + midPoint} value={`item-${index + 1}`} className="border-0">
                <article className='w-full flex items-center jus gap-4 2xl:gap-5 px-[10px] py-5 md:p-6 2xl:p-8'>
                <span className=' p-3 md:p-4 2xl:p-5 bg-black-12 font-semibold text-xl rounded-xl'>
                    {(midPoint + index) > 9 ? (midPoint + index) : `0${midPoint + index}`}
                </span>
                <div className='w-full space-y-5'>
                  <AccordionTrigger className='hover:underline-offset-1 text-lg md:text-xl 2xl:text-[22px] font-medium text-white p-0'>{item.title}</AccordionTrigger>
                  <AccordionContent className='text-grey-60 font-light text-sm md:text:base 2xl:text-lg'>
                    {item.description}
                  </AccordionContent>
                </div>
                </article>
              <div className={`${styles.faqBorder}`}></div>
            </AccordionItem>
          ))}
          </div>
        </Accordion>
        <Accordion type="single" collapsible className='w-full xl:grid grid-cols-1 hidden'>
          <AccordionItem value="item-5" className="border-0">
              <article className='w-full flex items-center jus gap-4 2xl:gap-5 px-[10px] py-5 md:p-6 2xl:p-8'>
              <span className='p-3 md:p-4 2xl:p-5 bg-black-12 font-semibold text-xl rounded-xl'>
                  01
              </span>
              <div className='w-full space-y-5'>
                <AccordionTrigger className='hover:underline-offset-1 text-lg md:text-xl 2xl:text-[22px] font-medium text-white p-0'>What is the StreamVibe free trial?
                </AccordionTrigger>
                <AccordionContent className='text-grey-60 font-light text-sm md:text:base 2xl:text-lg'>
                  StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                </AccordionContent>
              </div>
              </article>
            <div className={`${styles.faqBorder}`}></div>
          </AccordionItem>
          <AccordionItem value="item-6" className="border-0">
            <article className='w-full flex items-center jus gap-4 2xl:gap-5 px-[10px] py-5 md:p-6 2xl:p-8'>
            <span className='p-3 md:p-4 2xl:p-5 bg-black-12 font-semibold text-xl rounded-xl'>
                01
            </span>
            <div className='w-full space-y-5'>
              <AccordionTrigger className='hover:underline-offset-1 text-lg md:text-xl 2xl:text-[22px] font-medium text-white p-0'>How much does StreamVibe cost?
              </AccordionTrigger>
              <AccordionContent className='text-grey-60 font-light text-sm md:text:base 2xl:text-lg'>
                StreamVibe is a streaming service that allows you to watch movies and shows on demand.
              </AccordionContent>
            </div>
            </article>
          <div className={`${styles.faqBorder}`}></div>
          </AccordionItem>
          <AccordionItem value="item-7" className="border-0">
            <article className='w-full flex items-center jus gap-4 2xl:gap-5 px-[10px] py-5 md:p-6 2xl:p-8'>
            <span className='p-3 md:p-4 2xl:p-5 bg-black-12 font-semibold text-xl rounded-xl'>
                01
            </span>
            <div className='w-full space-y-5'>
              <AccordionTrigger className='hover:underline-offset-1 text-lg md:text-xl 2xl:text-[22px] font-medium text-white p-0'>What content is available on StreamVibe?
              </AccordionTrigger>
              <AccordionContent className='text-grey-60 font-light text-sm md:text:base 2xl:text-lg'>
                StreamVibe is a streaming service that allows you to watch movies and shows on demand.
              </AccordionContent>
            </div>
            </article>
          <div className={`${styles.faqBorder}`}></div>
          </AccordionItem>
          <AccordionItem value="item-8" className="border-0">
            <article className='w-full flex items-center jus gap-4 2xl:gap-5 px-[10px] py-5 md:p-6 2xl:p-8'>
            <span className='p-3 md:p-4 2xl:p-5 bg-black-12 font-semibold text-xl rounded-xl'>
                01
            </span>
            <div className='w-full space-y-5'>
              <AccordionTrigger className='hover:underline-offset-1 text-lg md:text-xl 2xl:text-[22px] font-medium text-white p-0'>How do I sign up for StreamVibe?
              </AccordionTrigger>
              <AccordionContent className='text-grey-60 font-light text-sm md:text:base 2xl:text-lg'>
                StreamVibe is a streaming service that allows you to watch movies and shows on demand.
              </AccordionContent>
            </div>
            </article>
          <div className={`${styles.faqBorder}`}></div>
          </AccordionItem>
        </Accordion>
    </main>
  )
}

export default FaqAccordion