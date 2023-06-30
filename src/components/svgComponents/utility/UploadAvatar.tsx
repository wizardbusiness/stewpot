
interface UploadAvatarIconProps {
  height: number;
  width: number;
}
const UploadAvatarIcon = ({height, width}: UploadAvatarIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="upload-avatar_svg__Layer_1"
    x={0}
    y={0}
    style={{
      height: height,
      width: width,
    }}
    viewBox="0 0 100 100"
  >
    <style>
      {
        ".upload-avatar_svg__st0{fill:#fff}.upload-avatar_svg__st1{fill:#898989}"
      }
    </style>
    <circle
      cx={50}
      cy={50}
      r={39}
      className="upload-avatar_svg__st0"
      transform="rotate(-45.001 50 50)"
    />
    <path
      d="M50 13.5c20.2 0 36.5 16.4 36.5 36.5S70.2 86.5 50 86.5 13.5 70.2 13.5 50 29.8 13.5 50 13.5m0-5C27.1 8.5 8.5 27.1 8.5 50S27.1 91.5 50 91.5 91.5 72.9 91.5 50 72.9 8.5 50 8.5z"
      className="upload-avatar_svg__st1"
    />
    <path
      d="M47.8 77V52.5H23v-4.2h24.8V23H52v25.3h25v4.2H52V77z"
      className="upload-avatar_svg__st0"
    />
    <path
      d="M54.5 20.5h-9.2v25.3H20.5V55h24.8v24.5h9.2V55h25v-9.2h-25V20.5z"
      className="upload-avatar_svg__st1"
    />
  </svg>
);
export default UploadAvatarIcon;

