import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.scss'

export default function Services() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8888/').then((response) => {
            setPost(response.data);
        });
    }, []);

    const deletepost = (id) => {
        axios.delete(`http://localhost:8888/${id}`).then(() => {
            axios.get('http://localhost:8888/').then((response) => {
                setPost(response.data)
            })
        });
    }

    const sorting = ()=> {
        setPost([...post.sort((a, b)=> (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0)])
}

return (
    <>
        <div className="services-header">Our Services</div>
            <button className="sa" onClick={sorting}>Sort</button>
        <div className="services-card-container">
            <div className="services-cards">
                {post.map((element) =>
                (
                    <div className="services-card">
                        <button className="delete-btn" onClick={() => deletepost(element._id)}>X</button>
                        <i className={`${element.icon}`} alt="icon" />
                        <h3>{element.title}</h3>
                        <p>{element.description}</p>
                        <button className="learn-btn">Learn More</button>

                    </div>
                ))}
            </div>
        </div>
    </>
);
} 