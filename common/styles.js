import * as Constants from "~/common/constants";

import { css } from "@emotion/react";

/* TYPOGRAPHY */

export const HEADING_01 = css`
  font-family: ${Constants.font.text};
  font-size: 1.953rem;
  font-weight: medium;
  line-height: 1.5;
  letter-spacing: -0.02px;
`;

export const HEADING_02 = css`
  font-family: ${Constants.font.text};
  font-size: 1.563rem;
  font-weight: medium;
  line-height: 1.5;
  letter-spacing: -0.02px;
`;

export const HEADING_03 = css`
  font-family: ${Constants.font.medium};
  font-size: 1.25rem;
  line-height: 1.5;
  letter-spacing: -0.02px;
`;

export const HEADING_04 = css`
  font-family: ${Constants.font.medium};
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: -0.01px;
`;

export const HEADING_05 = css`
  font-family: ${Constants.font.text};
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: -0.01px;
`;

export const PARA_01 = css`
  font-family: ${Constants.font.text};
  font-size: 1rem;
  font-weight: regular;
  line-height: 1.5;
  letter-spacing: -0.01px;
`;

export const PARA_02 = css`
  font-family: ${Constants.font.text};
  font-size: 0.875rem;
  font-weight: regular;
  line-height: 1.5;
  letter-spacing: -0.01px;
`;

export const PARA_03 = css`
  font-family: ${Constants.font.text};
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1.3;
`;

export const CODE_01 = css`
  font-family: ${Constants.font.code};
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1.3;
`;

export const CODE_02 = css`
  font-family: ${Constants.font.code};
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 1.5;
`;

/* FREQUENTLY USED */

export const HORIZONTAL_CONTAINER = css`
  display: flex;
  flex-direction: row;
`;

export const VERTICAL_CONTAINER = css`
  display: flex;
  flex-direction: column;
`;

export const HORIZONTAL_CONTAINER_CENTERED = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const VERTICAL_CONTAINER_CENTERED = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CONTAINER_CENTERED = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ICON_CONTAINER = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: -4px;
  cursor: pointer;
  color: ${Constants.system.black};

  :hover {
    color: ${Constants.system.brand};
  }
`;

export const HOVERABLE = css`
  cursor: pointer;

  :hover {
    color: ${Constants.system.brand};
  }
`;

export const MOBILE_HIDDEN = css`
  @media (max-width: ${Constants.sizes.mobile}px) {
    display: none;
    pointer-events: none;
  }
`;

export const MOBILE_ONLY = css`
  @media (min-width: ${Constants.sizes.mobile}px) {
    display: none;
    pointer-events: none;
  }
`;

/* COMMON GRIDS */
export const OBJECTS_PREVIEW_GRID = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
  grid-gap: 24px 16px;

  @media (max-width: ${Constants.sizes.mobile}px) {
    grid-gap: 20px 8px;
    grid-template-columns: repeat(auto-fill, minmax(166px, 1fr));
  }
`;

export const BUTTON_RESET = css`
  padding: 0;
  margin: 0;
  background-color: unset;
  border: none;
  ${HOVERABLE}
`;

export const COLLECTIONS_PREVIEW_GRID = css`
  display: grid;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(432px, 1fr));
  grid-gap: 24px 16px;

  @media (max-width: ${Constants.sizes.desktop}px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px 8px;
  }
`;

export const PROFILE_PREVIEW_GRID = css`
  display: grid;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(432px, 1fr));
  grid-gap: 24px 16px;

  @media (max-width: ${Constants.sizes.mobile}px) {
    grid-gap: 20px 8px;
    grid-template-columns: repeat(auto-fill, minmax(344px, 1fr));
  }
`;
