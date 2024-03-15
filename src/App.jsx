import './App.css'
import Cover from './components/Cover'
import Navbar from './components/Navbar'
import Row from './components/Row'
import requests from './request'

function App() {
 

  return (
    <>
    <Navbar/>
    <Cover fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPoster='true' title='Trending' fetchUrl={requests.fetchTrending}/> 
     <Row title='netflixOriginals' fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
     <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
     <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
     <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
     <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
     <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
   
    </>
  )
}

export default App