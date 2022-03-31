import Head from "next/head";
import { useRouter } from "next/router";
import MainLayout from "../../layout/MainLayout";

export default function About() {

    const router = useRouter()

    const linkClickHandler = () => {
        router.push('/Posts')
    }

    return (
        <>
            <MainLayout title='test About'>
                <Head>
                    <meta charSet="utf-8" />
                </Head>
                <h1>About</h1>
                <button onClick={linkClickHandler}>Go to back post</button>
                <button onClick={() => router.push('/Posts')}>Go to back post inline</button>
            </MainLayout>
        </>
    )
}
