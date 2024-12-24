const useFomatDate = () => {
  const formatDate = (inpDate) => {
    const date = new Date(`${inpDate}`);
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  };
  return formatDate;
};

export default useFomatDate;
