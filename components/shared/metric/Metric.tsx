import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Metric = ({ imageUrl, alt, value, title, href, textStyle, isAuthor }: { imageUrl: string, alt: string, value: number | string, title: string, href?: string, textStyle?: string, isAuthor?: boolean }) => {
    const content = (
        <>
            <Image
                src={imageUrl}
                width={16}
                height={16}
                alt={alt}
                className={`object-contain ${href ? 'rounded-full' : ''}`}
            />
            <p className={`${textStyle} flex items-center gap-1`}>
                {value}
                {' '}
                <span className={`small-regular line-clamp-1 ${isAuthor ? 'max-sm:hidden' : ''}`}>
                    {title}
                </span>
            </p>
        </>
    )


    if (href) {
        return (
            <Link href={href} className='flex-center gap-1'>
                {content}
            </Link>)
    } else {
        return (
            <div className='flex flex-wrap gap-1'>
                {content}
            </div>
        )
    }


}

export default Metric