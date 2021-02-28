import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import "./Reviews.css";
import moment from "moment";
import "moment/locale/ru";
import { Button, TextField, Collapse } from "@material-ui/core";
import { FaStar } from "react-icons/fa";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(null);
  const [load, setLoad] = useState(false);

  const ref = firebase.firestore().collection("reviews");

  function getReviews() {
    setLoading(true);
    ref.get().then((querySnapShot) => {
      let items = [];
      querySnapShot.forEach((doc) => {
        items.push({ id: doc.id, data: doc.data() });
      });
      setReviews(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    getReviews();
  }, [load]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  function handleHandler(e) {
    setName(e.target.value);
  }

  function handleHandler1(e) {
    setReview(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let reviewObject = {
      date: moment().locale("ru").format("MMMM Do YYYY, h:mm:ss a"),
      name: name,
      review: review,
      rating: rating,
    };
    ref.add(reviewObject).then((response) => {
      console.log("reply from firebase....", response);
    });
    setLoad(!load);
    setName("");
    setReview("");
  }

  return (
    <div>
      <div className="reviews__container">
        <div className="reviews__leave">
          <h1>Оставить отзыв</h1>
          <form onSubmit={handleSubmit}>
            {/* Star rating */}

            <div className="star__rating__container">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                  <label>
                    <input
                      className="input__star"
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                      className="star"
                      color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                      size={25}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
            {/* Star rating */}

            <TextField
              className="inputStyle"
              required
              name="name"
              fullWidth
              value={name}
              onChange={handleHandler}
              label="Ваше имя"
              inputProps={{ maxLength: 50, minLength: 3 }}
              variant="standard"
              //   error
              //   helperText="Введите  ваше имя"
            />

            <TextField
              className="inputStyle"
              name="review"
              fullWidth
              multiline
              value={review}
              variant="standard"
              onChange={handleHandler1}
              label="ваш отзыв"
            />

            <button className="button__submitreview" type="submit">
              Отправить
            </button>
          </form>
        </div>

        {/* Rendering reviews */}
        {reviews.map((review) => (
          <div key={review.id} className="reviews__item">
            <h2 className="review__name">{review.data.name}</h2>
            <div className="review__rating">
              {Array(review.data.rating)
                .fill()
                .map((_) => (
                  <p>
                    <FaStar size={20} color="#ffc107" />
                  </p>
                ))}
            </div>
            <p>{review.data.date}</p>
            <p>{review.data.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
