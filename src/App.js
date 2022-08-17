import './App.css';
// import {
//   HashRouter,
//   NavLink,
// } from 'react-router-dom';

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";


const Todo = () => {
  return <p>這是 Todo 頁面 OwO!! </p>;
};

const Login = () => {
  return <p>這是登入頁面 OwO!! </p>;
};

const Register = () => {
  return <p>這是註冊頁面 OwO!! </p>;
};

// function App() {
//   return (
//     <div className="container">
//       <HashRouter>
//         <div className="nav-link">
//           <NavLink to="/">
//             <p>回到首頁</p>
//           </NavLink>
//           <NavLink to="/register">
//             <p>註冊頁面</p>
//           </NavLink>
//           <NavLink to="/login">
//             <p>登入頁面</p>
//           </NavLink>
//           <NavLink to="/todo">
//             <p>Todo 頁面</p>
//           </NavLink>
//         </div>
//         {/* Routes, Route 練習區 */}
//         {/* 練習區 */}
//       </HashRouter>
//     </div>
//   );
// }

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          {/* 如果輸入未定義的路由就會顯示 */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Not Found</p>
              </main>
            }
          />
        </Routes>
        {/* 練習區 */}
      </BrowserRouter>
    </div>
  );
}

export default App;
