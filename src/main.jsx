import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import LoginPage from "./pages/Loginpage";
import ChatPage from "./pages/Chatspage";
import NewchatPage from "./pages/NewchatPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="chats" element={<ChatPage />} />
        <Route path="new" element={<NewchatPage />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);