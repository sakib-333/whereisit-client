import React from "react";

const useUpdateItem = () => {
  const handleUpdateItem = (e) => {
    e.preventDefault();
    const form = e.target;

    const postType = form.postType.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const date = form.date.value;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const thumbnail = form.thumbnail.value;

    console.log({
      postType,
      title,
      description,
      category,
      location,
      date,
      displayName,
      email,
      thumbnail,
    });
  };
  return handleUpdateItem;
};

export default useUpdateItem;
