import { forwardRef } from "react";
import { classNames } from "../styling";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { LinkInternal } from "./LinkInternal";

export interface CardProps {
    className?: string
    size: 'sm' | 'lg'
    image?: React.ReactElement
    title?: string
    children?: React.ReactElement
    buttonText?: string
    hrefButtonLink?: string
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, image, title, children, size, buttonText, hrefButtonLink }, ref) => {
    return (
        <div className={classNames(className, `${size === 'sm' ? 'max-w-sm' : 'max-w-2xl'}`, 'bg-white place-items-center shadow-md rounded-sm ')} ref={ref}>
            {image &&
                <div className="w-fit mb-4">
                    {image}
                </div>
            }
            <div className="p-4 mb-4 text-center justify-items-center">
                {title &&
                    <Heading className="mb-4" size='h1' color='teal'>{title}</Heading>
                }

                {children}

                {buttonText &&
                    <div className="mt-4 justify-items-center">
                        <Button variant='primary' size='lg'>
                            <LinkInternal href={hrefButtonLink || '/'}>
                                {buttonText}
                            </LinkInternal>
                        </Button>
                    </div>
                }
            </div>
        </div>
    )
})
Card.displayName = 'Card'