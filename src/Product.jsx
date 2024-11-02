import Hero from './components/Hero'
// import Carousel from './components/Carousel'
import Card from './components/ProductCard'
import ProductHero from './components/ProductHero';
import Carousel from './components/ProductCarousel'

function Home() {

  return (
    <>
      <ProductHero/>
      <Carousel/>
      <Card />
    </>
  )
}

export default Home