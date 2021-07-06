
import { useEffect, useState } from 'react';
import './App.css';
import Navinshorts from './components/Navinshorts';
import NewsCont from './Content/NewsContent';
import axios from 'axios';
import Footer from './Footer/Footer'

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray ]= useState([]);
  const [newsResults, setNewsResults ]= useState();
  const [loadmore, setloadmore] = useState(20);
  const newsApi = async()=>{
    try{
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(
        `${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadmore}&category=${category}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    }catch(error){
      console.log(error);
    }
  };
  console.log(newsArray);

  useEffect(()=>{
    newsApi();// eslint-disable-next-line
  },[newsResults, category, loadmore]);
  return (
    <div className="App">
      <Navinshorts setCategory= {setCategory}/>
      <NewsCont setloadmore  = {setloadmore} newsArray =  {newsArray} newsResults = {newsResults} loadmore = {loadmore}/>
      <Footer/>
    </div>

  );
}

export default App;
