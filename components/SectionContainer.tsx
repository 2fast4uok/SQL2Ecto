import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto px-4 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">{children}</section>
  )
}
