import Head from 'next/head';
import HeaderFirst from '@components/HeaderFirst';
import HeaderSecond from '@components/HeaderSecond';
import HeaderThree from '@components/HeaderThree';
import Footer from '@components/Footer';

const Layout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <>
            <header>
                <HeaderFirst />
                <HeaderSecond />
                <HeaderThree />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout;