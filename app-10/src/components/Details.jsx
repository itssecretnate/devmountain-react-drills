import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {useParams} from 'react-router-dom'

function Details(props) {
    let { id } = useParams();

    let [productTitle, setproductTitle] = useState('');
    let [productImg, setproductImg] = useState('');
    let [productPrice, setproductPrice] = useState(0);

    useEffect(() => {
        axios.get('https://practiceapi.devmountain.com/products/' + id)
        .then(res => {
            setproductTitle(res.data.title);
            setproductImg(res.data.image);
            setproductPrice(res.data.price);
        })
    }, [])

    return (
        <div>
            <h1>{productTitle}</h1>
            <img src={productImg} style={ {width: '250px', height: 'auto'} }/>
            <h1>{`Price: $${productPrice}`}</h1>
        </div>
    )
}

export default Details