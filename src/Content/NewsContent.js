import React from "react";
import "./NewsContent.css";
import {Container} from "@material-ui/core"
import './NewsContent.css'
import NewsCard from "../components/NewsCard/NewsCard";
const NewsCont = ({setloadmore, newsArray, newsResults, loadmore}) => {
  return (
  <Container maxWidth="md">
    <div className="content">
      <div className = "downloadMessage">
          <span className="downloadText">For the best experience use Inshorts app</span>
          <img src = "https://assets.inshorts.com/website_assets/images/appstore.png"
          height="80%" alt = "app store"/>
          <img src = "https://assets.inshorts.com/website_assets/images/playstore.png"
          height="80%" alt = "google play"/>
      </div>
      {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        
        {
          loadmore<=newsResults &&(
            <>

              <hr/>
               <button className = "loadmore" onClick ={()=> setloadmore(loadmore+20)}>Load More</button>
            </>
          )
        }
    </div>
  </Container>
  );
  
};

export default NewsCont;