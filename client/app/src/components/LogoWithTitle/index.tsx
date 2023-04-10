import React from "react";
import logo from "../../assets/logo.png";

interface LogoWithTitleProps {
  logoWidth: string;
  logoHeight: string;
  titleTextColor: string;
  titleTextBold: string;
  titleTextSize: string;
  titleTextLineHeight: string;
}

const LogoWithTitle: React.FC<LogoWithTitleProps> = (
  props: LogoWithTitleProps
) => {
  const {
    logoWidth,
    logoHeight,
    titleTextBold,
    titleTextColor,
    titleTextLineHeight,
    titleTextSize,
  } = props;

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <img src={logo} alt="logo" className={`${logoWidth} ${logoHeight}`} />
      <p
        className={`${titleTextSize} ${titleTextColor} ${titleTextBold} ${titleTextLineHeight}`}
      >
        JobHub
      </p>
    </div>
  );
};
export default LogoWithTitle;
