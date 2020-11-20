/** @jsx jsx */
import { render } from "react-dom";
import { css, jsx } from '@emotion/react';

function App() {
  return <div css={[css`color:red`]}>Using emotion@11.1.1</div>;
}


render(<App />, document.getElementById("root"));