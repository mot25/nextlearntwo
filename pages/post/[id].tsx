import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import MainLayout from "../../layout/MainLayout"
import Link from 'next/link'
import { NextPageContext } from 'next'
import { IPostItem, IPostsProps } from '../Posts'


export default function Post({ post: serverPost }) {
    const [post, setpost] = useState<IPostItem>(serverPost)
    const router = useRouter()
    // console.log('router', router)
    useEffect(() => {
        async function load() {
            const post: IPostItem = await fetch(`http://localhost:4200/posts/${router.query.id}`).then(res => res.json());
            setpost(post)
        }
        if (!serverPost) {
            load()
        }
    }, [])
    if (!post) {
        return <MainLayout>
            <h1>Loading...</h1>
        </MainLayout>
    }
    return (
        <>
            <MainLayout>
                <h1>Post with id {post.id} </h1>
                <hr />
                <h1>Post with title {post.title} </h1>
                <h1>Post with body {post.body} </h1>
                <Link href="/Posts"><a>back to all posts</a></Link>
            </MainLayout>
        </>
    )
}

// Post.getInitialProps = async (ctx) => {
//     if (!ctx.req) {
//         return { post: null }
//     }
//     const post = await fetch(`http://localhost:4200/posts/${ctx.query.id}`).then(res => res.json());
//     return { post }
// }

export async function getServerSideProps(ctx: NextPageContext) {
    if (!ctx.req) {
        return { post: null }
    }
    const post : IPostItem= await fetch(`http://localhost:4200/posts/${ctx.query.id}`).then(res => res.json());
    return {
        props: { post }, // will be passed to the page component as props
    }
}