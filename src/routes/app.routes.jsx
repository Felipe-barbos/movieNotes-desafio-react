import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SingUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { NewNote } from "../pages/NewNote";
import { NoteView } from "../pages/NoteView";
import { EditProfile } from "../pages/EditProfile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SingUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/newNote" element={<NewNote />} />
      <Route path="/noteView" element={<NoteView />} />
      <Route path="/editProfile" element={<EditProfile />} />
    </Routes>
  );
}