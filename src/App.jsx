import { Header } from './components/header/Header.jsx'
import { ForDrivers } from '@/components/forDrivers/ForDrivers.jsx'
import { Hero } from '@/components/hero/Hero.jsx'
import { AboutUs } from '@/components/aboutUs/AboutUs.jsx'
import { ForCompanies } from '@/components/forCompanies/ForCompanies.jsx'

function App() {
    return (
        <>
            <Header />
            <Hero />
            <AboutUs />
            <ForDrivers />
            <ForCompanies />
        </>
    )
}

export default App
