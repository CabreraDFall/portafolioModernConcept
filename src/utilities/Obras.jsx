const Empty = ({ place }) => {
  return (
    <div className="text-c-white items-center flex flex-col gap-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ebebeb2e"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-figma"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M12 9v6" />
        <path d="M16 15v6" />
        <path d="M16 3v6" />
        <path d="M3 15h18" />
        <path d="M3 9h18" />
        <path d="M8 15v6" />
        <path d="M8 3v6" />
      </svg>
      <div className="flex flex-col items-center text-[#ebebeb2e]">
        <h3>En obras ...</h3>
        <p>Estamos trabajando en el {place}</p>
      </div>
    </div>
  );
};

export default Empty;
