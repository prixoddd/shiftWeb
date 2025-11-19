import { Header } from './components/header/Header.jsx'
import { Hero } from '@/components/hero/Hero.jsx'
import { AboutUs } from '@/components/aboutUs/AboutUs.jsx'
import { AosProvider } from '@/components/common/AosProvider.jsx'
import { ForCompanies } from '@/components/forCompanies/ForCompanies.jsx'
import { ForDrivers } from '@/components/forDrivers/ForDrivers.jsx'
import { Footer } from '@/components/footer/Footer.jsx'
import ContactUs from '@/components/contactUs/ContactUs.jsx'

function App() {
    return (
        <>
            <AosProvider>
                <Header />
                <Hero />
                <AboutUs />
                <ForDrivers />
                <ForCompanies />
                <ContactUs />
                <Footer />
            </AosProvider>
        </>
    )
}

export default App
