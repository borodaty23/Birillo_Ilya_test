export const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="25"
    height="25"
    fill="none"
    viewBox="0 0 25 25"
  >
    <defs>
      <pattern
        id="pattern_150_1040"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use
          transform="matrix(.00781 0 0 .00781 -.074 0)"
          xlinkHref="#image150_104_0"
        ></use>
      </pattern>
      <image
        id="image150_104_0"
        width="147"
        height="128"
        xlinkHref="data:image/png;base64,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"
      ></image>
    </defs>
    <path
      fill="url(#pattern_150_1040)"
      fillOpacity="1"
      d="M0 0H25V25H0z"
    ></path>
  </svg>
);
