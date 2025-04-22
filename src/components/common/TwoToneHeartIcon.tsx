const TwoToneHeartIcon = () => (
    <svg
    className="heart-pulse"
    width="110"
    height="110"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="halfHeart">
        <rect x="0" y="0" width="32" height="64" />
      </clipPath>
    </defs>
    <path
      d="M32 58s-22-13.2-22-30c0-6.6 5.4-12 12-12 4.4 0 8.2 2.4 10 6 1.8-3.6 5.6-6 10-6 6.6 0 12 5.4 12 12 0 16.8-22 30-22 30z"
      fill="#FF0000"
    />
    <g clipPath="url(#halfHeart)">
      <path
        d="M32 58s-22-13.2-22-30c0-6.6 5.4-12 12-12 4.4 0 8.2 2.4 10 6 1.8-3.6 5.6-6 10-6 6.6 0 12 5.4 12 12 0 16.8-22 30-22 30z"
        fill="#FF7A7A"
      />
    </g>
  </svg>
  );
  
  export default TwoToneHeartIcon;