import MainLayout from "../components/layout/MainLayout"
import Benefit from "../components/ui/benefits/Benefit"
import Feature from "../components/ui/features/Feature"
import HeroSection from "../components/ui/heroSection/HeroSection"
import Work from "../components/ui/works/Work"

const Home = () => {
  return (
    <MainLayout>
             <HeroSection></HeroSection>
             <Feature></Feature>
             <Work></Work>
            <Benefit></Benefit>
    </MainLayout>
  )
}

export default Home
