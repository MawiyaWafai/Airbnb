import './App.css';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Data from './Data'

function App() {

  const cards = Data.map(item => {
    return (
      <Cards 
        img= {item.img}
        rating = {item.stats.rating}
        reviewCount= {item.stats.reviewCount}
        country= {item.location}
        title= {item.title}
        price= {item.price}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards--list'>
       {cards}
      </section>
    </div>
  );
}

export default App;
