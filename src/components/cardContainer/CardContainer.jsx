import React, { useState, useEffect } from "react";
import "./style.css";
import CardItem from "../cardItem/CardItem";

import { useFetch } from "../../useFecth";

const CardContainer = (cardItem) => {
  const { loading, value } = useFetch();
  const [page, setPage] = useState(0);
  const [cards, setCards] = useState([]);
 

  useEffect(() => {
    if (loading) return;
    setCards(value[page]);
  }, [loading, page, value]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > value.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = value.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <div className="card-container">
      <h1>{loading ? "loading..." : ""}</h1>
      <header className="main-header">Latest books</header>
      <div className="card-wrapper">
        {cards.map((item, index) => {
          return (
            <CardItem
              key={item.isbn}
              index={index}
              {...item}
           
            />
          );
        })}
      </div>
      {!loading && (
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>
            <img src="/Vector.png" alt="vector" />
          </button>
          {value.map((item, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? "active-btn" : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextPage}>
            <img src="/Vector-right.png" alt="vector" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
