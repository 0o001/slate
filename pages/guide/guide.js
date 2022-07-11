import * as React from "react";
import * as Constants from "~/common/constants";
import * as SVG from "~/common/svg";

import WebsitePrototypeWrapper from "~/components/core/WebsitePrototypeWrapper";
import WebsiteHeader from "~/components/core/WebsiteHeader";
import Link from "next/link";

import { css } from "@emotion/react";
import { useEventListener } from "~/common/hooks";

const STYLES_ROOT = css`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${Constants.semantic.bgLight};
  color: ${Constants.semantic.textBlack};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
`;

const STYLES_CONTAINER = css`
  max-width: 700px;
  margin: 0 auto;
  padding: 80px 0;

  @media (max-width: ${Constants.sizes.mobile}px) {
    max-width: 480px;
    padding: 32px 16px;
  }
`;

const STYLES_HEADING = css`
  font-family: ${Constants.font.semiBold};
  flex-shrink: 0;
  flex-shrink: 0;
  min-width: 50%;
  max-width: 100%;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: -0.035em;
  margin-bottom: 20px;

  @media (max-width: ${Constants.sizes.mobile}px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 12px;
  }

  @keyframes heading-fade-in {
    0% {
      opacity: 0%;
      transform: translateY(30%);
    }
    100% {
      opacity: 100%;
      transform: translateY(0%);
    }
  }
  animation: heading-fade-in 300ms ease-in-out;
`;

const STYLES_BODY = css`
  font-family: ${Constants.font.medium};
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.015em;
  margin-bottom: 16px;
  min-height: 84px;

  @keyframes body-fade-in {
    0% {
      opacity: 0%;
      transform: translateY(30%);
    }
    50% {
      opacity: 0%;
      transform: translateY(30%);
    }
    100% {
      opacity: 100%;
      transform: translateY(0%);
    }
  }
  animation: body-fade-in 500ms ease-in-out;

  @media (max-width: ${Constants.sizes.mobile}px) {
    font-size: 17px;
    line-height: 24px;
    letter-spacing: -0.01em;
  }
`;

const STYLES_JUMPER = css`
  @media (max-width: ${Constants.sizes.mobile}px) {
    display: none;
  }
`;

const STYLES_FLEX = css`
  margin-top: 48px;
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${Constants.sizes.tablet}px) {
    max-width: 100%;
  }
`;

const STYLES_BUTTON = css`
  cursor: poitner;
  display: inline-flex;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  border: 1.25px solid ${Constants.semantic.borderGray};
  color: ${Constants.semantic.textBlack};

  :hover {
    background-color: ${Constants.semantic.textGray};
    color: ${Constants.semantic.textWhite};
  }
`;

const STYLES_IMGGUIDE = css`
  display: block;
  height: 498px;
  border-radius: 8px;
  margin-left: -190px;

  @keyframes jumper-fade-in {
    0% {
      opacity: 0%;
      transform: translateY(5%);
    }
    50% {
      opacity: 0%;
      transform: translateY(5%);
    }
    100% {
      opacity: 100%;
      transform: translateY(0%);
    }
  }
  animation: jumper-fade-in 700ms ease-in-out;

  @media (max-width: ${Constants.sizes.mobile}px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    border-radius: 4px;
  }
`;

const STYLES_MOBILEGUIDE = css`
  display: none;

  @media (max-width: ${Constants.sizes.mobile}px) {
    display: block;
    width: 100%;
    height: auto;

    @keyframes jumper-fade-in {
      0% {
        opacity: 0%;
        transform: translateY(5%);
      }
      50% {
        opacity: 0%;
        transform: translateY(5%);
      }
      100% {
        opacity: 100%;
        transform: translateY(0%);
      }
    }
    animation: jumper-fade-in 700ms ease-in-out;
  }
`;

export const useGuideKeyCommands = (next, prev) => {
  const handleKeyUp = (e) => {
    const input = document.querySelectorAll("input");
    for (let elem of input) {
      if (document.activeElement === elem) {
        return;
      }
    }
    const textarea = document.querySelectorAll("textarea");
    for (let elem of textarea) {
      if (document.activeElement === elem) {
        return;
      }
    }

    switch (e.key) {
      case "ArrowRight":
        if (next) window.location.replace(next);
        break;
      case "ArrowLeft":
        if (prev) window.location.replace(prev);
        break;
    }
  };
  useEventListener({ type: "keyup", handler: handleKeyUp });
};

export default function Guide({
  title,
  description,
  url,
  image,
  heading,
  body,
  jumper,
  imageguide,
  mobileguide,
  prev,
  next,
  ...props
}) {
  useGuideKeyCommands(next, prev);
  return (
    <WebsitePrototypeWrapper title={title} description={description} url={url} image={image}>
      <div css={STYLES_ROOT}>
        <WebsiteHeader />
        <div css={STYLES_CONTAINER}>
          <div css={STYLES_HEADING}>{heading}</div>
          <div css={STYLES_BODY}>{body}</div>
          {jumper && <div css={STYLES_JUMPER}>{jumper}</div>}
          {imageguide && <img css={STYLES_IMGGUIDE} src={imageguide} />}
          {mobileguide && <img css={STYLES_MOBILEGUIDE} src={mobileguide} />}
          <div css={STYLES_FLEX}>
            <Link href={prev}>
              <a css={STYLES_BUTTON} style={{ marginRight: `16px` }}>
                <SVG.LeftArrow height={16} width={16} />
              </a>
            </Link>
            <Link href={next}>
              <a css={STYLES_BUTTON}>
                <SVG.RightArrow height={16} width={16} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </WebsitePrototypeWrapper>
  );
}
