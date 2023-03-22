import React from "react";
import Form from "./Form";

const AddBook = () => {
  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <Form />
        </div>
      </div>
    </main>
  );
};

export default AddBook;
