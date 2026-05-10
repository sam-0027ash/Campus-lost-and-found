import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostItem from "./pages/PostItem";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";
import EditItem from "./pages/EditItem";
import Profile from "./pages/Profile";
import MyPosts from "./pages/MyPosts";
import ClaimedItems from "./pages/ClaimedItems";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/post-item"
          element={
            <ProtectedRoute>
              <PostItem />
            </ProtectedRoute>
          }
        />

        <Route path="/item/:id" element={<ItemDetails />} />

        <Route path="/edit-item/:id" element={<EditItem />} />

        <Route path="/my-posts" element={<MyPosts />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/claimed-items" element={<ClaimedItems />} />

        <Route path="/about" element={<About />} />

        <Route
  path="/contact"
  element={<Contact />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
