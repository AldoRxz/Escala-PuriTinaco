import Box from '@mui/material/Box'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import ProblemSolution from '@/components/sections/ProblemSolution'
import ProductCatalog from '@/components/sections/ProductCatalog'
import TrustBar from '@/components/sections/TrustBar'

export default function Home() {
  return (
    <>
      <Header />
      <Box component="main" id="inicio">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <HowItWorks />
        <ProductCatalog />
      </Box>
      <Footer />
    </>
  )
}
