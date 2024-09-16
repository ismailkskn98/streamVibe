import Link from 'next/link'
import React, { ReactElement } from 'react'

type ButtonProps = {
  Icon?: React.ElementType
  title: string
  url: string,
}

const Button: React.FC<ButtonProps> = ({title, Icon, url}) => {
  return (
    <Link href={url} className="w-min h-min flex items-center gap-1 px-6 py-[14px] 2xl:py-[18px] bg-red-45 hover:bg-red-55 transition-all text-white rounded-lg">
        {Icon && <Icon className="w-6 h-6 2xl:w-7 2xl:h-7" />}
        <span className="text-sm md:text-lg 2xl:text-lg font-semibold whitespace-nowrap capitalize">{title}</span>
      </Link>
  )
}

export default Button