const ArrowIcon = ({ height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-${height} w-${width} text-gray-500 cursor-pointer`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  );
};

export default ArrowIcon;
