import React from 'react'
import Card from './Card'
import {useSelector} from 'react-redux'
import {getNews} from '../selectors/newsSelector'
const CardGroup = () => {
    const news = useSelector(getNews)
    return (
        <div>
           {news.data.map(item => <Card key={item.objectID} {...item}/>)}
        </div>
    )
}



export default CardGroup
