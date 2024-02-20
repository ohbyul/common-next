import React from 'react'
import dynamic from 'next/dynamic'

const Home = () => {
    const View = dynamic(
        () => import('./view'),
        { ssr: false }
    )


    return (
        <View />
    )
}

export default Home;
