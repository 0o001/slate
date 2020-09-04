import * as React from "react";
import * as Constants from "~/common/constants";

import { css } from "@emotion/react";

const STYLES_TAB_GROUP = css`
  margin: 36px 0px 24px 0px;
  padding: 0 0 0 2px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  box-sizing: border-box;
  font-family: ${Constants.font.text};
  width: 100%;
`;

const STYLES_TAB = css`
  padding: 8px 8px 8px 0px;
  margin-right: 24px;
  cursor: pointer;
  display: inline-block;
  font-size: ${Constants.typescale.lvl1};
  font-family: ${Constants.font.medium};
  user-select: none;

  @media (max-width: ${Constants.sizes.mobile}px) {
    margin-right: 12px;
  }
`;

export class TabGroup extends React.Component {
  render() {
    return (
      <div css={STYLES_TAB_GROUP}>
        {this.props.tabs.map((tab, i) => (
          <div
            css={STYLES_TAB}
            key={tab}
            style={{
              opacity: this.props.value === i ? "100%" : "25%",
            }}
            onClick={() => this.props.onChange(i)}
          >
            {tab}
          </div>
        ))}
      </div>
    );
  }
}
