import React from "react";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
  return (
    <div className="text-center">
      <SyncLoader color="#BE123C" loading={true} css={override} size={10} />
      <p className="font-bold mt-2">Loading...</p>
    </div>
  );
};

export default Loading;
