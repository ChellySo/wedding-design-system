import { forwardRef } from "react";
import { classNames } from "../styling";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { LinkInternal } from "./LinkInternal";
import { LinkExternal } from "./LinkExternal";

export interface CardProps {
    className?: string
    size: 'sm' | 'lg'
    imageSrc?: string
    title?: string
    children?: React.ReactElement
    buttonText?: string
    hrefButtonLink?: string
    disableButton?: boolean
    externalLink?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, imageSrc, title, children, size, buttonText, hrefButtonLink, disableButton, externalLink }, ref) => {
    return (
        <div className={classNames(className, `${size === 'sm' ? 'max-w-sm' : 'max-w-2xl'}`, 'w-full bg-white shadow-md rounded-sm flex flex-col h-full')} ref={ref}>
            {imageSrc &&
                <div className="lg:h-70 md:h-57 h-70 overflow-hidden">
                    <img className='w-full h-full object-cover' src={imageSrc} alt='' />
                </div>
            }
            <div className="p-4 text-center items-center flex flex-col flex-1">
                {title &&
                    <Heading className="mb-4" size='h1' color='teal'>{title}</Heading>
                }

                <div className="flex-1 my-4 w-full">
                    {children}
                </div>

                {buttonText &&
                    <div className="mt-auto pt-4 flex justify-center">
                        <Button variant='primary' size='lg' disabled={disableButton}>

                            {externalLink ? (
                                <LinkExternal href={hrefButtonLink || '/'}>
                                    {buttonText}
                                </LinkExternal>
                            ) : (
                                <LinkInternal href={hrefButtonLink || '/'}>
                                    {buttonText}
                                </LinkInternal>
                            )
                            }


                        </Button>
                    </div>
                }
            </div>
        </div>
    )
})
Card.displayName = 'Card'