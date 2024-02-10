import { ReactNode } from 'react'
type TemplateProps={
    children:ReactNode,
    title:string,
    subTitle:string,
    id?:string
}
const Template = ({children,subTitle,title,id}:TemplateProps) => {
    return (
        <section className='w-full px-5 py-6 group' id={id}>
                <h3 className='text-lg font-bold mt-4 mb-0 '>{title}</h3>
                <span className='group-hover:border-b-4 group-hover:border-blue-400 group-hover:border group-hover:w-24 group-hover:inline-block group-hover:rounded-sm group-hover:-mt-3 transition-all duration-200'/>
                <h3 className='text-md font-medium my-3'>{subTitle}</h3>
            {children}
        </section>
    )
}

export default Template
