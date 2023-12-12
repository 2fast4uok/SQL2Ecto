import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto px-4 md:px-0">{children}</section>
  )
}
