import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Tab from "./Components/tab/Tab";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Datatable from "./Components/datatable/Datatable";
import Order from "./Components/orders/Order";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="Customers">
              <Route index element={<Datatable />} />
              <Route path="Customers" element={<Datatable />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="orders">
              <Route index element={<Order />} />
              {/* <Route path=":productId" element={<Single />} />
              <Route path="System Users" element={<New />} /> */}
            </Route>
          </Route>
          <Route path="System Users">
          <Route index element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
