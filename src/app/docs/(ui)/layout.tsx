import type { PropsWithChildren } from 'react';

export default function Page({ children }: PropsWithChildren) {
  return (
    <div className='flex justify-between px-4 mx-auto max-w-8xl'>
      <div className='w-full mx-auto'>
        {children}
      </div>
    </div>
  )
}
