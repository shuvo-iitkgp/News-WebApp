import React from 'react'
import './NewsCard.css'
function NewsCard({newsItem}) {

    const fulldate = new Date(newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
    var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
    const hour = parseInt(date[4].substring(0, 2)); //
    const time = hour > 12 ? true : false;


    return (
        <div className  ="newsCard">
            <img className = "newsImage" alt = {newsItem.title} src = {newsItem.urlToImage?newsItem.urlToImage:
            "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"}/>
            <div className = "newsText">
                <div>
                    <span className = "title">{newsItem.title}</span><br/>
                    <span className = "author">
                        <a className = "source" target = "__blank" href ={newsItem.url}>
                            <b>short</b>
                        </a>
                        <span className="muted">
                            by {newsItem.author?newsItem.author:"Unknown"} /{" "}
                            {time
                                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
                            on {date[2]} {date[1]} {date[3]}, {date[0]}

                        </span>
                        </span>
                </div>
                <div className = "lowerNewsText">
                    <div className = "description">
                        {newsItem.description}
                        <br/>
                        <span className = "readmore">
                            read more at {" "}
                            <a className = "source" target ="__blank" href ={newsItem.url}>
                            <b>{newsItem.source.name}</b>
                        </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
