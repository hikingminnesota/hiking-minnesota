import React, { useEffect, useState } from "react";
import { account } from "./appwrite";
import { useNavigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        await account.get();
        setAuthed(true);
      } catch {
        // send them to public promo page, but remember where they wanted to go
        localStorage.setItem("postLoginRedirect", location.pathname);
        navigate("/badges");
      } finally {
        setChecking(false);
      }
    })();
  }, [location.pathname, navigate]);

  if (checking) return null; // or a spinner
  return authed ? children : null;
}
