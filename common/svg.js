export const Loader = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M8 1.68237V4.34904" />
      <path d="M8 12.3491V15.0158" />
      <path d="M3.28662 3.63574L5.17329 5.52241" />
      <path d="M10.8267 11.1758L12.7133 13.0624" />
      <path d="M1.33337 8.34912H4.00004" />
      <path d="M12 8.34912H14.6667" />
      <path d="M3.28662 13.0624L5.17329 11.1758" />
      <path d="M10.8267 5.52241L12.7133 3.63574" />
    </svg>
  );
};

export const Link = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
};

export const ExternalLink = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" />
      <path d="M15 3H21V9" />
      <path d="M10 14L21 3" />
    </svg>
  );
};

export const Directory = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={{ display: "block", ...props.style }}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
    </svg>
  );
};

export const ResizeHandle = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={{ display: "block", ...props.style }}
    >
      <path d="M21 3L3 21" />
      <path d="M21 11L11 21" />
      <path d="M21 19L19 21" />
    </svg>
  );
};

export const Undo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={{ display: "block", ...props.style }}
    >
      <path d="M1 4V10H7" />
      <path d="M3.51 15C4.15839 16.8404 5.38734 18.4202 7.01166 19.5014C8.63598 20.5826 10.5677 21.1066 12.5157 20.9945C14.4637 20.8824 16.3226 20.1402 17.8121 18.8798C19.3017 17.6193 20.3413 15.909 20.7742 14.0064C21.2072 12.1037 21.0101 10.112 20.2126 8.3311C19.4152 6.55025 18.0605 5.0768 16.3528 4.13277C14.6451 3.18874 12.6769 2.82527 10.7447 3.09712C8.81245 3.36897 7.02091 4.26142 5.64 5.64L1 10" />
    </svg>
  );
};

export const Edit = (props) => {
  return (
    <svg
      height={16}
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" />
    </svg>
  );
};

export const PlusCircle = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={{ display: "block", ...props.style }}
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M12 8V16" />
      <path d="M8 12H16" />
    </svg>
  );
};

export const Users = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={{ display: "block", ...props.style }}
    >
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" />
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" />
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" />
    </svg>
  );
};

export const Alert = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={{ display: "block", ...props.style }}
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M12 8V12" />
      <path d="M12 16H12.01" />
    </svg>
  );
};

// export const Layers = (props) => {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//       height={props.height}
//       style={{ display: "block", ...props.style}}
//     >
//       <g
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="1"
//       >
//         <path d="m22.917 6.2-10.209-5.278.00000004.00000002c-.444136-.229361-.971863-.229361-1.416-.0000001l-10.209 5.278-.00000007.00000003c-.3021.156451-.420172.528179-.263721.830279.058544.113046.150675.205177.263721.263721l10.209 5.281h.00000001c.444136.229361.971863.229361 1.416.00000005l10.209-5.275.00000002-.00000001c.3021-.156451.420172-.528179.263721-.830279-.058544-.113046-.150675-.205177-.263721-.263721z" />
//         <path d="m5.1 9.375-4.017 2.078-.00000007.00000003c-.3021.156451-.420172.528179-.263721.830279.058544.113046.150675.205177.263721.263721l10.209 5.281h.00000001c.444136.229361.971863.229361 1.416.00000005l10.209-5.281.00000002-.00000001c.3021-.156451.420172-.528179.263721-.830279-.058544-.113046-.150675-.205177-.263721-.263721l-4.017-2.078" />
//         <path d="m5.1 14.625-4.017 2.075-.00000007.00000003c-.3021.156451-.420172.528179-.263721.830279.058544.113046.150675.205177.263721.263721l10.209 5.281h.00000001c.444136.229361.971863.229361 1.416.00000005l10.209-5.275.00000002-.00000001c.3021-.156451.420172-.528179.263721-.830279-.058544-.113046-.150675-.205177-.263721-.263721l-4.017-2.081" />
//       </g>
//     </svg>
//   );
// };

export const Search = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      height={props.height}
      style={{ display: "block", ...props.style }}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
};

export const SecurityLock = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={{ display: "block", ...props.style }}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
};

export const MacCommand = (props) => {
  return (
    <svg
      height={props.height}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", ...props.style }}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M11 1C10.4696 1 9.96086 1.21071 9.58579 1.58579C9.21071 1.96086 9 2.46957 9 3V11C9 11.5304 9.21071 12.0391 9.58579 12.4142C9.96086 12.7893 10.4696 13 11 13C11.5304 13 12.0391 12.7893 12.4142 12.4142C12.7893 12.0391 13 11.5304 13 11C13 10.4696 12.7893 9.96086 12.4142 9.58579C12.0391 9.21071 11.5304 9 11 9H3C2.46957 9 1.96086 9.21071 1.58579 9.58579C1.21071 9.96086 1 10.4696 1 11C1 11.5304 1.21071 12.0391 1.58579 12.4142C1.96086 12.7893 2.46957 13 3 13C3.53043 13 4.03914 12.7893 4.41421 12.4142C4.78929 12.0391 5 11.5304 5 11V3C5 2.46957 4.78929 1.96086 4.41421 1.58579C4.03914 1.21071 3.53043 1 3 1C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3C1 3.53043 1.21071 4.03914 1.58579 4.41421C1.96086 4.78929 2.46957 5 3 5H11C11.5304 5 12.0391 4.78929 12.4142 4.41421C12.7893 4.03914 13 3.53043 13 3C13 2.46957 12.7893 1.96086 12.4142 1.58579C12.0391 1.21071 11.5304 1 11 1Z"
          strokeWidth="1.33333"
        />
      </g>
    </svg>
  );
};

export const SettingsDeveloper = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      style={{ display: "block", ...props.style }}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18.25 2.251c-1.061 1.061-3.04.96-4.75-.75l-1.5 1.499 8 8 3.5-3.5z" />
        <path d="m11.939 9.94-3.793-3.792.00000007-.00000015c.910118-2.01295.0160937-4.38257-1.99686-5.29269-1.04732-.473526-2.24773-.473639-3.29514-.00031106l2.146 2.145v2h-2l-2.146-2.145.00000008-.00000019c-.910118 2.01295-.0160941 4.38257 1.99686 5.29269 1.04732.473526 2.24773.47364 3.29514.00031136l3.793 3.792" />
        <path d="m12.061 14.062 3.793 3.793.00000008-.00000019c-.910118 2.01295-.0160941 4.38257 1.99686 5.29269 1.04732.473526 2.24773.47364 3.29514.00031136l-2.146-2.148v-2h2l2.146 2.147.00000007-.00000015c.910118-2.01295.0160937-4.38257-1.99686-5.29269-1.04732-.473526-2.24773-.473639-3.29514-.00031106l-3.793-3.793" />
        <path d="m15.439 6.44-14.5 14.5.00000001-.00000001c-.585974.585974-.585974 1.53603.00000001 2.122.585974.585974 1.53603.585974 2.122-.00000001l14.5-14.5" />
      </g>
    </svg>
  );
};

export const Activity = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={{ display: "block", ...props.style }}
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
};

export const ProfileUser = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      style={{ display: "block", ...props.style }}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="m1.9 17.5h10.12" />
        <path d="m2.51 5.5h18.99" />
        <path d="m12 11.5h-11.49" />
        <path d="m11.378 23.484-.00000038-.00000002c-6.34157-.350952-11.1979-5.77631-10.847-12.1179.350952-6.34157 5.77631-11.1979 12.1179-10.847 4.76348.263618 8.86954 3.44096 10.3201 7.98586" />
        <path d="m11.269.526c-6 6.5-5.891 14.958.109 22.958" />
        <path d="m12.73.526-.00000028-.0000003c2.11586 2.21147 3.56411 4.97556 4.178 7.974" />
        <path d="m23.5 23.5c0-2.76142-2.23858-5-5-5s-5 2.23858-5 5z" />
        <path d="m20.6213 11.8797c1.17157 1.17157 1.17157 3.07107 0 4.24264s-3.07107 1.17157-4.24264 0-1.17157-3.07107 0-4.24264 3.07107-1.17157 4.24264 0" />
      </g>
    </svg>
  );
};

export const Slates = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={{ display: "block", ...props.style }}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="m17.42 17.27-2.787-8.02-3.42 6-2.138-3-2.476 5.048" />
      <path d="m10.7071 8.29289c.390524.390524.390524 1.02369 0 1.41421-.390524.390524-1.02369.390524-1.41421 0-.390524-.390524-.390524-1.02369 0-1.41421.390524-.390524 1.02369-.390524 1.41421 0" />
      <path d="m1.5 6.5h-.00000004c-.552285-.00000002-1-.447715-1-1v-1 .00000015c-.00000008-.552285.447715-1 1-1h2v-2 .00000015c-.00000008-.552285.447715-1 1-1h1-.00000004c.552285-.00000002 1 .447715 1 1v2h13-.00000004c.552285-.00000002 1 .447715 1 1v13h2-.00000004c.552285-.00000002 1 .447715 1 1v1c0 .552285-.447715 1-1 1h-2v2c0 .552285-.447715 1-1 1h-1-.00000004c-.552285-.00000002-1-.447715-1-1v-2h-13-.00000004c-.552285-.00000002-1-.447715-1-1v-13z" />
      <path d="m7 17.5c-.27614 0-.5-.22386-.5-.5v-10c0-.27614.22386-.5.5-.5h10c.27614 0 .5.22386.5.5v10c0 .27614-.22386.5-.5.5z" />
    </g>
  </svg>
);

export const Layers = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={{ display: "block", ...props.style }}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
      <path d="M2 17L12 22L22 17" />
      <path d="M2 12L12 17L22 12" />
    </g>
  </svg>
);

export const HardDrive = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={{ display: "block", ...props.style }}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12H2" />
      <path d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11V5.11Z" />
      <path d="M6 16H6.01" />
      <path d="M10 16H10.01" />
    </g>
  </svg>
);

export const ExpandBox = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={{ display: "block", ...props.style }}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m23.251 7.498v-6.75h-6.75" />
      <path d="m23.25.75-15 15" />
      <path d="m11.251 5.248h-9-.00000007c-.828427.00000004-1.5.671573-1.5 1.5v15-.00000023c-.00000013.828427.671573 1.5 1.5 1.5h15-.00000007c.828427.00000004 1.5-.671573 1.5-1.5v-9" />
    </g>
  </svg>
);

export const ExpandArrow = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={{ display: "block", ...props.style }}>
    <path
      d="m5.5.75 10.72 10.72c.292711.292294.293049.766535.00075431 1.05925-.00025126.00025162-.0005027.00050305-.00075431.00075431l-10.72 10.72"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const OldWallet = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={{ display: "block", ...props.style }}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m22.5 20.25v1.227l.00000001.00000013c.0413973.931766-.675662 1.7229-1.607 1.773h-8.036-.00000003c-.931338-.0501042-1.6484-.841234-1.607-1.773v-6.2l-.00000001-.00000016c-.0436626-.933293.674031-1.72691 1.607-1.777h8.036-.00000007c.931338.0501042 1.6484.841234 1.607 1.773v.977" />
      <path d="m21.04 13.507-1.282-2.565.00000003.00000007c-.19778-.395089-.678395-.555039-1.07348-.357259-.00017232.00008626-.00034461.00017259-.00051687.00025898l-5.827 2.915" />
      <path d="m22.45 20.25h-.00000003c.441828.00000002.8-.358172.8-.8v-2.4c0-.441828-.358172-.8-.8-.8h-2-.00000009c-1.10457.00000005-2 .895431-2 2 .00000005 1.10457.895431 2 2 2z" />
      <path d="m5.737 21.347-.00000013-.00000008c-5.16103-3.46042-6.53965-10.4495-3.07924-15.6105 3.46042-5.16103 10.4495-6.53965 15.6105-3.07924 2.14401 1.43754 3.7285 3.5686 4.48772 6.03575.0486667.161333.0943333.322333.137.483" />
      <path d="m7.981 19.4-.00000183-.00000581c-1.20611-3.82323-1.51577-7.87283-.904998-11.835l-.00000004.00000035c.268804-2.2946 1.0232-4.50564 2.213-6.486" />
      <path d="m.77 11.25h10.48" />
      <path d="m2.48 6h19.04" />
      <path d="m1.69 16.5h5.55" />
      <path d="m14.711 1.079.00000073.00000119c1.00053 1.62525 1.6795 3.42757 2 5.309.118.58.213333 1.159.286 1.737" />
    </g>
  </svg>
);

export const RightArrow = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M3.33331 8H12.6666" />
    <path d="M8 3.33334L12.6667 8.00001L8 12.6667" />
  </svg>
);

export const LeftArrow = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M12.6666 8H3.33331" />
    <path d="M7.99998 12.6667L3.33331 8.00001L7.99998 3.33334" />
  </svg>
);

// export const Home = (props) => (
//   <svg viewBox="0 0 24 24" height={props.height} style={{ display: "block", ...props.style}}>
//     <path
//       d="m19.5 8.4v-4.9a.5.5 0 0 0 -.5-.5h-2a.5.5 0 0 0 -.5.5v2.14l-4.162-3.829a.5.5 0 0 0 -.678 0l-11 10.321a.5.5 0 0 0 .34.868h2.5v9.5a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-9.5h2.5a.5.5 0 0 0 .339-.868z"
//       fill="none"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

export const Home = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={{ display: "block", ...props.style }}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" />
    </g>
  </svg>
);

// export const Folder = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//     height={props.height}
//     style={{ display: "block", ...props.style}}
//   >
//     <path
//       d="m11.236 6h.00000005c-.378666-.0002022-.724736-.214271-.894-.553l-.948-1.894.00000002.00000003c-.169264-.338729-.515334-.552798-.894-.553h-6.5-.00000004c-.552285.00000002-1 .447715-1 1v16 .00000015c.00000008.552285.447715 1 1 1h20-.00000004c.552285.00000002 1-.447715 1-1v-13c0-.552285-.447715-1-1-1z"
//       fill="none"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

export const Channels = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={{ display: "block", ...props.style }}>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16.004" cy="8" r="7.5" />
      <path d="m8.53 8.526a7.5 7.5 0 1 0 6.948 6.948" />
      <path d="m7.504 13.5v-1" />
      <path d="m9 13.5h-2.029a1.342 1.342 0 0 0 -.5 2.587l2.064.826a1.342 1.342 0 0 1 -.5 2.587h-2.035" />
      <path d="m7.504 20.5v-1" />
      <path d="m16.004 5v-1" />
      <path d="m17.5 5h-2.029a1.342 1.342 0 0 0 -.5 2.587l2.064.826a1.342 1.342 0 0 1 -.5 2.587h-2.035" />
      <path d="m16.004 12v-1" />
    </g>
  </svg>
);

export const Peers = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={{ display: "block", ...props.style }}>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="m17 7.02 3.11-3.09" />
      <path d="m22.9142 1.08579c.781049.781049.781049 2.04738 0 2.82843-.781049.781049-2.04738.781049-2.82843 0-.781049-.781049-.781049-2.04738 0-2.82843.781049-.781049 2.04738-.781049 2.82843 0" />
      <path d="m17.96 17.98 2.12 2.13" />
      <path d="m22.9242 20.0858c.781049.781049.781049 2.04738 0 2.82843-.781049.781049-2.04738.781049-2.82843 0-.781049-.781049-.781049-2.04738 0-2.82843.781049-.781049 2.04738-.781049 2.82843 0" />
      <path d="m7 7.02-3.11-3.09" />
      <path d="m3.91421 1.08579c.781049.781049.781049 2.04738 0 2.82843-.781049.781049-2.04738.781049-2.82843 0-.781049-.781049-.781049-2.04738 0-2.82843.781049-.781049 2.04738-.781049 2.82843 0" />
      <path d="m6.04 17.98-2.12 2.13" />
      <path d="m3.90421 20.0858c.781049.781049.781049 2.04738 0 2.82843-.781049.781049-2.04738.781049-2.82843 0-.781049-.781049-.781049-2.04738 0-2.82843.781049-.781049 2.04738-.781049 2.82843 0" />
      <path d="m16.5 11.5h3" />
      <path d="m22.9142 10.0858c.781049.781049.781049 2.04738 0 2.82843-.781049.781049-2.04738.781049-2.82843 0-.781049-.781049-.781049-2.04738 0-2.82843.781049-.781049 2.04738-.781049 2.82843 0" />
      <path d="m7.5 11.5h-3" />
      <path d="m3.91421 10.0858c.781049.781049.781049 2.04738 0 2.82843-.781049.781049-2.04738.781049-2.82843 0-.781049-.781049-.781049-2.04738 0-2.82843.781049-.781049 2.04738-.781049 2.82843 0" />
      <path d="m7.51 16.5v-.00000059c.00000038-2.48528 2.01472-4.5 4.5-4.5 2.48528.00000038 4.5 2.01472 4.5 4.5z" />
      <path d="m13.9545 6.30546c1.07394 1.07394 1.07394 2.81515 0 3.88909s-2.81515 1.07394-3.88909 0-1.07394-2.81515 0-3.88909 2.81515-1.07394 3.88909 0" />
    </g>
  </svg>
);

export const Deals = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={{ display: "block", ...props.style }}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m23.5 22-1-1.934v-4.566c.042-1.778-2.081-3.363-4-5" />
      <path d="m20.019 17.5-2.551-2.607.00000002.00000002c-.476378-.495833-1.26451-.511603-1.76034-.035225-.495833.476378-.511603 1.26451-.035225 1.76034.00382974.00398614.00768599.00794673.0115685.0118815l2.816 2.87v1.5l-.00000021-.0000012c.153133.894577.493939 1.74659 1 2.5" />
      <path d="m.5 2 1 1.934v4.566c-.042 1.778 2.081 3.363 4 5" />
      <path d="m3.981 6.5 2.551 2.607.00000001.00000001c.476378.495833 1.26451.511603 1.76034.035225.495833-.476378.511603-1.26451.035225-1.76034-.00382974-.00398614-.00768599-.00794673-.0115685-.0118815l-2.816-2.87v-1.5l.00000019.00000112c-.153133-.894577-.493939-1.74659-1-2.5" />
      <path d="m5.5 8.052v11.448.00000015c.00000008.552285.447715 1 1 1h9.5" />
      <path d="m18.5 15.948v-11.448c0-.552285-.447715-1-1-1h-10" />
    </g>
  </svg>
);

export const DataTransfer = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={{ display: "block", ...props.style }}>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="m20.5 14.406a4.311 4.311 0 0 0 2.5-4.049 4.711 4.711 0 0 0 -4.954-4.635 6.706 6.706 0 0 0 -6.046-3.722 6.605 6.605 0 0 0 -6.675 6.109 3.561 3.561 0 0 0 -4.325 3.409 3.186 3.186 0 0 0 2.5 3.282" />
      <path d="m6 19 3 3 3-3" />
      <path d="m9 22v-9" />
      <path d="m12 16 3-3 3 3" />
      <path d="m15 13v9" />
    </g>
  </svg>
);

export const Stats = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={{ display: "block", ...props.style }}>
    <path
      d="m.5 12.001h6l3-10 3 19 3-14 2 5h6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Logs = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={{ display: "block", ...props.style }}>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8.5 20.5h-7a1 1 0 0 1 -1-1v-16a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5" />
      <path d="m4.5 4.5v-4" />
      <path d="m8.5 4.5v-4" />
      <path d="m12.5 4.5v-4" />
      <path d="m17.5 20.5a.25.25 0 1 1 -.25.25.25.25 0 0 1 .25-.25" />
      <path d="m17.5 18.5v-3" />
      <path d="m18.338 12.5a.95.95 0 0 0 -1.676 0l-5.056 9.635a.923.923 0 0 0 .031.914.948.948 0 0 0 .807.448h10.112a.948.948 0 0 0 .807-.448.923.923 0 0 0 .031-.914z" />
    </g>
  </svg>
);

export const Status = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={{ display: "block", ...props.style }}>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="m14.061 5.243a1.5 1.5 0 0 1 0 2.121" />
      <path d="m16.182 3.121a4.5 4.5 0 0 1 0 6.364" />
      <path d="m16.182 3.121a4.5 4.5 0 0 1 0 6.364" />
      <path d="m18.3 1a7.5 7.5 0 0 1 0 10.607" />
      <path d="m18.3 1a7.5 7.5 0 0 1 0 10.607" />
      <path d="m9.939 5.243a1.5 1.5 0 0 0 0 2.121" />
      <path d="m7.818 3.121a4.5 4.5 0 0 0 0 6.364" />
      <path d="m7.818 3.121a4.5 4.5 0 0 0 0 6.364" />
      <path d="m5.7 1a7.5 7.5 0 0 0 0 10.607" />
      <path d="m5.7 1a7.5 7.5 0 0 0 0 10.607" />
      <path d="m23.5 19a2 2 0 0 1 -2 2h-19a2 2 0 0 1 -2-2v-2a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2z" />
      <path d="m4.75 17.75a.25.25 0 1 0 .25.25.25.25 0 0 0 -.25-.25z" />
      <path d="m8.25 17.75a.25.25 0 1 0 .25.25.25.25 0 0 0 -.25-.25z" />
      <path d="m12 15v-5" />
      <path d="m4 21-1.5 2" />
      <path d="m20 21 1.5 2" />
    </g>
  </svg>
);

export const Miners = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={{ display: "block", ...props.style }}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m2.561 23.207a1 1 0 0 1 -1.415 0l-.353-.353a1 1 0 0 1 0-1.414l13.016-13.018 1.768 1.768z" />
      <path d="m23.5 16.879a17 17 0 0 0 -16.379-16.379.5.5 0 0 0 -.24.948 33.1 33.1 0 0 1 7.526 4.963l-.951.951a.5.5 0 0 0 0 .707l2.474 2.475a.5.5 0 0 0 .707 0l.952-.951a33.076 33.076 0 0 1 4.962 7.526.5.5 0 0 0 .949-.24z" />
      <path d="m19.383 6.384.79-.79a1 1 0 0 0 0-1.415l-.353-.353a1 1 0 0 0 -1.414 0l-.791.791" />
    </g>
  </svg>
);

export const StorageMarket = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={{ display: "block", ...props.style }}>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="m23.5 22h-22.5a.5.5 0 0 1 -.5-.5v-19.5" />
      <path d="m12.872 15.523c.182 1 .458 3.477 3.128 3.477" />
      <path d="m3 19a3 3 0 0 0 2.947-2.46l1.2-6.571a2.4 2.4 0 0 1 3.8-1.487" />
      <path d="m8 19a3 3 0 0 0 2.947-2.46l1.2-6.571a2.4 2.4 0 0 1 4.714 0l1.2 6.571a3 3 0 0 0 2.939 2.46" />
    </g>
  </svg>
);

export const PowerButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block", ...props.style }}
  >
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <line x1="12" y1="2" x2="12" y2="12" />
  </svg>
);

export const Bell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block", ...props.style }}
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const Slate = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block", ...props.style }}
  >
    <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" />
    <path d="M3.27002 6.95996L12 12.01L20.73 6.95996" />
    <path d="M12 22.08V12" />
  </svg>
);

export const Trash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block", ...props.style }}
  >
    <path d="M3 6H5H21" />
    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" />
    <path d="M10 11V17" />
    <path d="M14 11V17" />
  </svg>
);

export const DownloadCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block", ...props.style }}
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M8 12L12 16L16 12" />
    <path d="M12 8V16" />
  </svg>
);

export const Folder = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block", ...props.style }}
  >
    <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" />
  </svg>
);

export const Tool = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block", ...props.style }}
  >
    <path d="M14.6999 6.30001C14.5166 6.48694 14.414 6.73826 14.414 7.00001C14.414 7.26176 14.5166 7.51308 14.6999 7.70001L16.2999 9.30001C16.4868 9.48324 16.7381 9.58587 16.9999 9.58587C17.2616 9.58587 17.5129 9.48324 17.6999 9.30001L21.4699 5.53001C21.9727 6.6412 22.1249 7.87924 21.9063 9.07916C21.6877 10.2791 21.1086 11.3839 20.2461 12.2463C19.3837 13.1087 18.2789 13.6878 17.079 13.9065C15.8791 14.1251 14.641 13.9728 13.5299 13.47L6.61986 20.38C6.22203 20.7778 5.68246 21.0013 5.11986 21.0013C4.55725 21.0013 4.01768 20.7778 3.61986 20.38C3.22203 19.9822 2.99854 19.4426 2.99854 18.88C2.99854 18.3174 3.22203 17.7778 3.61986 17.38L10.5299 10.47C10.027 9.35882 9.87477 8.12078 10.0934 6.92087C10.312 5.72095 10.8911 4.61617 11.7536 3.75373C12.616 2.8913 13.7208 2.31218 14.9207 2.09355C16.1206 1.87493 17.3587 2.02718 18.4699 2.53001L14.7099 6.29001L14.6999 6.30001Z" />
  </svg>
);

export const Wallet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5713 11.5206C13.1232 11.5989 13.6627 11.6753 14.2188 11.7542C14.2656 11.5862 14.3053 11.4429 14.3509 11.2791C13.779 11.1941 13.2331 11.113 12.647 11.026C12.8441 10.3257 13.0144 9.65605 13.2273 9.00017C13.2975 8.78429 13.4542 8.58165 13.6139 8.41397C13.8235 8.19421 14.1134 8.2429 14.291 8.48439C14.3653 8.58553 14.4353 8.6925 14.5244 8.77907C14.6382 8.88944 14.8059 8.9431 14.9202 8.83565C14.9953 8.76511 14.9929 8.59913 14.9999 8.47432C15.0027 8.42417 14.9438 8.36516 14.903 8.31891C14.7046 8.09332 14.4365 8.01342 14.1535 8.00153C13.5219 7.97494 13.0687 8.29826 12.7128 8.78696C12.3602 9.27129 12.2056 9.84072 12.0372 10.4035C11.9882 10.5678 11.9461 10.7342 11.8967 10.9145C11.2819 10.8252 10.692 10.7394 10.085 10.6514C10.0635 10.8159 10.0434 10.9703 10.022 11.1342C10.623 11.227 11.1979 11.3158 11.7921 11.4076C11.7126 11.7442 11.6384 12.0583 11.5623 12.3805C10.9794 12.2987 10.4268 12.2213 9.87048 12.1431C9.8469 12.3235 9.82912 12.4599 9.80808 12.6204C10.3669 12.7061 10.9056 12.7887 11.4479 12.8719C11.4479 12.9333 11.4545 12.969 11.4468 13.0014C11.2738 13.7419 11.1128 14.4857 10.9187 15.2205C10.826 15.5709 10.6768 15.9092 10.3867 16.1554C10.1479 16.3581 9.88547 16.3242 9.70591 16.0727C9.62477 15.9594 9.55705 15.8249 9.44992 15.7455C9.37168 15.6874 9.19756 15.6524 9.14012 15.699C9.05499 15.7682 8.99332 15.9213 9.00058 16.0338C9.00675 16.1334 9.10227 16.25 9.18994 16.318C9.48535 16.5464 9.83299 16.5795 10.1852 16.5099C10.7752 16.3933 11.1913 16.0237 11.4492 15.501C11.6519 15.0901 11.8036 14.6513 11.947 14.2146C12.0769 13.8191 12.1651 13.4098 12.2751 12.9927C12.8545 13.077 13.4225 13.1597 14.0022 13.2441C14.0501 13.078 14.0932 12.9277 14.1398 12.7659C13.5333 12.6764 12.9545 12.5908 12.3709 12.5046C12.441 12.1606 12.5034 11.8543 12.5713 11.5206Z"
      fill="currentColor"
    />
    <path
      d="M12.5713 11.5206C13.1232 11.5989 13.6627 11.6753 14.2188 11.7542C14.2656 11.5862 14.3053 11.4429 14.3509 11.2791C13.779 11.1941 13.2331 11.113 12.647 11.026C12.8441 10.3257 13.0144 9.65605 13.2273 9.00017C13.2975 8.78429 13.4542 8.58165 13.6139 8.41397C13.8235 8.19421 14.1134 8.2429 14.291 8.48439C14.3653 8.58553 14.4353 8.6925 14.5244 8.77907C14.6382 8.88944 14.8059 8.9431 14.9202 8.83565C14.9953 8.76511 14.9929 8.59913 14.9999 8.47432C15.0027 8.42417 14.9438 8.36516 14.903 8.31891C14.7046 8.09332 14.4365 8.01342 14.1535 8.00153C13.5219 7.97494 13.0687 8.29826 12.7128 8.78696C12.3602 9.27129 12.2056 9.84072 12.0372 10.4035C11.9882 10.5678 11.9461 10.7342 11.8967 10.9145C11.2819 10.8252 10.692 10.7394 10.085 10.6514C10.0635 10.8159 10.0434 10.9703 10.022 11.1342C10.623 11.227 11.1979 11.3158 11.7921 11.4076C11.7126 11.7442 11.6384 12.0583 11.5623 12.3805C10.9794 12.2987 10.4268 12.2213 9.87048 12.1431C9.8469 12.3235 9.82912 12.4599 9.80808 12.6204C10.3669 12.7061 10.9056 12.7887 11.4479 12.8719C11.4479 12.9333 11.4545 12.969 11.4468 13.0014C11.2738 13.7419 11.1128 14.4857 10.9187 15.2205C10.826 15.5709 10.6768 15.9092 10.3867 16.1554C10.1479 16.3581 9.88547 16.3242 9.70591 16.0727C9.62477 15.9594 9.55705 15.8249 9.44992 15.7455C9.37168 15.6874 9.19756 15.6524 9.14012 15.699C9.05499 15.7682 8.99332 15.9213 9.00058 16.0338C9.00675 16.1334 9.10227 16.25 9.18994 16.318C9.48535 16.5464 9.83299 16.5795 10.1852 16.5099C10.7752 16.3933 11.1913 16.0237 11.4492 15.501C11.6519 15.0901 11.8036 14.6513 11.947 14.2146C12.0769 13.8191 12.1651 13.4098 12.2751 12.9927C12.8545 13.077 13.4225 13.1597 14.0022 13.2441C14.0501 13.078 14.0932 12.9277 14.1398 12.7659C13.5333 12.6764 12.9545 12.5908 12.3709 12.5046C12.441 12.1606 12.5034 11.8543 12.5713 11.5206"
      stroke="currentColor"
      strokeWidth="0.3"
    />
    <path d="M9 1V4" stroke="currentColor" strokeWidth="2" />
    <path d="M15 1V4" stroke="currentColor" strokeWidth="2" />
    <path d="M9 20V23" stroke="currentColor" strokeWidth="2" />
    <path d="M15 20V23" stroke="currentColor" strokeWidth="2" />
    <path d="M20 9H23" stroke="currentColor" strokeWidth="2" />
    <path d="M20 14H23" stroke="currentColor" strokeWidth="2" />
    <path d="M1 9H4" stroke="currentColor" strokeWidth="2" />
    <path d="M1 14H4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const Refresh = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block", ...props.style }}
  >
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

export const TextDocument = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block", ...props.style }}
  >
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" />
    <path d="M14 2V8H20" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H9H8" />
  </svg>
);

export const Document = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block", ...props.style }}
  >
    <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" />
    <path d="M13 2V9H20" />
  </svg>
);

export const Book = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={{ display: "block", ...props.style }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" />
    <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z" />
  </svg>
);

export const Sound = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={{ display: "block", ...props.style }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
    <path d="M16.24 7.75999C16.7979 8.31723 17.2404 8.97896 17.5424 9.70735C17.8443 10.4357 17.9997 11.2165 17.9997 12.005C17.9997 12.7935 17.8443 13.5742 17.5424 14.3026C17.2404 15.031 16.7979 15.6928 16.24 16.25M7.76 16.24C7.20214 15.6828 6.75959 15.021 6.45764 14.2926C6.1557 13.5642 6.00028 12.7835 6.00028 11.995C6.00028 11.2065 6.1557 10.4257 6.45764 9.69735C6.75959 8.96896 7.20214 8.30723 7.76 7.74999M19.07 4.92999C20.9447 6.80527 21.9979 9.34835 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M4.93 19.07C3.05529 17.1947 2.00214 14.6516 2.00214 12C2.00214 9.34835 3.05529 6.80527 4.93 4.92999" />
  </svg>
);

export const Video = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={{ display: "block", ...props.style }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z" />
    <path d="M7 2V22" />
    <path d="M17 2V22" />
    <path d="M2 12H22" />
    <path d="M2 7H7" />
    <path d="M2 17H7" />
    <path d="M17 17H22" />
    <path d="M17 7H22" />
  </svg>
);

export const Image = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={{ display: "block", ...props.style }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" />
    <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" />
    <path d="M21 15L16 10L5 21" />
  </svg>
);

export const Eye = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={props.height}
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" />
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
  </svg>
);

export const EyeOff = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={props.height}
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M14.12 14.12C13.8454 14.4147 13.5141 14.6511 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.481 9.80385 14.1961C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4858 9.58525 10.1546 9.88 9.87999M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68189 3.96914 7.6566 6.06 6.05999L17.94 17.94ZM9.9 4.23999C10.5883 4.07887 11.2931 3.99833 12 3.99999C19 3.99999 23 12 23 12C22.393 13.1356 21.6691 14.2047 20.84 15.19L9.9 4.23999Z" />
    <path d="M1 1L23 23" />
  </svg>
);

export const Dismiss = (props) => (
  <svg
    height={16}
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    // tabIndex="0"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const Settings = (props) => (
  <svg
    height={props.height}
    style={{ display: "block", ...props.style }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const Privacy = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m22.823 8.611c.570278-.632425.570278-1.59357 0-2.226-2.623-2.885-6.792-5.701-10.823-5.634-4.031-.067-8.2 2.749-10.821 5.634l-.00000003.00000004c-.569817.632603-.569817 1.5934.00000007 2.226 2.563 2.824 6.721 5.706 10.821 5.638" />
      <path d="m15.75 7.5c0 2.07107-1.67893 3.75-3.75 3.75s-3.75-1.67893-3.75-3.75 1.67893-3.75 3.75-3.75h-.00000016c2.07107-.00000009 3.75 1.67893 3.75 3.75z" />
      <path d="m15.75 23.25c-.82842 0-1.5-.67158-1.5-1.5v-4.5c0-.82842.67158-1.5 1.5-1.5h6c.82842 0 1.5.67158 1.5 1.5v4.5c0 .82842-.67158 1.5-1.5 1.5z" />
      <path d="m18.75 11.25h-.00000013c-1.65685.00000007-3 1.34315-3 3v1.5h6v-1.5-.00000013c0-1.65685-1.34315-3-3-3-.00000004 0-.00000009 0-.00000013 0z" />
      <path d="m18.75 19.154h-.00000002c.207107-.00000001.375.167893.375.375.00000001.207107-.167893.375-.375.375-.207107.00000001-.375-.167893-.375-.375v.00000006c-.00000003-.207107.167893-.375.375-.375" />
    </g>
  </svg>
);

export const FileImage = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.207 4.5-.00000002-.00000002c.187549.187493.292943.441805.293.707v17.293c0 .552285-.447715 1-1 1h-17-.00000004c-.552285-.00000002-1-.447715-1-1v-21 .00000015c-.00000008-.552285.447715-1 1-1h13.293.00000001c.265195.00005664.519507.105451.707.293z" />
      <path d="m12.826 12.366-2.8-3.74.00000001.00000002c-.165798-.22083-.479221-.265442-.700051-.0996437-.0578698.0434484-.105619.0989405-.139949.162644l-3.276 6.074.00000001-.00000002c-.130892.24315-.0398879.546371.203262.677262.0727636.0391698.154101.0596942.236738.0597376h4.181" />
      <path d="m17.3284 13.1716c1.5621 1.5621 1.5621 4.09476 0 5.65685-1.5621 1.5621-4.09476 1.5621-5.65685 0-1.5621-1.5621-1.5621-4.09476 0-5.65685 1.5621-1.5621 4.09476-1.5621 5.65685 0" />
    </g>
  </svg>
);

export const Information = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="currentColor"
      d="m12 0h-.00000052c-6.62742.00000029-12 5.37258-12 12 .00000029 6.62742 5.37258 12 12 12 6.62742-.00000029 12-5.37258 12-12l-.00000013-.00012266c-.00723277-6.62445-5.37568-11.9928-12.0001-11.9999zm0 19h-.00000007c-.828427-.00000004-1.5-.671573-1.5-1.5.00000004-.828427.671573-1.5 1.5-1.5.828427.00000004 1.5.671573 1.5 1.5v-.00000007c0 .828427-.671573 1.5-1.5 1.5zm1.6-6.08h.00000001c-.364588.159119-.600193.519202-.6.917 0 .552285-.447715 1-1 1s-1-.447715-1-1l-.00000003-.00045412c-.00000018-1.19303.706913-2.27268 1.80042-2.74973l.00000001-.00000001c1.01225-.442058 1.47449-1.62101 1.03243-2.63326-.442058-1.01225-1.62101-1.47449-2.63326-1.03243-.728973.318347-1.19999 1.03843-1.19958 1.83388 0 .552285-.447715 1-1 1s-1-.447715-1-1v-.00005995c-.00000033-2.20914 1.79086-4 4-4 2.20914-.00000033 4 1.79086 4 4 .00000024 1.59051-.942318 3.0299-2.40005 3.66609z"
    />
  </svg>
);

export const InfoCircle = (props) => (
  <svg
    height={16}
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M12 16V12" />
    <path d="M12 8H12.01" />
  </svg>
);

export const Minimize = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M4 14H10V20" />
    <path d="M20 10H14V4" />
    <path d="M14 10L21 3" />
    <path d="M3 21L10 14" />
  </svg>
);

export const Maximize = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M15 3H21V9" />
    <path d="M9 21H3V15" />
    <path d="M21 3L14 10" />
    <path d="M3 21L10 14" />
  </svg>
);

export const Plus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const Minus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M5 12H19" />
  </svg>
);

export const FilecoinLogo = (props) => (
  <svg
    viewBox="0 0 127 127"
    height={props.height}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="m71.4 57.6c-.7 3.3-1.3 6.4-2 9.8 5.9.9 11.7 1.7 17.7 2.6-.5 1.6-.9 3.1-1.4 4.8-5.8-.8-11.5-1.7-17.3-2.5-1.1 4.2-2 8.3-3.3 12.2-1.4 4.4-3 8.7-5 12.9-2.6 5.2-6.8 8.9-12.7 10.1-3.5.7-7 .4-10-1.9-.9-.7-1.8-1.8-1.9-2.8-.1-1.1.5-2.7 1.4-3.3.6-.5 2.3-.1 3.1.5 1.1.8 1.8 2.1 2.6 3.3 1.8 2.5 4.4 2.9 6.8.8 2.9-2.5 4.4-5.8 5.3-9.3 1.9-7.3 3.6-14.8 5.3-22.2.1-.3 0-.7 0-1.3-5.4-.8-10.8-1.7-16.5-2.5.2-1.6.4-3 .6-4.8 5.6.8 11.1 1.6 17 2.4.8-3.2 1.5-6.4 2.3-9.7-6-.9-11.7-1.8-17.8-2.7.2-1.6.4-3.2.6-4.8 6.1.9 12 1.7 18.2 2.6.5-1.8.9-3.5 1.4-5.1 1.7-5.6 3.2-11.3 6.8-16.2s8.1-8.1 14.5-7.8c2.8.1 5.5.9 7.5 3.2.4.5 1 1.1 1 1.6-.1 1.2 0 2.9-.8 3.6-1.1 1.1-2.8.5-4-.6-.9-.9-1.6-1.9-2.3-2.9-1.8-2.4-4.7-2.9-6.8-.7-1.6 1.7-3.2 3.7-3.9 5.9-2.1 6.6-3.8 13.2-5.8 20.2 5.9.9 11.4 1.7 17.1 2.5-.5 1.6-.9 3.1-1.3 4.7-5.5-1.1-10.9-1.9-16.4-2.6z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronUp = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path
        d="M12 10L8 6l-4 4"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronDown = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

export const CheckBox = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export const Help = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M9.08997 8.99996C9.32507 8.33163 9.78912 7.76807 10.3999 7.40909C11.0107 7.05012 11.7289 6.9189 12.4271 7.03867C13.1254 7.15844 13.7588 7.52148 14.215 8.06349C14.6713 8.60549 14.921 9.29148 14.92 9.99996C14.92 12 11.92 13 11.92 13" />
      <path d="M12 17H12.01" />
    </svg>
  );
};

export const CopyAndPaste = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z" />
      <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5" />
    </svg>
  );
};

export const Data = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M22 12H2" />
      <path d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11V5.11Z" />
      <path d="M6 16H6.01" />
      <path d="M10 16H10.01" />
    </svg>
  );
};

export const BandwidthDown = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="m20.25 17.25h-.00000013c1.65685-.00000007 3 1.34315 3 3 .00000007 1.65685-1.34315 3-3 3h-16.5-.00000013c-1.65685-.00000007-3-1.34315-3-3 .00000007-1.65685 1.34315-3 3-3z" />
      <path d="m7.5 6.751h-1.356-.00000002c-1.39991-.00004099-2.61375.968129-2.925 2.333l-2.394 10.499" />
      <path d="m23.175 19.583-2.394-10.5.00000014.0000006c-.311246-1.36487-1.52509-2.33304-2.925-2.333h-1.356" />
      <path d="m19.125 19.875h-.00000002c-.207107.00000001-.375.167893-.375.375.00000001.207107.167893.375.375.375.207107-.00000001.375-.167893.375-.375 0-.207107-.167893-.375-.375-.375" />
      <path d="m9.75 20.25h-5.25" />
      <path d="m9 9.75 3 3 3-3" />
      <path d="m12 12.75v-12" />
    </svg>
  );
};

export const BandwidthUp = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="m20.25 17.25h-.00000013c1.65685-.00000007 3 1.34315 3 3 .00000007 1.65685-1.34315 3-3 3h-16.5-.00000013c-1.65685-.00000007-3-1.34315-3-3 .00000007-1.65685 1.34315-3 3-3z" />
      <path d="m7.5 6.751h-1.356-.00000002c-1.39991-.00004099-2.61375.968129-2.925 2.333l-2.394 10.499" />
      <path d="m23.175 19.583-2.394-10.5.00000014.0000006c-.311246-1.36487-1.52509-2.33304-2.925-2.333h-1.356" />
      <path d="m19.125 19.875h-.00000002c-.207107.00000001-.375.167893-.375.375.00000001.207107.167893.375.375.375.207107-.00000001.375-.167893.375-.375 0-.207107-.167893-.375-.375-.375" />
      <path d="m9.75 20.25h-5.25" />
      <path d="m15 3.75-3-3-3 3" />
      <path d="m12 .75v12" />
    </svg>
  );
};

export const Reorder = (props) => {
  return (
    <svg
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10Z" />
      <path d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z" />
      <path d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z" />
      <path d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z" />
    </svg>
  );
};

export const Calendar = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
};

export const ChevronRight = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
};

export const ChevronLeft = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
};

export const Check = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M20 6L9 17L4 12" />
    </svg>
  );
};

export const LocationPin = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
};

export const MoreHorizontal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" />
    <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" />
    <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" />
  </svg>
);

export const GridView = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M10 3H3V10H10V3Z" />
    <path d="M21 3H14V10H21V3Z" />
    <path d="M21 14H14V21H21V14Z" />
    <path d="M10 14H3V21H10V14Z" />
  </svg>
);

export const TableView = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M8 6H21" />
    <path d="M8 12H21" />
    <path d="M8 18H21" />
    <path d="M3 6H3.01" />
    <path d="M3 12H3.01" />
    <path d="M3 18H3.01" />
  </svg>
);

export const FeedView = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M21 3H3V10H21V3Z" />
    <path d="M21 14H3V21H21V14Z" />
  </svg>
);

export const Upload = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" />
    <path d="M17 8L12 3L7 8" />
    <path d="M12 3V15" />
  </svg>
);

export const Download = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" />
    <path d="M7 10L12 15L17 10" />
    <path d="M12 15V3" />
  </svg>
);

export const Save = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" />
    <path d="M17 21V13H7V21" />
    <path d="M7 3V8H15" />
  </svg>
);

export const Saved = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 7.75C0 3.46979 3.46979 0 7.75 0H8.25C12.5302 0 16 3.46979 16 7.75V7.75C16 12.0302 12.5302 15.5 8.25 15.5H7.75C3.46979 15.5 0 12.0302 0 7.75V7.75Z"
      fill="#34D159"
    />
    <path
      d="M12 5L6.50001 10.5L4.00002 8"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DismissCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M15 9L9 15" />
    <path d="M9 9L15 15" />
  </svg>
);

export const DragHandle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="6 6 22 22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M15.5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15.5" />
  </svg>
);

export const FileNotFound = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" />
    <path d="M13 2V9H20" />
    <path d="M14 16C14 16 13.25 15 12 15C10.75 15 10 16 10 16" strokeWidth="1" />
    <path d="M10.5 12.5H10.505" strokeWidth="1" />
    <path d="M13.5 12.5H13.505" strokeWidth="1" />
  </svg>
);

export const Desktop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3333"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M13.3334 2H2.66671C1.93033 2 1.33337 2.59695 1.33337 3.33333V10C1.33337 10.7364 1.93033 11.3333 2.66671 11.3333H13.3334C14.0698 11.3333 14.6667 10.7364 14.6667 10V3.33333C14.6667 2.59695 14.0698 2 13.3334 2Z" />
    <path d="M5.33337 14H10.6667" />
    <path d="M8 11.3335V14.0002" />
  </svg>
);

export const DesktopEye = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    // stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.3333"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M13.3334 2H2.66671C1.93033 2 1.33337 2.59695 1.33337 3.33333V10C1.33337 10.7364 1.93033 11.3333 2.66671 11.3333H13.3334C14.0698 11.3333 14.6667 10.7364 14.6667 10V3.33333C14.6667 2.59695 14.0698 2 13.3334 2Z"
      stroke="currentColor"
    />
    <path d="M5.33337 14H10.6667" stroke="currentColor" />
    <path d="M8 11.3335V14.0002" stroke="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.00004 4.0835C5.66671 4.0835 4.33337 6.75016 4.33337 6.75016C4.33337 6.75016 5.66671 9.41683 8.00004 9.41683C10.3334 9.41683 11.6667 6.75016 11.6667 6.75016C11.6667 6.75016 10.3334 4.0835 8.00004 4.0835ZM7.5 6.75C7.5 6.47386 7.72386 6.25 8 6.25C8.27614 6.25 8.5 6.47386 8.5 6.75C8.5 7.02614 8.27614 7.25 8 7.25C7.72386 7.25 7.5 7.02614 7.5 6.75ZM8 5.25C7.17157 5.25 6.5 5.92157 6.5 6.75C6.5 7.57843 7.17157 8.25 8 8.25C8.82843 8.25 9.5 7.57843 9.5 6.75C9.5 5.92157 8.82843 5.25 8 5.25Z"
      fill="currentColor"
    />
    <path
      d="M4.33337 6.75016L4.10977 6.63836C4.07458 6.70874 4.07458 6.79158 4.10977 6.86197L4.33337 6.75016ZM11.6667 6.75016L11.8903 6.86197C11.9255 6.79158 11.9255 6.70874 11.8903 6.63836L11.6667 6.75016ZM4.33337 6.75016C4.55698 6.86197 4.55695 6.86203 4.55692 6.86209C4.55692 6.86209 4.55689 6.86214 4.55689 6.86215C4.55688 6.86217 4.55689 6.86215 4.55692 6.8621C4.55698 6.86198 4.55711 6.8617 4.55733 6.86127C4.55777 6.86041 4.55853 6.85892 4.55961 6.85682C4.56176 6.85263 4.56519 6.84602 4.56989 6.83714C4.57928 6.8194 4.59372 6.79264 4.61312 6.75814C4.65194 6.68913 4.71052 6.58937 4.78818 6.46913C4.9438 6.22817 5.17437 5.90751 5.47409 5.58781C6.07809 4.94355 6.93325 4.3335 8.00004 4.3335V3.8335C6.7335 3.8335 5.75533 4.55677 5.10932 5.24584C4.78404 5.59281 4.53545 5.93882 4.36816 6.19786C4.28435 6.32763 4.22054 6.4362 4.17733 6.51301C4.15572 6.55144 4.13923 6.58197 4.12795 6.60329C4.12231 6.61395 4.11797 6.62231 4.11493 6.62821C4.11342 6.63116 4.11223 6.63349 4.11137 6.63519C4.11093 6.63604 4.11059 6.63673 4.11032 6.63726C4.11019 6.63752 4.11007 6.63775 4.10998 6.63793C4.10994 6.63802 4.10988 6.63813 4.10986 6.63818C4.10981 6.63827 4.10977 6.63836 4.33337 6.75016ZM8.00004 9.16683C6.93325 9.16683 6.07809 8.55677 5.47409 7.91251C5.17437 7.59281 4.9438 7.27216 4.78818 7.0312C4.71052 6.91096 4.65194 6.8112 4.61312 6.74218C4.59372 6.70769 4.57928 6.68093 4.56989 6.66318C4.56519 6.65431 4.56176 6.6477 4.55961 6.64351C4.55853 6.64141 4.55777 6.63992 4.55733 6.63906C4.55711 6.63862 4.55698 6.63835 4.55692 6.63823C4.55689 6.63817 4.55688 6.63815 4.55689 6.63817C4.55689 6.63819 4.55692 6.63823 4.55692 6.63824C4.55695 6.63829 4.55698 6.63836 4.33337 6.75016C4.10977 6.86197 4.10981 6.86205 4.10986 6.86215C4.10988 6.8622 4.10994 6.8623 4.10998 6.86239C4.11007 6.86258 4.11019 6.8628 4.11032 6.86307C4.11059 6.8636 4.11093 6.86429 4.11137 6.86514C4.11223 6.86683 4.11342 6.86917 4.11493 6.87212C4.11797 6.87802 4.12231 6.88638 4.12795 6.89704C4.13923 6.91836 4.15572 6.94889 4.17733 6.98731C4.22054 7.06413 4.28435 7.1727 4.36816 7.30246C4.53545 7.5615 4.78404 7.90751 5.10932 8.25448C5.75533 8.94355 6.7335 9.66683 8.00004 9.66683V9.16683ZM11.6667 6.75016C11.4431 6.63836 11.4431 6.63829 11.4432 6.63824C11.4432 6.63823 11.4432 6.63819 11.4432 6.63817C11.4432 6.63815 11.4432 6.63817 11.4432 6.63823C11.4431 6.63835 11.443 6.63862 11.4427 6.63906C11.4423 6.63992 11.4416 6.64141 11.4405 6.64351C11.4383 6.6477 11.4349 6.65431 11.4302 6.66318C11.4208 6.68093 11.4064 6.70769 11.387 6.74218C11.3481 6.8112 11.2896 6.91096 11.2119 7.0312C11.0563 7.27216 10.8257 7.59281 10.526 7.91251C9.92199 8.55677 9.06683 9.16683 8.00004 9.16683V9.66683C9.26658 9.66683 10.2448 8.94355 10.8908 8.25448C11.216 7.90751 11.4646 7.5615 11.6319 7.30246C11.7157 7.1727 11.7795 7.06413 11.8228 6.98731C11.8444 6.94889 11.8609 6.91836 11.8721 6.89704C11.8778 6.88638 11.8821 6.87802 11.8851 6.87212C11.8867 6.86917 11.8879 6.86683 11.8887 6.86514C11.8891 6.86429 11.8895 6.8636 11.8898 6.86307C11.8899 6.8628 11.89 6.86258 11.8901 6.86239C11.8901 6.8623 11.8902 6.8622 11.8902 6.86215C11.8903 6.86205 11.8903 6.86197 11.6667 6.75016ZM8.00004 4.3335C9.06683 4.3335 9.92199 4.94355 10.526 5.58781C10.8257 5.90751 11.0563 6.22817 11.2119 6.46913C11.2896 6.58937 11.3481 6.68913 11.387 6.75814C11.4064 6.79264 11.4208 6.8194 11.4302 6.83714C11.4349 6.84602 11.4383 6.85263 11.4405 6.85682C11.4416 6.85892 11.4423 6.86041 11.4427 6.86127C11.443 6.8617 11.4431 6.86198 11.4432 6.8621C11.4432 6.86215 11.4432 6.86217 11.4432 6.86215C11.4432 6.86214 11.4432 6.86209 11.4432 6.86209C11.4431 6.86203 11.4431 6.86197 11.6667 6.75016C11.8903 6.63836 11.8903 6.63827 11.8902 6.63818C11.8902 6.63813 11.8901 6.63802 11.8901 6.63793C11.89 6.63775 11.8899 6.63752 11.8898 6.63726C11.8895 6.63673 11.8891 6.63604 11.8887 6.63519C11.8879 6.63349 11.8867 6.63116 11.8851 6.62821C11.8821 6.62231 11.8778 6.61395 11.8721 6.60329C11.8609 6.58197 11.8444 6.55144 11.8228 6.51301C11.7795 6.4362 11.7157 6.32763 11.6319 6.19786C11.4646 5.93882 11.216 5.59281 10.8908 5.24584C10.2448 4.55677 9.26658 3.8335 8.00004 3.8335V4.3335ZM8 6C7.58579 6 7.25 6.33579 7.25 6.75H7.75C7.75 6.61193 7.86193 6.5 8 6.5V6ZM8.75 6.75C8.75 6.33579 8.41421 6 8 6V6.5C8.13807 6.5 8.25 6.61193 8.25 6.75H8.75ZM8 7.5C8.41421 7.5 8.75 7.16421 8.75 6.75H8.25C8.25 6.88807 8.13807 7 8 7V7.5ZM7.25 6.75C7.25 7.16421 7.58579 7.5 8 7.5V7C7.86193 7 7.75 6.88807 7.75 6.75H7.25ZM6.75 6.75C6.75 6.05964 7.30964 5.5 8 5.5V5C7.0335 5 6.25 5.7835 6.25 6.75H6.75ZM8 8C7.30964 8 6.75 7.44036 6.75 6.75H6.25C6.25 7.7165 7.0335 8.5 8 8.5V8ZM9.25 6.75C9.25 7.44036 8.69036 8 8 8V8.5C8.9665 8.5 9.75 7.7165 9.75 6.75H9.25ZM8 5.5C8.69036 5.5 9.25 6.05964 9.25 6.75H9.75C9.75 5.7835 8.9665 5 8 5V5.5Z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowDownLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M9 10L4 15L9 20" />
    <path d="M20 4V11C20 12.0609 19.5786 13.0783 18.8284 13.8284C18.0783 14.5786 17.0609 15 16 15H4" />
  </svg>
);

export const Hash = (props) => (
  <svg
    height={16}
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3333"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M2.66663 6H13.3333" />
    <path d="M2.66663 10H13.3333" />
    <path d="M6.66671 2L5.33337 14" />
    <path d="M10.6667 2L9.33337 14" />
  </svg>
);

export const Filter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" />
  </svg>
);

export const MenuAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M13 2H11C10.4477 2 10 2.44772 10 3V5C10 5.55228 10.4477 6 11 6H13C13.5523 6 14 5.55228 14 5V3C14 2.44772 13.5523 2 13 2Z" />
    <path d="M5 2H3C2.44772 2 2 2.44772 2 3V5C2 5.55228 2.44772 6 3 6H5C5.55228 6 6 5.55228 6 5V3C6 2.44772 5.55228 2 5 2Z" />
    <path d="M21 2H19C18.4477 2 18 2.44772 18 3V5C18 5.55228 18.4477 6 19 6H21C21.5523 6 22 5.55228 22 5V3C22 2.44772 21.5523 2 21 2Z" />
    <path d="M13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10Z" />
    <path d="M5 10H3C2.44772 10 2 10.4477 2 11V13C2 13.5523 2.44772 14 3 14H5C5.55228 14 6 13.5523 6 13V11C6 10.4477 5.55228 10 5 10Z" />
    <path d="M21 10H19C18.4477 10 18 10.4477 18 11V13C18 13.5523 18.4477 14 19 14H21C21.5523 14 22 13.5523 22 13V11C22 10.4477 21.5523 10 21 10Z" />
    <path d="M13 18H11C10.4477 18 10 18.4477 10 19V21C10 21.5523 10.4477 22 11 22H13C13.5523 22 14 21.5523 14 21V19C14 18.4477 13.5523 18 13 18Z" />
    <path d="M5 18H3C2.44772 18 2 18.4477 2 19V21C2 21.5523 2.44772 22 3 22H5C5.55228 22 6 21.5523 6 21V19C6 18.4477 5.55228 18 5 18Z" />
    <path d="M21 18H19C18.4477 18 18 18.4477 18 19V21C18 21.5523 18.4477 22 19 22H21C21.5523 22 22 21.5523 22 21V19C22 18.4477 21.5523 18 21 18Z" />
  </svg>
);

export const Menu = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z" />
  </svg>
);

export const MenuMinimal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="currentColor"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M3.33331 6H21.3333" />
    <path d="M3.33331 18H21.3333" />
  </svg>
);

export const Globe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M2 12H22" />
    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" />
  </svg>
);

export const Moon = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79v0z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Sun = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Sliders = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AlignLeft = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M17 10H3M21 6H3M21 14H3M17 18H3"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AlignCenter = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M18 10H6M21 6H3M21 14H3M18 18H6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const AlignRight = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M21 10H7M21 6H3M21 14H3M21 18H7"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RotateCcw = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M1 4v6h6"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.51 15a9 9 0 102.13-9.36L1 10"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MehCircle = (props) => (
  <svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M8 15.167A6.667 6.667 0 108 1.834a6.667 6.667 0 000 13.333zM5.333 10.5h5.334M6 6.5h.007M10 6.5h.007"
      stroke="#FF4530"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Heart = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M13.893 3.073a3.667 3.667 0 00-5.186 0L8 3.78l-.707-.707A3.667 3.667 0 102.107 8.26l.706.707L8 14.153l5.187-5.186.706-.707a3.667 3.667 0 000-5.187v0z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SmileCircle = (props) => (
  <svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M8 15.167A6.667 6.667 0 108 1.834a6.667 6.667 0 000 13.333z"
      stroke="#34D159"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.333 9.834s1 1.333 2.667 1.333c1.667 0 2.667-1.333 2.667-1.333M6 6.5h.007M10 6.5h.007"
      stroke="#34D159"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FolderPlus = (props) => (
  <svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M18.333 16.333A1.667 1.667 0 0116.667 18H3.333a1.667 1.667 0 01-1.666-1.667V4.667A1.667 1.667 0 013.333 3H7.5l1.667 2.5h7.5a1.667 1.667 0 011.666 1.667v9.166zM10 9.667v5M7.5 12.167h5"
      stroke="#48484A"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlayButton = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <g filter="url(#prefix__filter0_b)">
      <rect width={40} height={40} rx={20} fill="#fff" fillOpacity={0.3} />
      <path d="M15.333 14l9.334 6-9.334 6V14z" fill="#F2F2F7" />
    </g>
    <defs>
      <filter
        id="prefix__filter0_b"
        x={-75}
        y={-75}
        width={190}
        height={190}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={37.5} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
      </filter>
    </defs>
  </svg>
);

export const RSS = (props) => (
  <svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M3.333 9.667a7.5 7.5 0 017.5 7.5M3.333 3.833a13.333 13.333 0 0113.334 13.334M4.167 17.167a.833.833 0 100-1.667.833.833 0 000 1.667z"
      stroke="#000002"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Box = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M14 10.667V5.333a1.333 1.333 0 00-.667-1.153L8.667 1.513a1.333 1.333 0 00-1.334 0L2.667 4.18A1.333 1.333 0 002 5.333v5.334a1.334 1.334 0 00.667 1.153l4.666 2.667a1.334 1.334 0 001.334 0l4.666-2.667A1.333 1.333 0 0014 10.667z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.18 4.64L8 8.007l5.82-3.367M8 14.72V8"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Share = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M12 5.333a2 2 0 100-4 2 2 0 000 4zM4 10a2 2 0 100-4 2 2 0 000 4zM12 14.667a2 2 0 100-4 2 2 0 000 4zM5.727 9.007l4.553 2.653M10.273 4.34L5.727 6.993"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Mail = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    // tabIndex="0"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M2.667 2.667h10.666c.734 0 1.334.6 1.334 1.333v8c0 .733-.6 1.333-1.334 1.333H2.667c-.734 0-1.334-.6-1.334-1.333V4c0-.733.6-1.333 1.334-1.333z" />
    <path d="M14.667 4L8 8.667 1.333 4" />
  </svg>
);

// TODO(amine): update this logo when working on object sharing
export const TwitterWhiteLogo = (props) => (
  <svg
    width={16}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M15.333 1a7.268 7.268 0 01-2.093 1.02 2.987 2.987 0 00-5.24 2v.667a7.107 7.107 0 01-6-3.02s-2.667 6 3.333 8.666a7.76 7.76 0 01-4.666 1.334C6.667 15 14 11.667 14 4c0-.186-.018-.371-.053-.553A5.147 5.147 0 0015.333 1z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Clipboard = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M10.667 2.667H12A1.333 1.333 0 0113.333 4v9.333A1.333 1.333 0 0112 14.667H4a1.333 1.333 0 01-1.333-1.334V4A1.333 1.333 0 014 2.667h1.333"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 1.333H6A.667.667 0 005.333 2v1.333c0 .369.299.667.667.667h4a.667.667 0 00.667-.667V2A.667.667 0 0010 1.333z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const List = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M5.333 4H14M5.333 8H14M5.333 12H14M2 4h.007M2 8h.007M2 12h.007"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Radio = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M8 9.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM10.827 5.173a4 4 0 010 5.66m-5.654-.006a4 4 0 010-5.66m7.54-1.88a6.667 6.667 0 010 9.426m-9.426 0a6.667 6.667 0 010-9.426"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FileText = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M9.333 1.333H4a1.333 1.333 0 00-1.333 1.334v10.666A1.333 1.333 0 004 14.667h8a1.333 1.333 0 001.333-1.334v-8l-4-4z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.333 1.333v4h4M10.667 8.667H5.333M10.667 11.333H5.333M6.667 6H5.333"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Sidebar = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M12.667 2H3.333C2.597 2 2 2.597 2 3.333v9.334C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333V3.333C14 2.597 13.403 2 12.667 2z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6 2v12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Clock = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 4v4l2.667 1.333"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Layout = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M12.667 2H3.333C2.597 2 2 2.597 2 3.333v9.334C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333V3.333C14 2.597 13.403 2 12.667 2zM2 6h12M6 14V6"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Twitter = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    // tabIndex="0"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M15.333 2a7.268 7.268 0 01-2.093 1.02 2.987 2.987 0 00-5.24 2v.667a7.107 7.107 0 01-6-3.02s-2.667 6 3.333 8.666a7.76 7.76 0 01-4.666 1.334C6.667 16 14 12.667 14 5c0-.186-.018-.371-.053-.553A5.147 5.147 0 0015.333 2v0z" />
  </svg>
);

export const Discord = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    // tabIndex="0"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path d="M13.3887 3.12791C15.1297 5.7015 15.9928 8.59281 15.6906 11.9178C14.4201 12.8369 13.1883 13.4115 11.9724 13.8002C11.7518 13.4853 11.5474 13.1577 11.3618 12.8179C11.734 12.6667 12.0915 12.4913 12.4376 12.2894C12.6278 12.1786 12.6348 11.9138 12.4652 11.7878L12.4651 11.7878C12.3843 11.7278 12.3037 11.6645 12.2264 11.601L12.2265 11.6009L12.2233 11.5984C12.1372 11.5299 12.0161 11.5111 11.9095 11.5612C9.38898 12.7228 6.63066 12.7231 4.078 11.5602L4.07621 11.5594C3.97443 11.514 3.853 11.5281 3.76381 11.6016C3.68724 11.6646 3.60645 11.7275 3.52507 11.7883C3.35144 11.9179 3.369 12.1817 3.55395 12.2894L3.55566 12.2904C3.90054 12.4878 4.25806 12.6658 4.63123 12.8188C4.4486 13.1586 4.24414 13.4859 4.02019 13.8006C2.80951 13.4118 1.57769 12.8372 0.307019 11.9181C0.0539242 9.03634 0.612187 6.1225 2.60647 3.12827C3.55137 2.70026 4.55945 2.3801 5.61107 2.18744C5.72991 2.40661 5.85402 2.65872 5.94148 2.86842L6.01671 3.0488L6.20991 3.01933C7.38924 2.83947 8.58756 2.83935 9.79313 3.01945L9.98426 3.048L10.06 2.87022C10.1489 2.66171 10.2695 2.40603 10.3857 2.18764C11.4373 2.38081 12.4448 2.70078 13.3887 3.12791ZM10.243 2.16227L10.2455 2.16269L10.243 2.16227ZM0.315195 12.0082L0.315033 12.0064L0.315195 12.0082ZM12.1858 11.8575C12.1853 11.8578 12.1848 11.8581 12.1843 11.8583C12.1848 11.858 12.1853 11.8577 12.1859 11.8574L12.1858 11.8575ZM12.0563 13.9184L12.0555 13.9172L12.0563 13.9184ZM3.65876 8.60685C3.65876 9.60516 4.39501 10.466 5.34668 10.466C6.31169 10.466 7.03372 9.60469 7.03458 8.60864C7.04795 7.61406 6.31631 6.74773 5.34668 6.74773C4.38108 6.74773 3.65876 7.61003 3.65876 8.60685ZM8.97526 8.60685C8.97526 9.60516 9.71151 10.466 10.6632 10.466C11.6352 10.466 12.3502 9.60394 12.3511 8.60864C12.3644 7.61407 11.6328 6.74773 10.6632 6.74773C9.69755 6.74773 8.97526 7.61004 8.97526 8.60685Z" />
  </svg>
);

export const Bookmark = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M12.667 14L8 10.667 3.333 14V3.333A1.333 1.333 0 014.667 2h6.666a1.333 1.333 0 011.334 1.333V14z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FilePlus = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M9.333 1.333H4a1.333 1.333 0 00-1.333 1.334v10.666A1.333 1.333 0 004 14.667h8a1.334 1.334 0 001.333-1.334v-8l-4-4z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.333 1.333v4h4M8 12V8M6 10h4"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Youtube = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M15.027 4.28a1.853 1.853 0 00-1.294-1.333C12.587 2.667 8 2.667 8 2.667s-4.587 0-5.733.306A1.853 1.853 0 00.973 4.307a19.333 19.333 0 00-.306 3.526c-.008 1.192.095 2.381.306 3.554a1.853 1.853 0 001.294 1.28c1.146.306 5.733.306 5.733.306s4.587 0 5.733-.306a1.853 1.853 0 001.294-1.334 19.33 19.33 0 00.306-3.5 19.33 19.33 0 00-.306-3.553v0z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 10.013l3.833-2.18L6.5 5.653v4.36z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Github = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M6 12.667c-3.333 1-3.333-1.667-4.667-2m9.334 4v-2.58a2.246 2.246 0 00-.627-1.74c2.093-.234 4.293-1.027 4.293-4.667 0-.93-.358-1.826-1-2.5a3.38 3.38 0 00-.06-2.513s-.786-.234-2.606.986a8.92 8.92 0 00-4.667 0C4.18.433 3.393.667 3.393.667a3.38 3.38 0 00-.06 2.513 3.627 3.627 0 00-1 2.52c0 3.613 2.2 4.407 4.294 4.667A2.246 2.246 0 006 12.087v2.58"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Twitch = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M10.667 7.333V4.667M14 1.333H2V12h3.333v2.667L8 12h3.333L14 9.333v-8zm-6.667 6V4.667v2.666z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Instagram = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M11.333 1.333H4.667a3.333 3.333 0 00-3.334 3.334v6.666a3.333 3.333 0 003.334 3.334h6.666a3.333 3.333 0 003.334-3.334V4.667a3.333 3.333 0 00-3.334-3.334z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.667 7.58a2.667 2.667 0 11-5.276.782 2.667 2.667 0 015.276-.782zM11.667 4.333h.006"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UploadCloud = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M10.667 10.667L8 8l-2.667 2.667M8 8v6"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.593 12.26A3.333 3.333 0 0012 6h-.84A5.333 5.333 0 102 10.867"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.667 10.667L8 8l-2.667 2.667"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const XCircle = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334zM10 6l-4 4M6 6l4 4"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckCircle = (props) => (
  <svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M14.667 7.887V8.5a6.666 6.666 0 11-3.954-6.093"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.667 3.167L8 9.84l-2-2"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AlertTriangle = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M6.86 2.573L1.213 12a1.333 1.333 0 001.14 2h11.294a1.333 1.333 0 001.14-2L9.14 2.573a1.333 1.333 0 00-2.28 0v0zM8 6v2.667M8 11.333h.007"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Hexagon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M14 10.666V5.333a1.333 1.333 0 00-.667-1.153L8.667 1.513a1.333 1.333 0 00-1.334 0L2.667 4.18A1.333 1.333 0 002 5.333v5.333a1.333 1.333 0 00.667 1.154l4.666 2.666a1.333 1.333 0 001.334 0l4.666-2.666A1.333 1.333 0 0014 10.666z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Airplay = (props) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3.333 11.333h-.666A1.333 1.333 0 011.333 10V3.333A1.333 1.333 0 012.667 2h10.666a1.333 1.333 0 011.334 1.333V10a1.333 1.333 0 01-1.334 1.333h-.666"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10l3.333 4H4.667L8 10z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TwitterFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#prefix__clip0_2_19929)">
      <path
        d="M16 1.59a6.563 6.563 0 01-1.885.517A3.292 3.292 0 0015.558.291a6.575 6.575 0 01-2.085.797A3.283 3.283 0 007.88 4.082 9.32 9.32 0 011.115.652 3.281 3.281 0 002.13 5.034a3.27 3.27 0 01-1.487-.41v.041a3.285 3.285 0 002.633 3.22 3.287 3.287 0 01-1.483.055 3.286 3.286 0 003.067 2.28A6.586 6.586 0 010 11.58a9.292 9.292 0 005.032 1.474c6.038 0 9.34-5.002 9.34-9.34 0-.142-.004-.283-.01-.424A6.672 6.672 0 0016 1.59z"
        fill="#55ACEE"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_2_19929">
        <path fill="#fff" d="M0 0h16v13.063H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const YoutubeFavicon = (props) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#prefix__clip0_2_20642)">
      <path
        d="M15.647 1.755A2.011 2.011 0 0014.23.339C12.989 0 7.99 0 7.99 0S2.996.01 1.754.349c-.69.187-1.23.726-1.416 1.416C-.04 3.97-.184 7.333.347 9.45c.187.69.726 1.229 1.416 1.416 1.242.338 6.239.338 6.239.338s4.997 0 6.239-.338a2.011 2.011 0 001.416-1.416c.396-2.21.518-5.57-.01-7.696z"
        fill="red"
      />
      <path d="M6.4 8.003l4.146-2.4L6.4 3.2v4.802z" fill="#fff" />
    </g>
    <defs>
      <clipPath id="prefix__clip0_2_20642">
        <path fill="#fff" d="M0 0h16v11.25H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const AmazonFavicon = (props) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <clipPath id="a">
      <path d="M0 0h16v16H0z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path
        d="M13.774 12.918C7.297 16 3.278 13.42.704 11.855c-.159-.1-.43.023-.194.292.857 1.04 3.666 3.545 7.333 3.545 3.67 0 5.852-2.002 6.125-2.352.272-.346.08-.537-.194-.422zm1.819-1.005c-.174-.226-1.058-.269-1.614-.2-.557.066-1.393.406-1.32.61.037.077.113.043.496.009.384-.039 1.459-.174 1.683.118.225.295-.343 1.7-.447 1.926-.1.227.038.285.227.134.185-.15.521-.541.747-1.094.224-.555.36-1.33.228-1.503z"
        fill="#f90"
      />
      <path
        clipRule="evenodd"
        d="M9.42 6.628c0 .809.02 1.483-.39 2.201-.33.584-.852.944-1.436.944-.797 0-1.261-.608-1.261-1.504 0-1.77 1.585-2.09 3.086-2.09zm2.093 5.06a.433.433 0 0 1-.49.05c-.69-.573-.813-.838-1.192-1.384-1.139 1.162-1.945 1.51-3.422 1.51-1.746 0-3.107-1.078-3.107-3.236 0-1.685.914-2.832 2.213-3.393 1.127-.496 2.701-.584 3.904-.72v-.27c0-.493.038-1.077-.251-1.503-.254-.383-.739-.54-1.165-.54-.791 0-1.498.405-1.67 1.246-.035.187-.172.371-.36.38L3.96 3.612c-.17-.038-.356-.175-.31-.435C4.115.736 6.32 0 8.293 0c1.01 0 2.33.269 3.127 1.034 1.01.943.914 2.201.914 3.57V7.84c0 .972.403 1.398.782 1.924.135.187.164.412-.005.552a87.94 87.94 0 0 0-1.592 1.378l-.006-.006"
        fill="#000"
        fillRule="evenodd"
      />
      <path
        d="M13.774 12.918C7.297 16 3.278 13.42.704 11.855c-.159-.1-.43.023-.194.292.857 1.04 3.666 3.545 7.333 3.545 3.67 0 5.852-2.002 6.125-2.352.272-.346.08-.537-.194-.422zm1.819-1.005c-.174-.226-1.058-.269-1.614-.2-.557.066-1.393.406-1.32.61.037.077.113.043.496.009.384-.039 1.459-.174 1.683.118.225.295-.343 1.7-.447 1.926-.1.227.038.285.227.134.185-.15.521-.541.747-1.094.224-.555.36-1.33.228-1.503z"
        fill="#f90"
      />
      <path
        clipRule="evenodd"
        d="M9.42 6.628c0 .809.02 1.483-.39 2.201-.33.584-.852.944-1.436.944-.797 0-1.261-.608-1.261-1.504 0-1.77 1.585-2.09 3.086-2.09zm2.093 5.06a.433.433 0 0 1-.49.05c-.69-.573-.813-.838-1.192-1.384-1.139 1.162-1.945 1.51-3.422 1.51-1.746 0-3.107-1.078-3.107-3.236 0-1.685.914-2.832 2.213-3.393 1.127-.496 2.701-.584 3.904-.72v-.27c0-.493.038-1.077-.251-1.503-.254-.383-.739-.54-1.165-.54-.791 0-1.498.405-1.67 1.246-.035.187-.172.371-.36.38L3.96 3.612c-.17-.038-.356-.175-.31-.435C4.115.736 6.32 0 8.293 0c1.01 0 2.33.269 3.127 1.034 1.01.943.914 2.201.914 3.57V7.84c0 .972.403 1.398.782 1.924.135.187.164.412-.005.552a87.94 87.94 0 0 0-1.592 1.378l-.006-.006"
        fill="#000"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

export const AppleFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.3583 8.5003C12.3807 10.9216 14.4783 11.7274 14.5016 11.7376C14.4839 11.7945 14.1664 12.8859 13.3965 14.0133C12.7308 14.988 12.04 15.9591 10.9518 15.9792C9.88252 15.9989 9.53868 15.3439 8.31617 15.3439C7.09404 15.3439 6.71202 15.9591 5.69982 15.9989C4.6494 16.0388 3.84952 14.945 3.17838 13.9738C1.807 11.9874 0.758979 8.36062 2.16621 5.91249C2.86529 4.69674 4.1146 3.92687 5.47061 3.90713C6.50209 3.88741 7.47569 4.6024 8.10625 4.6024C8.7364 4.6024 9.91953 3.74257 11.1633 3.86884C11.684 3.89056 13.1456 4.07957 14.0841 5.45594C14.0085 5.50291 12.3401 6.476 12.3583 8.5003V8.5003ZM10.3487 2.55464C10.9063 1.87831 11.2817 0.936798 11.1793 0C10.3754 0.0323689 9.4034 0.536681 8.82682 1.21264C8.3101 1.81123 7.85756 2.76931 7.97967 3.68757C8.87564 3.75702 9.79095 3.2314 10.3487 2.55464"
      fill="black"
    />
  </svg>
);

export const AirtableFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.14491 1.47954L1.18252 3.94671C0.850948 4.08393 0.854382 4.55489 1.18803 4.68714L7.17538 7.06146C7.70148 7.2701 8.28733 7.2701 8.81334 7.06146L14.8008 4.68714C15.1343 4.55489 15.1379 4.08393 14.8062 3.94671L8.8439 1.47954C8.2999 1.25446 7.68882 1.25446 7.14491 1.47954Z"
      fill="#FFBF00"
    />
    <path
      d="M8.52556 8.35803V14.2894C8.52556 14.5715 8.81003 14.7647 9.07227 14.6608L15.744 12.0711C15.8963 12.0107 15.9962 11.8636 15.9962 11.6998V5.76838C15.9962 5.48626 15.7117 5.29308 15.4495 5.39704L8.77776 7.98669C8.62554 8.04707 8.52556 8.19424 8.52556 8.35803Z"
      fill="#26B5F8"
    />
    <path
      d="M6.96767 8.66408L4.98765 9.6201L4.78661 9.71727L0.606903 11.72C0.341954 11.8478 0.00378418 11.6547 0.00378418 11.3604V5.7933C0.00378418 5.68681 0.058383 5.59488 0.131603 5.52563C0.162157 5.49499 0.196779 5.46977 0.232756 5.44979C0.332643 5.38986 0.475106 5.37386 0.596236 5.42177L6.93441 7.93305C7.25657 8.06087 7.28189 8.5123 6.96767 8.66408Z"
      fill="#ED3049"
    />
    <path
      d="M6.96767 8.66408L4.98765 9.6201L0.131607 5.52563C0.162161 5.49499 0.196782 5.46977 0.23276 5.44979C0.332647 5.38986 0.47511 5.37386 0.59624 5.42177L6.93441 7.93305C7.25658 8.06087 7.28189 8.5123 6.96767 8.66408Z"
      fill="black"
      fillOpacity="0.25"
    />
  </svg>
);

export const DribbbleFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.00001 0.53125C12.125 0.53125 15.4625 3.86875 15.4625 7.9875C15.4625 12.1063 12.125 15.45 8.00001 15.45C3.87501 15.45 0.537506 12.1125 0.537506 7.99375C0.537506 3.875 3.87501 0.53125 8.00001 0.53125Z"
      fill="#E74D89"
    />
    <path
      d="M8 15.9812C3.5875 15.9812 0 12.4 0 7.99375C0 3.58125 3.5875 0 8 0C12.4125 0 16 3.58125 16 7.9875C16 12.3938 12.4125 15.9812 8 15.9812ZM14.7437 9.08125C14.5125 9.00625 12.6313 8.45 10.4875 8.7875C11.3813 11.2375 11.7437 13.2375 11.8125 13.65C13.35 12.6187 14.4437 10.9813 14.7437 9.08125ZM10.6687 14.2812C10.5687 13.6812 10.1687 11.5937 9.2125 9.10625C9.2 9.1125 9.18125 9.11875 9.16875 9.11875C5.3125 10.4625 3.93125 13.1313 3.80625 13.3813C4.9625 14.2813 6.41875 14.8188 8 14.8188C8.94375 14.825 9.85 14.6312 10.6687 14.2812ZM2.925 12.5625C3.08125 12.3 4.95625 9.2 8.48125 8.05625C8.56875 8.025 8.6625 8 8.75 7.975C8.58125 7.5875 8.39375 7.2 8.19375 6.81875C4.78125 7.8375 1.46875 7.79375 1.16875 7.7875C1.16875 7.85625 1.1625 7.925 1.1625 7.99375C1.16875 9.75 1.83125 11.35 2.925 12.5625ZM1.3125 6.6C1.61875 6.60625 4.43125 6.61875 7.63125 5.76875C6.5 3.75625 5.275 2.06875 5.1 1.825C3.18125 2.725 1.75625 4.4875 1.3125 6.6ZM6.4 1.3625C6.5875 1.6125 7.83125 3.3 8.95 5.35625C11.3812 4.44375 12.4062 3.06875 12.5312 2.89375C11.325 1.825 9.7375 1.175 8 1.175C7.45 1.175 6.9125 1.24375 6.4 1.3625ZM13.2875 3.68125C13.1438 3.875 12 5.34375 9.475 6.375C9.63125 6.7 9.7875 7.03125 9.93125 7.3625C9.98125 7.48125 10.0313 7.6 10.0813 7.7125C12.3563 7.425 14.6125 7.8875 14.8375 7.93125C14.8187 6.325 14.2438 4.84375 13.2875 3.68125Z"
      fill="#B2215A"
    />
  </svg>
);

export const EventBriteFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
      fill="#F05537"
    />
    <path
      d="M7.34222 5.17057C8.54829 4.90256 9.75436 5.39392 10.4244 6.33197L5.09387 7.53804C5.27254 6.39153 6.13615 5.43859 7.34222 5.17057ZM10.4542 9.59283C10.0373 10.2033 9.397 10.6351 8.66741 10.7989C7.46134 11.0669 6.24038 10.5756 5.57034 9.62261L10.9158 8.41654L11.7794 8.22297L13.447 7.85073C13.4321 7.49337 13.3875 7.13602 13.313 6.79356C12.643 3.91984 9.70969 2.11818 6.77641 2.78822C3.84313 3.45825 2.01169 6.31708 2.69662 9.20569C3.38155 12.0943 6.29994 13.8811 9.23322 13.211C10.9604 12.8239 12.3005 11.6625 12.9854 10.1884L10.4542 9.59283Z"
      fill="white"
    />
  </svg>
);

export const GithubFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.00007 0.197479C3.58233 0.197479 0 3.77915 0 8.19755C0 11.7322 2.29226 14.731 5.47093 15.7888C5.87075 15.8628 6.01754 15.6152 6.01754 15.4039C6.01754 15.2132 6.01012 14.583 6.00667 13.9145C3.78105 14.3984 3.31141 12.9706 3.31141 12.9706C2.9475 12.0459 2.42315 11.8 2.42315 11.8C1.6973 11.3035 2.47786 11.3137 2.47786 11.3137C3.28121 11.3701 3.70421 12.1381 3.70421 12.1381C4.41774 13.3611 5.57572 13.0075 6.03224 12.8031C6.10404 12.2861 6.31137 11.9332 6.54016 11.7334C4.76324 11.5311 2.8953 10.8451 2.8953 7.77971C2.8953 6.90628 3.20782 6.19263 3.71958 5.63238C3.63651 5.43088 3.36268 4.6172 3.79708 3.51525C3.79708 3.51525 4.46887 3.30024 5.99766 4.33529C6.63581 4.15803 7.32019 4.06914 8.00007 4.06609C8.67994 4.06914 9.36485 4.15803 10.0042 4.33529C11.5311 3.30024 12.202 3.51525 12.202 3.51525C12.6375 4.6172 12.3635 5.43088 12.2804 5.63238C12.7934 6.19263 13.1038 6.90628 13.1038 7.77971C13.1038 10.8524 11.2323 11.529 9.45083 11.727C9.73778 11.9753 9.99346 12.4621 9.99346 13.2085C9.99346 14.2789 9.98419 15.1404 9.98419 15.4039C9.98419 15.6168 10.1282 15.8663 10.5337 15.7877C13.7107 14.7287 16 11.731 16 8.19755C16 3.77915 12.4182 0.197479 8.00007 0.197479ZM2.99628 11.5937C2.97867 11.6335 2.91614 11.6454 2.85917 11.6181C2.80115 11.592 2.76856 11.5378 2.78737 11.498C2.80459 11.457 2.86725 11.4456 2.92514 11.4731C2.9833 11.4992 3.01642 11.5539 2.99628 11.5937ZM3.3898 11.9449C3.35165 11.9802 3.27706 11.9638 3.22645 11.9079C3.17413 11.8521 3.16432 11.7776 3.20301 11.7416C3.24235 11.7063 3.31468 11.7228 3.36715 11.7786C3.41947 11.835 3.42968 11.9091 3.3898 11.9449ZM3.65977 12.3941C3.61075 12.4282 3.5306 12.3962 3.48105 12.3251C3.43204 12.254 3.43204 12.1686 3.48211 12.1345C3.53179 12.1003 3.61075 12.131 3.66096 12.2016C3.70984 12.274 3.70984 12.3593 3.65977 12.3941ZM4.11633 12.9144C4.07248 12.9628 3.97909 12.9498 3.91073 12.8838C3.84078 12.8193 3.82131 12.7278 3.86529 12.6794C3.90967 12.6309 4.0036 12.6446 4.07248 12.71C4.1419 12.7744 4.1631 12.8666 4.11633 12.9144ZM4.70641 13.0901C4.68707 13.1527 4.59711 13.1812 4.5065 13.1546C4.41602 13.1272 4.3568 13.0538 4.37508 12.9905C4.39389 12.9274 4.48424 12.8977 4.57552 12.9262C4.66587 12.9535 4.72522 13.0264 4.70641 13.0901ZM5.37793 13.1646C5.38019 13.2306 5.30335 13.2853 5.20823 13.2865C5.11258 13.2886 5.03521 13.2352 5.03415 13.1703C5.03415 13.1036 5.10927 13.0495 5.20492 13.0479C5.30004 13.046 5.37793 13.099 5.37793 13.1646ZM6.03763 13.1393C6.04903 13.2037 5.98292 13.2698 5.88846 13.2874C5.7956 13.3044 5.70962 13.2646 5.69783 13.2008C5.6863 13.1348 5.7536 13.0687 5.84634 13.0516C5.94093 13.0352 6.02558 13.0738 6.03763 13.1393Z"
      fill="#161614"
    />
  </svg>
);

export const GoogleKeepFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.7273 16H3.27273C2.6691 16 2.18182 15.5127 2.18182 14.9091V1.09091C2.18182 0.487273 2.6691 0 3.27273 0H9.81819L13.8182 4V14.9091C13.8182 15.5127 13.3309 16 12.7273 16Z"
      fill="#FFBA00"
    />
    <path d="M9.81819 0L13.8182 4H9.81819V0Z" fill="#FF9500" />
    <path
      d="M9.27273 10.7273V11.6364H6.72728V10.7273H9.27273ZM7.99637 5.4546L8.03182 5.45488C9.31924 5.47575 10.3564 6.5258 10.3564 7.8182C10.3564 8.66183 9.91455 9.40001 9.25091 9.8182H6.74182C6.07637 9.40001 5.63637 8.66183 5.63637 7.8182C5.63637 6.51274 6.69455 5.45456 8 5.45456L7.99637 5.4546Z"
      fill="white"
    />
  </svg>
);

export const ProductHuntFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 16C12.4184 16 16 12.4184 16 8C16 3.5816 12.4184 0 8 0C3.5816 0 0 3.5816 0 8C0 12.4184 3.5816 16 8 16Z"
      fill="url(#paint0_linear_2855_8052)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4.79999V11.2H7.2V9.19999H9.016C10.222 9.16799 11.2 8.18999 11.2 6.99999C11.2 5.77799 10.222 4.79999 9.016 4.79999H6ZM9.0308 7.99999H7.2V5.99999H9.0308C9.566 5.99999 10 6.44799 10 6.99999C10 7.55199 9.566 7.99999 9.0308 7.99999Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2855_8052"
        x1="8"
        y1="0"
        x2="8"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DA552F" />
        <stop offset="1" stopColor="#D04B25" />
      </linearGradient>
    </defs>
  </svg>
);

export const NASAFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2777_8029)">
      <path
        d="M13.6105 3.69011C13.5618 3.7388 13.5938 3.89505 13.5445 3.94343C12.2703 5.7563 10.4555 7.77668 9.18122 9.02724C7.93228 10.3015 5.73922 12.2633 3.95059 13.5372C3.90165 13.5862 3.73678 13.5631 3.68815 13.6124C3.10022 13.1715 2.61022 12.6325 2.19359 12.0196C1.94859 11.6526 1.72797 11.2606 1.53259 10.8437C1.14034 9.96168 0.920029 9.00674 0.920029 7.97718C0.920029 4.05805 4.08015 0.897614 7.99959 0.897614C9.02878 0.897614 10.0084 1.11793 10.8663 1.51055C11.2823 1.68186 11.6497 1.90286 12.0173 2.14718C12.6059 2.61218 13.1448 3.10249 13.6105 3.69011Z"
        fill="#184AE8"
      />
      <path
        d="M15.0804 8.00212C15.0804 11.9218 11.9199 15.0813 8.0002 15.0813C6.84863 15.0813 5.74632 14.8114 4.79107 14.3221C4.39876 14.1267 4.03182 13.8811 3.68913 13.6111C3.73782 13.5871 3.81145 13.5378 3.86076 13.4885C5.67363 12.2142 7.78013 10.3043 9.03007 9.02943C10.304 7.78055 12.2145 5.64837 13.4888 3.86018C13.5374 3.8118 13.5621 3.73749 13.6118 3.68912C13.8811 4.03149 14.1254 4.39974 14.322 4.79074C14.7864 5.77293 15.0804 6.85024 15.0804 8.00212Z"
        fill="#184AE8"
      />
      <path
        d="M14.4681 4.57205C14.4194 4.64536 14.3694 4.71905 14.2968 4.79236C12.9738 6.60492 11.1123 8.66311 9.8867 9.88773C8.63745 11.1363 6.57926 12.9995 4.79108 14.2977C4.7177 14.3461 4.64408 14.3964 4.57076 14.4691C3.1252 15.498 2.07189 15.9879 1.31264 15.9879C0.920325 15.9879 0.626325 15.865 0.3817 15.6206C-0.328613 14.91 -0.0593001 13.4654 1.28832 11.1136L1.38695 10.9903L1.53264 10.8437C1.72307 11.2523 1.94582 11.6457 2.19357 12.0195C1.16432 13.8817 1.16532 14.6413 1.26332 14.7637H1.33664C1.53232 14.7637 2.16957 14.6647 3.71314 13.5874C3.76214 13.5634 3.83545 13.5141 3.88414 13.4644C5.69732 12.1902 7.80389 10.2803 9.05408 9.00573C10.3283 7.75686 12.2386 5.62498 13.5125 3.83617C13.5618 3.78748 13.5858 3.71317 13.6355 3.6648C14.9826 1.72961 14.7873 1.2153 14.7873 1.2153C14.6647 1.1423 13.9054 1.1423 12.0435 2.17023C11.6765 1.92461 11.3086 1.70461 10.8919 1.5333L11.1616 1.2883C13.5134 -0.0592667 14.934 -0.328579 15.6693 0.381733C16.3536 1.11761 15.9866 2.41655 14.4681 4.57205Z"
        fill="#FF6464"
      />
    </g>
    <defs>
      <clipPath id="clip0_2777_8029">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const MediumFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.51256 3.44766C7.00478 3.44766 9.02496 5.48593 9.02496 8.00008C9.02496 10.5142 7.00463 12.5523 4.51256 12.5523C2.02049 12.5523 0 10.5142 0 8.00008C0 5.48593 2.02033 3.44766 4.51256 3.44766ZM11.7188 3.71433C12.9649 3.71433 13.9751 5.63293 13.9751 8.00008H13.9752C13.9752 10.3666 12.9651 12.2858 11.7189 12.2858C10.4728 12.2858 9.46266 10.3666 9.46266 8.00008C9.46266 5.63355 10.4727 3.71433 11.7188 3.71433ZM15.2065 4.16072C15.6446 4.16072 16 5.87963 16 8.00008C16 10.1199 15.6448 11.8394 15.2065 11.8394C14.7681 11.8394 14.4131 10.1204 14.4131 8.00008C14.4131 5.87979 14.7683 4.16072 15.2065 4.16072Z"
      fill="black"
    />
  </svg>
);

export const LinkedInFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2675_7976)">
      <path
        d="M13.6327 13.6329H11.262V9.92025C11.262 9.03493 11.2462 7.89524 10.029 7.89524C8.79425 7.89524 8.60534 8.85984 8.60534 9.8558V13.6327H6.23463V5.9979H8.51051V7.04127H8.54236C9.00643 6.2478 9.86929 5.77389 10.7879 5.80799C13.1907 5.80799 13.6337 7.38849 13.6337 9.44462L13.6327 13.6329ZM3.55969 4.95427C2.79989 4.95441 2.18384 4.33856 2.1837 3.57874C2.18356 2.81892 2.7994 2.20286 3.5592 2.20272C4.319 2.20258 4.93506 2.81843 4.93519 3.57825C4.93526 3.94313 4.79038 4.29309 4.53242 4.55114C4.27447 4.8092 3.92456 4.95421 3.55969 4.95427ZM4.74504 13.6329H2.37187V5.9979H4.74504V13.6329ZM14.8146 0.00113201H1.1806C0.536226 -0.00613987 0.00780316 0.510026 -6.10352e-05 1.1544V14.8452C0.00753391 15.4899 0.535914 16.0066 1.1806 15.9998H14.8146C15.4606 16.0078 15.991 15.4912 15.9999 14.8452V1.15342C15.9907 0.507765 15.4602 -0.00837114 14.8146 4.03322e-05"
        fill="#0A66C2"
      />
    </g>
    <defs>
      <clipPath id="clip0_2675_7976">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const KhamAcademyFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.52184 3.31768C0.968643 3.66781 0.617938 4.26295 0.579666 4.91652V11.0835C0.617938 11.737 0.968643 12.3322 1.52184 12.6823L7.05497 15.7772C7.64933 16.0684 8.34496 16.0684 8.93932 15.7772L14.4782 12.6823C15.0314 12.3322 15.3821 11.737 15.4203 11.0835V4.91652C15.3821 4.26295 15.0314 3.66781 14.4782 3.31768L8.94503 0.222782C8.35067 -0.0684419 7.65504 -0.0684419 7.06068 0.222782L1.52184 3.31768Z"
      fill="#14BF96"
    />
    <path
      d="M13.6845 6.46967C10.6124 6.46967 8.31692 9.01639 8.31692 12.1398V12.2712H7.70022V12.1398C7.70022 9.01639 5.41616 6.48109 2.32118 6.46967C2.32118 6.66381 2.32118 6.86367 2.32118 7.04068C2.30878 9.40366 3.76591 11.5256 5.97576 12.3625C6.63243 12.6033 7.32627 12.727 8.0257 12.728C8.73071 12.727 9.43017 12.6034 10.0928 12.3625C12.2993 11.5224 13.7533 9.40171 13.7416 7.04068C13.713 6.85796 13.7016 6.66381 13.6845 6.46967Z"
      fill="white"
    />
    <path
      d="M8.00285 6.7095C8.94894 6.7095 9.7159 5.94255 9.7159 4.99646C9.7159 4.05037 8.94894 3.28342 8.00285 3.28342C7.05677 3.28342 6.28981 4.05037 6.28981 4.99646C6.28981 5.94255 7.05677 6.7095 8.00285 6.7095Z"
      fill="white"
    />
  </svg>
);

export const GoogleMapsFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.49695 11.8524C5.95969 12.4421 6.38085 13.0633 6.75737 13.7115C7.07885 14.3211 7.21285 14.7344 7.44782 15.4689C7.59189 15.8747 7.72211 15.9958 8.00206 15.9958C8.30718 15.9958 8.44559 15.7897 8.55254 15.4711C8.77461 14.7775 8.94888 14.2481 9.2238 13.7479C9.76326 12.7823 10.4336 11.9242 11.0923 11.0994C11.2706 10.866 12.4235 9.50617 12.9425 8.43322C12.9425 8.43322 13.5804 7.25458 13.5804 5.60852C13.5804 4.06877 12.9513 3.00085 12.9513 3.00085L11.1401 3.4859L10.0401 6.38295L9.76798 6.78244L9.71356 6.85478L9.64121 6.94538L9.51413 7.09007L9.33263 7.27157L8.35311 8.0696L5.9043 9.48352L5.49695 11.8524Z"
      fill="#34A853"
    />
    <path
      d="M2.96948 8.23505C3.56714 9.60022 4.71967 10.8003 5.49945 11.8534L9.6412 6.94727C9.6412 6.94727 9.0577 7.71038 7.99922 7.71038C6.82027 7.71038 5.86779 6.76891 5.86779 5.58178C5.86779 4.76771 6.35756 4.20844 6.35756 4.20844L3.54606 4.96179L2.96948 8.23505Z"
      fill="#FBBC04"
    />
    <path
      d="M9.68744 0.252258C11.063 0.695781 12.2404 1.62686 12.9525 2.9999L9.64246 6.94442C9.64246 6.94442 10.1322 6.37507 10.1322 5.56604C10.1322 4.35123 9.10929 3.44373 8.00425 3.44373C6.9593 3.44373 6.35913 4.20559 6.35913 4.20559V1.7206L9.68744 0.252258Z"
      fill="#4285F4"
    />
    <path
      d="M3.72821 1.99522C4.54983 1.01224 5.99552 0 7.98854 0C8.95549 0 9.684 0.253846 9.684 0.253846L6.356 4.2078H3.9981L3.72821 1.99522Z"
      fill="#1A73E8"
    />
    <path
      d="M2.96949 8.23504C2.96949 8.23504 2.41965 7.15832 2.41965 5.59844C2.41965 4.12412 2.99277 2.83539 3.7282 1.99521L6.35788 4.2081L2.96949 8.23504Z"
      fill="#EA4335"
    />
  </svg>
);

export const VimeoFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.9923 4.27469C15.9211 5.83518 14.8332 7.97199 12.7292 10.684C10.5538 13.517 8.71334 14.9333 7.20773 14.9333C6.2754 14.9333 5.4858 14.0709 4.84131 12.3455C4.41059 10.7639 3.98035 9.1824 3.54978 7.60079C3.0709 5.8763 2.55746 5.01293 2.00849 5.01293C1.88881 5.01293 1.46993 5.26526 0.752805 5.76798L0 4.79629C0.789605 4.10109 1.56865 3.40604 2.33506 2.71004C3.38818 1.79819 4.17875 1.31867 4.70563 1.27019C5.95092 1.15035 6.71732 2.00315 7.00501 3.82877C7.31589 5.79838 7.53093 7.02351 7.65189 7.50303C8.01077 9.13712 8.40565 9.95313 8.83718 9.95313C9.17206 9.95313 9.6751 9.4232 10.3458 8.36336C11.0159 7.30319 11.3748 6.49662 11.4233 5.94254C11.5186 5.02765 11.1596 4.56909 10.3458 4.56909C9.96278 4.56909 9.5679 4.65741 9.16166 4.83197C9.9479 2.25131 11.4503 0.998026 13.6679 1.06955C15.3119 1.11787 16.087 2.18619 15.9923 4.27469Z"
      fill="#32B8E8"
    />
  </svg>
);

export const ShopifyFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.261 3.14039C13.25 3.06034 13.1799 3.0161 13.122 3.01124C13.0642 3.00638 11.8407 2.91572 11.8407 2.91572C11.8407 2.91572 10.991 2.07215 10.8978 1.9788C10.8044 1.88546 10.6222 1.91385 10.5515 1.93469C10.541 1.93776 10.3658 1.99185 10.0759 2.08148C9.79205 1.26477 9.29118 0.514165 8.40989 0.514165C8.3856 0.514165 8.36053 0.515188 8.33547 0.516594C8.08484 0.185151 7.77437 0.0411682 7.50622 0.0411682C5.45338 0.0411682 4.4726 2.60742 4.16507 3.91158C3.36741 4.15876 2.80068 4.33445 2.72831 4.35721C2.28306 4.49685 2.26899 4.51091 2.21056 4.93046C2.16644 5.24809 1.0014 14.2579 1.0014 14.2579L10.0796 15.9589L14.9986 14.8947C14.9986 14.8947 13.2718 3.22044 13.261 3.14039ZM9.57416 2.23672C9.34617 2.30731 9.08697 2.38748 8.80604 2.47443C8.80629 2.42034 8.80655 2.36702 8.80655 2.30884C8.80655 1.80119 8.73609 1.39251 8.62305 1.06849C9.07712 1.12552 9.37954 1.64212 9.57416 2.23672ZM8.05978 1.16912C8.18599 1.48548 8.26808 1.93942 8.26808 2.55205C8.26808 2.58338 8.26783 2.61202 8.26757 2.64105C7.76798 2.79577 7.22516 2.9638 6.68107 3.13233C6.98655 1.95336 7.55916 1.38395 8.05978 1.16912ZM7.44983 0.591783C7.53845 0.591783 7.6277 0.621832 7.71312 0.680653C7.05522 0.99023 6.35001 1.76999 6.0522 3.32708C5.61692 3.46186 5.1915 3.59356 4.79816 3.71543C5.147 2.52776 5.97535 0.591783 7.44983 0.591783Z"
      fill="#95BF46"
    />
    <path
      d="M13.122 3.01124C13.0642 3.00638 11.8407 2.91572 11.8407 2.91572C11.8407 2.91572 10.991 2.07215 10.8978 1.97881C10.8629 1.94403 10.8158 1.92625 10.7666 1.91858L10.0802 15.9587L14.9986 14.8947C14.9986 14.8947 13.2718 3.22044 13.261 3.14039C13.25 3.06034 13.1799 3.0161 13.122 3.01124Z"
      fill="#5E8E3E"
    />
    <path
      d="M8.4099 5.72914L7.8034 7.53328C7.8034 7.53328 7.27197 7.24966 6.62059 7.24966C5.66565 7.24966 5.61757 7.84899 5.61757 8.00001C5.61757 8.82401 7.76555 9.13972 7.76555 11.0698C7.76555 12.5883 6.80242 13.5661 5.50376 13.5661C3.94539 13.5661 3.1485 12.5962 3.1485 12.5962L3.56574 11.2176C3.56574 11.2176 4.38489 11.9209 5.07616 11.9209C5.5278 11.9209 5.71155 11.5653 5.71155 11.3055C5.71155 10.2306 3.94936 10.1826 3.94936 8.41648C3.94936 6.92998 5.01632 5.49142 7.17006 5.49142C7.99994 5.49142 8.4099 5.72914 8.4099 5.72914Z"
      fill="white"
    />
  </svg>
);

export const RedditFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
      fill="#FF4500"
    />
    <path
      d="M13.3219 8.07626C13.3219 7.42773 12.7974 6.91271 12.1583 6.91271C11.8436 6.91271 11.5574 7.03662 11.3476 7.23697C10.5466 6.6647 9.44969 6.29279 8.22889 6.24515L8.76293 3.74631L10.4988 4.11822C10.518 4.55697 10.8803 4.90986 11.3286 4.90986C11.7864 4.90986 12.1583 4.53795 12.1583 4.07999C12.1583 3.62222 11.7864 3.25031 11.3286 3.25031C11.0044 3.25031 10.7181 3.44106 10.5846 3.71768L8.64862 3.30755C8.59138 3.29795 8.53413 3.30755 8.49591 3.33617C8.44827 3.36479 8.41964 3.41244 8.41022 3.46968L7.81875 6.25457C6.57893 6.29279 5.46302 6.66471 4.65235 7.24657C4.44258 7.04622 4.15635 6.92231 3.84169 6.92231C3.19315 6.92231 2.67813 7.44675 2.67813 8.08586C2.67813 8.56266 2.96418 8.96319 3.36489 9.14453C3.34569 9.25884 3.33626 9.37333 3.33626 9.49742C3.33626 11.2903 5.42498 12.7497 8.00009 12.7497C10.5752 12.7497 12.6639 11.2999 12.6639 9.49742C12.6639 9.38293 12.6543 9.25884 12.6353 9.14453C13.0358 8.96319 13.3219 8.55306 13.3219 8.07626ZM5.32951 8.90595C5.32951 8.44817 5.70142 8.07626 6.15938 8.07626C6.61715 8.07626 6.98906 8.44817 6.98906 8.90595C6.98906 9.36373 6.61715 9.73582 6.15938 9.73582C5.70142 9.74524 5.32951 9.36373 5.32951 8.90595ZM9.97431 11.1091C9.40204 11.6814 8.31475 11.7196 8.00009 11.7196C7.67582 11.7196 6.58853 11.6718 6.02569 11.1091C5.94 11.0233 5.94 10.8898 6.02569 10.8039C6.11155 10.7182 6.24506 10.7182 6.33093 10.8039C6.69342 11.1664 7.45644 11.2903 8.00009 11.2903C8.54373 11.2903 9.31618 11.1664 9.66906 10.8039C9.75493 10.7182 9.88844 10.7182 9.97431 10.8039C10.0506 10.8898 10.0506 11.0233 9.97431 11.1091ZM9.8216 9.74524C9.36382 9.74524 8.99191 9.37333 8.99191 8.91555C8.99191 8.45777 9.36382 8.08586 9.8216 8.08586C10.2796 8.08586 10.6515 8.45777 10.6515 8.91555C10.6515 9.36373 10.2796 9.74524 9.8216 9.74524Z"
      fill="white"
    />
  </svg>
);

export const ReactFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M-8.44375e-09 8.00164C-8.44375e-09 6.94171 1.32735 5.93723 3.36241 5.31432C2.89278 3.24012 3.10151 1.5899 4.0212 1.06157C4.23318 0.937636 4.48104 0.878933 4.75173 0.878933V1.60621C4.60171 1.60621 4.48104 1.63556 4.37994 1.691C3.9364 1.94538 3.74399 2.91399 3.89401 4.15981C3.92988 4.46638 3.98859 4.78925 4.06033 5.11864C4.69955 4.9621 5.39747 4.84143 6.13127 4.76316C6.57155 4.15981 7.02813 3.61191 7.48797 3.1325C6.42479 2.14432 5.42682 1.60294 4.74847 1.60294V0.875671C5.64533 0.875671 6.8194 1.51489 8.00652 2.62374C9.19364 1.52141 10.3677 0.888717 11.2646 0.888717V1.61599C10.5895 1.61599 9.58826 2.15411 8.52507 3.13576C8.98165 3.61517 9.43824 4.15981 9.87199 4.76316C10.609 4.84143 11.307 4.9621 11.9462 5.1219C12.0212 4.79577 12.0766 4.47942 12.1158 4.17612C12.2691 2.9303 12.0799 1.96169 11.6396 1.70404C11.5418 1.64534 11.4146 1.61925 11.2646 1.61925V0.891978C11.5385 0.891978 11.7864 0.950682 12.0016 1.07461C12.9181 1.60294 13.1235 3.24991 12.6506 5.31758C14.6792 5.94375 16 6.94497 16 8.00164C16 9.06157 14.6726 10.066 12.6376 10.689C13.1072 12.7632 12.8985 14.4134 11.9788 14.9417C11.7668 15.0656 11.519 15.1243 11.245 15.1243C10.3481 15.1243 9.17407 14.4851 7.98695 13.3763C6.79984 14.4786 5.62576 15.1113 4.7289 15.1113C4.45495 15.1113 4.20709 15.0526 3.99185 14.9287C3.07542 14.4003 2.86996 12.7534 3.34285 10.6857C1.32083 10.0628 -8.44375e-09 9.0583 -8.44375e-09 8.00164V8.00164ZM4.24623 5.82634C4.3669 6.24705 4.51692 6.68081 4.68651 7.11456C4.82022 6.85366 4.96046 6.59275 5.11374 6.33185C5.26376 6.07094 5.42356 5.81656 5.58337 5.5687C5.12026 5.63719 4.67346 5.72198 4.24623 5.82634ZM5.73991 9.29964C5.99429 9.73992 6.2552 10.1574 6.52589 10.5455C7.01182 10.5879 7.50428 10.6107 8 10.6107C8.49246 10.6107 8.98492 10.5879 9.46759 10.5487C9.73828 10.1606 10.0024 9.74644 10.2568 9.30943C10.5047 8.88219 10.7297 8.44844 10.9352 8.01142C10.733 7.57441 10.5047 7.13739 10.2601 6.71016C10.0057 6.26988 9.7448 5.85243 9.47411 5.46434C8.98818 5.42194 8.49572 5.39911 8 5.39911C7.50754 5.39911 7.01508 5.42194 6.53241 5.46108C6.26172 5.84917 5.99755 6.26336 5.74317 6.70038C5.49531 7.12761 5.27028 7.56136 5.06482 7.99838C5.27028 8.43539 5.49531 8.87241 5.73991 9.29964ZM4.68651 8.87567C4.5104 9.31269 4.36037 9.7497 4.23644 10.1737C4.66368 10.278 5.11374 10.3661 5.58011 10.4346C5.4203 10.1835 5.2605 9.92581 5.11048 9.66165C4.96046 9.40074 4.82022 9.13658 4.68651 8.87567ZM7.99348 12.3555C8.29678 12.0424 8.60008 11.6934 8.90012 11.3119C8.6066 11.3249 8.30656 11.3347 8.00326 11.3347C7.6967 11.3347 7.3934 11.3282 7.09662 11.3119C7.39013 11.6934 7.69344 12.0424 7.99348 12.3555ZM10.4199 10.4346C10.883 10.3661 11.3298 10.2813 11.757 10.1769C11.6364 9.75623 11.4863 9.32247 11.3168 8.88872C11.183 9.14962 11.0428 9.41053 10.8895 9.67143C10.7362 9.93234 10.5797 10.1867 10.4199 10.4346ZM8.00978 3.64779C7.70648 3.96087 7.40318 4.30983 7.10314 4.69141C7.39666 4.67836 7.6967 4.66858 8 4.66858C8.30656 4.66858 8.60986 4.6751 8.90664 4.69141C8.61313 4.30983 8.30982 3.96087 8.00978 3.64779ZM10.4232 5.5687C10.583 5.81982 10.7428 6.07746 10.8928 6.34163C11.0428 6.60254 11.183 6.86344 11.3168 7.12435C11.4929 6.68733 11.6429 6.25031 11.7668 5.82634C11.3396 5.72524 10.8895 5.63719 10.4232 5.5687V5.5687ZM13.3746 9.65186C14.5291 9.15941 15.276 8.51367 15.276 8.00164C15.276 7.48961 14.5291 6.84061 13.3746 6.35141C13.0942 6.23075 12.7876 6.12312 12.4713 6.02202C12.2854 6.66124 12.0408 7.32655 11.7375 8.00816C12.0375 8.68652 12.2788 9.34856 12.4615 9.98452C12.7843 9.88342 13.0909 9.77253 13.3746 9.65186ZM11.6201 14.3123C12.0636 14.0579 12.256 13.0893 12.106 11.8435C12.0701 11.5369 12.0114 11.214 11.9397 10.8846C11.3004 11.0412 10.6025 11.1619 9.86873 11.2401C9.42845 11.8435 8.97187 12.3914 8.51203 12.8708C9.57521 13.859 10.5732 14.4003 11.2515 14.4003C11.3983 14.3971 11.5222 14.3677 11.6201 14.3123V14.3123ZM3.88422 11.8272C3.73094 13.073 3.9201 14.0416 4.36038 14.2992C4.45822 14.3579 4.58541 14.384 4.73543 14.384C5.41052 14.384 6.41174 13.8459 7.47493 12.8643C7.01834 12.3848 6.56176 11.8402 6.12801 11.2369C5.39095 11.1586 4.69303 11.0379 4.05381 10.8781C3.9788 11.2075 3.9201 11.5239 3.88422 11.8272V11.8272ZM2.62862 9.65186C2.90909 9.77253 3.21565 9.88016 3.532 9.98126C3.7179 9.34204 3.96249 8.67673 4.2658 7.99512C3.96576 7.31676 3.72442 6.65472 3.54178 6.01876C3.21891 6.11986 2.91235 6.23075 2.62536 6.35141C1.47085 6.84387 0.724012 7.48961 0.724012 8.00164C0.727273 8.51367 1.47411 9.16267 2.62862 9.65186V9.65186Z"
      fill="#61DAFB"
    />
    <path
      d="M8.00326 9.49207C7.18013 9.49207 6.51284 8.82479 6.51284 8.00165C6.51284 7.17851 7.18013 6.51123 8.00326 6.51123C8.8264 6.51123 9.49368 7.17851 9.49368 8.00165C9.49368 8.82479 8.8264 9.49207 8.00326 9.49207Z"
      fill="#61DAFB"
    />
  </svg>
);

export const nytimesFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2862_8322)">
      <path
        d="M6.6772 11.7211V6.02682L4.80681 6.77498C4.80681 6.77498 4.3496 7.73095 4.43273 9.14414C4.4743 10.2664 5.13933 11.5549 5.6381 12.1368L6.6772 11.7211ZM11.7065 0C12.1221 0.0415643 12.8287 0.249386 13.3275 0.665029C13.8678 1.1638 13.9925 1.95352 13.8263 2.66011C13.66 3.28358 13.4522 3.61609 12.7872 4.0733C12.1221 4.53051 11.6234 4.57207 11.6234 4.57207V7.31531L12.9118 8.31285L11.6234 9.47665V13.2174C11.6234 13.2174 12.704 12.3446 13.5353 10.6405C13.5353 10.6405 13.5769 10.5573 13.66 10.3495C13.7431 10.8067 13.7016 11.7627 13.1612 12.9265C12.7456 13.8409 12.039 14.6722 11.083 15.171C9.46201 16.0438 8.21508 16.1269 6.92659 15.8776C5.38871 15.5866 3.97553 14.7553 3.06111 13.3006C2.39608 12.2615 2.10513 11.0977 2.10513 9.80917C2.1467 7.27375 4.10022 5.11241 6.34469 4.28112C6.63564 4.19799 6.71877 4.11486 7.09285 4.0733C6.92659 4.19799 6.71877 4.32268 6.46938 4.48894C5.76279 4.94615 5.13933 5.86056 4.84838 6.56715L9.17106 4.69676V10.5573L5.72123 12.2615C6.13687 12.8018 7.34223 13.5915 8.38134 13.7162C10.127 13.924 11.2908 13.259 11.2908 13.259V9.43509L10.0023 8.31285L11.2908 7.31531V4.57207C10.5427 4.48894 9.50357 4.15643 9.0048 4.03173C8.21508 3.86548 5.6381 3.15888 5.22245 3.07576C4.80681 3.03419 4.30804 3.03419 4.01709 3.28358C3.72614 3.53296 3.51832 4.03173 3.64301 4.44738C3.72614 4.69676 3.8924 4.82146 4.01709 4.94615C4.01709 4.94615 3.85083 4.94615 3.60145 4.77989C3.10268 4.48894 2.7286 3.94861 2.68703 3.24201C2.66277 2.80705 2.74916 2.37304 2.93815 1.98052C3.12714 1.58801 3.41254 1.24982 3.7677 0.997542C4.43273 0.5819 5.18089 0.332514 6.05374 0.457207C7.34223 0.623464 9.04637 1.33006 10.5842 1.70414C11.1661 1.82883 11.6234 1.87039 12.039 1.66257C12.2468 1.53788 12.5793 1.1638 12.2884 0.706593C11.9559 0.166257 11.3324 0.166257 10.7921 0.0831285C11.2908 -8.05163e-08 11.374 0 11.7065 0"
        fill="#251802"
      />
    </g>
    <defs>
      <clipPath id="clip0_2862_8322">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const NikeFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.1606 5.74282C14.1191 5.75319 4.89075 8.2541 4.89075 8.2541C4.71262 8.3041 4.53069 8.33 4.35362 8.33094C3.64437 8.33513 3.01328 7.94147 3.01837 7.11188C3.02044 6.78722 3.11984 6.39588 3.35003 5.93541C2.53665 6.89063 1.75665 8.07532 1.74881 8.96075C1.74581 9.29391 1.85212 9.58478 2.10725 9.80519C2.47444 10.1223 2.8789 10.2342 3.2815 10.2348C3.86978 10.2356 4.45394 9.99832 4.91134 9.81532C5.68169 9.50725 14.1966 5.80953 14.1966 5.80953C14.2788 5.76844 14.2633 5.7171 14.1606 5.74282V5.74282Z"
      fill="#1B1B1B"
    />
  </svg>
);

export const InternetArchiveFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.53125 13.0938H13.4688V13.6562H2.53125V13.0938ZM2.96875 12.0312H13.0625V12.8125H2.96875V12.0312ZM2.90625 3.15625H12.9375V4.25H2.90625V3.15625ZM12.875 2.84375L13.1875 2.5L7.90625 1.28125L2.65625 2.5L2.96875 2.84375H7.90625H12.875ZM4.34375 7.65625L4.3125 6.0625L4.21875 4.59375C4.21875 4.53125 4.21875 4.53125 4.15625 4.53125C3.86784 4.46962 3.56966 4.46962 3.28125 4.53125C3.25 4.53125 3.21875 4.53125 3.21875 4.59375L3.15625 6.0625C3.11845 7.38515 3.11845 8.7086 3.15625 10.0312L3.21875 11.375L3.25 11.625L3.71875 11.7188C3.90625 11.6875 4.0625 11.6875 4.21875 11.625L4.25 11.375L4.3125 10.0312C4.34154 9.23994 4.35195 8.44805 4.34375 7.65625V7.65625ZM7.09375 7.65625L7.03125 6.0625L6.96875 4.59375C6.96875 4.53125 6.9375 4.53125 6.90625 4.53125C6.61784 4.46962 6.31966 4.46962 6.03125 4.53125C5.96875 4.53125 5.96875 4.53125 5.96875 4.59375L5.875 6.0625C5.8372 7.38515 5.8372 8.7086 5.875 10.0312L5.9375 11.375L5.96875 11.625C6.125 11.6875 6.3125 11.6875 6.46875 11.7188L6.96875 11.625V11.375L7.03125 10.0312C7.07066 9.24018 7.0915 8.4483 7.09375 7.65625V7.65625ZM10.25 7.65625L10.2188 6.0625L10.125 4.59375C10.125 4.53125 10.125 4.53125 10.0625 4.53125C9.77409 4.46962 9.47591 4.46962 9.1875 4.53125C9.15625 4.53125 9.125 4.53125 9.125 4.59375L9.0625 6.0625C9.0247 7.38515 9.0247 8.7086 9.0625 10.0312L9.125 11.375L9.15625 11.625L9.625 11.7188C9.78125 11.6875 9.96875 11.6875 10.125 11.625L10.1562 11.375L10.2188 10.0312C10.2477 9.23994 10.2581 8.44805 10.25 7.65625ZM12.9062 7.65625L12.875 6.0625L12.8125 4.59375C12.8125 4.53125 12.7812 4.53125 12.75 4.53125C12.4515 4.46509 12.1422 4.46509 11.8438 4.53125L11.8125 4.59375L11.7188 6.0625C11.681 7.38515 11.681 8.7086 11.7188 10.0312L11.7812 11.375L11.8125 11.625C11.9688 11.6875 12.125 11.6875 12.3125 11.7188L12.7812 11.625L12.8125 11.375L12.875 10.0312C12.904 9.23994 12.9144 8.44805 12.9062 7.65625V7.65625Z"
      fill="black"
    />
  </svg>
);

export const HackerNewsFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.9953 0H0.0046875C0.00209867 0 0 0.00209867 0 0.0046875V15.9953C0 15.9979 0.00209867 16 0.0046875 16H15.9953C15.9979 16 16 15.9979 16 15.9953V0.0046875C16 0.00209867 15.9979 0 15.9953 0Z"
      fill="#FF6600"
    />
    <path
      d="M4 3.0625H5.59375L8.125 8.125L10.6562 3H12.25L8.75 9.375V13.625H7.5V9.375L4 3.0625Z"
      fill="white"
    />
  </svg>
);

export const GoogleDriveFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.66682 14.9297L5.33329 10.3099H16L13.3333 14.9297H2.66682Z" fill="#3777E3" />
    <path d="M10.6668 10.3099H16L10.6668 1.07031H5.3333L10.6668 10.3099Z" fill="#FFCF63" />
    <path d="M0 10.3099L2.66683 14.9297L8.00001 5.6901L5.3333 1.07031L0 10.3099Z" fill="#11A861" />
  </svg>
);

export const GoogleFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.537 6.69434H14V6.66668H8.00001V9.33334H11.7677C11.218 10.8857 9.74101 12 8.00001 12C5.79101 12 4.00001 10.209 4.00001 8.00001C4.00001 5.79101 5.79101 4.00001 8.00001 4.00001C9.01968 4.00001 9.94734 4.38468 10.6537 5.01301L12.5393 3.12734C11.3487 2.01768 9.75601 1.33334 8.00001 1.33334C4.31834 1.33334 1.33334 4.31834 1.33334 8.00001C1.33334 11.6817 4.31834 14.6667 8.00001 14.6667C11.6817 14.6667 14.6667 11.6817 14.6667 8.00001C14.6667 7.55301 14.6207 7.11668 14.537 6.69434Z"
      fill="#FFC107"
    />
    <path
      d="M2.10199 4.89701L4.29232 6.50334C4.88499 5.03601 6.32032 4.00001 7.99999 4.00001C9.01966 4.00001 9.94732 4.38468 10.6537 5.01301L12.5393 3.12734C11.3487 2.01768 9.75599 1.33334 7.99999 1.33334C5.43932 1.33334 3.21866 2.77901 2.10199 4.89701Z"
      fill="#FF3D00"
    />
    <path
      d="M8 14.6667C9.722 14.6667 11.2867 14.0077 12.4697 12.936L10.4063 11.19C9.737 11.697 8.905 12 8 12C6.266 12 4.79367 10.8943 4.239 9.35132L2.065 11.0263C3.16834 13.1853 5.409 14.6667 8 14.6667Z"
      fill="#4CAF50"
    />
    <path
      d="M14.537 6.69432H14V6.66666H8V9.33332H11.7677C11.5037 10.079 11.024 10.722 10.4053 11.1903C10.4057 11.19 10.406 11.19 10.4063 11.1897L12.4697 12.9357C12.3237 13.0683 14.6667 11.3333 14.6667 7.99999C14.6667 7.55299 14.6207 7.11666 14.537 6.69432Z"
      fill="#1976D2"
    />
  </svg>
);

export const GmailFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.09094 14.2409H3.63637V8.05907L0 5.33179V13.15C0 13.7527 0.488187 14.2409 1.09094 14.2409V14.2409Z"
      fill="#4285F4"
    />
    <path
      d="M12.3636 14.2409H14.9091C15.5118 14.2409 16 13.7527 16 13.15V5.33179L12.3636 8.05907V14.2409Z"
      fill="#34A853"
    />
    <path
      d="M12.3636 3.33178V8.05907L16 5.33178V3.87725C16 2.52907 14.4609 1.75907 13.3818 2.56816L12.3636 3.33178Z"
      fill="#FBBC04"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.63637 8.05907V3.33179L7.99999 6.60454L12.3636 3.33179V8.05907L7.99999 11.3318L3.63637 8.05907Z"
      fill="#EA4335"
    />
    <path
      d="M0 3.87725V5.33179L3.63637 8.05907V3.33179L2.61819 2.56816C1.53906 1.75907 0 2.52907 0 3.87719V3.87725Z"
      fill="#C5221F"
    />
  </svg>
);

export const FigmaFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.33334 16C6.80534 16 8.00001 14.8053 8.00001 13.3333V10.6667H5.33334C3.86134 10.6667 2.66667 11.8613 2.66667 13.3333C2.66667 14.8053 3.86134 16 5.33334 16Z"
      fill="#0ACF83"
    />
    <path
      d="M2.66667 8.00001C2.66667 6.52801 3.86134 5.33334 5.33334 5.33334H8.00001V10.6667H5.33334C3.86134 10.6667 2.66667 9.47201 2.66667 8.00001Z"
      fill="#A259FF"
    />
    <path
      d="M2.66667 2.66667C2.66667 1.19467 3.86134 0 5.33334 0H8.00001V5.33333H5.33334C3.86134 5.33333 2.66667 4.13867 2.66667 2.66667Z"
      fill="#F24E1E"
    />
    <path
      d="M8 0H10.6667C12.1387 0 13.3333 1.19467 13.3333 2.66667C13.3333 4.13867 12.1387 5.33333 10.6667 5.33333H8V0Z"
      fill="#FF7262"
    />
    <path
      d="M13.3333 8.00001C13.3333 9.47201 12.1387 10.6667 10.6667 10.6667C9.19467 10.6667 8 9.47201 8 8.00001C8 6.52801 9.19467 5.33334 10.6667 5.33334C12.1387 5.33334 13.3333 6.52801 13.3333 8.00001Z"
      fill="#1ABCFE"
    />
  </svg>
);

export const WSJFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.734 3.775V3.946L2.89275 3.9825C3.13675 4.0435 3.1735 4.19 3.271 4.65375L3.525 5.9575L2.817 9.76575L1.85275 4.98075C1.74275 4.45575 1.70625 4.06525 2.097 3.97975L2.28 3.94325V3.775H0V3.946L0.232 4.00725C0.464 4.06825 0.5615 4.178 0.72025 4.89825L2.27025 12.234H2.67025L3.70775 6.6925L4.85775 12.234H5.17525L6.6645 5.125C6.8355 4.3075 6.90875 4.075 7.202 4L7.43375 3.93875V3.775H5.75875V3.946L6.015 3.99475C6.38125 4.068 6.4665 4.29975 6.2955 5.23975L5.3825 9.76575L4.4575 4.98075C4.3575 4.50475 4.29875 4.06525 4.70175 3.992L4.97025 3.94325V3.77225L2.734 3.775ZM13.595 3.798V3.969L13.9 4.04225C14.1682 4.10325 14.2782 4.201 14.2782 4.54275V10.4628C14.2782 11.1218 14.2782 11.9885 13.5945 11.9885C13.204 11.9885 12.8995 11.6468 12.9235 11.4148C12.9478 11.0365 13.607 11.0608 13.6435 10.4505C13.6803 10.0255 13.4115 9.8255 13.143 9.79125C12.7647 9.7425 12.301 10.0598 12.2885 10.6945C12.2765 11.512 12.8135 12.2565 13.7285 12.2565C14.741 12.2565 15.4035 11.5735 15.4035 10.2673L15.4038 4.55475C15.4038 4.213 15.4892 4.103 15.7332 4.04225L16 3.96625V3.79525L13.595 3.798ZM9.4825 3.746C8.445 3.746 7.85925 4.61275 7.85925 5.74775C7.85925 7.8595 10.5813 8.67725 10.5813 10.5815C10.5813 11.4848 10.2028 11.985 9.65625 11.985C8.83875 11.985 8.2525 10.9968 8.10625 9.422H7.92325V12.205H8.06975C8.19175 11.805 8.3505 11.7658 8.48475 11.7658C8.71675 11.7658 8.9605 12.2533 9.6685 12.2533C10.7547 12.2533 11.4625 11.3138 11.463 10.0193C11.463 7.4805 8.741 6.858 8.741 5.03925C8.741 4.62425 8.863 4.01425 9.4735 4.01425C10.3525 4.01425 10.731 5.17375 10.8772 6.5775H11.0603V3.795H10.9137C10.8527 4.0635 10.743 4.1855 10.5843 4.1855C10.3035 4.1855 10.1593 3.74625 9.48575 3.74625L9.4825 3.746ZM11.4475 6.13975V6.16975L11.4532 6.16625L11.4502 6.14125L11.4475 6.13975Z"
      fill="black"
    />
  </svg>
);

export const UniqloFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 15.9792H16V0.020752H0V15.9792V15.9792Z" fill="#ED1D24" />
    <path d="M11.7793 2.19775H12.8036V7.2391H11.7793V2.19775Z" fill="white" />
    <path
      d="M5.37689 5.56408C5.37689 6.50984 4.65562 7.23929 3.71237 7.23929C2.77101 7.23929 2.03214 6.50984 2.03214 5.56408V2.19794H3.03135V5.56408C3.03135 5.94641 3.33507 6.25454 3.71237 6.25454C4.09156 6.25454 4.39277 5.94641 4.39277 5.56408V2.19794H5.37689V5.56408Z"
      fill="white"
    />
    <path d="M10.1103 13.8058H6.74353V8.76639H7.76412V12.7809H10.1103V13.8058Z" fill="white" />
    <path
      d="M10.1103 7.23874H9.08719L7.76412 4.35051V7.23874H6.74353V2.19739H7.76412L9.08719 5.08122V2.19739H10.1103V7.23874Z"
      fill="white"
    />
    <path
      d="M3.71144 8.76658C2.77134 8.76658 2.03183 9.51992 2.03183 10.4317V12.1409C2.03183 13.0407 2.77134 13.806 3.71144 13.806C3.82526 13.806 3.93593 13.7941 4.04158 13.7746L4.39246 14.8266H5.37659L4.91062 13.3124C5.18354 13.0005 5.37659 12.576 5.37659 12.1409V10.4317C5.37659 9.51992 4.65532 8.76658 3.71144 8.76658ZM4.39246 12.1409C4.39246 12.4723 4.09125 12.781 3.71144 12.781C3.33477 12.781 3.03104 12.4723 3.03104 12.1409V10.4317C3.03104 10.0551 3.33477 9.75259 3.71144 9.75259C4.09125 9.75259 4.39246 10.0551 4.39246 10.4317V12.1409Z"
      fill="white"
    />
    <path
      d="M12.2897 8.7666C11.3471 8.7666 10.6239 9.51994 10.6239 10.4317V12.1409C10.6239 13.0408 11.3471 13.8061 12.2897 13.8061C13.2304 13.8061 13.9549 13.0408 13.9549 12.1409V10.4317C13.9549 9.51994 13.2304 8.7666 12.2897 8.7666ZM12.9726 12.1409C12.9726 12.4723 12.6645 12.7811 12.2897 12.7811C11.913 12.7811 11.6068 12.4723 11.6068 12.1409V10.4317C11.6068 10.0551 11.913 9.75261 12.2897 9.75261C12.6645 9.75261 12.9726 10.0551 12.9726 10.4317V12.1409Z"
      fill="white"
    />
  </svg>
);

export const SXSWFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 8.68051C0.00658114 8.80626 0.0223289 8.93224 0.0594653 9.05293C0.119401 9.25613 0.240094 9.44334 0.410499 9.57096C0.650005 9.75406 0.957321 9.81787 1.25289 9.82951H0L0 8.68051Z"
      fill="white"
    />
    <path
      d="M0.507688 6.3636C0.742964 6.21399 1.0283 6.16217 1.30389 6.17157C1.57947 6.17909 1.86317 6.24631 2.08658 6.41437C2.27484 6.55292 2.40517 6.76105 2.46558 6.9854C2.51294 7.15134 2.52058 7.32503 2.51788 7.49661C2.25639 7.49685 1.99491 7.49673 1.73343 7.49673C1.73566 7.3624 1.73014 7.22267 1.67114 7.09939C1.6286 7.0069 1.55127 6.93052 1.45631 6.89291C1.35348 6.85201 1.23867 6.84496 1.13019 6.86341C1.03159 6.88057 0.934875 6.93921 0.895506 7.03452C0.853316 7.137 0.855196 7.26439 0.921478 7.35641C0.974832 7.42927 1.05874 7.47134 1.14218 7.50014C1.31881 7.55937 1.49568 7.61801 1.67232 7.67701C1.86669 7.74141 2.05908 7.8225 2.22184 7.94895C2.36522 8.05895 2.47639 8.21208 2.52751 8.38612C2.58486 8.58085 2.58568 8.78992 2.54702 8.9883C2.50154 9.2177 2.37485 9.43182 2.18764 9.57367C1.95648 9.75218 1.65974 9.8234 1.37193 9.82951H1.25289C0.957322 9.81788 0.650006 9.75406 0.410499 9.57096C0.240094 9.44334 0.119401 9.25613 0.0594653 9.05293C0.0223289 8.93224 0.00658114 8.80626 0 8.68051V8.51469C0.262893 8.51481 0.525904 8.51457 0.788797 8.51481C0.787622 8.62058 0.789855 8.72858 0.823936 8.82988C0.854961 8.92789 0.9176 9.01721 1.0055 9.07186C1.11456 9.14037 1.24783 9.15776 1.37428 9.15036C1.47206 9.1439 1.57501 9.11428 1.64341 9.04036C1.72261 8.95292 1.73331 8.82024 1.69735 8.71166C1.65892 8.60142 1.54739 8.54243 1.44374 8.50635C1.24149 8.44042 1.03747 8.37978 0.834983 8.31444C0.639429 8.25145 0.447283 8.15978 0.3005 8.01288C0.165704 7.88008 0.0827344 7.70086 0.0522966 7.51518C0.0175105 7.29929 0.0276173 7.07272 0.102948 6.86611C0.176986 6.65963 0.321888 6.48006 0.507688 6.3636V6.3636ZM5.71361 6.42471C5.92844 6.25489 6.20473 6.17956 6.47526 6.17157C6.75061 6.16381 7.03583 6.20694 7.27687 6.34703C7.45597 6.4495 7.60087 6.60874 7.68772 6.79572C7.79184 7.01313 7.8164 7.2584 7.80923 7.49661C7.54799 7.49673 7.28674 7.49685 7.02549 7.49661C7.02713 7.37933 7.02396 7.2591 6.9833 7.14769C6.95122 7.05626 6.89116 6.97282 6.80714 6.92264C6.70466 6.86059 6.57997 6.84637 6.46257 6.85742C6.36878 6.86705 6.2716 6.90537 6.21577 6.98481C6.15431 7.07354 6.1442 7.19341 6.1797 7.29424C6.21754 7.39554 6.31602 7.45748 6.41356 7.49262C6.62204 7.56419 6.83193 7.63141 7.04041 7.70309C7.2583 7.78172 7.47548 7.8869 7.63448 8.06012C7.76093 8.19621 7.83474 8.37555 7.85577 8.559C7.88127 8.78299 7.85789 9.01709 7.76164 9.22275C7.67855 9.40244 7.53623 9.5524 7.36501 9.65076C7.16275 9.76887 6.92795 9.81835 6.69608 9.82951H6.55118C6.30814 9.82023 6.06065 9.77815 5.84429 9.66193C5.65908 9.56462 5.50571 9.40796 5.41581 9.21876C5.30899 9.00111 5.28583 8.75408 5.29136 8.51481C5.5546 8.51469 5.81773 8.51457 6.08098 8.51481C6.07898 8.63409 6.08345 8.75714 6.13034 8.86878C6.16724 8.9608 6.23563 9.04048 6.32354 9.08702C6.43037 9.14413 6.55506 9.158 6.67446 9.14965C6.77388 9.14213 6.87882 9.10911 6.94452 9.03002C7.01503 8.94294 7.02349 8.81836 6.99047 8.71448C6.9558 8.61082 6.85497 8.55053 6.7579 8.51457C6.64566 8.47473 6.53096 8.44242 6.41767 8.40587C6.18851 8.33206 5.94853 8.27448 5.74628 8.13804C5.57599 8.0278 5.44237 7.86045 5.3815 7.66619C5.31733 7.46206 5.30981 7.24124 5.34894 7.03147C5.39384 6.79454 5.52252 6.57302 5.71361 6.42471V6.42471ZM12.3065 6.22269C12.6136 6.22257 12.9207 6.2221 13.2277 6.22292C13.2273 6.62602 13.2277 7.02912 13.2276 7.43221C13.2292 7.679 13.2243 7.92615 13.23 8.17259C13.5393 7.8581 13.8545 7.54926 14.166 7.23701C14.5052 6.89831 14.8449 6.56021 15.1839 6.2214C15.4108 6.44892 15.6381 6.6762 15.8656 6.90325C15.2322 7.53539 14.5987 8.16742 13.9648 8.79909C13.9453 8.81907 13.9249 8.83822 13.904 8.85656C14.557 8.86185 15.2106 8.85715 15.8638 8.85891C15.8637 9.16575 15.8634 9.47272 15.864 9.77968C14.6782 9.78015 13.4923 9.78003 12.3064 9.77968C12.3069 8.59402 12.3066 7.40835 12.3065 6.22269V6.22269Z"
      fill="black"
    />
    <path
      d="M2.48873 6.23787C2.80427 6.23775 3.11981 6.23763 3.43524 6.23787C3.60517 6.56493 3.77499 6.89187 3.94504 7.21869C3.94704 7.21905 3.95092 7.21963 3.9528 7.21999C4.12309 6.89269 4.29326 6.5654 4.46319 6.23799C4.76569 6.23752 5.06819 6.23799 5.37068 6.23775C5.0468 6.80373 4.72021 7.36806 4.3975 7.93475C4.74559 8.54327 5.09099 9.15343 5.43791 9.76266C5.12213 9.76231 4.80635 9.7636 4.49069 9.76195C4.29596 9.40234 4.09994 9.04343 3.90473 8.68417C3.71212 9.04332 3.52103 9.4034 3.32865 9.76266C3.02439 9.76266 2.72025 9.76278 2.41599 9.76266C2.76255 9.16189 3.10983 8.5616 3.45628 7.96083C3.13392 7.38639 2.81109 6.81231 2.48873 6.23787V6.23787ZM7.90102 6.23787C8.19399 6.23775 8.48709 6.23763 8.78007 6.23799C8.90323 6.99153 9.0251 7.74542 9.14897 8.49884L9.15331 8.50472C9.15778 8.50366 9.16659 8.50143 9.17094 8.50037C9.28341 7.74624 9.39435 6.992 9.50658 6.23775H10.3128C10.4248 6.99305 10.5364 7.74824 10.6484 8.50343L10.6694 8.50249C10.7939 7.74777 10.9157 6.99258 11.0392 6.23787C11.3136 6.23787 11.5879 6.23763 11.8623 6.23787C11.6423 7.41284 11.4224 8.58781 11.202 9.76266C10.8756 9.76278 10.5491 9.76278 10.2226 9.76266C10.1123 9.00923 10.0025 8.25569 9.8924 7.50215L9.87136 7.50309C9.76007 8.25616 9.65113 9.00947 9.54078 9.76266C9.21431 9.76278 8.88772 9.76266 8.56125 9.76278C8.34089 8.58781 8.12113 7.41284 7.90102 6.23787V6.23787ZM11.6053 9.41433C11.6867 9.3779 11.7925 9.40751 11.8394 9.48449C11.8951 9.56992 11.8689 9.6992 11.7786 9.74997C11.691 9.80461 11.5617 9.77171 11.5157 9.67804C11.4651 9.58555 11.5054 9.45428 11.6053 9.41433ZM11.6395 9.43724C11.5491 9.45887 11.5041 9.57004 11.5417 9.65207C11.5718 9.72975 11.6712 9.76618 11.7455 9.72987C11.8215 9.69708 11.8536 9.59919 11.8216 9.52491C11.7951 9.4544 11.7108 9.41586 11.6395 9.43724Z"
      fill="black"
    />
    <path
      d="M11.6015 9.4873C11.6463 9.48929 11.6925 9.48165 11.7363 9.49376C11.7851 9.50692 11.7878 9.5913 11.7345 9.59976C11.7733 9.61104 11.766 9.65582 11.7735 9.68661C11.7557 9.68579 11.7382 9.68543 11.7207 9.68485C11.7155 9.66604 11.7167 9.64524 11.7077 9.62797C11.6927 9.61469 11.6701 9.62221 11.6521 9.62009C11.652 9.64183 11.6519 9.66358 11.6523 9.68532C11.6352 9.68543 11.6182 9.68555 11.6015 9.68555C11.6014 9.61951 11.6014 9.55334 11.6015 9.4873ZM11.6523 9.5289C11.652 9.54617 11.652 9.56333 11.6521 9.58072C11.6751 9.57884 11.72 9.58848 11.7205 9.55393C11.7173 9.52091 11.6749 9.53113 11.6523 9.5289V9.5289Z"
      fill="black"
    />
  </svg>
);

export const StarbucksFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 7.99923C16 12.417 12.4369 15.9985 8.04165 15.9985C3.6463 15.9985 0.083252 12.417 0.083252 7.99923C0.083252 3.58141 3.64636 0 8.04165 0C12.4369 0 16 3.58141 16 7.99923Z"
      fill="white"
    />
    <path
      d="M7.97515 2.84384C8.25531 3.00533 8.55254 3.21314 8.77871 3.43343L8.68989 3.52268C8.24343 3.47522 7.77327 3.53451 7.35003 3.54104C7.30289 3.49341 7.20781 3.42182 7.29631 3.362L7.97515 2.84384ZM15.8685 8.38915C15.8745 8.5906 15.8934 8.76365 15.8148 8.96991C14.9993 9.20192 14.4636 8.33843 13.6723 8.46861L13.7617 8.91619C14.4938 8.94027 14.9511 9.64233 15.7074 9.61215C15.5999 9.82671 15.7553 10.3922 15.2793 10.1662C14.7851 10.0474 14.4278 9.61215 13.8864 9.61215C13.8211 9.73206 13.8625 9.89814 13.851 10.0401C14.4222 10.1297 14.8331 10.6125 15.4041 10.7017C15.3504 10.8979 15.2972 11.1177 15.1362 11.2373C14.6717 11.1242 14.3088 10.707 13.8142 10.7189L13.7261 11.1299C14.1961 11.142 14.4999 11.5579 14.9223 11.6827C14.9339 11.8561 14.779 12.011 14.6896 12.1657C14.3147 12.0531 14.0287 11.7309 13.6002 11.7547C13.5942 11.5932 13.6901 11.41 13.6539 11.2373C13.1727 11.3805 12.85 10.9333 12.4933 10.6651C12.4831 9.78733 11.559 9.21144 11.5102 8.38921C11.5008 8.22521 11.5258 8.05024 11.6005 7.86211C11.9042 7.15995 11.8088 6.24825 11.4759 5.59354C11.3746 5.4212 11.1954 5.28524 11.0283 5.1839C11.2727 5.70206 11.5707 6.31422 11.4219 6.95106C11.4047 7.44278 11.1145 7.91514 11.1112 8.38921C11.1101 8.55823 11.1462 8.72726 11.2434 8.89794C11.6305 9.59519 12.327 10.2553 12.0651 11.1298C11.9931 11.3984 11.7788 11.6061 11.7252 11.8794C12.1781 12.2546 12.6063 12.6773 13.2073 12.7011C13.4215 12.5643 13.3025 11.9578 13.743 12.2376L14.3862 12.5593C14.3394 12.7315 14.1952 12.8858 14.0647 13.0044C13.8206 12.8856 13.5826 12.7432 13.2783 12.7548C13.1886 12.85 13.1114 12.9569 13.1182 13.0935C13.3323 13.1288 13.5288 13.2191 13.7076 13.3443C13.6245 13.5232 13.4627 13.6353 13.3139 13.7723L12.815 13.5939C12.7317 13.7131 12.5586 13.8383 12.6194 13.9692C12.732 14.0173 12.8568 14.0825 12.9396 14.166C12.7195 14.4041 12.4403 14.5573 12.1717 14.7188C11.9404 13.9626 11.178 13.4325 11.2435 12.558L11.2081 12.5225C11.0289 12.724 11.0887 13.0461 11.1003 13.3076C11.3148 13.8553 11.8263 14.2784 11.9039 14.8791C11.8143 15.0337 11.6124 15.0645 11.4574 15.1299C11.4755 14.047 9.83268 13.2256 10.8862 12.1302C11.2375 11.5938 11.8262 11.0819 11.6176 10.3434C11.4035 9.63029 10.646 9.18849 10.6527 8.38921L10.654 8.32682C10.8264 7.49329 11.3505 6.60632 10.9218 5.71955C10.8023 5.36288 10.5353 4.95757 10.1723 4.8085C10.7136 5.42805 10.9282 6.439 10.6185 7.27274C10.4624 7.60443 10.2475 7.99946 10.226 8.38931H10.2247C10.2132 8.59291 10.2547 8.79543 10.3862 8.98736C10.7971 9.65431 11.511 10.3868 11.1004 11.2559C10.6361 11.952 9.82663 12.6601 10.2788 13.5771C10.6061 14.1246 11.1125 14.671 10.9758 15.3442L10.4402 15.5226C10.7973 14.2671 9.04704 13.5293 9.77982 12.2732C10.2321 11.6007 11.0412 10.9696 10.5832 10.077C10.3094 9.52387 9.7437 9.19651 9.76146 8.50537L9.78099 8.38926C9.96532 7.40902 10.7106 6.48106 10.1894 5.43356C10.0525 5.12419 9.77891 4.80887 9.4752 4.63016L9.4569 4.64846C10.0643 5.23773 10.2491 6.20732 9.92155 6.98669C9.76879 7.44396 9.43342 7.89946 9.3653 8.38942C9.33282 8.62052 9.36016 8.85996 9.49361 9.11219C9.88046 9.72478 10.5589 10.3746 10.1356 11.1666C9.68976 11.8207 8.94549 12.4573 9.24277 13.308C9.57028 14.0523 10.2539 14.7614 9.88485 15.6842L9.33202 15.809C9.77232 14.9097 9.11216 14.0172 8.72536 13.2372C8.25488 12.1181 9.73615 11.5822 9.75996 10.5591C9.75435 9.89868 9.05223 9.52371 8.90397 8.91667C8.60005 8.66027 8.28511 9.01855 7.92185 8.95204C7.65373 9.00592 7.24184 8.5829 7.08175 9.04151C6.89116 9.71376 6.02259 10.2079 6.40425 11.0054C6.76751 11.7139 7.64159 12.232 7.3496 13.1491C7.08817 14.0056 6.22452 14.8211 6.76017 15.809C6.5401 15.7377 6.12928 15.8742 6.13522 15.5227C5.79609 14.3264 7.24227 13.6294 6.7956 12.4337C6.58772 11.7013 5.64061 11.2967 5.84912 10.4158C6.00327 9.69064 6.81695 9.18372 6.70282 8.38942C6.69267 8.3196 6.67627 8.25083 6.6538 8.18395C6.3501 7.32683 5.7305 6.46945 6.0998 5.46909C6.20119 5.18342 6.40371 4.93943 6.58168 4.68404C5.99236 4.99936 5.69507 5.66621 5.70727 6.34462C5.68159 7.08236 6.22655 7.71433 6.30409 8.38942C6.33458 8.66188 6.28996 8.94091 6.0998 9.23686C5.71321 9.76138 5.20763 10.3145 5.43942 11.0052C5.65981 11.7019 6.52876 12.124 6.47525 12.9338C6.46931 13.8918 5.35622 14.4881 5.67169 15.5595L5.11769 15.3798C4.89772 14.4277 5.90942 13.9407 5.92103 13.0598C6.06422 12.047 4.7723 11.6711 4.84983 10.6837C4.84427 9.93346 5.50465 9.45832 5.79631 8.82726C5.84628 8.6737 5.86298 8.52864 5.85629 8.38947C5.82055 7.69175 5.19185 7.1463 5.29618 6.36179C5.33128 5.78445 5.52771 5.27834 5.90284 4.84419C5.38527 5.05206 5.17146 5.64785 5.02849 6.14792C4.78038 6.94983 5.37264 7.67109 5.43198 8.38947C5.45831 8.70677 5.38083 9.02219 5.08232 9.34467C4.65352 9.84993 4.21867 10.4876 4.52826 11.1667C4.85609 11.9161 5.88604 12.4994 5.43931 13.434C5.19559 14.0234 4.612 14.4695 4.63597 15.1657C4.48133 15.1002 4.32092 15.0349 4.18951 14.9161C4.18951 14.0295 5.45087 13.4756 4.84989 12.5412C4.79665 12.7255 4.7852 12.9761 4.74351 13.1844C4.53495 13.7263 4.0887 14.16 3.92171 14.7203C3.64246 14.6126 3.35047 14.3861 3.1182 14.148L3.43994 13.9512C3.40419 13.8318 3.30911 13.7308 3.22591 13.6296C3.01702 13.6003 2.87983 13.7373 2.70754 13.7911C2.55874 13.6598 2.41512 13.5408 2.2965 13.38C2.4033 13.0759 3.23779 13.3274 2.81503 12.8273C2.52963 12.6489 2.24315 12.9038 1.99322 13.0228L1.65442 12.5948C1.94609 12.4164 2.237 12.1658 2.59977 12.2377C2.68918 12.3987 2.69539 12.6354 2.86763 12.7195C3.48081 12.7076 3.91529 12.2438 4.38534 11.8806C4.05772 11.3931 3.79104 10.7201 4.08207 10.1305C4.31519 9.53981 4.92282 9.0422 4.95032 8.3891C4.95658 8.24051 4.93341 8.08411 4.8684 7.91578C4.54715 7.0883 4.43377 5.96991 5.04695 5.23751C4.71355 5.32708 4.51697 5.74267 4.40369 6.05814C4.03509 6.86614 4.50129 7.61475 4.5174 8.38905C4.51959 8.52838 4.5083 8.66792 4.47454 8.80854C4.15896 9.44537 3.64765 10.0041 3.56461 10.737C3.2014 10.9687 2.90321 11.3738 2.3857 11.2371C2.3675 11.3739 2.40919 11.5823 2.45665 11.7373C2.04625 11.72 1.76641 12.0225 1.42092 12.1653C1.2368 12.1062 1.18892 11.8683 1.11764 11.7018C1.5221 11.5652 1.81387 11.1598 2.27826 11.1661C2.33208 11.0166 2.24808 10.8796 2.22437 10.7369C1.64672 10.4805 0.73106 12.0043 0.654064 10.6831C1.23129 10.6474 1.60011 10.1116 2.17183 10.0582L2.1889 9.63024C1.54013 9.56475 1.12278 10.2316 0.474282 10.1659L0.33126 9.59482C1.08142 9.64169 1.52836 8.96943 2.24278 8.93326C2.3377 8.80843 2.34915 8.62394 2.36745 8.45149C1.58765 8.34982 1.05258 9.21406 0.224889 8.95161C0.224889 8.95161 0.196369 8.59194 0.180905 8.3891H0.18203C0.178897 8.34422 0.17524 8.29938 0.171061 8.25458C0.909076 8.5409 1.55752 8.01081 2.1889 7.73723C2.34947 7.68918 2.59988 7.77249 2.67185 7.59405C2.6657 7.45712 2.91536 7.29703 2.70748 7.20152C1.78444 7.07621 1.17126 8.18957 0.224781 7.68335L0.153778 7.54016C0.350522 4.85002 1.86765 2.24928 4.38523 0.969456C5.4048 0.38677 6.67152 0.0898091 7.94898 0.0792148C9.49061 0.0663733 11.0485 0.47083 12.2074 1.29114C13.3326 1.98137 14.409 3.11897 14.9932 4.2738C15.552 5.28567 15.8091 6.42102 15.8859 7.62968C14.9095 8.36743 14.2545 6.93468 13.2603 7.25535C13.3138 7.41036 13.3435 7.57082 13.4572 7.70176C14.3384 7.6955 14.9451 8.61821 15.8676 8.25453L15.8685 8.38915V8.38915ZM4.65293 5.07608C4.03375 4.67125 3.24881 5.05249 2.67179 5.27299C2.61823 4.73107 2.39816 4.23737 1.93929 3.88026C1.89477 3.85806 1.83324 3.81151 1.77781 3.80803C1.74463 3.80595 1.71306 3.81937 1.68856 3.86175C1.89654 5.14131 1.06478 6.03412 0.475353 7.00472C0.671615 7.16508 0.986928 7.14117 1.22498 7.09397C1.84983 6.84415 2.44503 6.4092 3.18904 6.55827C3.40911 6.18329 3.77874 5.82009 4.08185 5.52254C4.26709 5.36223 4.52146 5.26052 4.65293 5.07608V5.07608ZM6.54604 5.87964C6.53411 5.95669 6.55198 6.0941 6.67077 6.04097C6.85558 5.78504 7.18277 5.98757 7.38502 6.00555V5.93353C7.27405 5.75925 7.04579 5.67177 6.8139 5.68044C6.76039 5.68236 6.70603 5.69012 6.6537 5.70232C6.57617 5.71955 6.52213 5.7905 6.54604 5.87964V5.87964ZM9.45664 5.11289C9.29039 4.74375 8.90943 4.59436 8.56383 4.50506C8.39432 4.48419 8.21844 4.47012 8.04401 4.46841C8.01132 4.46809 7.97868 4.46766 7.94609 4.46841C7.45822 4.47825 6.99202 4.60351 6.7072 5.00513C6.66632 5.11851 6.4866 5.27775 6.65348 5.37936C7.02851 5.35544 7.45645 5.30841 7.70644 5.6302C7.70644 5.91624 7.89114 6.29667 7.58171 6.4336C7.32536 6.19624 7.02177 6.53467 6.74284 6.34419C6.61169 6.26666 6.52871 6.35708 6.47499 6.47019C6.39745 7.20805 6.78388 8.02247 7.47417 8.43303C7.75395 8.53394 8.13005 8.62988 8.42203 8.48675C9.12431 8.15972 9.41522 7.4102 9.5461 6.71964C9.52855 6.58823 9.5347 6.33215 9.35037 6.32589C9.14218 6.45762 8.83853 6.37977 8.61792 6.32589C8.48742 6.368 8.48143 6.55891 8.33295 6.59508L8.24247 6.5229C8.16494 6.19597 8.11715 5.73159 8.42107 5.50537C8.76062 5.36844 9.15941 5.30867 9.51052 5.41611C9.57606 5.303 9.47494 5.21402 9.45664 5.11289V5.11289ZM9.0983 5.69975C9.07471 5.7004 9.05181 5.70157 9.02848 5.70232C8.90381 5.78552 8.54034 5.72571 8.67159 6.00555C8.89787 5.82657 9.21334 5.95198 9.43951 6.04097C9.52309 5.9995 9.50506 5.91614 9.51046 5.84422C9.4378 5.70912 9.26433 5.69649 9.0983 5.69975ZM11.6898 3.18308C11.2492 3.15969 10.8803 3.40984 10.4755 3.52295C10.4402 3.17847 10.7019 2.81468 10.7616 2.46887C10.1071 2.51098 9.58864 2.905 9.0471 3.21973C8.92141 2.91625 8.79628 2.61255 8.6717 2.30862L9.38601 1.62994L9.40431 1.54048L8.43942 1.48676C8.27329 1.19558 8.20774 0.844839 8.01137 0.576985C7.85064 0.880581 7.74266 1.20184 7.58209 1.50506L6.61844 1.55894V1.62994L7.34982 2.29032C7.26041 2.62977 7.17731 2.99858 6.95724 3.25509C6.52876 2.99842 6.10627 2.71912 5.63649 2.54083C5.52343 2.5044 5.36226 2.44506 5.26108 2.52254C5.40967 2.85005 5.61776 3.20229 5.58276 3.55971C5.38618 3.52354 5.23171 3.39753 5.04706 3.34456C4.82624 3.28425 4.56427 3.16659 4.35003 3.23819C4.70724 3.73783 4.99879 4.26086 5.09965 4.86222C6.28466 4.29023 7.66663 3.97567 9.10114 4.22014C9.77361 4.3271 10.3919 4.60105 10.9932 4.82664C11.0167 4.19611 11.4153 3.68946 11.6898 3.18308V3.18308ZM13.7248 6.61204C14.3315 6.77256 14.94 7.43358 15.5824 7.00472C15.0229 6.07633 14.1901 5.21895 14.4218 4.00494C14.446 3.92205 14.3924 3.83815 14.3154 3.82638C13.9525 3.9747 13.6713 4.33229 13.5277 4.68372C13.4687 4.89164 13.4338 5.11258 13.3506 5.30857C12.9157 5.08224 12.4518 4.86307 11.9221 4.91599C11.731 4.9398 11.4572 4.95232 11.4219 5.14848C12.023 5.46973 12.5174 6.00581 12.8858 6.57678C13.1424 6.53499 13.457 6.57068 13.7248 6.61204V6.61204ZM7.3679 7.45113L7.38502 7.55873C7.61762 7.71363 7.68916 7.97624 8.01121 7.95243C8.29672 7.96934 8.51096 7.70181 8.65318 7.48767C8.26686 7.43427 7.79654 7.51684 7.3679 7.45113V7.45113ZM7.68942 6.9693C7.70103 7.01692 7.65994 7.08836 7.72484 7.11249C7.91538 7.07113 8.26044 7.21383 8.36682 6.9876C8.29249 6.9044 8.1713 6.86662 8.04401 6.86662C7.91683 6.86662 7.78488 6.90365 7.68942 6.9693V6.9693Z"
      fill="#106E33"
    />
    <path opacity="0.99" d="M7.36832 6.7627H8.6735V7.29888H7.36832V6.7627Z" fill="white" />
    <path
      d="M7.60937 7.04943C7.77802 7.08934 7.81975 7.14911 7.95299 7.16586C8.09478 7.16334 8.07434 7.13456 8.32138 7.04927C8.3377 7.04354 8.35996 7.00769 8.33235 6.98025C8.17884 6.82797 8.07273 6.9368 7.97664 6.93969C7.84892 6.94103 7.72928 6.83043 7.60461 6.97425C7.58336 7.00341 7.57229 7.03215 7.60937 7.04943Z"
      fill="#106E33"
    />
  </svg>
);

export const StackOverflowFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.409 14.2696V10.3778H15.1377V15.9991H2.17444V10.3778H3.90314V14.2696H13.409Z"
      fill="#BCBBBB"
    />
    <path
      d="M12.1131 11.2425L12.4586 9.94501L5.50145 8.5187L5.19907 9.94501L12.1131 11.2425ZM6.15021 6.57241L12.6314 9.59943L13.2362 8.30191L6.75497 5.27569L6.15021 6.57241ZM7.9645 3.3726L13.409 7.95633L14.3169 6.87559L8.82925 2.29186L7.9213 3.3726H7.9645ZM11.4651 0L10.298 0.864749L14.5761 6.61561L15.7424 5.75086L11.4651 0ZM5.19907 12.972H12.1131V11.6753H5.19907V12.972Z"
      fill="#F48024"
    />
  </svg>
);

export const SsenseFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2862_8249)">
      <path
        d="M14.8198 8.68444V7.77185H16.242V7.40741H14.8198V6.57481H16.4849V6.20741H14.4138V9.05185H16.5264V8.68444H14.8198ZM10.6124 8.56L9.29087 6.20741H8.72198V9.05185H9.12791V6.69926L10.4494 9.05185H11.0183V6.20741H10.6124V8.56ZM6.42865 7.77185H7.85087V7.40741H6.42865V6.57481H8.09384V6.20741H6.02272V9.05185H8.13532V8.68444H6.42865V7.77185V7.77185ZM12.7279 6.53333H12.7694C13.1161 6.53333 13.3738 6.73778 13.3946 7.06074H13.8005C13.7798 6.51259 13.3768 6.16592 12.7487 6.16592C12.1353 6.16592 11.7324 6.53037 11.7324 6.97778C11.7324 7.42518 11.9961 7.68592 12.4524 7.77778L12.9087 7.87259C13.2079 7.93481 13.3561 8.06815 13.3561 8.29926C13.3561 8.53037 13.1487 8.72592 12.7664 8.72592H12.7249C12.2983 8.72592 11.999 8.52148 11.999 8.13629H11.5931C11.6138 8.76444 12.0405 9.09037 12.7101 9.09037C13.3383 9.09037 13.762 8.78222 13.762 8.28148C13.762 7.81926 13.4775 7.55852 12.9857 7.46074L12.5294 7.37185C12.2894 7.32444 12.1383 7.19407 12.1383 6.97481C12.1383 6.72296 12.3753 6.53333 12.7279 6.53333ZM4.33384 6.53333H4.37532C4.72198 6.53333 4.97976 6.73778 5.0005 7.06074H5.40643C5.38569 6.51259 4.98272 6.16592 4.35161 6.16592C3.73828 6.16592 3.33532 6.53037 3.33532 6.97778C3.33532 7.42518 3.59902 7.68592 4.05532 7.77778L4.51161 7.87259C4.81087 7.93481 4.95902 8.06815 4.95902 8.29926C4.95902 8.53037 4.75161 8.72592 4.36939 8.72592H4.32791C3.90124 8.72592 3.60198 8.52148 3.60198 8.13629H3.19606C3.2168 8.76444 3.64347 9.09037 4.31309 9.09037C4.94124 9.09037 5.36495 8.78222 5.36495 8.28148C5.36495 7.81926 5.0805 7.55852 4.58865 7.46074L4.13235 7.37185C3.89235 7.32444 3.74124 7.19407 3.74124 6.97481C3.74421 6.72296 3.97828 6.53333 4.33384 6.53333ZM1.66421 6.53333H1.70569C2.05235 6.53333 2.31013 6.73778 2.33087 7.06074H2.7368C2.71606 6.51259 2.31309 6.16592 1.68495 6.16592C1.07161 6.16592 0.66865 6.53333 0.66865 6.98074C0.66865 7.42815 0.932354 7.68889 1.38865 7.78074L1.84495 7.87555C2.14421 7.93778 2.29235 8.07111 2.29235 8.30222C2.29235 8.53333 2.08198 8.72592 1.69976 8.72592H1.65828C1.23161 8.72592 0.932354 8.52148 0.932354 8.13629H0.526428C0.547169 8.76444 0.973836 9.09037 1.64347 9.09037C2.27161 9.09037 2.69532 8.78222 2.69532 8.28148C2.69532 7.81926 2.41087 7.55852 1.91902 7.46074L1.46272 7.37185C1.22272 7.32444 1.07161 7.19407 1.07161 6.97481C1.07458 6.72296 1.31161 6.53333 1.66421 6.53333Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_2862_8249">
        <rect width="16" height="16" fill="white" transform="translate(0.526428)" />
      </clipPath>
    </defs>
  </svg>
);

export const SpotifyFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2862_8250)">
      <path
        d="M8.52643 0C4.108 0 0.526428 3.58158 0.526428 8C0.526428 12.4184 4.108 16 8.52643 16C12.9449 16 16.5264 12.4184 16.5264 8C16.5264 3.58212 12.9449 0.000545889 8.52643 0ZM12.1953 11.5379C12.0518 11.7737 11.7444 11.8474 11.5097 11.7039C9.63131 10.5559 7.26652 10.2966 4.48194 10.9325C4.21336 10.9942 3.94588 10.8261 3.88474 10.5575C3.82305 10.2889 3.99064 10.0214 4.25976 9.96029C7.30691 9.26428 9.92117 9.56397 12.0299 10.8523C12.2647 10.9969 12.3395 11.3032 12.1953 11.5379V11.5379ZM13.1741 9.36035C12.9934 9.65404 12.6091 9.74575 12.316 9.56561C10.1663 8.24401 6.88767 7.86134 4.34437 8.63323C4.01466 8.73313 3.66638 8.54698 3.56594 8.21781C3.46659 7.88809 3.65273 7.54036 3.9819 7.43992C6.88712 6.55831 10.4993 6.98519 12.9683 8.50276C13.262 8.68345 13.3548 9.06721 13.1741 9.36035ZM13.2582 7.09164C10.6794 5.56042 6.42585 5.41958 3.96389 6.16636C3.56867 6.28645 3.15052 6.06319 3.03097 5.66796C2.91142 5.27274 3.13414 4.85459 3.52991 4.73449C6.35597 3.8769 11.0533 4.04231 14.0219 5.80444C14.3773 6.01569 14.4941 6.47479 14.2834 6.82961C14.0732 7.18553 13.613 7.3029 13.2582 7.09164Z"
        fill="#2EBD59"
      />
    </g>
    <defs>
      <clipPath id="clip0_2862_8250">
        <rect width="16" height="16" fill="white" transform="translate(0.526428)" />
      </clipPath>
    </defs>
  </svg>
);

export const SoundcloudFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.772906 11.1411C0.805906 11.1411 0.833875 11.114 0.838625 11.0758L1.01809 9.65329L0.839156 8.19847C0.833813 8.16022 0.805937 8.13287 0.772906 8.13287C0.739031 8.13287 0.710187 8.16081 0.705718 8.19847L0.548874 9.65329L0.705718 11.0753C0.710187 11.1134 0.739031 11.1411 0.772906 11.1411Z"
      fill="#F85A0F"
    />
    <path
      d="M0.181126 10.6001C0.213595 10.6001 0.239907 10.5749 0.244657 10.5372L0.383689 9.65326L0.244657 8.75279C0.239845 8.71626 0.213626 8.68985 0.181126 8.68985C0.147251 8.68985 0.121032 8.71626 0.116219 8.75332L0 9.65329L0.116282 10.537C0.121 10.5744 0.147313 10.6001 0.181126 10.6001Z"
      fill="#F85A0F"
    />
    <path
      d="M1.48063 7.92769C1.47635 7.88144 1.4425 7.84769 1.40054 7.84769C1.35879 7.84769 1.32491 7.88144 1.32097 7.92769L1.17107 9.65329L1.32097 11.3159C1.32491 11.3619 1.35879 11.3952 1.40054 11.3952C1.4425 11.3952 1.47638 11.3619 1.48063 11.3159L1.65022 9.65329L1.48063 7.92769Z"
      fill="#F85A0F"
    />
    <path
      d="M2.03478 11.4623C2.08397 11.4623 2.12375 11.4218 2.12853 11.3689L2.28885 9.65388L2.12853 7.88012C2.12372 7.82684 2.08394 7.78677 2.03478 7.78677C1.98488 7.78677 1.94459 7.82684 1.94113 7.88031L1.79947 9.65381L1.94113 11.3688C1.94459 11.4218 1.98491 11.4623 2.03478 11.4623Z"
      fill="#F85A0F"
    />
    <path
      d="M2.67345 11.49C2.73073 11.49 2.77663 11.4442 2.78145 11.3828L2.78091 11.3832L2.93185 9.65385L2.78091 8.00812C2.77663 7.94775 2.73073 7.90118 2.67338 7.90118C2.61526 7.90118 2.56954 7.94775 2.56607 8.00859L2.43263 9.65388L2.56607 11.3829C2.5696 11.4442 2.61532 11.49 2.67345 11.49Z"
      fill="#F85A0F"
    />
    <path
      d="M3.58045 9.65427L3.43879 6.97841C3.43485 6.91057 3.38204 6.85651 3.31713 6.85651C3.25276 6.85651 3.20007 6.91054 3.19607 6.97841L3.07072 9.65427L3.19607 11.3832C3.20001 11.4514 3.25276 11.5047 3.31713 11.5047C3.38204 11.5047 3.43485 11.4514 3.43879 11.3832V11.3837L3.58045 9.65427Z"
      fill="#F85A0F"
    />
    <path
      d="M3.96733 11.5076C4.0387 11.5076 4.09795 11.4483 4.10129 11.3727V11.3738L4.23373 9.65471L4.10129 6.36638C4.09792 6.29076 4.03867 6.23151 3.96733 6.23151C3.8942 6.23151 3.83554 6.29076 3.83161 6.36638L3.71501 9.65471L3.83207 11.3732C3.83554 11.4483 3.8942 11.5076 3.96733 11.5076Z"
      fill="#F85A0F"
    />
    <path
      d="M4.62102 5.94321C4.54058 5.94321 4.47567 6.00924 4.47239 6.09249L4.36395 9.65522L4.47239 11.3557C4.47577 11.4385 4.54061 11.5041 4.62102 11.5041C4.70124 11.5041 4.76667 11.4391 4.76945 11.3554V11.3562L4.89249 9.65516L4.76945 6.09243C4.76667 6.00868 4.70124 5.94321 4.62102 5.94321Z"
      fill="#F85A0F"
    />
    <path
      d="M5.28055 11.5076C5.36887 11.5076 5.43921 11.4363 5.44252 11.3446V11.3456L5.55627 9.65527L5.44252 5.97285C5.43915 5.88144 5.36887 5.80984 5.28055 5.80984C5.19171 5.80984 5.12033 5.88141 5.1189 5.97285L5.01671 9.65527L5.1189 11.3456C5.12033 11.4363 5.19171 11.5076 5.28055 11.5076Z"
      fill="#F85A0F"
    />
    <path
      d="M5.94546 11.5058C6.04078 11.5058 6.11815 11.4278 6.121 11.3289V11.3304L6.22568 9.65556L6.121 6.06679C6.11818 5.96792 6.04078 5.8902 5.94546 5.8902C5.84953 5.8902 5.77212 5.96792 5.76931 6.06679L5.67731 9.65556L5.7699 11.3297C5.77212 11.4278 5.84953 11.5058 5.94546 11.5058Z"
      fill="#F85A0F"
    />
    <path
      d="M6.89918 9.65562L6.80439 6.1977C6.80211 6.09104 6.71858 6.00726 6.61502 6.00726C6.51117 6.00726 6.42761 6.09104 6.42542 6.19842L6.34042 9.65565L6.42542 11.3196C6.42761 11.4254 6.51114 11.5092 6.61502 11.5092C6.71855 11.5092 6.80211 11.4254 6.80439 11.318V11.3196L6.89918 9.65562Z"
      fill="#F85A0F"
    />
    <path
      d="M7.28974 11.5122C7.39984 11.5122 7.49096 11.4206 7.49268 11.308V11.3089L7.57871 9.65646L7.49268 5.54163C7.49102 5.42863 7.39987 5.33716 7.28974 5.33716C7.17971 5.33716 7.0889 5.429 7.08659 5.54216L7.01012 9.65477L7.08659 11.309C7.08887 11.4206 7.17971 11.5122 7.28974 11.5122Z"
      fill="#F85A0F"
    />
    <path
      d="M7.96222 4.9501C7.84335 4.9501 7.74691 5.04873 7.74494 5.16889L7.6561 9.65697L7.74547 11.285C7.74691 11.4037 7.84338 11.502 7.96222 11.502C8.07929 11.502 8.17754 11.4037 8.17807 11.2831V11.285L8.27513 9.65697L8.17807 5.16889C8.17754 5.04829 8.07929 4.9501 7.96222 4.9501Z"
      fill="#F85A0F"
    />
    <path
      d="M8.5771 11.5137C8.58192 11.5142 13.997 11.5167 14.0318 11.5167C15.119 11.5167 16 10.6249 16 9.52436C16 8.42442 15.1189 7.53241 14.0318 7.53241C13.762 7.53241 13.5049 7.58757 13.2704 7.68744C13.1146 5.89166 11.627 4.48334 9.81217 4.48334C9.36854 4.48334 8.93601 4.57196 8.55392 4.72168C8.40517 4.77981 8.36538 4.83978 8.3642 4.95593V11.2781C8.36595 11.4001 8.45907 11.5016 8.5771 11.5137Z"
      fill="#F85A0F"
    />
  </svg>
);

export const RHFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.9534 13.0044C15.9575 13.0044 15.9534 13.0044 15.9534 13.0044ZM13.3849 2.99355C13.3809 2.99355 13.3849 2.99355 13.3849 2.99355ZM7.55775 2.99355C7.55168 2.99355 7.55775 2.99355 7.55775 2.99355ZM2.57862 13.0044C2.58267 13.0044 2.57862 13.0044 2.57862 13.0044ZM10.1262 13.0044C10.1303 13.0044 10.1262 13.0044 10.1262 13.0044ZM13.3849 13.0044C13.3849 13.0044 13.3809 13.0044 13.3849 13.0044ZM2.59684 8.13258C2.53207 8.13056 2.47135 8.13055 2.42884 8.13055C2.42884 8.13055 2.35395 8.13055 1.70626 8.13055L1.70424 3.65541C1.70626 3.16762 1.80544 3.0057 2.32359 2.99153C2.55636 2.99153 2.7709 2.99153 2.79519 2.99153C2.97331 2.99153 3.0907 2.99153 3.19393 2.99153C5.23011 2.99153 6.19557 4.02986 6.19557 5.53574C6.19557 6.96066 5.14105 8.12853 3.59266 8.12853L2.59684 8.13258ZM15.9534 13.0065C15.9454 13.0065 15.9109 13.0065 15.7753 13.0065C15.239 13.0065 15.1034 12.8769 15.0831 12.46V3.54004C15.1034 3.12309 15.239 2.99355 15.7753 2.99355C15.9089 2.99355 15.9454 2.99355 15.9534 2.99355V2.99153H15.998V2.9389H15.0851H14.2573H13.3465V2.99153H13.387V2.99355C13.3951 2.99355 13.4295 2.99355 13.5651 2.99355C14.1257 2.99355 14.2492 3.13524 14.2593 3.59874V8.13055H9.25187V3.66958H9.25389C9.25389 3.1656 9.35307 3.00165 9.89551 2.99355H10.0736C10.108 2.99355 10.1202 2.99355 10.1242 2.99355H10.2194V2.94093H8.76002H7.5537V2.99355C7.55977 2.99355 7.57799 2.99355 7.62859 2.99355H7.76825C8.32081 2.99962 8.42404 3.15952 8.42404 3.66351V13.0024C8.40784 13.0024 8.38355 13.0024 8.34915 13.0024C7.62859 13.0024 7.47881 12.5409 7.16104 11.8609C6.17736 9.74776 5.57824 8.47667 3.06844 8.1852H3.59671C5.01758 8.17913 7.01126 7.66503 7.01126 5.5236C7.01126 3.08666 4.27476 2.94295 3.56837 2.94093H3.55218C2.44301 2.9389 1.41682 2.94093 0 2.94093V2.99355C0.00809614 2.99355 0.0425047 2.99355 0.178115 2.99355C0.765085 2.99355 0.872359 3.1494 0.872359 3.66756V12.4418C0.856167 12.8607 0.730677 12.9984 0.226692 13.0065H0.0728652C0.0242884 13.0065 0.00809611 13.0065 0.002024 13.0065H0V13.0591H0.002024H1.3723H2.73852V13.0065H2.57862C2.57457 13.0065 2.56648 13.0065 2.54421 13.0065H2.34383C1.80746 12.9963 1.70829 12.8324 1.70829 12.3304H1.70626L1.70829 8.18318C1.97748 8.18318 1.99772 8.18318 2.31145 8.18318H2.41872C3.17976 8.18318 3.86996 8.35117 4.36787 8.75598C5.75636 9.88337 5.83529 13.0611 8.15889 13.0611H8.26818H8.69323H10.276V13.0085H10.1323C10.1262 13.0085 10.104 13.0085 10.0311 13.0085H9.94409C9.36319 13.0065 9.25794 12.8486 9.25794 12.3325H9.25591V8.18116H14.2614V12.4013C14.2512 12.8648 14.1278 13.0065 13.5671 13.0065C13.4335 13.0065 13.3971 13.0065 13.389 13.0065H13.3485V13.0591H13.389H14.6743H16V13.0065H15.9534ZM15.9534 2.99355C15.9534 2.99355 15.9575 2.99355 15.9534 2.99355V2.99355ZM10.1262 2.99355C10.1262 2.99355 10.1303 2.99355 10.1262 2.99355Z"
      fill="#231815"
    />
  </svg>
);

export const AirbnbFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.9953 0H0.0046875C0.00209867 0 0 0.00209867 0 0.0046875V15.9953C0 15.9979 0.00209867 16 0.0046875 16H15.9953C15.9979 16 16 15.9979 16 15.9953V0.0046875C16 0.00209867 15.9979 0 15.9953 0Z"
      fill="#FF5A5F"
    />
    <path
      d="M7.96874 2.625C7.06249 2.625 6.68749 3.375 6.68749 3.375C5.56249 5.4375 4.56249 7.53125 3.53124 9.71875C3.53124 9.71875 2.71874 11.3125 3.99999 12.3438C5.78124 13.75 7.43749 11.6563 7.96874 11.125C8.49999 10.5938 9.46874 9.375 9.46874 8C9.46874 8 9.43749 6.625 7.96874 6.625C6.49999 6.625 6.43749 8 6.43749 8C6.43749 9.28125 7.43749 10.5938 7.96874 11.125C8.49999 11.6875 10.1875 13.7813 12 12.3438C13.125 11.4375 12.4062 9.71875 12.4062 9.71875C11.4375 7.59375 10.3125 5.25 9.28124 3.375C9.28124 3.375 8.96874 2.625 7.96874 2.625Z"
      stroke="white"
      strokeWidth="0.71875"
    />
  </svg>
);

export const BehanceFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
      fill="#1769FF"
    />
    <path
      d="M5.65183 4.37503C5.99679 4.37503 6.31167 4.40575 6.59647 4.46655C6.88127 4.52735 7.12447 4.62719 7.32735 4.76607C7.53023 4.90495 7.68767 5.08927 7.79967 5.31967C7.91167 5.55007 7.96735 5.83423 7.96735 6.17279C7.96735 6.53823 7.88415 6.84287 7.71839 7.08671C7.55263 7.33055 7.30687 7.53023 6.98239 7.68575C7.42911 7.81439 7.76255 8.03967 7.98271 8.36095C8.20287 8.68223 8.31295 9.07007 8.31295 9.52383C8.31295 9.88927 8.24191 10.2061 8.09983 10.4736C7.95775 10.7411 7.76639 10.9594 7.52575 11.1283C7.28511 11.2979 7.01119 11.4227 6.70335 11.504C6.39359 11.5853 6.07423 11.6262 5.75423 11.6256H2.23999V4.37503H5.65183ZM5.44895 7.30943C5.73311 7.30943 5.96671 7.24159 6.14975 7.10655C6.33279 6.97087 6.42431 6.75135 6.42367 6.44671C6.42367 6.27775 6.39295 6.13887 6.33215 6.03071C6.27135 5.92255 6.19007 5.83743 6.08831 5.77663C5.98655 5.71583 5.87007 5.67359 5.73823 5.64991C5.60255 5.62623 5.46495 5.61407 5.32671 5.61471H3.83487V7.31071L5.44895 7.30943V7.30943ZM5.54047 10.3859C5.69087 10.3866 5.84063 10.3712 5.98719 10.3405C6.12927 10.3098 6.25471 10.2592 6.36287 10.1882C6.47103 10.1171 6.55743 10.0205 6.62207 9.89887C6.68607 9.77727 6.71871 9.62111 6.71871 9.43167C6.71871 9.05983 6.61375 8.79359 6.40383 8.63487C6.19391 8.47551 5.91615 8.39615 5.57119 8.39615H3.83487V10.3866L5.54047 10.3859V10.3859ZM10.3187 10.2336C10.535 10.4435 10.8467 10.5485 11.2531 10.5485C11.5443 10.5485 11.7945 10.4755 12.0045 10.3302C12.2144 10.185 12.343 10.0307 12.3904 9.86815H13.6595C13.4566 10.4979 13.145 10.9478 12.7251 11.2186C12.3053 11.4893 11.7978 11.625 11.2019 11.625C10.7891 11.625 10.4166 11.559 10.0851 11.4272C9.75359 11.2954 9.47263 11.1072 9.24223 10.8634C9.01183 10.6195 8.83391 10.329 8.70911 9.99039C8.58431 9.65183 8.52159 9.27935 8.52159 8.87359C8.52159 8.48127 8.58559 8.11583 8.71423 7.77727C8.84287 7.43871 9.02591 7.14623 9.26271 6.89919C9.49951 6.65215 9.78239 6.45759 10.1107 6.31551C10.439 6.17343 10.8032 6.10239 11.2026 6.10239C11.6493 6.10239 12.0384 6.18879 12.3706 6.36159C12.7021 6.53439 12.9747 6.76607 13.1878 7.05727C13.401 7.34847 13.5552 7.67999 13.6499 8.05247C13.7446 8.42495 13.7785 8.81407 13.7517 9.22047H9.96415C9.98399 9.68575 10.1024 10.0243 10.3187 10.2336ZM11.9488 7.47199C11.776 7.28255 11.5136 7.18783 11.1616 7.18783C10.9312 7.18783 10.7398 7.22687 10.5882 7.30431C10.4358 7.38239 10.3142 7.47839 10.2227 7.59359C10.1312 7.70879 10.0672 7.83039 10.0301 7.95903C9.99295 8.08767 9.97055 8.20287 9.96415 8.30399H12.3098C12.2413 7.93919 12.1209 7.66143 11.9488 7.47199V7.47199ZM9.71711 4.74303H12.6477V5.55583H9.71711V4.74303V4.74303Z"
      fill="white"
    />
  </svg>
);

export const ArriFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H16V16H0V0Z" fill="white" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.90406 8.63012H3.54546V7.62657L2.90406 8.63012V8.63012ZM4.52634 5.94145L4.56909 10.0813L3.54546 10.0612L3.56554 9.48525H2.32808L1.88035 10.0814H0.705887L3.52279 5.91879L4.52634 5.94145ZM5.87188 6.87951V7.79756C5.87188 7.79756 6.68177 8.03396 6.68177 7.28699C6.68177 6.70852 5.87188 6.87951 5.87188 6.87951ZM9.03086 6.90217V7.79756C9.03086 7.79756 9.92866 8.03396 9.92866 7.30708C9.92866 6.68843 9.03086 6.90217 9.03086 6.90217ZM4.76017 5.94145H6.46795C6.46795 5.94145 7.81348 6.00429 7.81348 7.24424C7.81348 8.48162 7.00359 8.58729 7.00359 8.58729L7.96439 9.91282V5.94145L9.71491 5.91879C9.71491 5.91879 10.995 5.9842 10.995 7.26433C10.995 8.41621 10.2255 8.60995 10.2255 8.60995L11.1661 9.9554V5.94145H12.2551V10.0813H9.94874L9.03077 8.82377V10.0813L6.72436 10.0612L5.87188 8.86644V10.0812H4.76017V5.94145V5.94145ZM13.8498 6.03193C13.6812 6.05451 13.5202 6.15013 13.402 6.22558C12.9468 6.5098 12.889 6.97505 13.3367 7.31463C13.3543 7.32716 13.3618 7.36485 13.3795 7.37747C13.6132 7.52331 13.9855 7.59378 14.3402 7.54846C14.4734 7.53086 14.6194 7.45035 14.7249 7.40004C15.6933 6.92234 14.9514 5.89356 13.8498 6.03193V6.03193ZM13.8924 5.94643C14.4986 5.87853 14.9286 6.08979 15.1526 6.41675C15.1878 6.47211 15.2657 6.55504 15.2808 6.63049C15.389 7.22158 14.823 7.56108 14.4055 7.63404C13.3567 7.81516 12.3884 6.86698 13.2938 6.20301C13.4524 6.0873 13.6459 5.97408 13.8924 5.94643V5.94643Z"
      fill="#0E6FAB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8924 6.14008C13.8873 6.16265 13.8522 6.17278 13.8497 6.18282C13.7993 6.32867 13.8497 6.58018 13.8497 6.73615C13.8648 6.72859 13.9502 6.71597 13.9552 6.71597C13.9678 6.60284 14.0231 6.34626 13.9779 6.20291C13.9679 6.17278 13.9051 6.16025 13.8924 6.14008V6.14008ZM13.8924 6.07467C14.1514 6.05956 14.2295 6.28343 14.1691 6.56515C14.1514 6.64816 14.0635 6.70352 14.0208 6.75881V6.80155C14.0283 6.8292 14.1138 6.8443 14.1263 6.88705C14.1564 6.98516 14.1038 7.10586 14.1263 7.20646C14.1263 7.21152 14.1868 7.24672 14.1918 7.24921C14.1691 7.3523 14.0962 7.68433 13.978 7.44037C13.915 7.31213 13.9553 7.03547 13.9553 6.86447C13.9429 6.86447 13.8799 6.83683 13.8498 6.82172C13.8498 7.00783 13.8321 7.2468 13.8699 7.4002C13.8823 7.44046 13.875 7.45805 13.8924 7.50578C13.7893 7.4832 13.739 7.4832 13.6359 7.46303C13.6861 7.08079 13.6787 6.51991 13.6359 6.14008C13.7115 6.11999 13.817 6.07973 13.8924 6.07467V6.07467Z"
      fill="#0E6FAB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.4256 6.18283C14.388 6.32868 14.3829 6.5249 14.3829 6.73616C14.3981 6.73367 14.5187 6.6959 14.4884 6.69341C14.4935 6.58019 14.5111 6.374 14.5111 6.22558C14.4709 6.203 14.5011 6.22558 14.4884 6.18283H14.4256V6.18283ZM14.1919 6.07468C14.5514 6.10232 14.7576 6.16026 14.6823 6.56516C14.6697 6.63306 14.6797 6.69598 14.6394 6.73624C14.6318 6.74379 14.5791 6.75135 14.5741 6.7589C14.6622 6.86955 14.6823 6.95255 14.6823 7.16381C14.7979 7.16381 14.6672 7.35995 14.6596 7.37763C14.6974 7.40278 14.6168 7.40021 14.6168 7.40021C14.5866 7.35995 14.5263 7.31471 14.5113 7.27196C14.4735 7.17385 14.4761 6.91985 14.4684 6.82182C14.4508 6.82182 14.3955 6.83186 14.383 6.82182C14.383 7.06577 14.3679 7.32484 14.4484 7.4833L14.1491 7.52605C14.1566 7.50845 14.1113 7.49334 14.1265 7.4833C14.1592 7.46313 14.2044 7.39523 14.212 7.35754C14.2647 7.08844 14.212 6.75392 14.212 6.48232C14.212 6.37665 14.2345 6.23837 14.212 6.14025L14.1692 6.11759C14.1691 6.11742 14.1792 6.0345 14.1919 6.07468V6.07468ZM13.3795 6.45949C13.3317 6.56259 13.3065 6.62302 13.2738 6.75882C13.3066 6.75882 13.3669 6.7462 13.4021 6.75882C13.402 6.66328 13.3819 6.51735 13.3795 6.45949ZM13.5931 6.16026C13.5756 6.57529 13.5706 7.05565 13.6132 7.44038C13.5101 7.40012 13.4348 7.36244 13.3366 7.31463V7.2718C13.3467 7.2542 13.397 7.22905 13.402 7.20639C13.4221 7.0857 13.402 6.94483 13.402 6.82157C13.3567 6.82157 13.2938 6.83161 13.2512 6.82157C13.2663 6.88947 13.3015 6.96741 13.3166 7.01522C13.3341 7.00767 13.3467 6.97746 13.3795 6.99256C13.3669 7.14853 13.3644 7.33712 13.1883 7.18622C13.1582 7.16107 13.1555 7.08063 13.1455 7.03539C13.0953 6.81153 13.2033 6.59521 13.2938 6.43924C13.3039 6.42164 13.3768 6.36885 13.3794 6.35374C13.3869 6.311 13.334 6.30095 13.3593 6.26825C13.3694 6.25073 13.5555 6.17536 13.5931 6.16026V6.16026Z"
      fill="#0E6FAB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7024 6.20299C14.7978 6.2181 14.8885 6.32368 14.9589 6.37398C14.9514 6.41175 14.9514 6.3866 14.9162 6.39656C14.9162 6.66824 14.8985 6.99512 14.9589 7.20646C14.8758 7.27187 14.7979 7.3171 14.7024 7.37753C14.7803 7.11092 14.7828 6.53244 14.7024 6.2684C14.6998 6.25827 14.6495 6.19544 14.7024 6.20299V6.20299Z"
      fill="#0E6FAB"
    />
  </svg>
);

export const ZoomFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.99984 16C12.4183 16 16 12.418 16 7.99984C16 3.58166 12.4183 0 7.99984 0C3.58135 0 0 3.58166 0 7.99984C0 12.418 3.58166 16 7.99984 16Z"
      fill="#2196F3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.6945 10.2864H9.98551V6.40668C9.98551 5.82216 9.51183 5.34848 8.92731 5.34848H3.63629V9.22824C3.63629 9.81277 4.10997 10.2864 4.6945 10.2864ZM10.6907 8.87583L12.8071 10.2864V5.34848L10.691 6.75942L10.6907 8.87583Z"
      fill="white"
    />
  </svg>
);

export const CNNFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.34453 9.45918C5.47875 9.44573 5.5728 9.33824 5.5728 9.21746V5.77975C5.5728 4.50402 7.21101 3.88629 8.08383 5.37692C8.97017 6.89428 9.48033 7.78062 9.48033 7.78062V5.77975C9.48033 4.50402 11.1187 3.88629 11.9916 5.37692C12.4593 6.17686 12.9248 6.97809 13.3881 7.78062V4.53092H15.3486V10.2246C15.3486 11.6882 13.6298 11.9165 12.9314 10.7483C12.5152 10.0635 11.441 8.29086 11.441 8.29086V10.2247C11.4543 11.6883 9.73549 11.9166 9.02379 10.7484C8.6076 10.0635 7.54669 8.29094 7.54669 8.29094V10.0367C7.54669 10.9364 7.023 11.4064 6.2039 11.4064H4.31052C-0.537144 11.4064 -0.577402 4.531 4.24337 4.531H5.31764V6.47816H4.13587C2.1619 6.47816 1.94707 9.45934 4.27018 9.45934H5.34453V9.45918V9.45918Z"
      fill="#C82636"
    />
    <path
      d="M14.3684 4.53082V10.1035C14.3684 10.4528 14.0327 10.5334 13.8583 10.2916C13.8583 10.2916 11.5754 6.62566 10.9979 5.67225C10.8233 5.43053 10.4608 5.51113 10.4608 5.8737V10.1035C10.4608 10.4528 10.1385 10.5334 9.96393 10.2916C9.96393 10.2916 7.66772 6.62566 7.09033 5.67225C6.91577 5.43053 6.5532 5.51113 6.5532 5.8737V10.0768C6.5532 10.2647 6.40544 10.4259 6.20407 10.4259H4.17622C0.725144 10.4259 0.832637 5.51113 4.09571 5.51113H5.34454"
      stroke="white"
      strokeWidth="0.218971"
      strokeMiterlimit="2.613"
    />
  </svg>
);

export const CBFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.3707 8.98721L8.22785 8.80858C8.11164 8.92462 7.85258 9.04075 7.66498 9.04075C7.34333 9.04075 7.06642 8.80858 7.06642 8.50478C7.06642 8.12959 7.42376 7.92406 7.53101 7.88837C7.45954 7.79897 7.33445 7.64715 7.33445 7.45948C7.34333 7.20938 7.49523 7.01282 7.82577 7.01282C8.11156 7.01282 8.32605 7.20041 8.32605 7.4774C8.32605 7.79009 8.08483 7.89725 8.01336 7.95984L8.24561 8.29045C8.3082 8.21002 8.37062 8.01338 8.36166 7.97768H8.67442C8.67442 7.97768 8.62968 8.3708 8.45105 8.5584L8.78158 8.98721H8.3707V8.98721ZM7.83473 7.30774C7.73645 7.30774 7.6561 7.38817 7.66498 7.46852C7.67386 7.57577 7.76326 7.64724 7.81688 7.7187C7.88835 7.66508 8.01344 7.59361 8.01344 7.47749C8.01344 7.38809 7.94189 7.30774 7.83473 7.30774V7.30774ZM7.7186 8.13855C7.41488 8.34399 7.43273 8.48693 7.43273 8.48693C7.43273 8.62978 7.5667 8.71013 7.66498 8.7191C7.78111 8.7191 7.95086 8.62082 8.03129 8.54935L7.7186 8.13855Z"
      fill="#929496"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.37639 7.85267C2.30492 7.5668 2.04586 7.33455 1.74214 7.33455C1.35799 7.33455 1.07211 7.63827 1.08108 8.00449C1.09004 8.36184 1.36695 8.63891 1.74214 8.63891C2.09948 8.63891 2.30492 8.37968 2.34958 8.2101H2.72477C2.64434 8.73719 2.13518 9.0141 1.73318 9.0141C1.27764 9.0141 0.705887 8.63891 0.705887 8.00458C0.705887 7.4061 1.16151 6.95944 1.74214 6.95944C2.23346 6.95944 2.68011 7.33463 2.7427 7.85276H2.37639V7.85267V7.85267ZM5.41377 8.99617C5.11893 8.99617 5.06539 8.78168 5.06539 8.66564V7.79905H4.87779V7.52214H5.06539V7.09333H5.44066V7.53999H5.68179V7.79905H5.44066V8.57633C5.44066 8.7728 5.68179 8.71021 5.71757 8.71918V8.99626H5.41377V8.99617ZM3.18039 8.33503V8.98721H2.81409V7.5668H3.17143V7.70974C3.22505 7.63827 3.33221 7.55784 3.44834 7.52214C3.52877 7.51326 3.6092 7.52214 3.6092 7.52214V7.87052C3.42161 7.8169 3.16255 7.89733 3.18039 8.33503Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.9944 8.36175C5.9944 8.54935 6.17311 8.69229 6.36071 8.69229C6.49468 8.69229 6.57511 8.63875 6.64658 8.53142H7.03065C6.97703 8.7816 6.71797 9.01385 6.37855 9.01385C5.94086 9.01385 5.62818 8.68332 5.62818 8.21882C5.62818 7.86147 5.8962 7.49517 6.3339 7.50413C6.83418 7.51309 7.05755 7.94182 7.04858 8.36167H5.9944V8.36175ZM6.32502 7.79905C6.16415 7.79017 6.01233 7.91518 6.01233 8.09381H6.63762C6.63762 7.91518 6.49476 7.79905 6.32502 7.79905ZM4.55615 8.98721C4.55615 8.99609 4.54727 8.93359 4.52934 8.871C4.46683 8.92462 4.32389 9.03186 4.10052 9.03186C3.85034 9.03186 3.56447 8.87996 3.56447 8.58521C3.56447 8.40658 3.68059 8.17424 4.08259 8.1207C4.31485 8.08484 4.49356 8.10269 4.50244 7.97768C4.51132 7.93294 4.46667 7.78112 4.23441 7.78112C4.12717 7.78112 3.9932 7.81682 3.96639 7.98656H3.64474C3.64474 7.73647 3.79664 7.52206 4.27011 7.52206C4.56486 7.52206 4.8597 7.64715 4.8597 7.96872V8.75487C4.86867 8.83531 4.89548 8.94247 4.92229 8.98721H4.55615ZM3.89508 8.57624C3.90405 8.72814 4.10061 8.75487 4.1363 8.73711C4.1363 8.73711 4.33286 8.73711 4.42217 8.63883C4.4758 8.56736 4.50261 8.47796 4.4758 8.28132C4.11845 8.36175 3.89508 8.39761 3.89508 8.57624ZM14.9368 7.0754H15.2941V8.98721H14.9368V7.0754ZM13.0518 8.34391V8.98721H12.6856V7.57568H13.0429V7.71862C13.1055 7.64715 13.2038 7.55775 13.3198 7.53102C13.3759 7.52047 13.4335 7.52047 13.4896 7.53102V7.8794C13.2841 7.82586 13.0339 7.9063 13.0518 8.34391ZM12.1674 8.34391V8.98721H11.7922V7.57568H12.1585V7.71862C12.221 7.64715 12.3193 7.55775 12.4354 7.53102C12.5158 7.51318 12.5962 7.53102 12.5962 7.53102V7.8794C12.4086 7.82586 12.1496 7.9063 12.1674 8.34391ZM13.8201 8.37088C13.8201 8.54935 13.9987 8.69237 14.1863 8.69237C14.3115 8.69237 14.4008 8.64779 14.4723 8.5315H14.8475C14.8027 8.78168 14.5437 9.01394 14.2042 9.01394C13.7755 9.01394 13.4539 8.6834 13.4539 8.22778C13.4539 7.87044 13.7219 7.50413 14.1596 7.5131C14.651 7.5131 14.8832 7.95079 14.8653 8.3708H13.8201V8.37088V8.37088ZM14.1596 7.79905C13.9898 7.79905 13.8379 7.91518 13.8379 8.09381H14.4634C14.4634 7.92406 14.3293 7.79905 14.1596 7.79905ZM9.80008 8.98721H8.79944V7.06644H9.66594C9.96087 7.06644 10.2645 7.20049 10.2645 7.55775C10.2645 7.85259 10.0323 7.9151 9.97871 7.95975C10.1485 8.01329 10.3361 8.17416 10.3361 8.48684C10.3361 8.82642 10.0055 8.98721 9.80008 8.98721ZM9.58559 7.37024H9.15678V7.84371H9.56775C9.65706 7.84371 9.87155 7.80802 9.87155 7.58465C9.87163 7.43274 9.71973 7.37024 9.58559 7.37024ZM9.58559 8.12958H9.15678V8.69229H9.61249C9.67491 8.69229 9.91613 8.63875 9.91613 8.43322C9.91621 8.31718 9.88948 8.12958 9.58559 8.12958ZM11.3813 8.98721C11.3813 8.99609 11.3634 8.93359 11.3545 8.871C11.292 8.92462 11.1489 9.03186 10.9257 9.03186C10.6756 9.03186 10.3898 8.87996 10.3898 8.58521C10.3898 8.40658 10.5058 8.18312 10.9169 8.1207C11.1312 8.08484 11.3188 8.10269 11.3277 7.97768C11.3365 7.94191 11.292 7.79009 11.0596 7.79009C10.9525 7.79009 10.8275 7.8169 10.8006 7.99553H10.4702C10.4702 7.74543 10.6398 7.53102 11.0955 7.53102C11.3813 7.53102 11.676 7.65612 11.6852 7.97768V8.71013C11.6852 8.77272 11.7119 8.9335 11.7387 8.98721H11.3813V8.98721ZM10.7649 8.57624C10.7649 8.72814 10.9704 8.75487 11.0062 8.73711C11.0062 8.73711 11.2026 8.73711 11.2831 8.63883C11.3366 8.56736 11.3545 8.48693 11.3366 8.28132C10.9882 8.37088 10.7649 8.39761 10.7649 8.57624V8.57624Z"
      fill="black"
    />
  </svg>
);

export const DJIFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.7135 10.0919L12.8936 5.18817H10.3599L9.28039 9.58438C9.12392 10.4417 8.20221 10.8434 7.54938 10.8539H5.75264L5.14386 12.6217H8.91749C9.84775 12.6217 11.2218 12.1457 11.7135 10.0919Z"
      fill="#414042"
    />
    <path
      d="M6.39368 8.36291L7.58494 3.3783H10.1936L8.83733 9.04729C8.57634 10.1419 7.7631 10.4042 7.011 10.4042H1.00081C0.338779 10.4055 -0.216747 10.1235 0.0836974 8.86058L0.625417 6.59969C0.899564 5.45182 1.75225 5.19016 2.36957 5.19016H6.56461L6.22604 6.60363H4.0848C3.76989 6.60363 3.59764 6.67003 3.50823 7.03753L3.16374 8.4819C3.04015 8.99995 3.2216 9.03545 3.60159 9.03545H5.56401C5.92296 9.03611 6.23853 9.01376 6.39368 8.36291ZM13.4669 5.18819L12.2395 10.4042H14.7726L16 5.18819H13.4669Z"
      fill="#414042"
    />
  </svg>
);

export const EbayFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.06754 6.19446C0.939772 6.19446 0 6.67292 0 8.1164C0 9.25996 0.631928 9.9801 2.09666 9.9801C3.82073 9.9801 3.93125 8.84441 3.93125 8.84441H3.09586C3.09586 8.84441 2.91674 9.45594 2.0457 9.45594C1.33627 9.45594 0.826013 8.97669 0.826013 8.30496H4.01861V7.88344C4.01861 7.21888 3.59674 6.19446 2.06754 6.19446V6.19446ZM2.03842 6.73318C2.71373 6.73318 3.17412 7.14689 3.17412 7.76696H0.84449C0.84449 7.10868 1.44541 6.73318 2.03842 6.73318V6.73318Z"
      fill="#E53238"
    />
    <path
      d="M4.018 4.79669V9.2552C4.018 9.50828 3.99994 9.86363 3.99994 9.86363H4.79672C4.79672 9.86363 4.82532 9.60841 4.82532 9.37517C4.82532 9.37517 5.21899 9.99103 6.28939 9.99103C7.41656 9.99103 8.18221 9.20847 8.18221 8.08729C8.18221 7.04427 7.47894 6.20539 6.29121 6.20539C5.17898 6.20539 4.83337 6.806 4.83337 6.806V4.79669H4.018ZM6.08555 6.75685C6.85099 6.75685 7.33772 7.32494 7.33772 8.08729C7.33772 8.90477 6.77556 9.43957 6.09101 9.43957C5.27405 9.43957 4.83337 8.80169 4.83337 8.09457C4.83337 7.43567 5.22881 6.75685 6.08555 6.75685Z"
      fill="#0064D2"
    />
    <path
      d="M10.1624 6.19446C8.46574 6.19446 8.35693 7.12346 8.35693 7.27191H9.20142C9.20142 7.27191 9.24571 6.72954 10.1042 6.72954C10.662 6.72954 11.0942 6.98487 11.0942 7.47575V7.65047H10.1042C8.78973 7.65047 8.09485 8.03499 8.09485 8.81529C8.09485 9.58321 8.7369 10.001 9.60456 10.001C10.787 10.001 11.168 9.34764 11.168 9.34764C11.168 9.60753 11.188 9.86362 11.188 9.86362H11.9387C11.9387 9.86362 11.9096 9.54618 11.9096 9.34309V7.58768C11.9096 6.43669 10.9812 6.19446 10.1624 6.19446V6.19446ZM11.0942 8.17464V8.4076C11.0942 8.71145 10.9067 9.46686 9.80294 9.46686C9.1985 9.46686 8.93934 9.16519 8.93934 8.81529C8.93934 8.17874 9.81207 8.17464 11.0942 8.17464V8.17464Z"
      fill="#F5AF02"
    />
    <path
      d="M11.4549 6.34021H12.4049L13.7684 9.0718L15.1287 6.34021H15.9893L13.5115 11.2033H12.6088L13.3238 9.84765L11.4549 6.34021Z"
      fill="#86B817"
    />
  </svg>
);

export const FoxNewsFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2862_8454)">
      <path d="M0 0H16V12.9775H0V0Z" fill="#003366" />
      <path d="M0 13.155H16V16H0V13.155Z" fill="#C20017" />
      <path
        d="M16 9.28907H15.9702C15.7927 8.85377 15.5919 8.42883 15.3678 8.01555H15.5647C15.7202 8.31352 15.8653 8.61538 16 8.92243V9.28907ZM0 1.77749C0.787692 1.5132 1.59741 1.32664 2.42138 1.21911L2.65587 0H4.55644L4.1302 1.1064C4.64194 1.1051 5.15239 1.1349 5.66024 1.19579L6.25231 0H8.34073L7.34575 1.51061C8.66591 1.85263 9.92259 2.40194 11.0679 3.13911C11.2959 3.28551 11.5174 3.43968 11.7325 3.59903H11.4306C10.1649 2.70769 8.74623 2.05215 7.2447 1.66737L6.02818 3.55498H5.15498V4.84016L3.00049 8.35498H2.31125V9.53004L0.103644 12.9775H0.0336842L5.57992 1.36162C5.07854 1.30332 4.57328 1.27611 4.06931 1.28L0.0155466 12.9775H0M0 12.7611L2.38251 1.40308C1.57538 1.51579 0.781215 1.70753 0.0103644 1.97312H0"
        fill="white"
      />
      <path
        d="M6.57748 6.5205H7.74606V5.42835H6.57748V4.90754H7.99999L7.92225 3.81281H5.38817V7.82123H6.57748V6.5205ZM11.5213 7.80957H12.8L13.383 6.82625L13.9802 7.81086H15.2887L14.0269 5.7341L15.1631 3.81928H13.8675L13.3791 4.65102L12.8725 3.81669H11.555L12.7248 5.74317L11.5213 7.80957ZM10.034 7.85362C11.165 7.86916 12.0952 6.96746 12.1146 5.83645C12.0667 4.686 11.0963 3.79208 9.9446 3.83872C8.86023 3.88406 7.99221 4.75208 7.94687 5.83645C7.96501 6.96876 8.8978 7.87175 10.0301 7.85362H10.034ZM9.66606 4.95677C9.66736 4.75855 9.82412 4.59791 10.021 4.58884C10.2244 4.59272 10.389 4.75467 10.3967 4.95677V6.65783C10.3825 6.85993 10.2076 7.01151 10.0055 6.99726C9.82282 6.9843 9.67902 6.8392 9.66606 6.65783V4.95677ZM6.84825 10.8139H8.05829V10.012H6.84825V9.46657H8.32258V8.59855H5.91416V12.3466H8.34072V11.4449H6.84825V10.8139ZM12.0563 8.59855L11.5925 10.744L11.1391 8.59855H10.3384L9.90703 10.766L9.45748 8.59855H8.50266L9.36938 12.3466H10.24L10.6662 10.1986L11.1054 12.3466H11.9579L12.8285 8.59855H12.0563ZM15.2175 10.2918C14.9687 10.0625 14.6837 10.0016 14.3637 9.91094C13.9854 9.80471 13.7768 9.79305 13.7768 9.57281C13.7924 9.40957 13.9375 9.29038 14.1007 9.30592H14.1033C14.3443 9.28649 14.5645 9.44584 14.6202 9.68163L15.4377 9.40957C15.2861 8.83953 14.7576 8.45216 14.1681 8.47807C13.3143 8.47807 12.7922 9.00277 12.7922 9.70884C12.7922 10.319 13.1472 10.6196 13.8584 10.8321C14.2834 10.9603 14.5088 10.95 14.5088 11.2233C14.5088 11.3671 14.3754 11.4798 14.1538 11.4798C13.861 11.5135 13.5942 11.3127 13.5436 11.0225L12.6471 11.2194C12.8 11.9307 13.3299 12.353 14.1422 12.353C14.5438 12.3634 14.9312 12.2041 15.2084 11.9139C15.4131 11.6884 15.5258 11.3943 15.5232 11.0886C15.5401 10.7906 15.4274 10.5004 15.2162 10.2905H15.2175V10.2918ZM4.75076 10.4797L3.634 8.6154H2.55092V12.3492H3.50185V10.1675L4.77667 12.344H5.67837V8.61021H4.75335L4.75076 10.4797ZM1.5378 14.4415C1.64015 14.4233 1.7412 14.4816 1.77748 14.5788H2.31124C2.27756 14.3262 1.99124 14.1759 1.54557 14.1759C1.03513 14.1824 0.711243 14.4013 0.711243 14.7576C0.711243 15.0815 1.02995 15.2913 1.51319 15.2913C1.95885 15.2913 2.25035 15.1372 2.30476 14.8742H1.77877C1.74898 14.9752 1.66476 15.0258 1.52873 15.0258C1.35124 15.0258 1.25537 14.9312 1.25537 14.7433C1.25537 14.5555 1.35513 14.4415 1.5378 14.4415V14.4415ZM6.72906 15.053V14.6604C6.74979 14.5386 6.70962 14.4143 6.62282 14.3275C6.44404 14.2199 6.23545 14.172 6.02687 14.1927C5.56695 14.1927 5.31561 14.3041 5.26379 14.5477H5.75221C5.77294 14.4713 5.86234 14.4298 6.01521 14.4298C6.16808 14.4298 6.22509 14.4622 6.22509 14.5218V14.5464C6.22509 14.6267 6.02428 14.6099 5.64857 14.6669C5.36225 14.7096 5.21845 14.8159 5.21845 14.9882C5.21845 15.1605 5.4063 15.2875 5.72501 15.2875C5.90638 15.2926 6.08647 15.2434 6.24064 15.1475C6.24582 15.1838 6.25489 15.2201 6.26784 15.2538H6.80161V15.2149C6.75497 15.1968 6.73035 15.1424 6.73035 15.0491L6.72906 15.053ZM6.2225 14.8858C6.2225 14.996 6.09424 15.0633 5.91545 15.0633C5.79626 15.0633 5.71983 15.0115 5.71983 14.9403C5.71983 14.869 5.77553 14.8457 5.89732 14.825C6.00744 14.8146 6.11626 14.7952 6.2225 14.7667V14.8858ZM8.61537 14.194C8.43529 14.1785 8.2578 14.2394 8.12436 14.3611V14.2225H7.60873V15.259H8.1425V14.7019C8.1425 14.5244 8.21893 14.4518 8.41068 14.4518C8.60242 14.4518 8.63351 14.5438 8.63351 14.7343V15.2551H9.16727V14.5775C9.1608 14.3158 9.0144 14.194 8.62185 14.194H8.61537ZM4.00323 14.2083C3.82315 14.1953 3.64436 14.2536 3.50574 14.3702V13.8675H2.97197V15.2719H3.50574V14.7187C3.50574 14.5412 3.58217 14.4687 3.77391 14.4687C3.96566 14.4687 3.99675 14.5607 3.99675 14.7511V15.2719H4.53051V14.5607C4.53051 14.3301 4.34784 14.2083 4.00841 14.2083H4.00323ZM11.1145 14.194C10.9344 14.1785 10.7569 14.2394 10.6235 14.3611V14.2225H10.1169V15.259H10.6507V14.7019C10.6507 14.5244 10.7271 14.4518 10.9189 14.4518C11.1106 14.4518 11.1417 14.5438 11.1417 14.7343V15.2551H11.6755V14.5775C11.669 14.3158 11.5213 14.194 11.1274 14.194H11.1145ZM13.1874 14.1837C12.6938 14.1837 12.3738 14.3948 12.3738 14.742C12.3738 15.0892 12.7002 15.2901 13.2003 15.2901C13.6149 15.2901 13.9116 15.1579 14.001 14.9351H13.4905C13.4529 15.0102 13.3623 15.0491 13.2184 15.0491C13.0306 15.0491 12.9282 14.9713 12.9282 14.825H14.023C14.0243 14.8042 14.0243 14.7848 14.023 14.7641C14.0269 14.4013 13.7095 14.185 13.2003 14.185L13.1874 14.1837ZM12.901 14.6254C12.9218 14.4868 13.0332 14.4117 13.2029 14.4117C13.3726 14.4117 13.5022 14.4894 13.5048 14.6254H12.901ZM14.755 13.8662V15.2706H15.2887V13.8662H14.755Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_2862_8454">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const PinterestFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.7644 7.97779C15.7644 12.28 12.2756 15.7689 7.97333 15.7689C3.67111 15.7689 0.18222 12.28 0.18222 7.97779C0.18222 3.67556 3.67111 0.186676 7.97333 0.186676C12.2756 0.186676 15.7644 3.67556 15.7644 7.97779V7.97779Z"
      fill="#CA2127"
    />
    <path
      d="M7.31999 2.79556C5.12443 3.03111 2.93777 4.72 2.84888 7.13778C2.7911 8.61333 3.40888 9.72 4.88443 10.0311C5.05332 9.33333 5.08443 8.95556 5.08443 8.95556C5.08443 8.95556 4.43554 8.33333 4.36888 7.93778C3.82665 4.75556 8.22221 2.58222 10.5289 4.80444C12.12 6.34667 11.0711 11.0889 8.50221 10.5956C6.03999 10.1244 9.70665 6.35111 7.74221 5.60889C6.14665 5.00444 5.29777 7.45333 6.05332 8.66667C5.60888 10.7556 4.65332 12.7244 5.03999 15.3422C6.29777 14.4756 6.71999 12.8133 7.06665 11.08C7.69777 11.4444 8.03554 11.8267 8.83999 11.8844C11.8089 12.1022 13.4667 9.06222 13.0622 6.25333C12.6978 3.76444 10.0933 2.49778 7.31999 2.79556V2.79556Z"
      fill="white"
    />
  </svg>
);

export const PlaystationFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.25404 9.81674C1.8016 10.1184 1.95241 10.6915 2.91761 10.9629C3.91298 11.2947 4.99883 11.3852 6.05452 11.2042C6.11485 11.2042 6.17517 11.1741 6.20534 11.1741V10.1485L5.17981 10.4803C4.7877 10.601 4.39558 10.6311 4.00347 10.5406C3.70184 10.4502 3.76217 10.2692 4.12412 10.1184L6.20534 9.39447V8.27845L3.30973 9.27382C2.94778 9.39447 2.58583 9.57544 2.25404 9.81674V9.81674ZM9.25176 5.29236V8.21813C10.4884 8.82138 11.4536 8.21813 11.4536 6.64967C11.4536 5.05106 10.8805 4.32715 9.22159 3.75406C8.34688 3.45244 7.442 3.18098 6.53712 3V11.717L8.64851 12.3504V5.02089C8.64851 4.6891 8.64851 4.4478 8.88981 4.53829C9.22159 4.62878 9.25176 4.96057 9.25176 5.29236ZM13.1729 9.123C12.2982 8.82138 11.3631 8.70073 10.4583 8.79122C9.97566 8.82138 9.52322 8.94203 9.10094 9.09284L9.01046 9.123V10.2993L10.971 9.57544C11.3631 9.45479 11.7553 9.42463 12.1474 9.51512C12.449 9.60561 12.3887 9.78658 12.0267 9.93739L9.01046 11.0534V12.1996L13.1729 10.6613C13.4745 10.5406 13.746 10.3898 13.9873 10.1485C14.1984 9.84691 14.1079 9.42463 13.1729 9.123V9.123Z"
      fill="black"
    />
  </svg>
);

export const ReutersFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2862_8453)">
      <path
        d="M7.17188 5.79825C7.25128 5.95238 7.19991 6.1392 7.04578 6.2186C7.00961 6.2383 6.9699 6.25067 6.92894 6.25499C6.88798 6.25932 6.84657 6.25551 6.80708 6.2438C6.76759 6.23208 6.73081 6.21268 6.69883 6.18672C6.66686 6.16076 6.64032 6.12874 6.62075 6.09249C6.53668 5.94303 6.59273 5.75154 6.74686 5.67214C6.78303 5.65244 6.82273 5.64007 6.86369 5.63575C6.90465 5.63142 6.94607 5.63523 6.98555 5.64694C7.02504 5.65866 7.06183 5.67806 7.0938 5.70402C7.12578 5.72998 7.15231 5.762 7.17188 5.79825V5.79825ZM5.62124 8.255C5.57804 8.27869 5.54595 8.31849 5.53196 8.36572C5.51796 8.41296 5.52319 8.46381 5.5465 8.50721C5.57004 8.55057 5.60984 8.5828 5.65713 8.59681C5.70443 8.61082 5.75536 8.60548 5.79872 8.58194C5.84207 8.5584 5.8743 8.51861 5.88832 8.47131C5.90233 8.42401 5.89698 8.37308 5.87345 8.32973C5.84976 8.28653 5.80996 8.25444 5.76272 8.24045C5.71549 8.22645 5.66464 8.23168 5.62124 8.255V8.255ZM5.59321 7.49368C5.54398 7.52125 5.50757 7.56707 5.49184 7.62125C5.47611 7.67543 5.48233 7.73362 5.50914 7.78326C5.56519 7.89069 5.69596 7.92338 5.80339 7.87668C5.91081 7.82997 5.94351 7.68985 5.8968 7.58243C5.88315 7.55743 5.86467 7.53541 5.84243 7.51762C5.8202 7.49984 5.79465 7.48665 5.76727 7.47883C5.73989 7.471 5.71123 7.4687 5.68295 7.47205C5.65467 7.47541 5.62734 7.48435 5.60255 7.49835L5.59321 7.49368ZM5.78938 6.76507C5.73217 6.79581 5.68934 6.84781 5.67012 6.90984C5.6509 6.97187 5.65683 7.03898 5.68662 7.09668C5.75201 7.21345 5.90147 7.26015 6.02291 7.19009C6.05184 7.17487 6.07747 7.15406 6.09832 7.12888C6.11917 7.1037 6.13482 7.07463 6.14437 7.04337C6.15393 7.0121 6.15719 6.97925 6.15398 6.94671C6.15077 6.91418 6.14114 6.8826 6.12566 6.85381C6.09412 6.79741 6.04178 6.75559 5.97982 6.73726C5.91786 6.71893 5.85119 6.72556 5.79405 6.75572L5.78938 6.76507ZM6.19105 6.13453C6.15852 6.15167 6.12974 6.17514 6.10642 6.20357C6.0831 6.232 6.0657 6.26481 6.05525 6.30006C6.04481 6.33532 6.04152 6.37231 6.04559 6.40885C6.04967 6.4454 6.06101 6.48076 6.07896 6.51285C6.15369 6.65297 6.31249 6.69968 6.45261 6.62495C6.48481 6.60777 6.51331 6.58442 6.53649 6.55624C6.55967 6.52805 6.57707 6.49557 6.58769 6.46065C6.59832 6.42574 6.60196 6.38907 6.59842 6.35275C6.59487 6.31643 6.58421 6.28116 6.56704 6.24896C6.54986 6.21676 6.52652 6.18826 6.49833 6.16508C6.47014 6.1419 6.43766 6.1245 6.40274 6.11388C6.36783 6.10325 6.33117 6.09961 6.29484 6.10315C6.25852 6.10669 6.22325 6.11736 6.19105 6.13453V6.13453ZM5.88746 8.96026C5.85154 8.98008 5.82496 9.01336 5.81357 9.05277C5.80219 9.09219 5.80692 9.13452 5.82674 9.17044C5.84656 9.20636 5.87984 9.23294 5.91926 9.24433C5.95867 9.25571 6.001 9.25098 6.03692 9.23116C6.07206 9.21059 6.09795 9.17731 6.10925 9.13819C6.12055 9.09908 6.11639 9.05712 6.09764 9.02098C6.08788 9.00314 6.07469 8.9874 6.05882 8.97468C6.04295 8.96196 6.02473 8.95251 6.00519 8.94686C5.98565 8.94122 5.96519 8.9395 5.94499 8.9418C5.92478 8.9441 5.90523 8.95037 5.88746 8.96026V8.96026ZM9.45582 6.39142C9.47952 6.43461 9.51931 6.4667 9.56655 6.48069C9.61378 6.49469 9.66464 6.48946 9.70804 6.46615C9.75123 6.44245 9.78332 6.40266 9.79731 6.35542C9.81131 6.30818 9.80608 6.25733 9.78277 6.21393C9.77111 6.19246 9.75534 6.1735 9.73636 6.15813C9.71738 6.14275 9.69556 6.13127 9.67214 6.12433C9.64872 6.11739 9.62416 6.11513 9.59986 6.11768C9.57557 6.12024 9.55202 6.12755 9.53055 6.1392C9.50908 6.15085 9.49012 6.16662 9.47475 6.18561C9.45938 6.20459 9.44789 6.22641 9.44095 6.24983C9.43401 6.27325 9.43175 6.29781 9.43431 6.3221C9.43686 6.3464 9.44417 6.36995 9.45582 6.39142ZM8.81595 5.99908C8.87199 6.10184 9.00277 6.1392 9.10552 6.08315C9.20828 6.02711 9.24564 5.89633 9.19894 5.79357C9.18544 5.76873 9.16719 5.74679 9.14522 5.72901C9.12324 5.71122 9.09798 5.69794 9.07088 5.68991C9.04377 5.68189 9.01535 5.67928 8.98723 5.68225C8.95912 5.68521 8.93186 5.69367 8.90702 5.70717C8.88218 5.72066 8.86024 5.73892 8.84246 5.76089C8.82467 5.78286 8.81139 5.80812 8.80336 5.83523C8.79534 5.86234 8.79273 5.89076 8.79569 5.91887C8.79865 5.94699 8.80712 5.97424 8.82062 5.99908H8.81595ZM8.092 5.80292C8.10733 5.83144 8.12813 5.85666 8.15321 5.87714C8.1783 5.89762 8.20717 5.91296 8.23818 5.92229C8.26919 5.93161 8.30173 5.93474 8.33395 5.93149C8.36616 5.92823 8.39743 5.91867 8.42595 5.90333C8.45447 5.888 8.47969 5.8672 8.50017 5.84212C8.52065 5.81704 8.536 5.78817 8.54532 5.75716C8.55464 5.72615 8.55777 5.6936 8.55452 5.66139C8.55127 5.62917 8.5417 5.59791 8.52637 5.56938C8.51103 5.54086 8.49023 5.51564 8.46515 5.49516C8.44007 5.47468 8.4112 5.45934 8.38019 5.45001C8.34918 5.44069 8.31664 5.43756 8.28442 5.44081C8.2522 5.44407 8.22094 5.45363 8.19242 5.46897C8.1639 5.4843 8.13867 5.5051 8.11819 5.53018C8.09771 5.55526 8.08237 5.58413 8.07304 5.61514C8.06372 5.64615 8.06059 5.6787 8.06385 5.71091C8.0671 5.74313 8.07666 5.7744 8.092 5.80292V5.80292ZM7.33536 5.83094C7.35249 5.86347 7.37597 5.89225 7.40439 5.91557C7.43282 5.93889 7.46563 5.95629 7.50089 5.96674C7.53614 5.97718 7.57313 5.98047 7.60968 5.9764C7.64622 5.97233 7.68158 5.96098 7.71368 5.94304C7.77847 5.90749 7.8266 5.8478 7.84759 5.77695C7.86859 5.70609 7.86074 5.62981 7.82577 5.56471C7.79109 5.5003 7.73224 5.4523 7.66216 5.43128C7.59209 5.41026 7.51653 5.41793 7.45212 5.45262C7.38771 5.4873 7.33971 5.54616 7.31869 5.61623C7.29767 5.6863 7.30534 5.76186 7.34003 5.82627L7.33536 5.83094ZM9.91354 6.96123C9.95091 7.03596 10.0537 7.06399 10.1191 7.02195C10.1367 7.01265 10.1524 6.9999 10.165 6.98445C10.1777 6.96901 10.1872 6.95118 10.1928 6.93202C10.1985 6.91286 10.2002 6.89276 10.198 6.87291C10.1958 6.85306 10.1896 6.83386 10.1798 6.81644C10.1704 6.79821 10.1575 6.78202 10.1418 6.76882C10.1261 6.75563 10.108 6.7457 10.0884 6.73961C10.0688 6.73352 10.0483 6.7314 10.0278 6.73336C10.0074 6.73533 9.98764 6.74134 9.96959 6.75105C9.89953 6.79776 9.86684 6.89117 9.90887 6.96123H9.91354ZM9.38109 9.90373C9.34145 9.83064 9.2744 9.7763 9.1947 9.75265C9.11499 9.729 9.02915 9.73798 8.95606 9.77762C8.88298 9.81726 8.82863 9.88431 8.80498 9.96402C8.78133 10.0437 8.79032 10.1296 8.82996 10.2026C8.91403 10.3568 9.11019 10.4082 9.25031 10.3288C9.39043 10.2494 9.46049 10.0485 9.37642 9.9084L9.38109 9.90373ZM6.55069 9.60014C6.52703 9.55816 6.48806 9.52695 6.44194 9.51303C6.39581 9.4991 6.34608 9.50354 6.30315 9.52541C6.28192 9.53669 6.26314 9.55205 6.24788 9.57063C6.23262 9.5892 6.22119 9.61061 6.21424 9.63362C6.20729 9.65663 6.20497 9.68079 6.2074 9.7047C6.20984 9.72861 6.21698 9.75181 6.22842 9.77295C6.25133 9.81569 6.29029 9.84757 6.33671 9.86158C6.38313 9.8756 6.43322 9.8706 6.47596 9.84768C6.5187 9.82476 6.55058 9.78581 6.56459 9.73939C6.57861 9.69296 6.57361 9.64287 6.55069 9.60014V9.60014ZM7.17655 9.99714C7.14899 9.94791 7.10317 9.9115 7.04899 9.89577C6.99481 9.88004 6.93661 9.88625 6.88698 9.91307C6.83694 9.93984 6.79953 9.98531 6.7829 10.0396C6.76627 10.0938 6.77179 10.1524 6.79823 10.2026C6.85428 10.3054 6.98506 10.3428 7.08781 10.2961C7.13817 10.2684 7.17568 10.2221 7.19227 10.1671C7.20886 10.112 7.20322 10.0527 7.17655 10.0018V9.99714ZM7.9005 10.1933C7.83511 10.0719 7.68565 10.0298 7.56422 10.0999C7.50782 10.1314 7.46599 10.1838 7.44767 10.2457C7.42934 10.3077 7.43597 10.3744 7.46613 10.4315C7.53152 10.5529 7.68098 10.595 7.80242 10.5343C7.83181 10.5195 7.8579 10.499 7.87911 10.4739C7.90032 10.4487 7.91622 10.4196 7.92582 10.3881C7.93543 10.3567 7.93855 10.3236 7.935 10.2909C7.93145 10.2583 7.92131 10.2266 7.90517 10.198L7.9005 10.1933ZM8.65714 10.1653C8.6216 10.1005 8.56191 10.0524 8.49106 10.0314C8.4202 10.0104 8.34392 10.0182 8.27882 10.0532C8.1387 10.1232 8.092 10.2867 8.1714 10.4268C8.18807 10.4592 8.2111 10.4879 8.2391 10.5112C8.26711 10.5344 8.29952 10.5518 8.3344 10.5623C8.36928 10.5728 8.40591 10.5761 8.4421 10.5721C8.4783 10.5681 8.51331 10.5568 8.54505 10.5389C8.68517 10.4689 8.73187 10.3054 8.65714 10.1653ZM10.3759 7.75057C10.4693 7.70386 10.502 7.5871 10.4553 7.49835C10.4318 7.455 10.392 7.42277 10.3447 7.40875C10.2974 7.39474 10.2465 7.40009 10.2031 7.42362C10.1598 7.44716 10.1275 7.48696 10.1135 7.53425C10.0995 7.58155 10.1049 7.63248 10.1284 7.67584C10.1521 7.71781 10.191 7.74902 10.2371 7.76295C10.2833 7.77687 10.333 7.77244 10.3759 7.75057V7.75057ZM10.4086 8.49787C10.5114 8.44182 10.5487 8.31104 10.4927 8.20362C10.4659 8.15359 10.4205 8.11617 10.3662 8.09954C10.312 8.08292 10.2533 8.08843 10.2031 8.11488C10.1528 8.14255 10.1153 8.18887 10.0987 8.24388C10.0821 8.2989 10.0877 8.35822 10.1144 8.40913C10.1704 8.51188 10.3012 8.54925 10.4086 8.4932V8.49787ZM10.2171 9.22182C10.3386 9.15643 10.3806 9.00697 10.3199 8.88553C10.3043 8.857 10.2832 8.83182 10.2578 8.81144C10.2324 8.79107 10.2033 8.77589 10.1721 8.76678C10.1408 8.75767 10.1081 8.75481 10.0758 8.75835C10.0434 8.7619 10.0121 8.77179 9.9836 8.78745C9.95467 8.80267 9.92904 8.82348 9.90819 8.84866C9.88735 8.87384 9.87169 8.90291 9.86214 8.93418C9.85259 8.96544 9.84932 8.99829 9.85253 9.03083C9.85574 9.06336 9.86537 9.09494 9.88085 9.12373C9.91239 9.18013 9.96473 9.22195 10.0267 9.24028C10.0887 9.25861 10.1553 9.25198 10.2125 9.22182H10.2171ZM9.82013 9.84768C9.96025 9.77762 10.007 9.60481 9.93223 9.47403C9.8575 9.34325 9.68935 9.2872 9.55858 9.36194C9.52666 9.37908 9.49843 9.40236 9.47551 9.43042C9.4526 9.45849 9.43544 9.49081 9.42503 9.52551C9.41462 9.56022 9.41116 9.59664 9.41484 9.63268C9.41852 9.66873 9.42927 9.7037 9.44648 9.73559C9.46363 9.76751 9.4869 9.79573 9.51497 9.81865C9.54304 9.84156 9.57535 9.85872 9.61006 9.86913C9.64476 9.87954 9.68118 9.88301 9.71723 9.87933C9.75328 9.87564 9.78824 9.86489 9.82013 9.84768V9.84768Z"
        fill="url(#paint0_linear_2862_8453)"
      />
      <path
        d="M9.28301 5.05093C9.25266 5.15374 9.18271 5.24029 9.08855 5.29153C8.99439 5.34277 8.88373 5.35451 8.78092 5.32416C8.6781 5.29381 8.59155 5.22386 8.54031 5.1297C8.48907 5.03554 8.47734 4.92488 8.50768 4.82206C8.5181 4.76615 8.54014 4.71304 8.57238 4.66618C8.60462 4.61932 8.64634 4.57975 8.69484 4.55003C8.74334 4.52031 8.79753 4.5011 8.85392 4.49365C8.91031 4.4862 8.96764 4.49067 9.02219 4.50677C9.07675 4.52287 9.12731 4.55025 9.17061 4.58713C9.21392 4.62401 9.249 4.66957 9.27358 4.72086C9.29817 4.77215 9.31171 4.82804 9.31333 4.88489C9.31496 4.94175 9.30463 4.99831 9.28301 5.05093V5.05093ZM5.40639 6.00373C5.3556 5.98923 5.30115 5.99531 5.25482 6.02066C5.20849 6.04601 5.17401 6.08859 5.15884 6.13918C5.15047 6.18777 5.16027 6.23774 5.18637 6.27957C5.21246 6.3214 5.25303 6.35217 5.30035 6.36602C5.34767 6.37987 5.39843 6.37583 5.44296 6.35467C5.48749 6.33351 5.52268 6.29671 5.54183 6.25128C5.57453 6.14852 5.51381 6.03643 5.40172 6.00373H5.40639ZM6.10698 5.23308C6.04443 5.2145 5.97705 5.22153 5.91968 5.25262C5.86231 5.28372 5.81964 5.33633 5.80105 5.39889C5.78247 5.46144 5.7895 5.52882 5.8206 5.58619C5.85169 5.64356 5.90431 5.68623 5.96686 5.70481C6.02941 5.72219 6.09627 5.7143 6.15306 5.68285C6.20984 5.6514 6.252 5.5989 6.27045 5.53667C6.28783 5.47413 6.27994 5.40726 6.24849 5.35048C6.21704 5.29369 6.16454 5.25153 6.10231 5.23308H6.10698ZM7.00374 4.69129C6.92449 4.66931 6.83979 4.67893 6.76749 4.71813C6.69518 4.75733 6.64091 4.82305 6.61608 4.90147C6.60467 4.94103 6.60118 4.98245 6.6058 5.02336C6.61043 5.06428 6.62309 5.10387 6.64305 5.13989C6.663 5.1759 6.68987 5.20762 6.72212 5.23323C6.75436 5.25884 6.79133 5.27783 6.83093 5.28913C6.90772 5.30502 6.98768 5.2915 7.05498 5.25124C7.12228 5.21098 7.17202 5.14692 7.19433 5.07175C7.21665 4.99657 7.20993 4.91575 7.1755 4.84529C7.14107 4.77484 7.08144 4.71987 7.00841 4.69129H7.00374ZM7.99859 4.4671C7.9094 4.44046 7.81328 4.45035 7.73138 4.49459C7.64949 4.53882 7.58851 4.61377 7.56188 4.70296C7.53525 4.79215 7.54514 4.88827 7.58937 4.97016C7.6336 5.05206 7.70856 5.11303 7.79775 5.13967C7.88694 5.16568 7.98281 5.1552 8.06427 5.11053C8.14573 5.06586 8.2061 4.99065 8.23212 4.90147C8.24571 4.857 8.25031 4.81028 8.24565 4.76402C8.241 4.71777 8.22719 4.6729 8.20502 4.63203C8.18284 4.59117 8.15276 4.55512 8.11652 4.52601C8.08027 4.49689 8.0386 4.47527 7.99392 4.46243L7.99859 4.4671ZM4.96268 6.95654C4.92649 6.95014 4.88921 6.95729 4.85796 6.97664C4.82671 6.99599 4.80369 7.02617 4.79329 7.06142C4.78289 7.09667 4.78584 7.13451 4.80157 7.16772C4.81731 7.20093 4.84474 7.22718 4.87861 7.24145C4.95801 7.2648 5.04208 7.2181 5.06543 7.1387C5.07113 7.11968 5.07299 7.09973 5.07089 7.07999C5.0688 7.06025 5.06279 7.04113 5.05323 7.02374C5.04366 7.00635 5.03073 6.99103 5.01518 6.9787C4.99963 6.96636 4.98179 6.95724 4.96268 6.95187V6.95654ZM10.9878 7.8533C10.9776 7.89044 10.9786 7.92976 10.9906 7.96634C11.0026 8.00293 11.0251 8.03517 11.0554 8.05905C11.0856 8.08293 11.1221 8.09738 11.1605 8.10062C11.1989 8.10385 11.2374 8.09572 11.2711 8.07723C11.3049 8.05875 11.3325 8.03073 11.3505 7.99667C11.3685 7.96261 11.376 7.92401 11.3722 7.88569C11.3684 7.84737 11.3533 7.81102 11.329 7.78118C11.3047 7.75133 11.2721 7.72931 11.2353 7.71785C11.1845 7.70335 11.1301 7.70943 11.0838 7.73478C11.0374 7.76013 11.003 7.80271 10.9878 7.8533V7.8533ZM10.7543 6.85846C10.745 6.88974 10.7419 6.92255 10.7454 6.955C10.7488 6.98746 10.7586 7.01891 10.7742 7.04756C10.7898 7.07621 10.811 7.10149 10.8364 7.12194C10.8618 7.14239 10.8911 7.15761 10.9224 7.16672C11.0532 7.20408 11.1886 7.12935 11.226 6.99858C11.2634 6.8678 11.1886 6.73235 11.0578 6.69499C10.9953 6.67601 10.9278 6.68255 10.87 6.71318C10.8123 6.7438 10.769 6.79603 10.7496 6.85846H10.7543ZM10.2125 5.9617C10.1946 6.02106 10.1948 6.08438 10.213 6.14364C10.2312 6.2029 10.2665 6.25542 10.3146 6.29455C10.3627 6.33367 10.4213 6.35764 10.483 6.3634C10.5448 6.36917 10.6068 6.35647 10.6613 6.32693C10.7158 6.29738 10.7603 6.25232 10.7891 6.19745C10.818 6.14259 10.8299 6.08039 10.8233 6.01875C10.8168 5.95711 10.7921 5.89881 10.7523 5.85123C10.7126 5.80365 10.6596 5.76895 10.6001 5.75152C10.5209 5.72829 10.4356 5.73735 10.363 5.77673C10.2904 5.8161 10.2363 5.88259 10.2125 5.9617ZM9.44648 5.2611C9.4274 5.32745 9.42836 5.39795 9.44922 5.46376C9.47008 5.52957 9.50992 5.58774 9.56374 5.63098C9.61755 5.67422 9.68295 5.70059 9.7517 5.70679C9.82046 5.71298 9.88951 5.69872 9.95019 5.6658C10.0109 5.63288 10.0605 5.58276 10.0928 5.52175C10.125 5.46073 10.1386 5.39153 10.1317 5.32284C10.1248 5.25416 10.0977 5.18904 10.0539 5.13568C10.0101 5.08231 9.95154 5.04308 9.88552 5.0229C9.79572 4.99676 9.69922 5.00711 9.61701 5.05171C9.5348 5.09632 9.47352 5.17157 9.44648 5.2611V5.2611ZM10.9037 8.85749C10.892 8.89527 10.8958 8.93615 10.9142 8.97116C10.9325 9.00618 10.9641 9.03249 11.0018 9.04431C11.0212 9.05248 11.0421 9.05646 11.0631 9.056C11.0841 9.05554 11.1048 9.05065 11.1238 9.04164C11.1428 9.03263 11.1597 9.01971 11.1734 9.00373C11.1871 8.98774 11.1972 8.96905 11.2032 8.94888C11.2091 8.9287 11.2108 8.9075 11.208 8.88665C11.2052 8.86581 11.198 8.84579 11.1869 8.8279C11.1758 8.81002 11.1611 8.79467 11.1437 8.78287C11.1263 8.77106 11.1066 8.76307 11.0859 8.7594C11.0481 8.7493 11.0079 8.75441 10.9738 8.77361C10.9398 8.79282 10.9146 8.82461 10.9037 8.86216V8.85749ZM7.46613 11.1788C7.48775 11.1262 7.49808 11.0696 7.49646 11.0128C7.49484 10.9559 7.48129 10.9 7.45671 10.8487C7.43212 10.7974 7.39704 10.7519 7.35374 10.715C7.31044 10.6781 7.25987 10.6507 7.20532 10.6346C7.15077 10.6185 7.09344 10.6141 7.03705 10.6215C6.98066 10.629 6.92646 10.6482 6.87796 10.6779C6.82947 10.7076 6.78775 10.7472 6.75551 10.794C6.72327 10.8409 6.70123 10.894 6.69081 10.9499C6.67577 11.0011 6.67097 11.0548 6.67668 11.1079C6.68239 11.161 6.6985 11.2124 6.72409 11.2592C6.74968 11.3061 6.78425 11.3474 6.82582 11.3809C6.86739 11.4144 6.91515 11.4393 6.96638 11.4544C7.18123 11.5151 7.40542 11.3936 7.46613 11.1741V11.1788ZM4.97202 8.14288C4.98301 8.1168 4.98837 8.08869 4.98774 8.06039C4.9871 8.03209 4.9805 8.00425 4.96835 7.97868C4.9562 7.95311 4.93879 7.9304 4.91725 7.91204C4.89571 7.89368 4.87053 7.88007 4.84336 7.87212C4.8162 7.86417 4.78766 7.86205 4.75962 7.86591C4.73158 7.86976 4.70466 7.87949 4.68065 7.89447C4.65663 7.90946 4.63606 7.92934 4.62027 7.95284C4.60448 7.97633 4.59383 8.00289 4.58903 8.03079C4.57803 8.05687 4.57268 8.08498 4.57331 8.11328C4.57394 8.14158 4.58055 8.16942 4.59269 8.19499C4.60484 8.22055 4.62226 8.24326 4.6438 8.26163C4.66534 8.27999 4.69051 8.29359 4.71768 8.30154C4.74485 8.3095 4.77338 8.31161 4.80143 8.30776C4.82947 8.30391 4.85638 8.29417 4.88039 8.27919C4.90441 8.26421 4.92499 8.24432 4.94078 8.22083C4.95657 8.19734 4.96721 8.17078 4.97202 8.14288V8.14288ZM5.20555 9.13773C5.22351 9.07517 5.21589 9.00804 5.18435 8.95111C5.15282 8.89417 5.09996 8.8521 5.03741 8.83413C4.97485 8.81617 4.90772 8.8238 4.85079 8.85533C4.79385 8.88686 4.75178 8.93972 4.73382 9.00228C4.71972 9.03459 4.71268 9.06954 4.71319 9.10479C4.71369 9.14005 4.72172 9.17478 4.73673 9.20668C4.75174 9.23858 4.7734 9.2669 4.80024 9.28976C4.82709 9.31261 4.8585 9.32947 4.89239 9.3392C4.92627 9.34893 4.96185 9.3513 4.99673 9.34617C5.03161 9.34104 5.06499 9.32852 5.09464 9.30945C5.12429 9.29037 5.14952 9.26519 5.16865 9.23557C5.18778 9.20596 5.20036 9.1726 5.20555 9.13773V9.13773ZM5.74734 10.0345C5.77052 9.95397 5.76094 9.86757 5.7207 9.79408C5.68046 9.7206 5.61281 9.66599 5.53249 9.64215C5.49293 9.63074 5.45151 9.62725 5.41059 9.63188C5.36968 9.6365 5.33008 9.64916 5.29407 9.66912C5.25806 9.68908 5.22634 9.71595 5.20073 9.74819C5.17512 9.78043 5.15612 9.81741 5.14483 9.857C5.13318 9.89656 5.12943 9.93803 5.1338 9.97904C5.13818 10.0201 5.15058 10.0598 5.17032 10.096C5.19005 10.1322 5.21672 10.1642 5.24881 10.1901C5.2809 10.216 5.31778 10.2353 5.35734 10.247C5.39691 10.2587 5.43838 10.2624 5.47939 10.258C5.52039 10.2537 5.56014 10.2412 5.59636 10.2215C5.63257 10.2018 5.66454 10.1751 5.69045 10.143C5.71636 10.1109 5.73569 10.074 5.74734 10.0345V10.0345ZM6.51333 10.7351C6.53947 10.6453 6.52912 10.5488 6.48451 10.4666C6.43991 10.3844 6.36466 10.3231 6.27512 10.296C6.18532 10.27 6.08885 10.2808 6.00695 10.3259C5.92506 10.371 5.86443 10.4468 5.83842 10.5366C5.81241 10.6264 5.82313 10.7229 5.86824 10.8047C5.91335 10.8866 5.98915 10.9473 6.07896 10.9733C6.16876 10.9994 6.26525 10.9891 6.34746 10.9445C6.42967 10.8999 6.49096 10.8246 6.518 10.7351H6.51333ZM10.5628 9.98778C10.6135 10.0023 10.668 9.99621 10.7143 9.97085C10.7607 9.9455 10.7951 9.90292 10.8103 9.85233C10.8248 9.80155 10.8187 9.7471 10.7934 9.70077C10.768 9.65443 10.7254 9.61995 10.6749 9.60479C10.6241 9.59028 10.5696 9.59636 10.5233 9.62171C10.477 9.64707 10.4425 9.68965 10.4273 9.74024C10.4128 9.79102 10.4189 9.84547 10.4442 9.8918C10.4696 9.93813 10.5122 9.97262 10.5628 9.98778ZM9.86217 10.7584C9.89314 10.7676 9.92562 10.7706 9.95776 10.7673C9.9899 10.7639 10.0211 10.7543 10.0495 10.7389C10.0779 10.7235 10.103 10.7027 10.1233 10.6776C10.1437 10.6525 10.1589 10.6236 10.1681 10.5926C10.1773 10.5617 10.1803 10.5292 10.1769 10.497C10.1736 10.4649 10.1639 10.4337 10.1485 10.4053C10.1332 10.3769 10.1123 10.3518 10.0872 10.3315C10.0621 10.3111 10.0333 10.2959 10.0023 10.2867C9.97101 10.2774 9.9382 10.2744 9.90574 10.2778C9.87329 10.2812 9.84183 10.291 9.81318 10.3067C9.78453 10.3223 9.75926 10.3434 9.73881 10.3689C9.71836 10.3943 9.70314 10.4235 9.69402 10.4548C9.67665 10.5174 9.68454 10.5843 9.71599 10.641C9.74744 10.6978 9.79993 10.74 9.86217 10.7584V10.7584ZM8.96541 11.3002C9.0422 11.3161 9.12216 11.3026 9.18946 11.2623C9.25676 11.2221 9.30649 11.158 9.32881 11.0828C9.35113 11.0077 9.34441 10.9269 9.30998 10.8564C9.27555 10.7859 9.21591 10.731 9.14289 10.7024C9.10255 10.6866 9.05937 10.6794 9.01608 10.6811C8.9728 10.6829 8.93035 10.6936 8.89143 10.7126C8.8525 10.7317 8.81795 10.7585 8.78996 10.7916C8.76198 10.8247 8.74116 10.8632 8.72883 10.9047C8.7165 10.9463 8.71293 10.9899 8.71834 11.0329C8.72375 11.0759 8.73803 11.1173 8.76027 11.1544C8.78251 11.1916 8.81222 11.2238 8.84753 11.2489C8.88284 11.274 8.92298 11.2914 8.96541 11.3002V11.3002ZM7.97056 11.5197C8.01472 11.5326 8.06099 11.5367 8.10672 11.5317C8.15245 11.5267 8.19674 11.5127 8.23708 11.4906C8.27741 11.4685 8.313 11.4386 8.3418 11.4028C8.3706 11.3669 8.39205 11.3257 8.40493 11.2815C8.42433 11.215 8.42357 11.1443 8.40275 11.0782C8.38193 11.0121 8.34198 10.9537 8.28795 10.9103C8.23393 10.8669 8.16826 10.8406 8.09924 10.8345C8.03022 10.8285 7.96096 10.843 7.90021 10.8763C7.83946 10.9096 7.78996 10.9602 7.75796 11.0217C7.72595 11.0831 7.71289 11.1527 7.72042 11.2215C7.72795 11.2904 7.75574 11.3555 7.80026 11.4086C7.84479 11.4617 7.90405 11.5003 7.97056 11.5197V11.5197Z"
        fill="url(#paint1_linear_2862_8453)"
      />
      <path
        d="M11.3007 5.25179C11.2538 5.30119 11.1976 5.34087 11.1354 5.36855C11.0731 5.39623 11.0061 5.41136 10.938 5.4131C10.8699 5.41483 10.8021 5.40313 10.7385 5.37866C10.6749 5.35418 10.6168 5.31742 10.5674 5.27047C10.4671 5.17571 10.4085 5.04497 10.4046 4.90701C10.4006 4.76906 10.4517 4.63518 10.5464 4.53485C10.6412 4.43451 10.7719 4.37593 10.9099 4.37199C11.0478 4.36804 11.1817 4.41907 11.282 4.51383C11.3828 4.60873 11.4418 4.73968 11.4461 4.87799C11.4505 5.0163 11.3999 5.15071 11.3054 5.25179H11.3007ZM6.13034 4.07012C6.10586 4.04672 6.07699 4.02838 6.0454 4.01618C6.0138 4.00397 5.9801 3.99814 5.94625 3.999C5.91239 3.99987 5.87903 4.00743 5.8481 4.02124C5.81718 4.03504 5.78928 4.05483 5.76603 4.07946C5.72019 4.12869 5.69549 4.19394 5.69724 4.26119C5.69898 4.32844 5.72704 4.39231 5.77538 4.4391C5.79986 4.46251 5.82873 4.48084 5.86032 4.49304C5.89192 4.50525 5.92561 4.51108 5.95947 4.51022C5.99333 4.50935 6.02669 4.50179 6.05761 4.48798C6.08854 4.47418 6.11643 4.45439 6.13968 4.42976C6.18553 4.38053 6.21023 4.31528 6.20848 4.24803C6.20673 4.18078 6.17868 4.11691 6.13034 4.07012V4.07012ZM7.42878 3.57503C7.36741 3.51753 7.28575 3.48671 7.20169 3.48934C7.11764 3.49197 7.03805 3.52782 6.9804 3.58904C6.92289 3.65041 6.89208 3.73208 6.8947 3.81613C6.89733 3.90019 6.93319 3.97977 6.99441 4.03743C7.05577 4.09493 7.13744 4.12575 7.2215 4.12312C7.30555 4.12049 7.38514 4.08464 7.44279 4.02341C7.50029 3.96205 7.53111 3.88038 7.52848 3.79633C7.52586 3.71227 7.49 3.63269 7.42878 3.57503V3.57503ZM8.81595 3.47695C8.73831 3.40494 8.63538 3.3665 8.52954 3.37C8.4237 3.3735 8.32352 3.41865 8.25081 3.49563C8.18197 3.57377 8.14617 3.6756 8.15096 3.77962C8.15575 3.88365 8.20075 3.98175 8.27648 4.05324C8.3522 4.12473 8.45273 4.16401 8.55686 4.1628C8.661 4.16159 8.76059 4.11999 8.83464 4.04677C8.871 4.00822 8.89938 3.96285 8.91814 3.91329C8.93689 3.86372 8.94566 3.81094 8.94392 3.75797C8.94218 3.705 8.92998 3.6529 8.90802 3.60467C8.88606 3.55644 8.85477 3.51303 8.81595 3.47695ZM10.1331 3.81324C10.0898 3.77245 10.039 3.74058 9.98342 3.71944C9.92786 3.6983 9.86868 3.68832 9.80926 3.69005C9.74985 3.69179 9.69135 3.70521 9.63712 3.72955C9.58289 3.75389 9.53398 3.78868 9.4932 3.83192C9.45241 3.87516 9.42054 3.92601 9.3994 3.98157C9.37826 4.03713 9.36828 4.09631 9.37001 4.15573C9.37175 4.21514 9.38517 4.27364 9.40951 4.32787C9.43385 4.3821 9.46864 4.43101 9.51188 4.47179C9.59926 4.55407 9.71571 4.59831 9.83568 4.59481C9.95565 4.59131 10.0693 4.54035 10.1518 4.45311C10.234 4.36573 10.2783 4.24928 10.2748 4.12931C10.2713 4.00934 10.2203 3.89567 10.1331 3.81324V3.81324ZM5.03275 4.93419C5.01436 4.91699 4.99276 4.90359 4.96918 4.89475C4.94561 4.88592 4.92052 4.88181 4.89536 4.88268C4.8702 4.88355 4.84546 4.88937 4.82255 4.89981C4.79964 4.91025 4.77901 4.92511 4.76185 4.94353C4.74079 4.96073 4.72364 4.98221 4.71154 5.00656C4.69943 5.0309 4.69265 5.05754 4.69164 5.08471C4.69063 5.11188 4.69542 5.13895 4.70568 5.16413C4.71595 5.1893 4.73145 5.212 4.75117 5.23072C4.77089 5.24944 4.79437 5.26374 4.82005 5.27268C4.84572 5.28161 4.87301 5.28498 4.90008 5.28256C4.92716 5.28013 4.95342 5.27197 4.97709 5.25861C5.00077 5.24525 5.02134 5.22701 5.03742 5.20508C5.05461 5.18669 5.06801 5.16509 5.07685 5.14152C5.08569 5.11794 5.08979 5.09286 5.08892 5.0677C5.08805 5.04254 5.08223 5.01779 5.07179 4.99488C5.06135 4.97197 5.0465 4.95135 5.02807 4.93419H5.03275ZM11.665 9.64218C11.6416 9.66666 11.6233 9.69553 11.6111 9.72713C11.5989 9.75872 11.5931 9.79242 11.5939 9.82628C11.5948 9.86014 11.6023 9.89349 11.6162 9.92442C11.63 9.95535 11.6498 9.98324 11.6744 10.0065C11.7249 10.0468 11.7887 10.0667 11.8532 10.0621C11.9176 10.0574 11.978 10.0287 12.0222 9.98153C12.0664 9.93438 12.0912 9.8723 12.0917 9.80767C12.0921 9.74304 12.0682 9.68062 12.0247 9.63284C12.0002 9.60943 11.9713 9.5911 11.9397 9.5789C11.9081 9.56669 11.8744 9.56086 11.8406 9.56172C11.8067 9.56259 11.7734 9.57015 11.7424 9.58395C11.7115 9.59776 11.6836 9.61755 11.6604 9.64218H11.665ZM11.992 8.32039C11.9359 8.38153 11.906 8.46218 11.9086 8.5451C11.9112 8.62802 11.9462 8.70662 12.006 8.7641C12.036 8.79262 12.0714 8.81495 12.1101 8.82979C12.1488 8.84464 12.19 8.85173 12.2314 8.85064C12.2729 8.84956 12.3137 8.84033 12.3515 8.82347C12.3894 8.80662 12.4235 8.78248 12.452 8.75243C12.4806 8.72237 12.5029 8.68699 12.5177 8.64831C12.5326 8.60963 12.5397 8.5684 12.5386 8.52698C12.5375 8.48557 12.5283 8.44477 12.5114 8.40691C12.4946 8.36906 12.4704 8.3349 12.4404 8.30638C12.379 8.24888 12.2973 8.21806 12.2133 8.22069C12.1292 8.22331 12.0496 8.25917 11.992 8.32039V8.32039ZM11.8986 6.93322C11.8602 6.97112 11.8299 7.01636 11.8094 7.06623C11.789 7.1161 11.7787 7.16958 11.7794 7.22349C11.78 7.2774 11.7914 7.33063 11.8131 7.38001C11.8347 7.42939 11.8661 7.47391 11.9053 7.51092C11.9445 7.54792 11.9907 7.57666 12.0413 7.59542C12.0918 7.61417 12.1456 7.62256 12.1995 7.62008C12.2533 7.6176 12.3061 7.6043 12.3547 7.58099C12.4033 7.55767 12.4468 7.5248 12.4824 7.48435C12.5512 7.40621 12.587 7.30439 12.5822 7.20036C12.5775 7.09633 12.5325 6.99823 12.4567 6.92674C12.381 6.85526 12.2805 6.81597 12.1763 6.81718C12.0722 6.81839 11.9726 6.85999 11.8986 6.93322ZM11.4128 5.64412C11.3506 5.70904 11.3091 5.79101 11.2936 5.87958C11.2782 5.96816 11.2894 6.05934 11.3259 6.14151C11.3624 6.22369 11.4225 6.29315 11.4986 6.34104C11.5747 6.38893 11.6634 6.41309 11.7532 6.41045C11.8431 6.4078 11.9302 6.37847 12.0033 6.32619C12.0765 6.27391 12.1324 6.20104 12.1641 6.11686C12.1957 6.03268 12.2015 5.941 12.1808 5.85349C12.1602 5.76598 12.114 5.68659 12.048 5.62544C11.8612 5.45263 11.581 5.46664 11.4128 5.64412ZM10.9644 10.7912C10.9472 10.8095 10.9338 10.8311 10.925 10.8547C10.9162 10.8783 10.9121 10.9034 10.9129 10.9285C10.9138 10.9537 10.9196 10.9784 10.9301 11.0014C10.9405 11.0243 10.9554 11.0449 10.9738 11.0621C10.991 11.0831 11.0125 11.1003 11.0368 11.1124C11.0612 11.1245 11.0878 11.1313 11.115 11.1323C11.1421 11.1333 11.1692 11.1285 11.1944 11.1182C11.2196 11.108 11.2423 11.0924 11.261 11.0727C11.2797 11.053 11.294 11.0295 11.3029 11.0039C11.3119 10.9782 11.3152 10.9509 11.3128 10.9238C11.3104 10.8967 11.3022 10.8705 11.2889 10.8468C11.2755 10.8231 11.2573 10.8026 11.2353 10.7865C11.2173 10.7687 11.1958 10.7548 11.1721 10.7456C11.1485 10.7364 11.1232 10.7321 11.0979 10.733C11.0725 10.7338 11.0476 10.7399 11.0247 10.7507C11.0018 10.7615 10.9813 10.7768 10.9644 10.7958V10.7912ZM5.4531 11.4591C5.50002 11.4094 5.5367 11.3509 5.56104 11.2871C5.58538 11.2232 5.5969 11.1552 5.59495 11.0869C5.59299 11.0186 5.57761 10.9513 5.54966 10.889C5.52172 10.8266 5.48177 10.7704 5.43208 10.7234C5.3824 10.6765 5.32397 10.6398 5.26011 10.6155C5.19625 10.5912 5.12823 10.5796 5.05992 10.5816C4.99161 10.5835 4.92435 10.5989 4.86199 10.6269C4.79963 10.6548 4.74338 10.6948 4.69646 10.7444C4.6017 10.8448 4.55067 10.9787 4.55462 11.1166C4.55856 11.2546 4.61714 11.3853 4.71748 11.4801C4.81781 11.5748 4.95169 11.6259 5.08964 11.6219C5.2276 11.618 5.35834 11.5594 5.4531 11.4591V11.4591ZM4.33215 6.35406C4.35835 6.33019 4.37933 6.30116 4.39376 6.2688C4.4082 6.23643 4.41578 6.20143 4.41604 6.16599C4.41629 6.13056 4.40921 6.09545 4.39524 6.06288C4.38127 6.03031 4.36071 6.00099 4.33485 5.97675C4.309 5.95251 4.27841 5.93388 4.24501 5.92204C4.21161 5.9102 4.17612 5.90539 4.14077 5.90793C4.10542 5.91047 4.07098 5.92029 4.03961 5.93678C4.00824 5.95327 3.98063 5.97608 3.9585 6.00376C3.86509 6.10651 3.86509 6.26532 3.96784 6.3634C4.0706 6.46148 4.2294 6.45681 4.32748 6.35406H4.33215ZM4.00521 7.67585C4.06271 7.61448 4.09353 7.53281 4.0909 7.44876C4.08827 7.3647 4.05242 7.28512 3.99119 7.22747C3.92889 7.18065 3.85155 7.15838 3.77389 7.16489C3.69624 7.1714 3.62368 7.20623 3.57004 7.26276C3.51639 7.31929 3.48541 7.39357 3.48297 7.47146C3.48053 7.54935 3.50682 7.62542 3.55683 7.68519C3.61819 7.74269 3.69986 7.77351 3.78391 7.77088C3.86797 7.76825 3.94755 7.7324 4.00521 7.67118V7.67585ZM4.10796 9.06769C4.14433 9.02914 4.17271 8.98378 4.19146 8.93421C4.21022 8.88465 4.21898 8.83186 4.21724 8.7789C4.21551 8.72593 4.2033 8.67383 4.18134 8.6256C4.15938 8.57737 4.12809 8.53396 4.08928 8.49788C4.05073 8.46151 4.00537 8.43313 3.9558 8.41438C3.90623 8.39562 3.85345 8.38686 3.80048 8.38859C3.74751 8.39033 3.69541 8.40253 3.64718 8.42449C3.59895 8.44646 3.55555 8.47775 3.51946 8.51656C3.44745 8.5942 3.40901 8.69714 3.41251 8.80298C3.41601 8.90881 3.46116 9.00899 3.53814 9.0817C3.70162 9.23584 3.9585 9.22182 4.09862 9.06769H4.10796ZM4.59371 10.3568C4.67598 10.2694 4.72023 10.153 4.71672 10.033C4.71322 9.91302 4.66226 9.79934 4.57502 9.71691C4.53178 9.67612 4.48093 9.64425 4.42537 9.62311C4.36981 9.60198 4.31063 9.59199 4.25122 9.59373C4.1918 9.59546 4.1333 9.60888 4.07907 9.63323C4.02484 9.65757 3.97594 9.69235 3.93515 9.73559C3.89436 9.77884 3.86249 9.82969 3.84135 9.88525C3.82022 9.9408 3.81023 9.99998 3.81197 10.0594C3.8137 10.1188 3.82712 10.1773 3.85146 10.2315C3.8758 10.2858 3.91059 10.3347 3.95383 10.3755C4.04121 10.4577 4.15766 10.502 4.27763 10.4985C4.3976 10.495 4.51128 10.444 4.59371 10.3568ZM9.87152 11.9214C9.89538 11.9476 9.92441 11.9686 9.95678 11.9831C9.98914 11.9975 10.0241 12.0051 10.0596 12.0053C10.095 12.0056 10.1301 11.9985 10.1627 11.9845C10.1953 11.9706 10.2246 11.95 10.2488 11.9241C10.2731 11.8983 10.2917 11.8677 10.3035 11.8343C10.3154 11.8009 10.3202 11.7654 10.3176 11.7301C10.3151 11.6947 10.3053 11.6603 10.2888 11.6289C10.2723 11.5975 10.2495 11.5699 10.2218 11.5478C10.1713 11.5074 10.1075 11.4876 10.043 11.4922C9.97857 11.4969 9.91822 11.5256 9.87401 11.5728C9.82981 11.6199 9.805 11.682 9.80454 11.7466C9.80408 11.8112 9.82799 11.8737 9.87152 11.9214V11.9214ZM8.57308 12.4119C8.69919 12.5333 8.90003 12.524 9.02146 12.3979C9.07844 12.3365 9.10873 12.2551 9.10567 12.1714C9.1026 12.0878 9.06643 12.0088 9.00512 11.9518C8.9438 11.8948 8.86236 11.8645 8.77871 11.8676C8.69506 11.8707 8.61605 11.9068 8.55907 11.9682C8.50299 12.0293 8.47306 12.1099 8.47568 12.1929C8.4783 12.2758 8.51326 12.3544 8.57308 12.4119V12.4119ZM7.18124 12.5146C7.34471 12.6687 7.60159 12.6547 7.74171 12.5006C7.78004 12.4627 7.81036 12.4175 7.83084 12.3676C7.85132 12.3177 7.86155 12.2642 7.86093 12.2103C7.8603 12.1564 7.84883 12.1032 7.8272 12.0538C7.80557 12.0044 7.77421 11.9599 7.73501 11.9229C7.69581 11.8859 7.64956 11.8572 7.59901 11.8384C7.54847 11.8197 7.49466 11.8113 7.44081 11.8137C7.38695 11.8162 7.33415 11.8295 7.28554 11.8528C7.23693 11.8762 7.19352 11.909 7.15788 11.9495C7.08587 12.0271 7.04743 12.1301 7.05093 12.2359C7.05443 12.3417 7.09958 12.4419 7.17656 12.5146H7.18124ZM5.87346 12.1783C5.93805 12.239 6.01917 12.2791 6.10656 12.2937C6.19395 12.3083 6.2837 12.2966 6.36448 12.2603C6.44526 12.2239 6.51346 12.1644 6.56045 12.0893C6.60745 12.0142 6.63114 11.9268 6.62853 11.8382C6.62593 11.7497 6.59714 11.6639 6.54582 11.5917C6.49449 11.5195 6.42292 11.4641 6.34013 11.4325C6.25735 11.4009 6.16707 11.3946 6.08069 11.4143C5.99431 11.434 5.9157 11.4788 5.85478 11.5431C5.81418 11.586 5.78244 11.6365 5.7614 11.6916C5.74036 11.7468 5.73042 11.8056 5.73216 11.8646C5.73389 11.9236 5.74727 11.9817 5.77152 12.0356C5.79577 12.0894 5.83041 12.1379 5.87346 12.1783V12.1783Z"
        fill="url(#paint2_linear_2862_8453)"
      />
      <path
        d="M13.4072 6.35403C13.2541 6.41978 13.0813 6.4223 12.9264 6.36104C12.7715 6.29979 12.6472 6.17973 12.5805 6.02709C12.5319 5.9135 12.518 5.78807 12.5405 5.6666C12.5631 5.54513 12.6211 5.43305 12.7072 5.34448C12.7934 5.25591 12.9038 5.19482 13.0246 5.1689C13.1454 5.14299 13.2712 5.1534 13.386 5.19884C13.5009 5.24428 13.5998 5.3227 13.6702 5.42423C13.7406 5.52577 13.7794 5.64586 13.7816 5.76939C13.7839 5.89292 13.7495 6.01435 13.6829 6.11839C13.6163 6.22243 13.5203 6.30442 13.4072 6.35403ZM8.99344 2.35597C8.97548 2.26555 8.92233 2.18596 8.84569 2.13472C8.76905 2.08348 8.67519 2.06478 8.58476 2.08274C8.49433 2.1007 8.41475 2.15385 8.3635 2.23049C8.31226 2.30714 8.29357 2.401 8.31153 2.49142C8.32949 2.58185 8.38264 2.66144 8.45928 2.71268C8.53592 2.76392 8.62978 2.78262 8.72021 2.76465C8.81064 2.74669 8.89022 2.69354 8.94147 2.6169C8.99271 2.54026 9.0114 2.4464 8.99344 2.35597ZM10.488 2.68292C10.4768 2.62687 10.4543 2.57371 10.4218 2.52667C10.3893 2.47964 10.3476 2.43972 10.2992 2.40936C10.2507 2.379 10.1966 2.35883 10.1401 2.35009C10.0836 2.34136 10.026 2.34423 9.97063 2.35854C9.91529 2.37286 9.86345 2.3983 9.81828 2.43333C9.77312 2.46836 9.73556 2.51223 9.70793 2.56226C9.68029 2.61229 9.66315 2.66744 9.65755 2.72432C9.65195 2.78121 9.658 2.83863 9.67535 2.8931C9.68658 2.94914 9.70913 3.00231 9.7416 3.04934C9.77408 3.09638 9.81581 3.1363 9.86424 3.16666C9.91267 3.19702 9.96678 3.21718 10.0233 3.22592C10.0798 3.23466 10.1374 3.23178 10.1928 3.21747C10.2481 3.20316 10.2999 3.17771 10.3451 3.14268C10.3903 3.10766 10.4278 3.06379 10.4555 3.01375C10.4831 2.96372 10.5002 2.90858 10.5058 2.85169C10.5115 2.79481 10.5054 2.73738 10.488 2.68292ZM11.8519 3.2901C11.8104 3.15756 11.7179 3.04693 11.5949 2.98255C11.4718 2.91817 11.3282 2.90531 11.1956 2.94681C11.0631 2.98831 10.9525 3.08076 10.8881 3.20382C10.8237 3.32689 10.8109 3.47049 10.8524 3.60303C10.8729 3.66866 10.9062 3.7296 10.9503 3.78237C10.9944 3.83514 11.0484 3.87871 11.1094 3.91059C11.1703 3.94246 11.2369 3.96203 11.3054 3.96816C11.3739 3.97429 11.4429 3.96687 11.5086 3.94632C11.5742 3.92578 11.6351 3.8925 11.6879 3.8484C11.7407 3.80431 11.7843 3.75025 11.8161 3.68931C11.848 3.62837 11.8676 3.56176 11.8737 3.49326C11.8798 3.42476 11.8724 3.35573 11.8519 3.2901V3.2901ZM12.9448 4.27093C12.8915 4.12724 12.7834 4.01059 12.6441 3.94665C12.5048 3.88271 12.3459 3.87671 12.2022 3.92998C12.0585 3.98324 11.9418 4.09141 11.8779 4.23068C11.8139 4.36995 11.8079 4.52891 11.8612 4.67261C11.8837 4.74873 11.9215 4.81943 11.9725 4.8803C12.0234 4.94118 12.0863 4.99094 12.1573 5.02649C12.2282 5.06204 12.3058 5.08262 12.385 5.08696C12.4643 5.0913 12.5436 5.07931 12.618 5.05172C12.6924 5.02413 12.7604 4.98154 12.8176 4.92659C12.8749 4.87164 12.9203 4.80551 12.9509 4.73229C12.9816 4.65907 12.9968 4.58034 12.9958 4.50097C12.9947 4.42161 12.9774 4.34331 12.9448 4.27093V4.27093ZM6.01358 2.74364C5.99373 2.69786 5.96075 2.659 5.91881 2.63197C5.87686 2.60494 5.82785 2.59096 5.77796 2.5918C5.72807 2.59263 5.67955 2.60825 5.63854 2.63667C5.59752 2.66509 5.56586 2.70503 5.54756 2.75145C5.52925 2.79786 5.52513 2.84867 5.5357 2.89743C5.54628 2.94619 5.57108 2.99072 5.60696 3.02539C5.64285 3.06005 5.68822 3.08329 5.73732 3.09217C5.78642 3.10104 5.83705 3.09516 5.8828 3.07525C6.00891 3.0192 6.06963 2.86974 6.01358 2.74831V2.74364ZM12.3096 11.076C12.2543 11.1158 12.2119 11.1709 12.1878 11.2346C12.1638 11.2984 12.159 11.3678 12.1743 11.4341C12.1895 11.5005 12.224 11.5609 12.2735 11.6077C12.3229 11.6546 12.3851 11.6858 12.4522 11.6974C12.5193 11.709 12.5883 11.7005 12.6507 11.673C12.713 11.6455 12.7658 11.6002 12.8024 11.5429C12.8391 11.4855 12.858 11.4185 12.8567 11.3504C12.8554 11.2823 12.8341 11.2161 12.7953 11.1601C12.7692 11.1224 12.7358 11.0902 12.6972 11.0655C12.6585 11.0408 12.6153 11.0241 12.5701 11.0163C12.5249 11.0084 12.4785 11.0097 12.4338 11.0199C12.3891 11.0302 12.3469 11.0493 12.3096 11.076V11.076ZM13.0008 9.67485C12.9512 9.70284 12.9078 9.74061 12.8733 9.78589C12.8387 9.83116 12.8137 9.88299 12.7998 9.93822C12.7858 9.99346 12.7833 10.0509 12.7923 10.1072C12.8012 10.1634 12.8215 10.2173 12.852 10.2654C12.8824 10.3136 12.9223 10.3551 12.9692 10.3873C13.0161 10.4196 13.0691 10.442 13.125 10.4532C13.1809 10.4643 13.2384 10.464 13.2941 10.4523C13.3499 10.4405 13.4026 10.4176 13.4492 10.3848C13.5374 10.3227 13.5984 10.2291 13.6196 10.1233C13.6407 10.0176 13.6204 9.90771 13.5628 9.8165C13.5052 9.7253 13.4147 9.65973 13.3101 9.63337C13.2055 9.607 13.0948 9.62185 13.0008 9.67485V9.67485ZM13.3278 8.15223C13.2675 8.18579 13.2145 8.23094 13.1717 8.28509C13.1289 8.33924 13.0973 8.40131 13.0787 8.46773C13.06 8.53416 13.0546 8.60361 13.0629 8.67211C13.0712 8.7406 13.093 8.80678 13.1269 8.86683C13.1607 8.92694 13.2059 8.97982 13.2601 9.02244C13.3143 9.06506 13.3763 9.0966 13.4427 9.11525C13.509 9.1339 13.5784 9.1393 13.6468 9.13113C13.7153 9.12297 13.7814 9.1014 13.8416 9.06767C13.9017 9.03393 13.9545 8.98869 13.9972 8.93452C14.0398 8.88035 14.0713 8.81832 14.09 8.75196C14.1086 8.6856 14.114 8.61622 14.1059 8.54778C14.0977 8.47934 14.0761 8.41317 14.0424 8.35306C14.0088 8.29278 13.9637 8.23974 13.9095 8.19698C13.8554 8.15422 13.7933 8.1226 13.7269 8.10393C13.6605 8.08527 13.591 8.07992 13.5225 8.08821C13.454 8.0965 13.3878 8.11825 13.3278 8.15223V8.15223ZM13.3091 6.62493C13.1717 6.69317 13.067 6.81314 13.018 6.9585C12.9689 7.10386 12.9796 7.26273 13.0475 7.40025C13.1157 7.53775 13.2356 7.64256 13.381 7.69161C13.5264 7.74066 13.6854 7.72994 13.8229 7.66181C13.9604 7.59368 14.0652 7.47372 14.1142 7.32832C14.1633 7.18292 14.1526 7.02398 14.0844 6.88649C14.0162 6.74909 13.8962 6.64439 13.7509 6.59535C13.6055 6.54632 13.4466 6.55695 13.3091 6.62493V6.62493ZM10.1331 12.8836C10.1016 12.896 10.0729 12.9146 10.0487 12.9383C10.0246 12.962 10.0055 12.9904 9.99249 13.0217C9.97952 13.0529 9.97299 13.0865 9.97327 13.1204C9.97356 13.1542 9.98065 13.1877 9.99414 13.2187C10.0076 13.2498 10.0272 13.2778 10.0518 13.3011C10.0763 13.3244 10.1053 13.3426 10.137 13.3544C10.1687 13.3663 10.2025 13.3717 10.2363 13.3702C10.2702 13.3688 10.3033 13.3605 10.3339 13.346C10.46 13.2899 10.5207 13.1405 10.4647 13.019C10.438 12.9577 10.3881 12.9095 10.3259 12.885C10.2638 12.8605 10.1944 12.8617 10.1331 12.8882V12.8836ZM3.09911 10.7584C3.25175 10.6918 3.3718 10.5674 3.43306 10.4125C3.49432 10.2576 3.4918 10.0848 3.42605 9.93174C3.35978 9.77875 3.23545 9.65836 3.08041 9.59705C2.92538 9.53573 2.75233 9.53852 2.59935 9.60479C2.44637 9.67106 2.32598 9.79539 2.26466 9.95043C2.20335 10.1055 2.20613 10.2785 2.27241 10.4315C2.33908 10.5841 2.46344 10.7042 2.61833 10.7654C2.77323 10.8267 2.94607 10.8242 3.09911 10.7584ZM3.70629 4.88279C3.78123 4.82952 3.83195 4.74866 3.84727 4.65801C3.8626 4.56735 3.84129 4.47432 3.78803 4.39937C3.73476 4.32443 3.65391 4.27372 3.56325 4.25839C3.47259 4.24306 3.37956 4.26437 3.30461 4.31764C3.22967 4.3709 3.17896 4.45176 3.16363 4.54242C3.15604 4.5873 3.15737 4.63325 3.16753 4.67763C3.1777 4.722 3.1965 4.76394 3.22288 4.80105C3.24925 4.83816 3.28268 4.86971 3.32125 4.8939C3.35981 4.91809 3.40277 4.93445 3.44766 4.94203C3.53831 4.95736 3.63135 4.93605 3.70629 4.88279V4.88279ZM3.01504 6.28397C3.08542 6.23964 3.14107 6.17542 3.17494 6.09945C3.20881 6.02347 3.21938 5.93916 3.2053 5.85717C3.19123 5.77519 3.15315 5.69922 3.09588 5.63889C3.03862 5.57856 2.96474 5.53658 2.8836 5.51826C2.80246 5.49993 2.7177 5.5061 2.64007 5.53597C2.56243 5.56584 2.4954 5.61807 2.44747 5.68605C2.39953 5.75403 2.37284 5.83471 2.37078 5.91786C2.36872 6.00102 2.39137 6.08292 2.43588 6.1532C2.49543 6.24723 2.58985 6.31381 2.69842 6.33832C2.80699 6.36284 2.92085 6.34329 3.01504 6.28397ZM2.68809 7.8066C2.7482 7.77286 2.80108 7.72762 2.8437 7.67345C2.88632 7.61928 2.91786 7.55725 2.93651 7.49089C2.95516 7.42453 2.96056 7.35515 2.95239 7.28671C2.94423 7.21827 2.92266 7.1521 2.88893 7.09199C2.85519 7.03188 2.80995 6.97901 2.75578 6.93638C2.70161 6.89376 2.63958 6.86222 2.57322 6.84357C2.50686 6.82493 2.43748 6.81953 2.36904 6.82769C2.3006 6.83586 2.23443 6.85742 2.17432 6.89116C2.05293 6.95929 1.96357 7.07285 1.9259 7.20686C1.88824 7.34088 1.90536 7.48437 1.97349 7.60576C2.04162 7.72716 2.15518 7.81652 2.28919 7.85418C2.42321 7.89184 2.5667 7.87473 2.68809 7.8066ZM2.74414 9.33389C2.81568 9.3023 2.88009 9.25654 2.93347 9.19938C2.98685 9.14222 3.0281 9.07484 3.05473 9.0013C3.08136 8.92777 3.09282 8.8496 3.08842 8.77151C3.08402 8.69343 3.06385 8.61704 3.02912 8.54696C2.9944 8.47688 2.94584 8.41456 2.88638 8.36376C2.82692 8.31296 2.75778 8.27472 2.68314 8.25137C2.6085 8.22801 2.5299 8.22001 2.45208 8.22786C2.37427 8.2357 2.29885 8.25923 2.23037 8.29702C2.09976 8.36909 2.002 8.48877 1.95745 8.63114C1.9129 8.7735 1.925 8.92757 1.99123 9.06123C2.05746 9.1949 2.17271 9.29785 2.31297 9.34865C2.45323 9.39944 2.60768 9.39416 2.74414 9.33389ZM7.05513 13.6496C7.07282 13.7302 7.11882 13.8019 7.18479 13.8516C7.25076 13.9013 7.33234 13.9257 7.41477 13.9205C7.5049 13.9013 7.58388 13.8475 7.63458 13.7705C7.68529 13.6936 7.70364 13.5998 7.68567 13.5094C7.66763 13.4197 7.61471 13.3407 7.53853 13.2899C7.46234 13.2391 7.36912 13.2207 7.27932 13.2385C7.18955 13.2566 7.11061 13.3095 7.05982 13.3857C7.00903 13.4619 6.99054 13.5551 7.00842 13.6449L7.05513 13.6496ZM5.56053 13.3226C5.5807 13.4034 5.6244 13.4763 5.68608 13.5322C5.74776 13.5881 5.82465 13.6244 5.90701 13.6366C5.98936 13.6487 6.07346 13.6362 6.14866 13.6005C6.22385 13.5648 6.28676 13.5075 6.32939 13.436C6.37203 13.3645 6.39247 13.282 6.38814 13.1989C6.38381 13.1157 6.35489 13.0358 6.30506 12.9691C6.25523 12.9024 6.18672 12.852 6.10822 12.8243C6.02972 12.7966 5.94476 12.7929 5.86412 12.8135C5.75653 12.8411 5.6642 12.9101 5.60732 13.0054C5.55044 13.1008 5.53361 13.2149 5.56053 13.3226ZM4.14533 12.6594C4.16588 12.725 4.19915 12.786 4.24325 12.8387C4.28735 12.8915 4.34141 12.9351 4.40234 12.9669C4.46328 12.9988 4.5299 13.0184 4.59839 13.0245C4.66689 13.0306 4.73592 13.0232 4.80155 13.0027C4.86718 12.9821 4.92812 12.9489 4.98089 12.9048C5.03366 12.8607 5.07723 12.8066 5.10911 12.7457C5.14098 12.6847 5.16055 12.6181 5.16668 12.5496C5.17281 12.4811 5.16539 12.4121 5.14484 12.3464C5.12462 12.2803 5.09148 12.2188 5.04734 12.1656C5.0032 12.1123 4.94893 12.0684 4.88769 12.0362C4.82644 12.0041 4.75943 11.9844 4.69053 11.9783C4.62163 11.9722 4.55221 11.9799 4.48628 12.0008C4.35376 12.0417 4.2429 12.1336 4.17809 12.2562C4.11328 12.3788 4.09981 12.5222 4.14066 12.6547L4.14533 12.6594ZM3.04773 11.6786C3.07373 11.75 3.11365 11.8155 3.16517 11.8714C3.21668 11.9273 3.27878 11.9724 3.34785 12.0041C3.41692 12.0358 3.4916 12.0535 3.56756 12.0561C3.64352 12.0588 3.71925 12.0463 3.79036 12.0195C3.92421 11.9593 4.03019 11.8504 4.08687 11.715C4.14354 11.5796 4.14669 11.4277 4.09567 11.2901C4.04465 11.1525 3.94327 11.0393 3.81203 10.9736C3.68078 10.9078 3.52947 10.8944 3.38869 10.9359C3.24522 10.9895 3.1288 11.0977 3.06491 11.2369C3.00101 11.376 2.99483 11.5348 3.04773 11.6786V11.6786ZM11.3147 12.1923C11.2868 12.2144 11.2636 12.2418 11.2462 12.2728C11.2289 12.3039 11.2178 12.3381 11.2137 12.3735C11.2054 12.4448 11.2258 12.5166 11.2704 12.573C11.315 12.6293 11.3801 12.6657 11.4515 12.674C11.5229 12.6823 11.5947 12.6619 11.651 12.6173C11.7074 12.5728 11.7437 12.5076 11.7521 12.4362C11.7604 12.3648 11.74 12.2931 11.6954 12.2367C11.6508 12.1803 11.5856 12.144 11.5143 12.1357C11.4429 12.1273 11.3711 12.1477 11.3147 12.1923V12.1923ZM8.77392 13.2899C8.73862 13.2951 8.70468 13.3071 8.67406 13.3254C8.64343 13.3437 8.61672 13.3679 8.59545 13.3965C8.57419 13.4251 8.55879 13.4577 8.55014 13.4923C8.54149 13.5269 8.53977 13.5629 8.54506 13.5982C8.55027 13.6334 8.56238 13.6673 8.5807 13.6979C8.59901 13.7285 8.62317 13.7552 8.65179 13.7765C8.68042 13.7977 8.71295 13.8131 8.74753 13.8218C8.7821 13.8305 8.81805 13.8323 8.85332 13.827C8.88859 13.8218 8.92249 13.8097 8.95307 13.7914C8.98366 13.7731 9.01034 13.7489 9.0316 13.7203C9.05285 13.6917 9.06825 13.6592 9.07693 13.6246C9.08561 13.59 9.0874 13.554 9.08218 13.5188C9.07704 13.4835 9.06498 13.4495 9.04669 13.4189C9.0284 13.3883 9.00424 13.3616 8.9756 13.3403C8.94695 13.319 8.91439 13.3036 8.87978 13.295C8.84518 13.2864 8.8092 13.2846 8.77392 13.2899V13.2899ZM7.46147 2.35597C7.45353 2.30304 7.43009 2.25364 7.39409 2.21402C7.3581 2.1744 7.31118 2.14633 7.25925 2.13335C7.20732 2.12037 7.1527 2.12307 7.1023 2.14111C7.05191 2.15914 7.00798 2.19171 6.97607 2.23469C6.94416 2.27766 6.9257 2.32913 6.92302 2.38259C6.92034 2.43606 6.93355 2.48911 6.961 2.53507C6.98845 2.58103 7.0289 2.61782 7.07724 2.64081C7.12558 2.6638 7.17964 2.67195 7.23261 2.66424C7.26791 2.6591 7.30185 2.64703 7.33248 2.62874C7.36311 2.61045 7.38982 2.58629 7.41108 2.55765C7.43235 2.52901 7.44774 2.49645 7.45639 2.46184C7.46504 2.42723 7.46677 2.39125 7.46147 2.35597ZM4.73383 3.38351C4.7119 3.35508 4.68455 3.3313 4.65335 3.31353C4.62216 3.29577 4.58774 3.28438 4.5521 3.28004C4.51647 3.27569 4.48032 3.27847 4.44577 3.28822C4.41122 3.29796 4.37895 3.31448 4.35084 3.33681C4.30901 3.37003 4.27793 3.41487 4.26152 3.4657C4.24511 3.51653 4.24409 3.57107 4.25859 3.62248C4.27309 3.67389 4.30246 3.71986 4.34301 3.75462C4.38357 3.78938 4.4335 3.81138 4.48652 3.81785C4.53954 3.82431 4.59329 3.81496 4.64101 3.79096C4.68873 3.76697 4.72829 3.7294 4.75472 3.68298C4.78115 3.63657 4.79327 3.58337 4.78955 3.53009C4.78583 3.47681 4.76645 3.42581 4.73383 3.38351V3.38351Z"
        fill="url(#paint3_linear_2862_8453)"
      />
      <path
        d="M15.1914 8.80145C15.0855 8.80146 14.9806 8.78052 14.8828 8.73986C14.7851 8.6992 14.6963 8.6396 14.6216 8.56451C14.547 8.48942 14.4879 8.4003 14.4478 8.3023C14.4077 8.20429 14.3874 8.09933 14.388 7.99344C14.388 7.77975 14.4729 7.57483 14.624 7.42373C14.7751 7.27264 14.98 7.18775 15.1937 7.18775C15.4074 7.18775 15.6123 7.27264 15.7634 7.42373C15.9145 7.57483 15.9994 7.77975 15.9994 7.99344C15.9994 8.09933 15.9784 8.20417 15.9378 8.30195C15.8971 8.39972 15.8375 8.48849 15.7624 8.56315C15.6873 8.63781 15.5982 8.69688 15.5002 8.73698C15.4022 8.77707 15.2972 8.7974 15.1914 8.79678V8.80145ZM12.0387 1.8609C12.051 1.80386 12.0519 1.74496 12.0414 1.68756C12.0309 1.63017 12.0092 1.5754 11.9775 1.52639C11.9459 1.47739 11.9048 1.43509 11.8568 1.40193C11.8088 1.36877 11.7548 1.34539 11.6977 1.33312C11.6407 1.32085 11.5818 1.31994 11.5244 1.33044C11.467 1.34093 11.4122 1.36263 11.3632 1.39429C11.3142 1.42595 11.2719 1.46695 11.2388 1.51496C11.2056 1.56297 11.1822 1.61703 11.1699 1.67407C11.1452 1.78928 11.1672 1.9096 11.2311 2.00858C11.2951 2.10756 11.3957 2.17708 11.5109 2.20186C11.6261 2.22663 11.7464 2.20463 11.8454 2.14068C11.9444 2.07674 12.0139 1.9761 12.0387 1.8609V1.8609ZM13.6267 2.99586C13.6429 2.89103 13.6276 2.78376 13.5829 2.68758C13.5382 2.5914 13.466 2.5106 13.3755 2.45539C13.2849 2.40017 13.18 2.37301 13.074 2.37732C12.968 2.38163 12.8657 2.41722 12.7799 2.47961C12.6941 2.54199 12.6288 2.62838 12.592 2.72788C12.5553 2.82738 12.5488 2.93553 12.5734 3.0387C12.598 3.14187 12.6527 3.23544 12.7304 3.30761C12.8081 3.37978 12.9055 3.42732 13.0102 3.44424C13.0801 3.45555 13.1516 3.4529 13.2206 3.43644C13.2895 3.41999 13.3545 3.39007 13.4118 3.34839C13.4691 3.30671 13.5176 3.2541 13.5545 3.1936C13.5913 3.1331 13.6159 3.0659 13.6267 2.99586V2.99586ZM15.7005 6.17656C15.711 5.98084 15.6433 5.78896 15.5124 5.64312C15.3814 5.49728 15.1979 5.40943 15.0022 5.3989C14.8065 5.38837 14.6146 5.45602 14.4688 5.58697C14.3229 5.71792 14.2351 5.90144 14.2245 6.09716C14.214 6.29288 14.2817 6.48476 14.4126 6.6306C14.5436 6.77644 14.7271 6.86429 14.9228 6.87482C15.1185 6.88535 15.3104 6.8177 15.4562 6.68675C15.6021 6.5558 15.6899 6.37228 15.7005 6.17656V6.17656ZM8.33488 0.805338C8.33488 0.627854 8.19476 0.478394 8.00793 0.478394C7.92246 0.478394 7.84049 0.512347 7.78005 0.572785C7.71961 0.633223 7.68566 0.715195 7.68566 0.800667C7.68566 0.886139 7.71961 0.968111 7.78005 1.02855C7.84049 1.08899 7.92246 1.12294 8.00793 1.12294C8.18542 1.12294 8.33488 0.982821 8.33488 0.795996V0.805338ZM11.5109 13.799C11.3957 13.8238 11.2951 13.8933 11.2311 13.9923C11.1672 14.0913 11.1452 14.2116 11.1699 14.3268C11.1947 14.442 11.2642 14.5427 11.3632 14.6066C11.4622 14.6705 11.5825 14.6925 11.6977 14.6678C11.7548 14.6555 11.8088 14.6321 11.8568 14.599C11.9048 14.5658 11.9459 14.5235 11.9775 14.4745C12.0092 14.4255 12.0309 14.3707 12.0414 14.3133C12.0519 14.2559 12.051 14.197 12.0387 14.14C12.0264 14.0829 12.003 14.0289 11.9699 13.9809C11.9367 13.9329 11.8944 13.8919 11.8454 13.8602C11.7964 13.8285 11.7416 13.8068 11.6842 13.7963C11.6268 13.7858 11.5679 13.7868 11.5109 13.799V13.799ZM13.0055 12.5566C12.9356 12.5677 12.8685 12.5924 12.8081 12.6293C12.7478 12.6663 12.6953 12.7148 12.6536 12.772C12.612 12.8293 12.582 12.8942 12.5655 12.963C12.5489 13.0318 12.5461 13.1032 12.5571 13.1732C12.5682 13.2431 12.5929 13.3101 12.6298 13.3705C12.6668 13.4309 12.7153 13.4834 12.7725 13.525C12.8298 13.5667 12.8947 13.5966 12.9635 13.6132C13.0323 13.6297 13.1037 13.6326 13.1736 13.6215C13.3149 13.5992 13.4414 13.5218 13.5255 13.4061C13.6096 13.2905 13.6443 13.1462 13.622 13.005C13.5997 12.8638 13.5222 12.7372 13.4066 12.6531C13.291 12.5691 13.1467 12.5343 13.0055 12.5566V12.5566ZM14.1638 10.9313C14.0314 10.9449 13.9061 10.9976 13.8036 11.0826C13.7012 11.1676 13.6262 11.281 13.5883 11.4086C13.5504 11.5362 13.5512 11.6722 13.5906 11.7993C13.6299 11.9265 13.7062 12.0391 13.8096 12.1229C13.913 12.2067 14.039 12.2579 14.1716 12.27C14.3041 12.2822 14.4373 12.2547 14.5542 12.1912C14.6712 12.1276 14.7666 12.0307 14.8285 11.9129C14.8904 11.795 14.9159 11.6615 14.9018 11.5291C14.8829 11.3521 14.7947 11.1897 14.6564 11.0777C14.518 10.9656 14.3409 10.913 14.1638 10.9313V10.9313ZM14.9111 9.12373C14.7158 9.1346 14.5326 9.22214 14.4014 9.36732C14.2702 9.5125 14.2016 9.70359 14.2105 9.89905C14.2211 10.0948 14.3089 10.2783 14.4547 10.4092C14.6006 10.5402 14.7925 10.6078 14.9882 10.5973C15.1839 10.5868 15.3674 10.4989 15.4984 10.3531C15.6293 10.2073 15.697 10.0154 15.6864 9.81965C15.6756 9.62343 15.5874 9.43952 15.4412 9.3082C15.295 9.17688 15.1027 9.10887 14.9065 9.11906L14.9111 9.12373ZM7.99859 14.8686C7.91312 14.8686 7.83115 14.9026 7.77071 14.963C7.71027 15.0234 7.67632 15.1054 7.67632 15.1909C7.67632 15.2763 7.71027 15.3583 7.77071 15.4188C7.83115 15.4792 7.91312 15.5131 7.99859 15.5131C8.08406 15.5131 8.16603 15.4792 8.22647 15.4188C8.28691 15.3583 8.32086 15.2763 8.32086 15.1909C8.32086 15.1054 8.28691 15.0234 8.22647 14.963C8.16603 14.9026 8.08406 14.8686 7.99859 14.8686ZM0.805821 8.79678C0.911713 8.79679 1.01656 8.77585 1.11433 8.73519C1.2121 8.69452 1.30087 8.63493 1.37553 8.55984C1.45019 8.48475 1.50927 8.39563 1.54936 8.29763C1.58946 8.19962 1.60979 8.09465 1.60917 7.98877C1.60917 7.77508 1.52429 7.57016 1.37319 7.41906C1.2221 7.26797 1.01717 7.18308 0.803486 7.18308C0.589806 7.18308 0.384877 7.26797 0.233782 7.41906C0.082687 7.57016 -0.00219727 7.77508 -0.00219727 7.98877C-0.000963201 8.20225 0.0847116 8.40658 0.236111 8.5571C0.38751 8.70763 0.592328 8.79212 0.805821 8.79211V8.79678ZM4.54232 2.19251C4.5994 2.18032 4.65352 2.15698 4.70156 2.12384C4.74961 2.0907 4.79064 2.0484 4.82232 1.99937C4.85399 1.95034 4.87568 1.89555 4.88614 1.83813C4.8966 1.7807 4.89563 1.72178 4.88328 1.66473C4.86473 1.57901 4.82118 1.50071 4.75815 1.43972C4.69512 1.37873 4.61543 1.33779 4.52914 1.32207C4.44285 1.30635 4.35384 1.31656 4.27335 1.3514C4.19286 1.38624 4.1245 1.44415 4.07691 1.51783C4.02932 1.5915 4.00463 1.67762 4.00595 1.76532C4.00728 1.85302 4.03457 1.93835 4.08437 2.01055C4.13418 2.08274 4.20426 2.13856 4.28577 2.17095C4.36728 2.20334 4.45655 2.21084 4.54232 2.19251V2.19251ZM3.04772 3.4349C3.11776 3.4241 3.18496 3.39955 3.24546 3.36266C3.30596 3.32578 3.35857 3.27728 3.40025 3.21997C3.44193 3.16267 3.47185 3.09768 3.48831 3.02875C3.50476 2.95983 3.50741 2.88833 3.4961 2.81838C3.47381 2.67716 3.39633 2.55059 3.2807 2.4665C3.22346 2.42487 3.15857 2.39491 3.08974 2.37836C3.02092 2.3618 2.9495 2.35896 2.87958 2.37C2.80966 2.38104 2.7426 2.40574 2.68222 2.4427C2.62185 2.47966 2.56934 2.52815 2.5277 2.5854C2.44362 2.70102 2.4089 2.84531 2.4312 2.98652C2.442 3.05655 2.46655 3.12376 2.50344 3.18426C2.54033 3.24476 2.58882 3.29737 2.64613 3.33905C2.70343 3.38072 2.76842 3.41065 2.83735 3.4271C2.90627 3.44355 2.97777 3.4462 3.04772 3.4349ZM1.88941 5.06028C2.05924 5.03301 2.21217 4.9417 2.31675 4.80514C2.42134 4.66857 2.46962 4.49712 2.45167 4.32605C2.43373 4.15498 2.35092 3.99729 2.22028 3.88539C2.08963 3.7735 1.92109 3.71592 1.74929 3.72448C1.57215 3.74306 1.40965 3.83125 1.29753 3.96964C1.18541 4.10804 1.13287 4.2853 1.15145 4.46244C1.17003 4.63958 1.25822 4.80208 1.39661 4.9142C1.53501 5.02631 1.71227 5.07886 1.88941 5.06028V5.06028ZM1.14211 6.86781C1.33832 6.85695 1.52224 6.76876 1.65356 6.62256C1.78487 6.47636 1.85289 6.28407 1.8427 6.08782C1.83793 5.99045 1.81392 5.895 1.77204 5.80696C1.73017 5.71893 1.67127 5.64007 1.59875 5.57492C1.52623 5.50978 1.44151 5.45966 1.34951 5.42744C1.2575 5.39522 1.16002 5.38155 1.06271 5.38722C0.965796 5.39244 0.870861 5.41669 0.783323 5.45859C0.695785 5.50049 0.617357 5.55923 0.552518 5.63144C0.421569 5.77728 0.353918 5.96917 0.364447 6.16488C0.374976 6.3606 0.462823 6.54412 0.608663 6.67507C0.754502 6.80602 0.946388 6.87367 1.14211 6.86314V6.86781ZM4.01921 14.1306C4.00089 14.2164 4.00839 14.3057 4.04078 14.3872C4.07317 14.4687 4.12898 14.5388 4.20118 14.5886C4.27338 14.6384 4.35871 14.6657 4.44641 14.667C4.53411 14.6683 4.62023 14.6437 4.6939 14.5961C4.76757 14.5485 4.82549 14.4801 4.86033 14.3996C4.89517 14.3191 4.90537 14.2301 4.88965 14.1438C4.87393 14.0575 4.83299 13.9778 4.77201 13.9148C4.71102 13.8518 4.63272 13.8082 4.547 13.7897C4.48995 13.7773 4.43103 13.7764 4.3736 13.7868C4.31618 13.7973 4.26139 13.819 4.21236 13.8507C4.16333 13.8823 4.12103 13.9234 4.08789 13.9714C4.05475 14.0195 4.03141 14.0736 4.01921 14.1306V14.1306ZM2.4312 12.9957C2.4199 13.0656 2.42255 13.1371 2.439 13.2061C2.45545 13.275 2.48538 13.34 2.52706 13.3973C2.56873 13.4546 2.62134 13.5031 2.68184 13.54C2.74234 13.5769 2.80955 13.6014 2.87958 13.6122C2.98441 13.6284 3.09168 13.6131 3.18786 13.5684C3.28405 13.5237 3.36484 13.4515 3.42005 13.361C3.47527 13.2704 3.50243 13.1655 3.49812 13.0595C3.49381 12.9535 3.45822 12.8512 3.39584 12.7654C3.33345 12.6797 3.24706 12.6143 3.14756 12.5775C3.04807 12.5408 2.93992 12.5343 2.83675 12.5589C2.73358 12.5835 2.64001 12.6382 2.56783 12.7159C2.49566 12.7936 2.44812 12.891 2.4312 12.9957V12.9957ZM1.15145 11.5198C1.14225 11.6075 1.15041 11.6961 1.17548 11.7807C1.20054 11.8652 1.24202 11.944 1.29753 12.0126C1.35305 12.0811 1.42151 12.138 1.49903 12.1801C1.57654 12.2221 1.66158 12.2485 1.74929 12.2577C1.837 12.2669 1.92566 12.2588 2.01022 12.2337C2.09477 12.2086 2.17356 12.1672 2.24208 12.1116C2.31061 12.0561 2.36753 11.9877 2.4096 11.9101C2.45166 11.8326 2.47805 11.7476 2.48725 11.6599C2.50556 11.4828 2.45291 11.3057 2.34084 11.1673C2.22878 11.029 2.06644 10.9408 1.88941 10.9219C1.80161 10.9122 1.71277 10.92 1.62801 10.9449C1.54326 10.9698 1.46428 11.0112 1.39565 11.0668C1.32701 11.1224 1.27009 11.1911 1.22818 11.2688C1.18626 11.3466 1.16018 11.4319 1.15145 11.5198ZM0.315405 9.82899C0.310373 9.92593 0.324514 10.0229 0.35702 10.1144C0.389526 10.2058 0.439757 10.29 0.504837 10.362C0.569916 10.434 0.648566 10.4925 0.73628 10.5341C0.823994 10.5757 0.919048 10.5995 1.016 10.6043C1.21172 10.6148 1.4036 10.5472 1.54944 10.4162C1.69528 10.2853 1.78313 10.1018 1.79366 9.90606C1.80419 9.71034 1.73654 9.51845 1.60559 9.37261C1.47464 9.22677 1.29112 9.13893 1.0954 9.1284C0.899147 9.11821 0.706857 9.18623 0.560656 9.31754C0.414455 9.44886 0.326265 9.63278 0.315405 9.82899V9.82899ZM9.7781 14.6211C9.73379 14.6325 9.69218 14.6525 9.65569 14.6801C9.61919 14.7077 9.58855 14.7423 9.56552 14.7818C9.54249 14.8214 9.52754 14.8651 9.52154 14.9105C9.51554 14.9558 9.5186 15.0019 9.53056 15.0461C9.54252 15.0902 9.56306 15.1316 9.59101 15.1678C9.61896 15.2041 9.65377 15.2344 9.69345 15.2572C9.73314 15.28 9.77692 15.2947 9.8223 15.3005C9.86767 15.3064 9.91376 15.3033 9.95792 15.2913C10.0021 15.2793 10.0435 15.2588 10.0797 15.2308C10.1159 15.2029 10.1463 15.1681 10.169 15.1284C10.1918 15.0887 10.2065 15.0449 10.2124 14.9996C10.2182 14.9542 10.2151 14.9081 10.2031 14.8639C10.1917 14.8196 10.1717 14.778 10.1441 14.7415C10.1164 14.705 10.0819 14.6744 10.0423 14.6513C10.0028 14.6283 9.95908 14.6134 9.91372 14.6074C9.86837 14.6014 9.82227 14.6044 9.7781 14.6164V14.6211ZM6.22842 14.6211C6.13923 14.5975 6.04435 14.6104 5.96464 14.6568C5.88493 14.7032 5.82693 14.7794 5.80339 14.8686C5.77986 14.9578 5.79272 15.0527 5.83914 15.1324C5.88556 15.2121 5.96175 15.2701 6.05094 15.2936C6.0951 15.3053 6.14112 15.3081 6.18638 15.302C6.23164 15.2959 6.27525 15.2809 6.31472 15.2579C6.35419 15.2349 6.38874 15.2044 6.41641 15.168C6.44407 15.1317 6.46431 15.0902 6.47597 15.0461C6.48762 15.0019 6.49046 14.9559 6.48433 14.9106C6.47819 14.8654 6.46321 14.8218 6.44022 14.7823C6.41723 14.7428 6.3867 14.7083 6.35036 14.6806C6.31402 14.653 6.27258 14.6327 6.22842 14.6211ZM10.1985 1.14629C10.2104 1.10213 10.2135 1.05603 10.2075 1.01067C10.2015 0.965309 10.1865 0.921592 10.1635 0.882055C10.1405 0.842517 10.1098 0.807945 10.0733 0.780344C10.0368 0.752743 9.99523 0.732662 9.95091 0.721266C9.86172 0.697731 9.76684 0.710589 9.68713 0.757012C9.60742 0.803435 9.54942 0.879621 9.52589 0.96881C9.50235 1.058 9.51521 1.15288 9.56163 1.23259C9.60806 1.3123 9.68424 1.3703 9.77343 1.39384C9.8176 1.40579 9.86369 1.40885 9.90905 1.40285C9.95441 1.39685 9.99813 1.3819 10.0377 1.35888C10.0772 1.33585 10.1118 1.3052 10.1394 1.26871C10.167 1.23222 10.1871 1.19061 10.1985 1.14629V1.14629ZM6.48064 0.954798C6.4571 0.865609 6.3991 0.789423 6.31939 0.743C6.23968 0.696577 6.1448 0.683719 6.05561 0.707254C5.96642 0.73079 5.89023 0.788792 5.84381 0.8685C5.79739 0.948208 5.78453 1.04309 5.80807 1.13228C5.81972 1.17644 5.83996 1.21788 5.86762 1.25422C5.89529 1.29056 5.92984 1.32109 5.96931 1.34408C6.00878 1.36707 6.05239 1.38205 6.09765 1.38819C6.14291 1.39432 6.18893 1.39148 6.23309 1.37982C6.27725 1.36817 6.31869 1.34793 6.35503 1.32027C6.39137 1.2926 6.4219 1.25805 6.44489 1.21858C6.46788 1.17911 6.48286 1.1355 6.489 1.09024C6.49513 1.04498 6.49229 0.998959 6.48064 0.954798V0.954798Z"
        fill="url(#paint4_linear_2862_8453)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2862_8453"
        x1="10.007"
        y1="6.84914"
        x2="5.63525"
        y2="9.21248"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9100" />
        <stop offset="0.05" stopColor="#FF8D00" />
        <stop offset="0.25" stopColor="#FF8300" />
        <stop offset="0.5" stopColor="#FF8000" />
        <stop offset="0.75" stopColor="#FF8300" />
        <stop offset="0.95" stopColor="#FF8D00" />
        <stop offset="1" stopColor="#FF9100" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2862_8453"
        x1="11.2073"
        y1="8.94156"
        x2="4.78986"
        y2="7.05462"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9100" />
        <stop offset="0.05" stopColor="#FF8D00" />
        <stop offset="0.25" stopColor="#FF8300" />
        <stop offset="0.5" stopColor="#FF8000" />
        <stop offset="0.75" stopColor="#FF8300" />
        <stop offset="0.95" stopColor="#FF8D00" />
        <stop offset="1" stopColor="#FF9100" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2862_8453"
        x1="11.1466"
        y1="11.1461"
        x2="4.85526"
        y2="4.85011"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9100" />
        <stop offset="0.05" stopColor="#FF8D00" />
        <stop offset="0.25" stopColor="#FF8300" />
        <stop offset="0.5" stopColor="#FF8000" />
        <stop offset="0.75" stopColor="#FF8300" />
        <stop offset="0.95" stopColor="#FF8D00" />
        <stop offset="1" stopColor="#FF9100" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_2862_8453"
        x1="10.3246"
        y1="13.388"
        x2="5.67262"
        y2="2.61286"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9100" />
        <stop offset="0.05" stopColor="#FF8D00" />
        <stop offset="0.25" stopColor="#FF8300" />
        <stop offset="0.5" stopColor="#FF8000" />
        <stop offset="0.75" stopColor="#FF8300" />
        <stop offset="0.95" stopColor="#FF8D00" />
        <stop offset="1" stopColor="#FF9100" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_2862_8453"
        x1="7.99859"
        y1="15.5178"
        x2="7.99859"
        y2="0.483064"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9100" />
        <stop offset="0.05" stopColor="#FF8D00" />
        <stop offset="0.25" stopColor="#FF8300" />
        <stop offset="0.5" stopColor="#FF8000" />
        <stop offset="0.75" stopColor="#FF8300" />
        <stop offset="0.95" stopColor="#FF8D00" />
        <stop offset="1" stopColor="#FF9100" />
      </linearGradient>
      <clipPath id="clip0_2862_8453">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const HBRFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2878_8052)">
      <path
        d="M1.60001 0V4.453L14.394 4.45275V0H1.60001ZM12.6318 1.2005L12.7518 1.203C12.7753 1.20375 12.7948 1.2245 12.7948 1.23925V3.225L12.6278 3.085C12.6348 3.073 12.6398 3.06 12.6398 3.04375V1.227C12.638 1.21794 12.6354 1.20907 12.632 1.2005H12.6318ZM12.75 3.26175H11.74C11.73 3.20675 11.698 3.1585 11.6505 3.12925H12.5585C12.5682 3.12972 12.5778 3.12774 12.5865 3.1235L12.75 3.26175ZM10.5685 1.23C10.5768 1.2195 10.638 1.195 10.651 1.1985C10.6603 1.1985 10.671 1.19675 10.6815 1.19675H10.6903C10.874 1.19675 11.0915 1.21 11.2603 1.27325C11.4285 1.33875 11.5433 1.4415 11.5435 1.63625H11.6045C11.6055 1.44125 11.7195 1.33625 11.889 1.27325C12.0565 1.20975 12.2755 1.19675 12.4573 1.19675H12.478C12.4868 1.19675 12.4945 1.1985 12.502 1.1985C12.509 1.19675 12.5353 1.206 12.554 1.213C12.565 1.2185 12.573 1.224 12.5775 1.2275L12.58 3.04375C12.58 3.05875 12.5683 3.07025 12.5555 3.07025H10.5925C10.5793 3.07025 10.568 3.0585 10.568 3.04375V1.23H10.5685ZM10.593 3.13H11.4495C11.4262 3.14457 11.4061 3.16387 11.3907 3.18664C11.3752 3.20942 11.3647 3.23517 11.3598 3.26225H10.3923C10.388 3.26225 10.3855 3.2615 10.3818 3.2615L10.5505 3.1185C10.5635 3.126 10.5755 3.13025 10.5925 3.13025L10.593 3.13ZM10.3535 1.23925C10.3535 1.22425 10.371 1.20375 10.395 1.203L10.516 1.2005C10.511 1.20875 10.5085 1.21675 10.5075 1.22725V3.0435C10.5075 3.0535 10.5093 3.063 10.5125 3.0685L10.354 3.20425V1.23675L10.3535 1.23925ZM9.20351 1.206C9.22851 1.206 9.24601 1.22925 9.24601 1.2425V3.2175L9.08401 3.0815C9.08854 3.0716 9.09101 3.06088 9.09126 3.05V1.23C9.08876 1.2195 9.08626 1.2125 9.08376 1.2055L9.20376 1.20575L9.20351 1.206ZM9.20976 3.266H8.18601C8.17801 3.21025 8.14776 3.1625 8.10176 3.13225H9.00526C9.01775 3.13199 9.03007 3.12927 9.04151 3.12425L9.20976 3.266ZM8.05301 1.5785C8.05401 1.408 8.14351 1.318 8.27501 1.2635C8.40651 1.209 8.57501 1.19675 8.72001 1.19675L8.94501 1.20025C8.96418 1.20267 8.98283 1.20815 9.00026 1.2165C9.00888 1.22032 9.01696 1.22528 9.02426 1.23125L9.02676 1.233V3.048C9.02676 3.06125 9.01601 3.07125 9.00326 3.07125H8.05001L8.05301 1.5785ZM7.01676 1.233C7.02176 1.2305 7.03576 1.21975 7.05251 1.213C7.06839 1.20739 7.08495 1.20394 7.10176 1.20275L7.33376 1.19675C7.47476 1.19675 7.64526 1.20925 7.77551 1.2635C7.90451 1.321 7.99226 1.4085 7.99301 1.5785V3.071H7.04351C7.02851 3.071 7.01751 3.061 7.01751 3.04775V1.2325L7.01676 1.233ZM7.04276 3.13225H7.89351C7.84676 3.16275 7.81701 3.2105 7.80851 3.266H6.84101C6.83701 3.266 6.83301 3.266 6.82801 3.2635L6.99901 3.12025C7.01151 3.1285 7.02576 3.132 7.04251 3.132L7.04276 3.13225ZM6.80151 1.24275C6.80151 1.22975 6.82026 1.20625 6.84401 1.20625L6.96401 1.20575C6.95951 1.21325 6.95701 1.22 6.95551 1.23025V3.04775C6.95551 3.057 6.95851 3.06525 6.96151 3.0735L6.80101 3.20925L6.80151 1.24275ZM5.53151 1.20525L5.65151 1.20575C5.66163 1.20644 5.67127 1.21036 5.67901 1.21693C5.68675 1.2235 5.69218 1.23237 5.69451 1.24225V3.219L5.53151 3.081C5.53626 3.07028 5.53881 3.05872 5.53901 3.047V1.23C5.53851 1.22 5.53576 1.2125 5.53151 1.2055V1.20525ZM5.65651 3.26575H4.63501C4.63114 3.23885 4.62169 3.21306 4.60727 3.19002C4.59284 3.16699 4.57377 3.14723 4.55126 3.132H5.45326C5.46545 3.13211 5.47757 3.13 5.48901 3.12575L5.65651 3.26575ZM4.50001 1.57825C4.50101 1.40775 4.59001 1.31775 4.72076 1.26325C4.85151 1.20875 5.02376 1.1965 5.16726 1.1965L5.39351 1.2C5.41266 1.2025 5.4313 1.20798 5.44876 1.21625C5.45926 1.22075 5.46876 1.22675 5.47376 1.23125L5.47576 1.233V3.048C5.47576 3.06125 5.46476 3.07125 5.45076 3.07125H4.49951L4.50001 1.57825ZM3.46501 1.2325C3.47001 1.23 3.48501 1.21925 3.50151 1.2125C3.51732 1.20697 3.5338 1.20352 3.55051 1.20225L3.78201 1.19625C3.92351 1.19625 4.09201 1.20875 4.22276 1.263C4.35226 1.3205 4.44026 1.408 4.44176 1.578H4.44126V3.0705H3.49126C3.47676 3.0705 3.46526 3.0605 3.46526 3.04725L3.46501 1.2325ZM3.49101 3.13175H4.34226C4.31945 3.14676 4.3001 3.16645 4.28549 3.18951C4.27088 3.21257 4.26134 3.23847 4.25751 3.2655H3.29101C3.28351 3.2655 3.27776 3.2655 3.27351 3.263L3.44351 3.118C3.45676 3.12725 3.47451 3.13225 3.49351 3.13225L3.49101 3.13175ZM3.25101 1.24225C3.25101 1.22925 3.26951 1.20575 3.29301 1.20575L3.41226 1.20525C3.40824 1.21296 3.4057 1.22136 3.40476 1.23V3.0475C3.40476 3.0545 3.40651 3.061 3.40901 3.0725L3.25151 3.206L3.25101 1.24225ZM3.03776 3.41175C3.00626 3.41175 2.98176 3.38525 2.98176 3.355V3.055C2.89801 3.0445 2.83326 2.9925 2.83326 2.931C2.83326 2.8695 2.89826 2.8175 2.98176 2.806V1.846C2.89826 1.8335 2.83351 1.7835 2.83351 1.722C2.83351 1.6605 2.89851 1.6095 2.98201 1.597V1.217C2.98201 1.186 3.00651 1.162 3.03801 1.162L3.20426 1.1945C3.19552 1.20818 3.19076 1.22402 3.19051 1.24025V3.23125C3.19101 3.28625 3.24051 3.325 3.29176 3.325H4.25926C4.26426 3.35601 4.27717 3.3852 4.29676 3.40975L3.03776 3.41175ZM4.50276 3.41175H4.39076C4.36841 3.40067 4.34958 3.38361 4.33634 3.36247C4.3231 3.34133 4.31598 3.31694 4.31576 3.292C4.31626 3.221 4.37426 3.162 4.44701 3.162C4.46412 3.16193 4.48108 3.16525 4.49691 3.17175C4.51274 3.17826 4.52713 3.18782 4.53925 3.1999C4.55138 3.21198 4.561 3.22633 4.56756 3.24214C4.57413 3.25794 4.57751 3.27489 4.57751 3.292C4.57751 3.345 4.54676 3.392 4.50251 3.412L4.50276 3.41175ZM6.04526 2.9335C6.04526 2.995 5.98101 3.04525 5.89526 3.0575V3.3575C5.89526 3.3875 5.87076 3.41425 5.83951 3.41425H4.59376C4.61201 3.38925 4.62526 3.361 4.63201 3.32925H5.65251C5.70426 3.32925 5.75176 3.2905 5.75176 3.236V1.2425C5.75167 1.22136 5.74435 1.20089 5.73101 1.1845L5.83926 1.1645C5.87051 1.1645 5.89501 1.1885 5.89501 1.2195V1.6005C5.97851 1.61225 6.04501 1.66225 6.04501 1.7245C6.04501 1.78675 5.98076 1.8365 5.89501 1.849V2.809C5.97901 2.82075 6.04301 2.87325 6.04301 2.934L6.04526 2.9335ZM6.58776 3.41175C6.55726 3.41175 6.53326 3.38525 6.53326 3.355V3.055C6.44826 3.0445 6.38426 2.9925 6.38426 2.931C6.38426 2.8695 6.44801 2.8175 6.53326 2.806V1.846C6.44826 1.8335 6.38426 1.7835 6.38426 1.722C6.38426 1.6605 6.44801 1.6095 6.53326 1.597V1.217C6.53326 1.186 6.55701 1.162 6.58776 1.162L6.75476 1.1945C6.74676 1.2075 6.74226 1.223 6.74226 1.24025V3.23125C6.74226 3.28625 6.78851 3.325 6.84226 3.325H7.80976C7.81543 3.35585 7.82837 3.3849 7.84751 3.40975L6.58776 3.41175ZM8.05351 3.41175H7.94051C7.89801 3.38675 7.86626 3.34525 7.86626 3.29175C7.86626 3.22075 7.92526 3.16175 7.99826 3.16175C8.01539 3.16165 8.03238 3.16494 8.04824 3.17143C8.06409 3.17792 8.07851 3.18748 8.09067 3.19956C8.10282 3.21164 8.11246 3.22601 8.11904 3.24183C8.12562 3.25765 8.12901 3.27461 8.12901 3.29175C8.12912 3.3168 8.12214 3.34136 8.10887 3.3626C8.09559 3.38384 8.07657 3.40088 8.05401 3.41175H8.05351ZM9.59601 2.9335C9.59601 2.995 9.53301 3.04525 9.44926 3.0575V3.3575C9.44907 3.37241 9.44309 3.38665 9.4326 3.39724C9.4221 3.40783 9.40791 3.41393 9.39301 3.41425H8.15001C8.16801 3.38925 8.18126 3.361 8.18751 3.32925H9.20676C9.26001 3.32925 9.30751 3.2905 9.30751 3.236V1.2425C9.30751 1.2195 9.29901 1.2 9.28651 1.1845L9.39476 1.1645C9.4021 1.16433 9.40941 1.16564 9.41625 1.16835C9.42308 1.17105 9.4293 1.1751 9.43455 1.18025C9.43979 1.1854 9.44395 1.19155 9.44678 1.19833C9.4496 1.20512 9.45104 1.2124 9.45101 1.21975V1.60075C9.53501 1.6125 9.59776 1.6625 9.59776 1.72475C9.59776 1.787 9.53476 1.83675 9.45101 1.84925V2.80925C9.53501 2.821 9.59776 2.8735 9.59776 2.93425L9.59601 2.9335ZM10.139 3.41175C10.11 3.41175 10.084 3.38525 10.084 3.355V3.055C9.99901 3.0445 9.93601 2.9925 9.93601 2.931C9.93601 2.8695 9.99926 2.8175 10.084 2.806V1.846C9.99901 1.8335 9.93601 1.7835 9.93601 1.722C9.93601 1.6605 9.99926 1.6095 10.084 1.597V1.217C10.084 1.186 10.1098 1.162 10.139 1.162L10.304 1.1945C10.2972 1.20769 10.2934 1.22219 10.2928 1.237V3.228C10.2938 3.28175 10.3398 3.3205 10.3928 3.3205H11.3603C11.3661 3.35297 11.3797 3.38356 11.3998 3.40975L10.139 3.41175ZM11.6053 3.41175H11.4933C11.4708 3.40081 11.4519 3.38374 11.4387 3.3625C11.4255 3.34127 11.4186 3.31674 11.4188 3.29175C11.4188 3.25736 11.4325 3.22439 11.4568 3.20008C11.4812 3.17576 11.5141 3.16207 11.5485 3.162C11.622 3.162 11.681 3.22075 11.681 3.292C11.681 3.345 11.6485 3.392 11.6053 3.412V3.41175ZM13.1483 2.9335C13.1483 2.995 13.0843 3.04725 12.999 3.0575V3.3575C12.999 3.3875 12.9755 3.41425 12.945 3.41425H11.6993C11.7194 3.3881 11.7328 3.35735 11.7383 3.32475H12.7563C12.81 3.32475 12.8578 3.2865 12.8578 3.2315V1.2415C12.8578 1.2205 12.8503 1.2025 12.8403 1.187L12.9453 1.167C12.9758 1.167 12.9993 1.191 12.9993 1.222V1.6C13.0843 1.612 13.1485 1.662 13.1485 1.725C13.1485 1.788 13.0845 1.837 12.9993 1.8495V2.8095C13.0843 2.82125 13.1485 2.87375 13.1485 2.9345L13.1483 2.9335ZM5.00001 2.59125C4.93751 2.59125 4.92001 2.57575 4.92001 2.5175V2.199C5.01451 2.199 5.06326 2.23775 5.07576 2.40325H5.09926V1.95825H5.07576C5.06026 2.12175 5.01226 2.15625 4.92001 2.15475V1.84875C4.92001 1.79225 4.93651 1.7875 4.99001 1.7875C5.11901 1.7875 5.19001 1.8205 5.20851 2.0075H5.23201V1.7415H4.68201V1.775C4.72701 1.7795 4.76701 1.781 4.76701 1.86825V2.5065C4.76701 2.5855 4.73701 2.59075 4.68201 2.59825V2.63175H5.24326L5.28176 2.35675H5.25676C5.19676 2.55675 5.10026 2.5905 5.00551 2.5905L5.00001 2.59125ZM12.0443 2.5645C12.0743 2.5645 12.1193 2.6095 12.2085 2.6095C12.3843 2.6095 12.446 2.45 12.446 2.333C12.446 2.1905 12.371 2.11375 12.34 2.09225L12.2008 1.9965C12.1193 1.9415 12.1015 1.9125 12.1015 1.8415C12.1015 1.7565 12.1548 1.7165 12.203 1.7165C12.3165 1.7165 12.3745 1.8675 12.392 1.959H12.418V1.675H12.393C12.3873 1.70125 12.383 1.721 12.3605 1.721C12.3338 1.721 12.2855 1.677 12.2118 1.677C12.0293 1.677 11.9998 1.85625 11.9998 1.93775C11.9998 1.9985 11.9998 2.11125 12.164 2.219L12.2283 2.26025C12.2895 2.30025 12.3343 2.33525 12.3343 2.4195C12.3343 2.4385 12.3313 2.569 12.216 2.569C12.091 2.569 12.041 2.41825 12.016 2.2865H11.991V2.612H12.016C12.021 2.5905 12.0245 2.567 12.0448 2.567L12.0443 2.5645ZM3.67001 1.849L3.91426 2.638H3.94001L4.15851 1.863C4.18351 1.78925 4.19276 1.763 4.24501 1.7555V1.725H4.04076V1.75825C4.09576 1.76175 4.12326 1.76575 4.12326 1.81775C4.12326 1.8445 4.11276 1.879 4.10476 1.9095L3.97976 2.3415L3.85526 1.926C3.84601 1.8935 3.82526 1.83725 3.82526 1.8125C3.82526 1.76325 3.84826 1.76325 3.90876 1.7585V1.725H3.59001V1.75825C3.63001 1.76625 3.64576 1.77075 3.67001 1.84975V1.849ZM7.49101 2.574C7.42901 2.562 7.40726 2.55825 7.40726 2.45325V2.195H7.43301L7.63201 2.608H7.82826V2.574C7.81651 2.574 7.80201 2.57375 7.78876 2.549L7.59626 2.174C7.64776 2.15025 7.74626 2.11025 7.74626 1.94775C7.74626 1.7265 7.54426 1.7165 7.47726 1.7165H7.16901V1.7515C7.22351 1.7555 7.25401 1.75775 7.25401 1.87025V2.45275C7.25401 2.5585 7.23351 2.56325 7.16901 2.5735V2.6075H7.49201V2.5735L7.49101 2.574ZM7.40751 1.8175C7.41176 1.7755 7.41376 1.7615 7.46751 1.7615C7.54376 1.7615 7.58251 1.819 7.58251 1.9515C7.58251 2.1215 7.53376 2.15075 7.40701 2.152L7.40751 1.8175ZM10.845 1.7595V2.4525C10.845 2.563 10.82 2.566 10.7525 2.57325V2.60725H11.0958V2.57325C11.0238 2.5665 11.0008 2.56375 11.0008 2.4525V1.76C11.0668 1.763 11.1658 1.77175 11.1848 1.985H11.213L11.212 1.71925H10.6363L10.6338 1.985H10.662C10.6795 1.7735 10.7775 1.765 10.8445 1.76L10.845 1.7595ZM11.425 2.575C11.392 2.572 11.346 2.56875 11.346 2.51875C11.346 2.49375 11.362 2.44225 11.3895 2.34375H11.6045C11.617 2.38625 11.6465 2.4845 11.6465 2.52025C11.6465 2.564 11.6305 2.566 11.5715 2.57225V2.60325H11.8815V2.57225C11.8358 2.57525 11.8205 2.529 11.7773 2.38875L11.5648 1.69625H11.5383L11.3258 2.417C11.2958 2.5165 11.2828 2.562 11.2313 2.5725V2.6035H11.4255L11.425 2.575ZM11.4933 1.975L11.5895 2.29425H11.4028L11.4933 1.975ZM8.35576 1.75175C8.40026 1.75475 8.44476 1.7575 8.44476 1.843V2.48C8.44476 2.562 8.40726 2.5675 8.35576 2.574V2.608H8.69151V2.574C8.63826 2.56975 8.60001 2.5645 8.60001 2.48V1.84325C8.60001 1.75525 8.64576 1.754 8.69151 1.752V1.717H8.35576V1.75175ZM10.3058 4.868C10.3858 4.98925 10.4415 5.1325 10.4665 5.27975C10.5365 5.69425 10.334 6.12975 9.57651 6.1715C9.56401 6.7925 9.41151 7.0465 8.62651 7.06025C8.69476 7.721 8.35001 7.93575 7.97726 7.93575C7.60301 7.93575 7.25801 7.72075 7.32676 7.06025C6.53926 7.046 6.38726 6.79225 6.37276 6.1715C5.61476 6.132 5.41376 5.6965 5.48401 5.27975C5.50746 5.13273 5.56192 4.99237 5.64376 4.868H1.60126V5.073C1.60751 12.669 7.88576 15.941 7.90451 15.9513L7.99951 16.0023L8.09601 15.9513C8.11476 15.9413 14.396 12.6693 14.3993 5.073V4.868H10.3058ZM5.06401 11.835C5.21501 11.7558 5.33001 11.5242 5.35751 11.3665C5.39376 11.1627 5.43676 11.0773 5.54451 11.074C5.65226 11.0708 5.69526 11.163 5.73201 11.3665C5.75876 11.524 5.87376 11.7555 6.02451 11.835C6.11876 11.885 6.42151 11.8925 6.36001 12.07C6.31826 12.1505 6.26001 12.3162 6.18051 12.245C6.09676 12.171 5.95551 11.98 5.89951 11.968C5.84501 11.9585 5.85276 12.0417 5.87601 12.07C5.90751 12.106 6.00101 12.245 6.05851 12.309C6.12776 12.3873 6.14901 12.531 6.02776 12.5878C5.90651 12.6445 5.78276 12.5722 5.78626 12.5077C5.79051 12.4077 5.73201 12.1307 5.67876 12.1307C5.63701 12.1307 5.63526 12.204 5.63976 12.2823C5.62326 12.4468 5.73376 12.5785 5.72126 12.6632C5.70626 12.7457 5.68876 12.8333 5.54451 12.8315C5.39951 12.8273 5.38101 12.7452 5.36776 12.6632C5.35426 12.5782 5.46776 12.4465 5.44776 12.2823C5.45276 12.2035 5.45101 12.1307 5.40926 12.1307C5.35776 12.1307 5.29676 12.4102 5.30351 12.5077C5.30601 12.5727 5.17851 12.6453 5.06051 12.5878C4.94251 12.5303 4.96101 12.387 5.02926 12.309C5.08426 12.2448 5.18101 12.109 5.21276 12.07C5.23776 12.0415 5.24426 11.9585 5.18926 11.968C5.13326 11.98 4.98926 12.171 4.90876 12.245C4.82826 12.319 4.77126 12.153 4.72951 12.07C4.66801 11.895 4.97051 11.885 5.06451 11.835H5.06401ZM5.16751 11.313C5.26401 11.3022 5.21576 11.4025 5.20551 11.4917C5.19501 11.5792 5.17126 11.5918 5.08051 11.4668C4.98676 11.3433 5.06551 11.3268 5.17001 11.3158L5.16751 11.313ZM5.91751 11.3223C6.02151 11.336 6.10076 11.351 6.00751 11.4735C5.91376 11.599 5.89001 11.589 5.87951 11.5022C5.86876 11.4137 5.82051 11.313 5.91776 11.3223H5.91751ZM10.3838 12.1248C10.332 12.1248 10.2733 12.4042 10.2778 12.5017C10.2803 12.5667 10.1573 12.6392 10.0353 12.5817C9.91526 12.5247 9.93601 12.381 10.0048 12.303C10.0603 12.2388 10.1548 12.103 10.1883 12.064C10.2103 12.0355 10.2188 11.9525 10.1643 11.962C10.1093 11.974 9.96426 12.165 9.88351 12.239C9.80276 12.313 9.74601 12.147 9.70451 12.064C9.64201 11.887 9.94576 11.879 10.0395 11.829C10.1905 11.7498 10.3058 11.5183 10.3328 11.3605C10.3683 11.1568 10.4138 11.0712 10.5203 11.068C10.6268 11.0647 10.6693 11.157 10.7073 11.3605C10.7338 11.518 10.8498 11.7495 10.9998 11.829C11.0938 11.879 11.3963 11.8865 11.3348 12.064C11.2923 12.1445 11.2348 12.3103 11.1548 12.239C11.0748 12.1678 10.9305 11.974 10.8748 11.962C10.8205 11.9525 10.8283 12.0358 10.851 12.064C10.8835 12.1 10.9795 12.239 11.0353 12.303C11.1043 12.3813 11.1245 12.525 11.0028 12.5817C10.8828 12.6385 10.7578 12.5662 10.7618 12.5017C10.766 12.4017 10.7068 12.1248 10.6543 12.1248C10.6118 12.1248 10.61 12.198 10.6158 12.2762C10.5978 12.4407 10.71 12.5725 10.695 12.6573C10.6818 12.7398 10.6638 12.8272 10.52 12.8255C10.374 12.8212 10.3575 12.7393 10.345 12.6573C10.3313 12.5723 10.442 12.4405 10.425 12.2762C10.4308 12.1975 10.43 12.1248 10.3863 12.1248H10.3838ZM10.1423 11.3097C10.2423 11.299 10.1923 11.3992 10.1808 11.4885C10.1703 11.576 10.1458 11.5885 10.0558 11.4635C9.96251 11.34 10.0408 11.3235 10.145 11.3125L10.1423 11.3097ZM10.8923 11.319C10.9973 11.3328 11.0743 11.3478 10.9823 11.4703C10.8898 11.5958 10.8648 11.5857 10.8573 11.499C10.8463 11.4105 10.7968 11.3098 10.8948 11.319H10.8923ZM10.9823 6.4605C10.8893 6.5855 10.8648 6.576 10.8573 6.4855C10.8463 6.399 10.7973 6.29675 10.8948 6.3065C10.9998 6.31775 11.0768 6.335 10.9848 6.45825L10.9823 6.4605ZM10.1423 6.299C10.2423 6.2885 10.1923 6.39 10.1808 6.47725C10.1703 6.566 10.1458 6.57625 10.0558 6.45125C9.96576 6.32625 10.0408 6.30975 10.145 6.29925L10.1423 6.299ZM10.039 6.821C10.19 6.742 10.3053 6.51275 10.3323 6.3535C10.3678 6.1485 10.4133 6.064 10.5198 6.0595C10.6263 6.0575 10.6688 6.1485 10.7068 6.3535C10.7333 6.51275 10.8493 6.742 10.9993 6.821C11.0933 6.87175 11.3958 6.8775 11.3343 7.056C11.2918 7.139 11.2343 7.30225 11.1543 7.231C11.0743 7.15975 10.93 6.9655 10.8743 6.95475C10.82 6.94425 10.8278 7.0305 10.8505 7.05525C10.883 7.09325 10.979 7.231 11.0348 7.294C11.1038 7.37275 11.124 7.519 11.0023 7.57525C10.8823 7.63125 10.7573 7.55825 10.7613 7.49425C10.7655 7.39425 10.7063 7.11925 10.6538 7.11925C10.6113 7.11925 10.6095 7.191 10.6153 7.26925C10.5973 7.4335 10.7095 7.56425 10.6945 7.64925C10.6813 7.7335 10.6633 7.81975 10.5195 7.8175C10.3735 7.81425 10.357 7.7335 10.3445 7.64925C10.332 7.565 10.4415 7.4335 10.4245 7.26925C10.4308 7.18875 10.4295 7.11925 10.386 7.11925C10.3343 7.11925 10.2755 7.39925 10.28 7.49425C10.2825 7.55825 10.1595 7.63175 10.0375 7.57525C9.91751 7.5185 9.93826 7.37525 10.007 7.29575C10.0625 7.23075 10.157 7.09575 10.1905 7.05525C10.2125 7.03025 10.221 6.94425 10.1665 6.95475C10.112 6.96525 9.96651 7.15475 9.88576 7.231C9.80501 7.30725 9.74826 7.1415 9.70676 7.056C9.64376 6.8775 9.94776 6.87175 10.0413 6.821H10.039ZM10.52 8.82175C10.4508 8.12075 10.895 7.91975 11.42 7.95975C11.3508 7.2585 11.7093 7.02975 12.332 7.056C12.249 6.236 12.802 6.141 13.2308 6.1685C13.1643 5.5575 13.5995 5.3055 13.8948 5.2745H13.988C13.9468 8.0815 13.008 10.258 11.8823 11.8778C11.4155 11.762 11.3408 11.3837 11.3778 11.044C10.6878 11.125 10.411 10.6265 10.507 10.155C10.2445 10.249 9.67776 10.1138 9.60701 9.6155C9.53626 9.11725 9.93951 8.82175 10.52 8.82175ZM8.40501 8.816C8.50926 8.8265 8.58751 8.84225 8.49551 8.966C8.40051 9.09175 8.37801 9.081 8.37051 8.991C8.36301 8.901 8.31051 8.8025 8.40726 8.816H8.40501ZM7.65576 8.805C7.75151 8.794 7.70576 8.89625 7.69226 8.98C7.68226 9.0685 7.65851 9.07875 7.56526 8.95425C7.47201 8.82975 7.55026 8.8135 7.65526 8.8025L7.65576 8.805ZM7.55176 9.3265C7.70176 9.24725 7.81776 9.017 7.84426 8.85825C7.88026 8.65525 7.92426 8.56925 8.03176 8.56575C8.13926 8.56225 8.18251 8.65525 8.21776 8.85825C8.24276 9.01725 8.36101 9.2475 8.51151 9.3265C8.60601 9.376 8.91151 9.383 8.84726 9.5625C8.80426 9.645 8.74926 9.809 8.66726 9.7375C8.58526 9.666 8.44226 9.47175 8.38801 9.4605C8.33176 9.4505 8.33801 9.53425 8.36401 9.56225C8.39501 9.5985 8.48901 9.73775 8.54651 9.80125C8.61551 9.88 8.63526 10.023 8.51501 10.0805C8.39476 10.138 8.27001 10.064 8.27251 9.9995C8.27851 9.90075 8.21751 9.62275 8.16501 9.62275C8.12351 9.62275 8.12201 9.69375 8.12751 9.77225C8.11101 9.93975 8.22126 10.0707 8.20751 10.1552C8.19326 10.2382 8.17601 10.3252 8.03151 10.3232C7.88701 10.3212 7.86826 10.2382 7.85601 10.1552C7.84101 10.0707 7.95101 9.93975 7.93451 9.77225C7.93951 9.69375 7.93701 9.62275 7.89651 9.62275C7.84651 9.62275 7.78476 9.901 7.78901 9.9995C7.79351 10.0638 7.66901 10.137 7.54776 10.0805C7.42651 10.024 7.44776 9.88 7.51726 9.80125C7.57226 9.73775 7.66876 9.60125 7.69976 9.56225C7.72276 9.53425 7.73126 9.45075 7.67476 9.4605C7.61976 9.47175 7.47801 9.6605 7.39601 9.7375C7.31401 9.8145 7.25726 9.6475 7.21601 9.5625C7.15426 9.383 7.45651 9.376 7.55151 9.3265H7.55176ZM7.32676 11.9747C7.27226 11.4497 7.59001 11.0997 8.01801 11.0997C8.44601 11.0997 8.76351 11.4477 8.70951 11.9747C9.17901 11.8407 9.80076 12.0673 9.64951 12.8763C10.186 12.6945 10.5985 12.9755 10.625 13.4155C9.43751 14.653 8.31826 15.3392 7.99601 15.528C7.67101 15.341 6.57101 14.665 5.40601 13.453C5.40601 12.9895 5.83101 12.685 6.38726 12.873C6.23526 12.0635 6.85801 11.837 7.32676 11.9715V11.9747ZM6.44226 9.61625C6.37276 10.1143 5.80726 10.2495 5.54226 10.1558C5.63726 10.627 5.36326 11.1258 4.67101 11.0448C4.71001 11.3965 4.63451 11.7948 4.12001 11.8905C2.99426 10.2693 2.05426 8.08725 2.01176 5.27675C2.01626 5.27675 2.02026 5.275 2.02426 5.275H2.15426C2.45076 5.3075 2.88426 5.558 2.82001 6.169C3.24501 6.144 3.80076 6.2365 3.71826 7.0565C4.34001 7.03 4.69951 7.2565 4.62926 7.96025C5.15551 7.91975 5.59851 8.12125 5.52876 8.82225C6.10826 8.822 6.50876 9.1185 6.43976 9.616L6.44226 9.61625ZM5.09551 6.48C5.08376 6.56875 5.06051 6.579 4.96676 6.454C4.87301 6.329 4.95376 6.31275 5.05776 6.302C5.15776 6.2915 5.10601 6.3925 5.09576 6.48025L5.09551 6.48ZM5.80726 6.31125C5.91126 6.323 5.98976 6.34 5.89676 6.463C5.80251 6.588 5.77976 6.5785 5.77176 6.488C5.76126 6.4015 5.71426 6.2995 5.80976 6.309L5.80726 6.31125ZM5.61976 6.35625C5.64801 6.5155 5.76301 6.74475 5.91401 6.82375C6.00776 6.8745 6.31401 6.88025 6.24901 7.05875C6.20726 7.14175 6.15201 7.30875 6.06901 7.23375C5.98601 7.15875 5.84551 6.96825 5.78976 6.9575C5.73401 6.94675 5.74326 7.03325 5.76651 7.058C5.79701 7.096 5.89301 7.23375 5.94901 7.2985C6.01751 7.3755 6.03851 7.5215 5.91801 7.578C5.79751 7.6345 5.67301 7.561 5.67551 7.497C5.68051 7.397 5.62001 7.122 5.56801 7.122C5.52726 7.122 5.52501 7.19375 5.53126 7.272C5.51326 7.43625 5.62301 7.567 5.60976 7.652C5.59651 7.737 5.57851 7.8225 5.43351 7.82025C5.28851 7.818 5.27101 7.73625 5.25726 7.652C5.24351 7.56775 5.35426 7.43625 5.33626 7.272C5.34301 7.1915 5.33976 7.122 5.29876 7.122C5.24701 7.122 5.18676 7.402 5.19126 7.497C5.19551 7.561 5.07126 7.6345 4.95051 7.578C4.82976 7.5215 4.85001 7.378 4.91951 7.2985C4.97401 7.2335 5.07126 7.0985 5.10201 7.058C5.12526 7.033 5.13326 6.947 5.07851 6.9575C5.02376 6.968 4.88176 7.1575 4.79851 7.23375C4.71526 7.31 4.66051 7.14425 4.61951 7.05875C4.55651 6.88025 4.86026 6.8745 4.95451 6.82375C5.10501 6.74475 5.22001 6.5155 5.24851 6.35625C5.28401 6.15125 5.32851 6.06675 5.43451 6.06225C5.54201 6.06025 5.58451 6.15125 5.62026 6.35625H5.61976Z"
        fill="#050505"
      />
    </g>
    <defs>
      <clipPath id="clip0_2878_8052">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const NewYorkerFavicon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2879_8064)">
      <path
        d="M2.37574 12.7435C2.46474 12.38 2.59649 11.911 2.76974 11.4827C2.86074 11.2587 2.96324 11.0462 3.08024 10.8627L3.04974 10.8657L2.99424 10.8632L2.76374 10.8272L2.48424 10.8017C2.43179 10.7959 2.37901 10.7934 2.32624 10.7945L2.03949 12.77L2.37574 12.7435Z"
        fill="#CCCCCC"
      />
      <path
        d="M3.08425 5.8475L3.0625 5.8085C3.0295 5.7485 3.02 5.681 3.0215 5.6085C3.008 5.515 3.08825 5.4475 3.1265 5.366C3.1765 5.29975 3.22275 5.2575 3.271 5.20275L3.31925 5.149L3.50925 4.901L3.65925 4.676L3.76425 4.488L3.84675 4.3505L3.86125 4.33225L3.8755 4.32975C3.8535 4.149 3.458 4.55575 3.283 4.69725C3.25975 4.71653 3.23413 4.73275 3.20675 4.7455L3.14675 4.933L3.12675 4.9805L3.07575 5.073L2.96975 5.2045L2.89825 5.2815L2.885 5.291L2.8675 5.3035L2.85 5.308L2.83925 5.29125L2.83775 5.27425L2.84025 5.2505L2.867 5.1505L2.91575 5.02925C2.93875 4.98925 2.94825 4.94425 2.9575 4.89925C2.98116 4.83149 3.00037 4.76226 3.015 4.692C2.9415 4.68775 2.7825 4.667 2.6375 4.56825C2.44125 4.4345 2.2185 4.0865 2.14675 4.247C2.075 4.4075 2.26175 4.652 2.28925 4.8715C2.315 5.07325 2.361 5.54075 2.17325 5.7725C2.07575 5.89375 2.025 6.00875 2.02225 6.07825L2.03725 6.06875L2.14175 6.00675L2.3 5.91C2.3575 5.87925 2.4045 5.8315 2.4575 5.7935L2.4975 5.761L2.565 5.705L2.68 5.613L2.759 5.55L2.774 5.5425L2.794 5.5325L2.813 5.5305L2.82175 5.5505L2.8205 5.56925L2.814 5.59425L2.8115 5.60025C2.85225 5.672 2.9815 5.88875 3.07075 5.911C3.0965 5.9175 3.11025 5.91675 3.11775 5.9075C3.11125 5.8995 3.107 5.8715 3.107 5.8715L3.08425 5.8475Z"
        fill="#92C5EB"
      />
      <path
        d="M9.66949 4.03001C9.99449 4.09926 10.3407 4.20126 10.6995 4.34601L12.6075 1.30001C12.2405 1.13701 11.9462 1.04251 11.7175 0.989014L9.66949 4.03001ZM11.0107 4.48001L11.0712 4.50651L11.1892 4.56651L13.15 1.57951L12.911 1.44701L11.0107 4.48001Z"
        fill="#A6A6A6"
      />
      <path
        d="M6.9 12.7562V12.255C6.31875 12.4605 5.925 12.753 5.539 13.1087L4.825 13.79C4.88485 13.8973 4.95079 14.001 5.0225 14.1007C5.462 13.6012 6.068 13.1192 6.8975 12.7557L6.9 12.7562ZM4.84575 14.3157L4.61575 13.9842C4.36575 14.2072 4.0845 14.4362 3.74075 14.6642C3.2495 14.9892 2.81875 15.0682 2.607 15.0852L2.6025 15.0872H2.58075L2.49825 15.0905C2.48 15.0905 2.46925 15.0897 2.46625 15.0895L2.44125 15.0882L2.22275 15.0795L2.17875 15.0685L2.08675 15.0435L1.943 14.968L1.8585 14.893L1.849 14.8767L1.8375 14.8517L1.836 14.8257L1.859 14.799L1.8795 14.7872L1.9055 14.7777L2.0055 14.7632L2.1205 14.76H2.236L2.2575 14.761C2.22425 14.606 2.1895 14.3725 2.1895 14.0627C2.1895 13.8757 2.2045 13.6587 2.23825 13.4202L2.26975 13.2152L2.298 13.0807L2.29425 13.081L1.9875 13.1055L1.17 13.1712L1.1405 13.288L1.0805 13.5195L0.969999 13.936L0.810499 14.5122L0.355499 16H3.99C4.07649 15.691 4.19357 15.3913 4.3395 15.1055C4.48157 14.8267 4.65027 14.5623 4.84325 14.316L4.84575 14.3157ZM12.9075 13.425C12.3825 12.736 11.8365 12.392 11.415 12.2165C11.3311 12.1813 11.2453 12.1508 11.158 12.1252V12.4945C11.1996 12.5532 11.2374 12.6145 11.2712 12.678L11.3212 12.7017L11.4202 12.7627L11.8212 13.0877C11.9707 13.2377 12.1112 13.394 12.2377 13.5662C12.3639 13.7401 12.4719 13.9265 12.56 14.1225C12.8182 14.6985 12.839 15.4165 12.5562 15.9957H15.4055C14.4875 15.332 13.697 14.4557 12.907 13.4207L12.9075 13.425ZM12.298 14.3055L12.2235 14.1255C12.1668 13.9987 12.1014 13.8759 12.028 13.758C11.9147 13.558 11.778 13.3692 11.6292 13.188L11.3737 12.8942C11.4645 13.118 11.5445 13.4202 11.5445 13.7887C11.5445 14.063 11.5 14.3727 11.3845 14.7137C11.247 15.1137 11.0277 15.5552 10.7527 15.9997H12.2157L12.2582 15.9005C12.5082 15.4047 12.4992 14.8222 12.2975 14.308L12.298 14.3055Z"
        fill="#C9252C"
      />
      <path
        d="M13.1742 13.2232C12.6122 12.4877 12.0157 12.1042 11.5442 11.9082C11.4017 11.8492 11.2732 11.8082 11.1582 11.7782V9.38575C11.1585 9.27575 11.1645 9.23575 11.1733 9.19975C11.1803 9.16875 11.1965 9.12425 11.217 9.05075C11.3675 8.8765 11.4208 8.69425 11.4233 8.55225L11.4963 8.55525C11.6867 8.55679 11.8726 8.49701 12.0265 8.38475C12.166 8.28275 12.2545 8.16975 12.305 8.06375C12.3065 8.06075 12.307 8.05825 12.3083 8.05525L13.557 8.79025C13.582 8.80525 13.614 8.80525 13.64 8.7915C13.6527 8.78443 13.6633 8.77424 13.6709 8.7619C13.6785 8.74956 13.6829 8.73548 13.6835 8.721L13.6842 8.669C13.684 8.471 13.66 7.734 13.3217 6.8925C13.1912 6.5675 13.0123 6.2265 12.77 5.89625L14.6237 3.0125C14.6477 2.97517 14.6559 2.92985 14.6465 2.8865C14.6432 2.8715 14.584 2.602 14.3515 2.25C14.119 1.898 13.713 1.46425 13.0275 1.125C12.0788 0.658746 11.4907 0.583496 11.2107 0.583496C11.095 0.583496 11.0325 0.595996 11.0203 0.599246C10.9788 0.608746 10.9435 0.632996 10.9195 0.667746L8.68575 3.9095L8.52475 3.90525C7.19725 3.9055 6.36125 4.4015 6.353 4.40625C6.3275 4.42125 6.31175 4.44875 6.312 4.47875C6.31225 4.50875 6.32775 4.53625 6.3535 4.55125L7.5765 5.2705C7.2915 5.576 6.94575 5.8955 6.627 6.07125L6.1795 6.33175C6.126 6.36925 6.0795 6.40675 6.0405 6.45725C5.99726 6.51139 5.97341 6.57846 5.97275 6.64775C5.973 6.71225 5.99275 6.76775 6.01675 6.81575C6.0655 6.90925 6.13825 6.96075 6.20975 7.0025C6.31825 7.06375 6.43725 7.101 6.5335 7.1265L6.6285 7.149L6.8435 7.4805L6.73975 7.858C6.70116 7.89037 6.66567 7.92628 6.63375 7.96525C6.55875 8.05975 6.473 8.20925 6.47325 8.40325C6.473 8.53725 6.50775 8.655 6.56125 8.74825C6.64175 8.88925 6.75675 8.97525 6.84875 9.02675L6.89725 9.05175V11.8982C6.204 12.1225 5.73375 12.4667 5.309 12.859L4.669 13.4732L4.6195 13.3717C4.39825 12.8717 4.2445 12.3425 4.183 11.7952C4.1015 11.2827 4.10175 10.7577 4.13225 10.237L4.13525 10.1845L4.24925 10.0957C4.45 9.94825 4.65675 9.7965 4.82025 9.602C4.984 9.409 5.102 9.163 5.10075 8.8645L5.09525 8.747C5.09475 8.7415 5.09175 8.737 5.09025 8.7315L5.101 8.1015L5.12225 7.873L5.14225 7.6245L5.13225 7.417L5.12225 7.367L5.1085 7.3345L5.0785 7.30775L5.0505 7.3265L5.02675 7.3595L5.00975 7.3845L4.93475 7.561L4.8355 7.8295C4.81925 7.8815 4.8055 7.947 4.79175 8.0095L4.77675 8.0965C4.75925 8.31475 4.76025 8.526 4.7655 8.73725C4.76375 8.74975 4.7605 8.76225 4.7615 8.776L4.76575 8.862C4.76503 8.90273 4.76118 8.94335 4.75425 8.9835C4.7305 9.1335 4.6655 9.2585 4.56375 9.3835C4.462 9.5085 4.32225 9.62 4.16875 9.735L4.235 9.2345L4.3225 8.7105L4.3285 8.6405L4.311 8.593L4.2705 8.626L4.22975 8.724C4.1485 8.96525 4.08475 9.212 4.02475 9.4605L3.94975 9.901C3.76225 10.051 3.594 10.2195 3.46525 10.3622L3.284 10.5772L3.23075 10.6487L3.212 10.6777L3.20825 10.6845C3.19825 10.6927 3.18725 10.6995 3.17925 10.71C3.155 10.742 3.1325 10.7775 3.10925 10.8125L3.10725 10.8087L3.07225 10.7792L3.04475 10.7572L2.83775 10.6432L2.49625 10.5342L2.36425 10.5167L2.28025 10.5057L2.17725 10.4947C2.16275 10.4945 2.14675 10.4952 2.1315 10.4952L1.798 10.5147C1.947 10.3422 2.124 10.1965 2.32125 10.1727C2.39775 10.1527 2.47625 10.1672 2.55425 10.1852C2.63175 10.209 2.711 10.242 2.77925 10.2952C2.84225 10.3315 2.90225 10.3777 2.95725 10.4295L2.99775 10.462L3.02775 10.482C3.02775 10.482 3.07575 10.542 3.0785 10.5265C3.08125 10.511 3.0635 10.459 3.0635 10.459L3.04975 10.4152L3.03725 10.3827C2.99876 10.315 2.95371 10.2512 2.90275 10.1922C2.83475 10.1172 2.75025 10.0597 2.657 10.011C2.65825 10.006 2.6615 10.0022 2.6625 9.99725L2.75 9.507L2.769 9.38525L2.878 8.43625C2.8805 8.2405 2.9125 8.0925 2.96175 8.01375C2.97294 7.99532 2.98637 7.97836 3.00175 7.96325L3.0235 7.96475L3.0635 7.95775C3.2815 7.91275 3.4885 7.86775 3.595 7.9285C3.66175 7.966 3.689 8.04525 3.6535 8.192L3.6145 8.5285L3.57825 8.878C3.57525 8.97875 3.58325 9.075 3.58925 9.172L3.60025 9.237L3.61275 9.28025L3.63725 9.31175L3.65575 9.27925L3.67025 9.228L3.68075 9.18925L3.73075 8.93C3.75425 8.8045 3.79525 8.67075 3.82775 8.5405L3.8745 8.29225L3.892 8.17075C3.9225 8.05075 3.864 7.8095 3.7095 7.71325C3.6695 7.68825 3.6245 7.67075 3.572 7.67C3.5205 7.66325 3.47125 7.66075 3.42325 7.66125C3.4775 7.61125 3.567 7.548 3.75225 7.53125L3.80975 7.52625L3.89525 7.51875C4.0185 7.55 4.0735 7.64225 4.0265 7.84625L3.99775 8.12375L3.9645 8.40875L3.95275 8.64875L3.95575 8.70375L3.9625 8.74125L3.982 8.77075L4.0045 8.74775L4.0255 8.70775L4.0405 8.67725L4.1135 8.46725L4.21 8.14225L4.24925 7.93475L4.26675 7.83575C4.27275 7.69075 4.29125 7.5025 4.1025 7.34825C4.056 7.32575 4.01 7.30975 3.964 7.297C4.001 7.2695 4.064 7.237 4.17075 7.2095L4.277 7.183C4.40025 7.21125 4.418 7.3375 4.4 7.538L4.382 7.763L4.3645 7.99175L4.3625 8.18425L4.3675 8.2285L4.375 8.259L4.3955 8.284L4.4175 8.2665L4.437 8.235L4.45125 8.211L4.51625 8.042L4.595 7.7795L4.62675 7.6145L4.63925 7.53525C4.70175 7.35125 4.57825 6.9885 4.31625 6.942L4.34125 6.834C4.35374 6.78927 4.37101 6.74603 4.39275 6.705C4.416 6.66325 4.46075 6.63875 4.48775 6.6265C4.68325 6.564 5.079 6.7425 5.386 6.7415C5.39175 6.76825 5.3975 6.80025 5.385 6.8215C5.35075 6.879 5.25375 6.91075 5.146 6.937C5.03825 6.96325 4.96725 6.9505 4.8775 6.9585L4.8175 6.9635L4.7745 6.972L4.7355 6.993L4.758 7.0265L4.806 7.0555L4.8445 7.07625C4.9345 7.09875 5.032 7.12625 5.127 7.1225C5.258 7.1335 5.454 7.0915 5.586 6.956C5.66175 6.861 5.688 6.744 5.6755 6.6C5.6655 6.48875 5.511 6.39675 5.4405 6.4185C5.428 6.4205 5.41625 6.4195 5.40425 6.421L5.45175 6.366C5.50675 6.2735 5.555 6.176 5.59 6.071C5.63 5.9375 5.654 5.794 5.6375 5.6475C5.606 5.4825 5.5775 5.3125 5.397 5.16575C5.341 5.14825 5.2685 5.119 5.2195 5.139C5.054 5.19325 4.98825 5.3065 4.9345 5.40575C4.876 5.50575 4.852 5.61825 4.8255 5.72575C4.8195 5.81825 4.804 5.90675 4.818 5.99775L4.828 6.05775L4.83925 6.09725L4.86175 6.12225L4.87925 6.09225L4.893 6.04625L4.903 6.012C4.9105 5.9345 4.937 5.86025 4.96225 5.78775C4.998 5.67875 5.04725 5.571 5.11375 5.48675C5.14425 5.4275 5.19625 5.38925 5.23225 5.36275C5.25175 5.36175 5.27475 5.33525 5.28025 5.35575C5.3265 5.36 5.417 5.53775 5.43225 5.67475C5.45775 5.8105 5.44725 5.958 5.4015 6.098C5.3825 6.1905 5.348 6.2825 5.306 6.37L5.284 6.41875C5.04025 6.39525 4.794 6.257 4.42 6.3155C4.42 6.3155 4.32 6.34 4.2675 6.36625C4.25625 6.372 4.2515 6.37625 4.25 6.3795C4.176 6.425 4.12925 6.48775 4.095 6.54875C4.03675 6.65675 4.008 6.77225 3.98875 6.8655L3.97925 6.918C3.82825 6.97175 3.72425 7.043 3.6605 7.126C3.63858 7.15383 3.62027 7.18432 3.606 7.21675C3.3985 7.25775 3.2495 7.351 3.1625 7.44925C3.12906 7.48655 3.10027 7.52777 3.07675 7.572C3.0097 7.58217 2.94487 7.60365 2.885 7.6355C2.7505 7.708 2.66175 7.83375 2.61325 7.9705C2.56475 8.10725 2.54575 8.262 2.54275 8.4305C2.54025 8.6195 2.489 9.0055 2.43775 9.33375L2.36825 9.75875L2.33725 9.937L2.25625 9.9435C1.928 10.0115 1.70675 10.2465 1.53025 10.4697L1.49625 10.5312L1.49125 10.5552L1.19625 10.609L1.1955 10.613C1.1195 10.6275 1.06 10.69 1.058 10.7705L1.055 10.853L0.9695 12.098L0.818 13.2097L0.4035 14.728L0 16H0.35575L0.81375 14.5182L0.97475 13.9362L1.08375 13.5255L1.14375 13.294L1.17325 13.1772L2.30075 13.0865L2.2725 13.221L2.241 13.426C2.2075 13.6645 2.19225 13.8815 2.19225 14.0685C2.19225 14.3785 2.22725 14.612 2.26025 14.7667L2.23875 14.7657L2.12325 14.7652L2.00825 14.7685L1.90825 14.783L1.88225 14.7925L1.86175 14.8042L1.83875 14.831L1.84025 14.857L1.85175 14.882L1.86125 14.8982L1.94575 14.9707L2.0895 15.0462L2.1815 15.0712L2.2255 15.0822L2.444 15.091L2.469 15.0922L2.501 15.0932L2.5835 15.09H2.60525L2.60975 15.088C2.8215 15.071 3.25225 14.9942 3.7435 14.667C4.085 14.4395 4.366 14.2102 4.616 13.987L4.846 14.3185C4.636 14.5865 4.471 14.8547 4.34225 15.108C4.171 15.4442 4.06225 15.753 3.99275 16.0025H4.34275C4.41325 15.77 4.519 15.4895 4.67925 15.189C4.78977 14.9822 4.91598 14.7842 5.05675 14.5967C5.31025 14.8435 5.54425 15.1102 5.84575 15.2967C6.0795 15.4727 6.33483 15.618 6.6055 15.729L6.78475 15.8057L6.90675 15.8515L7.00275 15.8677L6.92625 15.8017L6.79625 15.7142L6.6975 15.6492C6.468 15.5152 6.238 15.385 6.045 15.2027C5.7265 14.9765 5.4725 14.6812 5.22375 14.3897C5.6075 13.9362 6.13575 13.493 6.86625 13.144C7.07175 13.055 7.28575 12.983 7.50425 12.934C7.6135 12.902 7.72375 12.8715 7.83675 12.8577L8.17475 12.796L8.45875 12.7515L8.52325 12.734L8.56725 12.716L8.60075 12.6835L8.569 12.6595L8.5165 12.642L8.4765 12.6295L8.1995 12.587C8.0575 12.567 7.917 12.5845 7.77275 12.582C7.68563 12.5854 7.59898 12.5964 7.51375 12.6147L7.39175 12.6397L7.23675 12.6817V9.22825C7.29175 9.13 7.44125 8.90325 7.72275 8.682C8.0435 8.427 8.53525 8.168 9.2735 8.082L9.68725 8.052L9.82475 8.04775C10.3932 8.048 10.7058 8.17275 10.873 8.28275C10.957 8.33775 11.0055 8.39025 11.033 8.42525C11.0425 8.43757 11.0512 8.45051 11.059 8.464L11.0623 8.4705L11.063 8.47025C11.0697 8.48496 11.0786 8.49861 11.0892 8.51075L11.091 8.537C11.0897 8.615 11.0698 8.72075 10.9455 8.856L10.9165 8.88725L10.9058 8.92875L10.8503 9.12125C10.8335 9.18975 10.826 9.26625 10.826 9.38625V12.615L10.8655 12.6615C10.8743 12.672 11.213 13.0895 11.2122 13.7915C11.2122 14.0295 11.174 14.301 11.0702 14.6052C10.9265 15.0282 10.6777 15.5112 10.3595 16.0002H10.7565C11.0315 15.556 11.2505 15.1167 11.3883 14.7142C11.5038 14.3757 11.5483 14.066 11.5483 13.7892C11.5483 13.4207 11.4682 13.1182 11.3775 12.8947L11.633 13.1885C11.7813 13.3695 11.9185 13.5585 12.0317 13.7585C12.1052 13.8764 12.1705 13.9992 12.2273 14.126L12.3018 14.306C12.5033 14.8205 12.5147 15.4027 12.2625 15.8985L12.22 15.9977H12.561C12.8435 15.4187 12.8235 14.7007 12.5647 14.1245C12.4767 13.9265 12.3668 13.7407 12.2423 13.5682C12.1163 13.3957 11.9755 13.2375 11.8258 13.0897C11.7008 12.9722 11.5628 12.8647 11.4248 12.7622L11.3258 12.7012L11.2758 12.6775C11.2419 12.614 11.2041 12.5527 11.1625 12.494V12.125L11.4195 12.2162C11.8408 12.392 12.3845 12.7362 12.912 13.4247C13.702 14.4572 14.4925 15.3335 15.4105 15.9997H16L15.9105 15.9397C14.901 15.288 14.045 14.361 13.1745 13.2227L13.1742 13.2232ZM7.51 8.419C7.35 8.5465 7.22875 8.67325 7.136 8.78525L7.1085 8.77775C7.04765 8.75797 6.99101 8.72702 6.9415 8.6865C6.9055 8.6565 6.873 8.62025 6.84975 8.576C6.8265 8.53175 6.8105 8.4785 6.81025 8.40525C6.81025 8.30925 6.85025 8.23575 6.89525 8.17975C6.91775 8.15225 6.94075 8.13075 6.957 8.11725L6.9755 8.10275V8.101L7.0305 8.066L7.16975 7.5585L7.22525 7.5575L7.2895 7.54625L7.3535 7.52525L7.406 7.49025L7.41775 7.47675L7.42525 7.46275L7.43025 7.43725L7.424 7.41875L7.414 7.405L7.4065 7.3955L7.3565 7.3625L7.281 7.3275L7.23525 7.3175L7.2135 7.31325L7.1335 7.31425L6.97925 7.07675L7.06575 7.04825L7.18625 6.97725L7.26125 6.88325L7.2725 6.85675L7.27575 6.83425L7.26575 6.80225L7.242 6.78825L7.217 6.78225L7.1995 6.7785L7.107 6.78275L6.97875 6.7815L6.905 6.7835L6.8575 6.78975C6.7605 6.80225 6.67075 6.80125 6.571 6.78875L6.568 6.78975C6.54875 6.78425 6.52975 6.7785 6.5105 6.77225C6.4565 6.75375 6.4035 6.731 6.3665 6.70875C6.348 6.69775 6.3335 6.687 6.325 6.67875L6.31625 6.6695L6.31475 6.6675L6.3105 6.6575C6.326 6.64 6.373 6.6035 6.4505 6.5575C6.532 6.50825 6.645 6.44675 6.788 6.367C7.183 6.1465 7.56425 5.781 7.8705 5.447L7.958 5.35075L7.9855 5.3195C8.13782 5.14659 8.28383 4.96822 8.42325 4.78475C8.64525 4.84975 9.19475 5.0335 9.8215 5.409C9.87873 5.44332 9.93541 5.47858 9.9915 5.51475C9.96815 5.52904 9.94546 5.54439 9.9235 5.56075C9.75675 5.68625 9.6125 5.89 9.5235 6.19075C9.514 6.1905 9.5055 6.1895 9.49525 6.1895C9.4865 6.1895 9.47625 6.19075 9.467 6.19125C9.4213 6.19303 9.37587 6.19897 9.33125 6.209C9.29625 6.2165 9.26 6.22825 9.22325 6.243C9.1725 6.2635 9.12125 6.28875 9.0715 6.32675C8.95325 6.41675 8.8585 6.56175 8.804 6.75925C8.68325 6.763 8.50775 6.79075 8.3365 6.90925C8.169 7.02175 8.02075 7.2205 7.946 7.51825C7.756 7.544 7.5785 7.6275 7.4495 7.754C7.3935 7.79825 7.3665 7.8615 7.3245 7.914C7.28825 7.971 7.2555 8.02775 7.23775 8.08975L7.20525 8.24725V8.28475L7.21125 8.31225L7.23625 8.339L7.26625 8.334L7.2945 8.31825L7.3145 8.30575L7.413 8.21025C7.453 8.15675 7.503 8.11525 7.555 8.07975L7.6335 8.00275C7.6335 8.00275 7.79425 7.84375 8.0885 7.81725L8.08775 7.81575C8.1685 7.81725 8.24125 7.76575 8.2565 7.68125C8.3115 7.393 8.4215 7.26225 8.52825 7.1875C8.635 7.11275 8.75825 7.0975 8.83625 7.0975C8.8605 7.0975 8.88025 7.099 8.89275 7.1005L8.90625 7.10225L8.90825 7.1025L9.079 7.1355L9.105 6.9625C9.13925 6.7445 9.21175 6.64925 9.279 6.5965C9.34625 6.54375 9.428 6.529 9.498 6.529C9.52557 6.529 9.55308 6.53134 9.58025 6.536L9.60175 6.5405L9.60575 6.5415L9.779 6.593L9.8165 6.4155C9.81775 6.4105 9.819 6.40625 9.82 6.4015C9.89125 6.08275 10.0117 5.922 10.1285 5.83325C10.1849 5.79071 10.2491 5.7597 10.3175 5.742C10.384 5.79096 10.4496 5.84131 10.514 5.893C10.7022 6.04332 10.8807 6.20539 11.0485 6.37825C10.9848 6.42394 10.918 6.46505 10.8485 6.50125C10.796 6.52875 10.7527 6.5555 10.674 6.58425L10.4672 6.6625C10.4672 6.6625 10.4303 6.67575 10.4323 6.69175C10.4398 6.74675 10.6868 6.773 10.6868 6.773C10.7718 6.787 10.8562 6.779 10.945 6.765L11.1025 6.7255L11.1737 6.6905C11.2097 6.673 11.2423 6.6495 11.2753 6.6265C11.532 6.9265 11.7692 7.2715 11.9695 7.6655L12.031 7.78925L12.0315 7.79925C12.0315 7.81925 12.0258 7.8505 12.0135 7.88675C12.0095 7.89875 12.0075 7.91175 12.001 7.92275C11.9748 7.97725 11.9265 8.04525 11.827 8.1185C11.714 8.201 11.598 8.2235 11.4952 8.2235C11.4302 8.2235 11.3728 8.2135 11.3328 8.2035C11.3175 8.19974 11.3024 8.1954 11.2875 8.1905L11.2775 8.187L11.2773 8.18675L11.2762 8.1865L11.2773 8.18675L11.2572 8.1785C11.2097 8.12475 11.144 8.0645 11.0548 8.0035C11.0055 7.971 10.9477 7.9395 10.8842 7.90975C10.9372 7.88274 10.9883 7.85208 11.037 7.818C11.037 7.818 11.1813 7.689 11.2233 7.6305C11.2518 7.5905 11.2873 7.53375 11.3108 7.4705C11.3208 7.443 11.329 7.415 11.3328 7.3855C11.333 7.383 11.334 7.3805 11.3343 7.378C11.3389 7.35005 11.3414 7.32181 11.342 7.2935C11.344 7.2455 11.3362 7.19761 11.319 7.15275L11.2975 7.107L11.277 7.0795C11.277 7.0795 11.257 7.035 11.239 7.0455C11.221 7.056 11.222 7.093 11.222 7.093C11.222 7.093 11.2178 7.1355 11.1885 7.2025C11.1785 7.225 11.1653 7.2525 11.149 7.27675C11.136 7.29875 11.12 7.32175 11.099 7.34625C11.0689 7.38649 11.0354 7.42412 10.999 7.45875L10.889 7.53975L10.8335 7.57275C10.6842 7.6815 10.4903 7.734 10.3103 7.747C10.1476 7.72325 9.98339 7.71163 9.819 7.71225C9.6425 7.71225 9.447 7.7235 9.229 7.74875C9.1965 7.7525 9.1665 7.75875 9.135 7.763C8.38675 7.8665 7.8575 8.1405 7.51 8.41975V8.419ZM10.63 5.7345L10.6292 5.73425L10.63 5.7345ZM11.1895 4.569L11.0715 4.509C11.051 4.499 11.0315 4.4915 11.011 4.4825L12.914 1.4475C12.9953 1.48855 13.075 1.53266 13.153 1.57975L11.1897 4.56925L11.1895 4.569ZM10.6995 4.3465C10.3408 4.2015 9.997 4.09975 9.6695 4.0305L11.7175 0.991746C11.9465 1.0455 12.2405 1.13975 12.6075 1.30275L10.6995 4.3465ZM3.90825 11.8325C3.95825 12.353 4.1045 12.86 4.28525 13.3537L4.44725 13.682C4.1915 13.914 3.9065 14.1502 3.55475 14.3845C3.13725 14.6627 2.77675 14.7312 2.6005 14.7482C2.56975 14.6215 2.5285 14.3915 2.5285 14.0682C2.5285 13.7692 2.5635 13.3912 2.676 12.9417L2.73275 12.7147L2.72975 12.715C2.76775 12.566 2.8115 12.404 2.86225 12.2367C3.00925 11.7492 3.216 11.2227 3.44975 10.9175C3.45175 10.915 3.45225 10.9115 3.454 10.909C3.474 10.894 3.491 10.8752 3.50275 10.8527L3.50375 10.8535L3.50475 10.852C3.51225 10.8395 3.544 10.797 3.58725 10.7435C3.68363 10.6259 3.7861 10.5134 3.89425 10.4065L3.88575 10.5015C3.86025 10.9432 3.85075 11.3902 3.90825 11.8332V11.8325ZM1.325 11.893C1.36575 11.4217 1.3835 11.032 1.39 10.8672C1.6575 10.811 1.93375 10.7872 2.205 10.7932C2.245 10.7947 2.286 10.7942 2.32675 10.7942C2.37952 10.7932 2.4323 10.7956 2.48475 10.8015L2.76425 10.827L2.99475 10.863L3.05025 10.8655L3.08075 10.8625C2.96375 11.0462 2.86125 11.2587 2.77025 11.4825C2.597 11.9105 2.46525 12.38 2.37625 12.7432L1.21875 12.8365C1.265 12.513 1.29975 12.1872 1.32525 11.893H1.325ZM3.5125 10.8275L3.48075 10.817L3.5125 10.8275ZM3.50375 10.8505L3.4795 10.8375L3.50375 10.8505ZM3.51 10.839C3.5095 10.8405 3.5085 10.843 3.508 10.844C3.5085 10.843 3.50925 10.8405 3.51 10.839ZM2.485 14.754L2.484 14.7727L2.485 14.754ZM4.8255 13.79L5.53675 13.1085C5.9255 12.7527 6.31625 12.4602 6.89775 12.2547V12.756C6.0685 13.1192 5.46225 13.601 5.02275 14.101C4.95275 13.9997 4.88525 13.8972 4.82525 13.7902L4.8255 13.79Z"
        fill="black"
      />
      <path
        d="M11.2087 13.7915C11.2095 13.0915 10.8707 12.6715 10.862 12.6615L10.8227 12.6148V9.38651C10.8227 9.26651 10.8302 9.18976 10.847 9.12151L10.9025 8.92901L10.9132 8.88751L10.9422 8.85626C11.0665 8.72126 11.0865 8.61526 11.0877 8.53726C11.0877 8.52776 11.0867 8.51976 11.086 8.51101C11.076 8.49851 11.066 8.48601 11.0597 8.47051L11.059 8.47076L11.0557 8.46426C11.048 8.45076 11.0393 8.43782 11.0297 8.42551C10.9847 8.36949 10.9306 8.32133 10.8697 8.28301C10.7022 8.17301 10.3897 8.04801 9.82149 8.04801L9.68399 8.05226C9.74649 8.11351 9.68774 8.22801 9.05299 8.42551C8.21624 8.68551 8.13899 9.09151 8.14299 9.25201L8.14849 9.24701L8.43949 9.04701C8.60499 8.96901 8.76449 8.87401 8.94099 8.82201C9.12349 8.74701 9.33099 8.69551 9.50849 8.67351C9.68599 8.65151 9.92099 8.64901 9.92099 8.64901C10.0627 8.65751 10.204 8.65201 10.3402 8.69901L10.6072 8.77451L10.6452 8.78876L10.6947 8.80826L10.7232 8.82776L10.6867 8.84026L10.6417 8.84226L10.5757 8.84026L10.2907 8.81526C10.1782 8.79026 10.0607 8.81226 9.94649 8.81476C9.83249 8.82476 9.75474 8.81926 9.60449 8.84376L9.48899 8.86576C9.3214 8.88771 9.15684 8.92864 8.99849 8.98776C8.85699 9.02201 8.72474 9.08376 8.58974 9.13951C8.48049 9.17801 8.38224 9.23951 8.27724 9.28951L8.26224 9.29701C8.50724 9.24201 9.11399 9.12951 9.60724 9.22501C9.81974 9.26576 9.86974 9.31501 9.84424 9.36176L9.96099 9.33326L10.2327 9.26201L10.4462 9.20026L10.607 9.16276L10.631 9.16076L10.6627 9.16376L10.6477 9.19451L10.6367 9.20826L10.5377 9.27426L10.3385 9.37726L10.0135 9.50226L9.65524 9.60226L9.55974 9.62151L9.45024 9.63476L9.59274 13.0308C9.59274 13.0308 9.95674 14.4448 8.58624 16.0058H10.3567C10.6752 15.517 10.9237 15.0343 11.0675 14.6108C11.1712 14.3065 11.2095 14.035 11.2095 13.797L11.2087 13.7915ZM10.245 6.62051L10.222 6.63301L10.1362 6.68301L10.0512 6.73301L9.89024 6.82551C9.89024 6.82551 10.1567 7.22051 9.62399 7.37976C9.40224 7.44626 9.31349 7.37976 9.31349 7.37976C9.31349 7.37976 9.27949 7.58301 9.13774 7.76726L9.23174 7.75301C9.42755 7.72962 9.62454 7.71743 9.82174 7.71651C9.98613 7.7159 10.1503 7.72751 10.313 7.75126C10.493 7.73826 10.687 7.68576 10.8362 7.57701L10.8917 7.54401L11.0017 7.46301C11.0382 7.42839 11.0716 7.39075 11.1017 7.35051L11.1517 7.28101C11.168 7.25426 11.1817 7.23101 11.1912 7.20676C11.2205 7.14001 11.2247 7.09726 11.2247 7.09726C11.2247 7.09726 11.2235 7.05976 11.2417 7.04726C11.26 7.03476 11.2797 7.08126 11.2797 7.08126L11.3002 7.10626L11.3217 7.15201C11.3389 7.19687 11.3467 7.24477 11.3447 7.29276C11.3442 7.32107 11.3417 7.3493 11.3372 7.37726C11.337 7.37976 11.336 7.38226 11.3357 7.38476C11.3317 7.41377 11.3243 7.44221 11.3137 7.46951C11.29 7.53251 11.2545 7.58951 11.2262 7.62951C11.1842 7.68826 11.04 7.81701 11.04 7.81701C10.9913 7.8511 10.9402 7.88176 10.8872 7.90876C10.9462 7.936 11.0032 7.96732 11.0577 8.00251C11.1333 8.05086 11.2015 8.10979 11.2602 8.17751L11.2802 8.18576L11.2902 8.18951L11.3352 8.20251C11.3884 8.21567 11.443 8.22239 11.4977 8.22251C11.6167 8.22416 11.7331 8.18733 11.8295 8.11751C11.929 8.04401 11.9795 7.97626 12.0035 7.92176C12.01 7.90826 12.0117 7.89776 12.016 7.88576C12.0285 7.84951 12.034 7.81826 12.034 7.79876L12.0335 7.78876L11.972 7.66501C11.7828 7.29227 11.5497 6.94347 11.2777 6.62601C11.2447 6.64901 11.2122 6.67276 11.1762 6.69001L11.105 6.72501L10.9475 6.76451C10.8587 6.77851 10.774 6.78651 10.6892 6.77251C10.6892 6.77251 10.4425 6.74626 10.4347 6.69126C10.4322 6.67526 10.4697 6.66201 10.4697 6.66201L10.6765 6.58376C10.7552 6.55476 10.7982 6.52826 10.851 6.50076C10.9205 6.46457 10.9873 6.42347 11.051 6.37776C10.8833 6.20491 10.7048 6.04291 10.5165 5.89276C10.5997 6.11676 10.6182 6.42201 10.2465 6.62476L10.245 6.62051Z"
        fill="#CCCCCC"
      />
      <path
        d="M7.84998 6.02501L7.85998 6.02601L7.86348 6.05101L7.87348 6.07226L7.88348 6.08526L7.89773 6.09126C8.02273 6.12437 8.15378 6.12754 8.28023 6.10051L8.39874 6.05701L8.50373 5.99076L8.57224 5.91576L8.58298 5.89401L8.58799 5.87601L8.58473 5.86351L8.58223 5.85401L8.56423 5.84976H8.56174L8.54473 5.85126L8.53023 5.85251L8.44848 5.87751L8.32973 5.90076L8.26123 5.91451L8.22873 5.91626C8.18498 5.92501 8.14023 5.92876 8.09523 5.92751L8.13523 5.88751L8.16523 5.85201C8.20023 5.80376 8.22174 5.75101 8.24949 5.70051L8.25799 5.67401L8.29799 5.54901L8.30748 5.44751L8.30149 5.39551L8.29523 5.38601L8.27673 5.37351L8.25673 5.36851L8.24424 5.37451L8.19049 5.43351L8.18748 5.43851L8.13848 5.51351L8.07399 5.61351L7.99898 5.72551L7.98148 5.75001L7.93473 5.82426L7.88548 5.89776L7.84198 5.95976L7.83373 5.97876L7.82948 5.99551L7.83198 6.01951L7.84998 6.02501ZM8.52498 5.05126L8.53648 5.06501L8.61724 5.12851C8.66024 5.15151 8.69273 5.19226 8.72648 5.22651L8.79198 5.28201L8.82623 5.32076C8.87684 5.36281 8.92217 5.41082 8.96124 5.46376C9.00699 5.50751 9.03948 5.56276 9.07873 5.61376L9.15374 5.71376L9.20373 5.76576L9.21548 5.77076L9.23923 5.76876L9.25848 5.75701L9.26348 5.74051L9.21348 5.50001C9.18848 5.40951 9.16498 5.38926 9.12998 5.33876C9.09078 5.27841 9.04463 5.22286 8.99249 5.17326L8.95574 5.13826C8.92024 5.10376 8.87224 5.08376 8.83074 5.05751C8.78524 5.03676 8.74398 5.00926 8.69323 5.00051L8.56823 4.98601L8.54323 4.98851L8.52398 4.99451L8.50648 5.01201L8.51398 5.03276L8.52498 5.05126ZM3.88073 4.32626L3.86023 4.32976L3.84573 4.34801L3.76323 4.48551L3.65823 4.67351L3.50823 4.89851C3.45248 4.98751 3.38423 5.06651 3.31823 5.14651L3.26998 5.20026L3.12548 5.36351C3.08723 5.44526 3.00698 5.51276 3.02048 5.60601C3.01873 5.68101 3.02873 5.74851 3.06148 5.80601L3.08323 5.84501L3.10823 5.87001C3.10823 5.87001 3.11248 5.89801 3.11898 5.90601C3.12148 5.90851 3.12398 5.90926 3.12648 5.90526C3.13698 5.88951 3.13723 5.85401 3.13723 5.85401L3.13348 5.82151L3.13423 5.79601C3.12423 5.74226 3.11598 5.59601 3.25048 5.46951L3.36848 5.35951L3.43948 5.29201L3.65698 4.99251C3.71873 4.89426 3.76698 4.78876 3.81448 4.68401L3.88198 4.47301L3.90198 4.35726L3.89873 4.34026L3.88073 4.32626ZM2.81998 5.56751L2.82123 5.54876L2.81248 5.52876L2.79348 5.53076L2.75848 5.54826L2.67948 5.61126L2.56448 5.70326L2.49698 5.75926L2.45698 5.79176C2.40398 5.82976 2.35698 5.87751 2.29948 5.90826L2.14123 6.00501L2.03673 6.06701L1.98048 6.10151L1.97398 6.11101L1.97198 6.13101L1.97998 6.14851L2.05923 6.15051L2.22923 6.12551L2.38998 6.05901C2.45198 6.02976 2.50248 5.98401 2.55948 5.94651L2.59623 5.91651L2.68873 5.81351L2.76698 5.70026L2.81348 5.59651L2.81998 5.56751ZM2.91398 5.02676L2.86523 5.14801L2.83848 5.24801L2.83598 5.27176L2.83748 5.28876L2.84823 5.30551L2.86573 5.30101L2.88323 5.28851L2.89648 5.27901L2.96798 5.20201L3.07398 5.07051L3.12498 4.97801L3.14498 4.92801C3.16882 4.8667 3.18894 4.804 3.20523 4.74026C3.23182 4.64413 3.25096 4.54609 3.26248 4.44701L3.25673 4.40276L3.24598 4.38526L3.22798 4.36176L3.20848 4.34626L3.17048 4.33551L3.13623 4.33876L3.10998 4.34626L3.08298 4.36276L3.06173 4.38776L3.04973 4.40651L3.04623 4.42801C3.04198 4.51569 3.0307 4.60289 3.01248 4.68876C2.99748 4.76076 2.97823 4.83001 2.95498 4.89626C2.94498 4.94126 2.93598 4.98626 2.91323 5.02626L2.91398 5.02676ZM7.98098 9.42551L8.05098 9.40376L8.27598 9.28676C8.38098 9.23676 8.47598 9.17551 8.58848 9.13676C8.72348 9.08101 8.85548 9.01926 8.99723 8.98501C9.15565 8.92611 9.32018 8.88519 9.48773 8.86301L9.60323 8.84101C9.75323 8.81601 9.82823 8.82201 9.94523 8.81201C10.0597 8.80951 10.1765 8.78526 10.2895 8.81251L10.5745 8.83751L10.6405 8.83951L10.6855 8.83751L10.722 8.82501L10.6935 8.80551L10.644 8.78601L10.606 8.77176L10.339 8.69626C10.2027 8.64951 10.064 8.65526 9.91973 8.64626L9.50723 8.67076C9.31283 8.69747 9.12231 8.74733 8.93973 8.81926C8.76323 8.87376 8.60373 8.96876 8.43823 9.04426L8.14723 9.24426L8.14174 9.24926L8.00673 9.36576L7.98098 9.42551ZM9.57049 9.42576L9.35298 9.47426L9.13474 9.52101L8.95399 9.56251L8.91398 9.57601L8.88898 9.58851C8.88898 9.58851 8.83898 9.59601 8.83898 9.61401C8.83898 9.63201 8.94899 9.63401 8.94899 9.63401L9.12398 9.64401C9.21398 9.64826 9.30273 9.63901 9.39273 9.63326L9.55573 9.61326L9.65123 9.59401L10.0095 9.49401L10.3345 9.36901L10.5337 9.26601L10.6327 9.20001L10.6437 9.18626L10.6587 9.15551L10.627 9.15251L10.603 9.15451L10.4422 9.19201L10.2287 9.25376L9.95698 9.32501L9.63948 9.40001L9.57049 9.42576Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_2879_8064">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const ArrowUpRight = (props) => {
  return (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.667 11.333l6.666-6.667M4.667 4.667h6.666v6.666"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
