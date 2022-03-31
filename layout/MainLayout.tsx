import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

export default function MainLayout({ children, title = 'next app' }) {
    return (
        <>
            <Head>
                <title>{title} | Next Course</title>
            </Head>
            <nav>
                <Link href="/"><a>home</a></Link>
                <Link href="/about"><a>about</a></Link>
                <Link href="/Posts"><a>posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {`
                nav {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    position: fixed;
                    left: 0;
                    right: 0;
                    height: 60px;
                    background: darkblue;
                    top: 0;
                }
                nav a {
                    color: #fff;
                    text-decoration: none;
                }
                 main {
                    margin-top: 60px;
                }
                `}
            </style>
        </>
    )
}
