import React from "react";
import { BrowserRouter,Link } from 'react-router-dom'

export default function Root(props) {
  return (
    <BrowserRouter>
      <Link to={'/'}>@single-spa/welcome</Link>{"  "}
      <Link to={'/layout'}>@study/layout</Link>{"  "}
      <Link to={'/todos'}>@study/todos</Link>{"  "}
      <Link to={'/realworld'}>@study/realworld</Link>
    </BrowserRouter>
  );
}
