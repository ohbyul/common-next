

import Nav from './Nav';
import '@/styles/docs.css'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
