import Image from 'next/image'
import React from 'react'

const Metric = ({ imageUrl, alt, value, title, href, textStyle, isAuthor }: { imageUrl: string, alt: string, value: number | string, title: string, href?: string, textStyle?: string, isAuthor?: boolean }) => {
    return (
        <div className='flex flex-wrap gap-1'>
            <Image
                src={imageUrl}
                width={16}
                height={16}
                alt={alt}
                className={`object-contain ${href ? 'rounded-full' : ''}`}
            />
            <p className={`${textStyle} flex items-center gap-1`}>
                {title}
                {value}
            </p>
        </div>
    )
}

export default Metric