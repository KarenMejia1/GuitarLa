import React from 'react'
import Head from 'next/head'
import Header from './Header'

export const Layout = ({ children, pagina }) => {
    return (
        <div>
            <Head>
                <title>GuitarLA - {pagina}</title>
                <meta name='description' content='Sitio web de venta de guitarras' />
            </Head>

            <Header />

            {children}
        </div>
    )
}
