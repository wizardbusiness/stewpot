const SvgGradient = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 601.65 601"
  >
    <defs>
      <linearGradient
        id="Gradient_svg__a"
        x1={0.5}
        x2={601.15}
        y1={762.6}
        y2={762.6}
        gradientTransform="matrix(1 0 0 -1 0 1063.1)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.22} stopColor="#caf" />
        <stop offset={0.73} stopColor="#ef89c5" stopOpacity={0.34} />
        <stop offset={1} stopColor="#ff7bac" stopOpacity={0} />
      </linearGradient>
    </defs>
    <path
      d="M.5.5h600.65v600H.5z"
      style={{
        fill: "url(#Gradient_svg__a)",
        stroke: "url(#Gradient_svg__linear-gradient-2)",
        strokeMiterlimit: 10,
      }}
    />
  </svg>
);
export default SvgGradient;

