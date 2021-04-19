import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import BooksContainer from "./books";

ReactDOM.render(<BooksContainer />, document.getElementById("root"));

reportWebVitals();
