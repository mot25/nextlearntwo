import Link from 'next/link'
import MainLayout from '../layout/MainLayout'
import styles from '../styles/Error.module.scss'
export default function ErrorPage() {
    return (
        <MainLayout title='404'>
            <div className={styles.body}>
                <h1 className={styles.error}>404 - error</h1>
                <div>Please to <Link href="/"><a>go back </a></Link> home page</div>
            </div>
        </MainLayout>
    )
}
