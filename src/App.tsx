import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/posts">post</Link>
        </li>
        <li>
          <Link to="/posts/:id">post detail</Link>
        </li>
        <li>
          <Link to="/posts/new">post new</Link>
        </li>
        <li>
          <Link to="/posts/edit/:id">post edit</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>hi</h1>} />
        <Route path="/posts" element={<h1>hi</h1>} />
        <Route path="/posts/:id" element={<h1>hi</h1>} />
        <Route path="/posts/new" element={<h1>hi</h1>} />
        <Route path="/posts/edit/:id" element={<h1>hi</h1>} />
        <Route path="/profile" element={<h1>hi</h1>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
