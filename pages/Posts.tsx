import React from 'react'
import { useState, useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import Link from 'next/link'
import { NextPageContext } from 'next'

// {id: 1, title: 'json-server', body: 'typicode1'}
export interface IPostItem {
    id: number | string
    title: string
    body: string
}
export interface IPostsProps {
    posts: IPostItem[]
}


export default function Posts({ posts }: IPostsProps) {
    // const [posts, setPosts] = useState()
    // useEffect(() => {
    //     async function load() {
    //         const response = await fetch('http://localhost:4200/posts').then(res => res.json());
    //         setPosts(response)
    //     }
    //     load()
    // })
    return (
        <>
            <MainLayout>
                <h1>Posts</h1>

                <ul>
                    {posts && posts.map(post => {
                        return <li key={post.id}>
                            {post.id}: <Link href={`/post/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    })}
                </ul>
            </MainLayout>
        </>
    )
}

Posts.getInitialProps = async (ctx: NextPageContext) => {
    const posts = await fetch('http://localhost:4200/posts').then(res => res.json());
    return { posts }
}


/**
 function Page({ stars }) {
  return <div>Next stars: {stars}</div>
}

Page.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
 */