import React, { useState } from "react";
import { useGetBooksQuery } from "../../features/api/bookStore";
import Error from "../ui/Erro";
import BookLoader from "../ui/loaders/BookLoader";
import Book from "./Book";

const Books = ({ inputText }) => {
  const [status, setStatus] = useState("");
  const { data: books, isLoading, isError } = useGetBooksQuery();

  let content = null;

  if (isLoading) {
    content = (
      <>
        <BookLoader />
        <BookLoader />
        <BookLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && books?.length === 0) {
    content = <Error message="No videos found!" />;
  }

  if (!isLoading && !isError && books?.length > 0) {
    content = books
      ?.filter((book) => {
        switch (status) {
          case "All":
            return book;
          case "Featured":
            return book.featured === true;
          default:
            return true;
        }
      })
      ?.filter((book) => {
        if (inputText === "") {
          return book;
        } else {
          return book.name.toLowerCase().includes(inputText);
        }
      })
      ?.map((book) => <Book key={book.id} book={book} />);
  }

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              className={`lws-filter-btn ${
                status === "All" && "active-filter"
              } `}
              onClick={() => setStatus("All")}
            >
              All
            </button>
            <button
              className={`lws-filter-btn ${
                status === "Featured" && "active-filter"
              } `}
              onClick={() => setStatus("Featured")}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* <!-- Card 1 --> */}
          {content}
        </div>
      </div>
    </main>
  );
};

export default Books;
