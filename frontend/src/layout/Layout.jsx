import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <>
            <Header />

            <div style={{ minHeight: '50vh' }}>
                {children}
            </div>

            <Footer />

        </>
    )
}

export default Layout