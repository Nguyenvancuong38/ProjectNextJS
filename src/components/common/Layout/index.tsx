import HeaderFirst from '@components/HeaderFirst';
import HeaderSecond from '@components/HeaderSecond';
import HeaderThree from '@components/HeaderThree';
import Footer from '@components/Footer';

const Layout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className='bg-[#eee]'>
            <header>
                <div className='container'>
                    <HeaderFirst />
                </div>
                <div className='container'>
                    <HeaderSecond />
                </div>
                <div className='container'>
                    <HeaderThree />
                </div>
            </header>
            <main>
                <div className='container'>
                    {children}
                </div>
            </main>
            <footer>
                <div className='container'>
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

export default Layout;