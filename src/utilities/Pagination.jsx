const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex gap-2 mt-5">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`px-3 py-1 rounded ${
            number === currentPage ? "bg-gray-800 text-white" : "bg-gray-300"
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
