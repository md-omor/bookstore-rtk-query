import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../../features/api/bookStore";
import Error from "../ui/Erro";
import Success from "../ui/Success";

const Form = () => {
  const [addBook, { isLoading, isSuccess, isError }] = useAddBookMutation();

  const [values, setValues] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  const navigate = useNavigate();
  const { name, author, thumbnail, price, rating, featured } = values;

  // Get the all input values
  const handleChange = (name) => (e) => {
    const value = name === "featured" ? e.target.checked : e.target.value;
    setValues({
      ...values,
      price: Number(values.price),
      rating: Number(values.rating),
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues({
      ...values,
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ ...values });
    resetForm();
  };

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="lws-bookName">Book Name</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          value={name}
          onChange={handleChange("name")}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-author">Author</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-author"
          name="author"
          value={author}
          onChange={handleChange("author")}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-thumbnail">Image Url</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={handleChange("thumbnail")}
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label htmlFor="lws-price">Price</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-price"
            name="price"
            value={price}
            onChange={handleChange("price")}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-rating">Rating</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={handleChange("rating")}
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          checked={featured}
          value={featured}
          onChange={handleChange("featured")}
        />
        <label htmlFor="lws-featured" className="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="submit"
        id="lws-submit"
      >
        Add Book
      </button>

      {isSuccess && <Success message="Book was added successfully" />}
      {isError && <Error message="There was an error adding book!" />}
    </form>
  );
};

export default Form;
