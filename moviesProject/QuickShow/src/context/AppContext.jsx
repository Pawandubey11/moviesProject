import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
VITE_TMDB_IMAGE_BASE_URL;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [shows, setShows] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const image_base_url = import.meta.env.VITE_T
  const { user } = useUser();
  const { getToken } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const fetchIsAdmin = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get("/api/admin/check-admin", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsAdmin(data.success && data.isAdmin);

      if (
        (!data.success || !data.isAdmin) &&
        location.pathname.startsWith("/admin")
      ) {
        navigate("/");
        toast.error("You are not authorized");
      }
    } catch (error) {
      console.error("Error checking admin:", error);
      toast.error("Failed to verify admin");
    }
  };

  const fetchShows = async () => {
    try {
      const { data } = await axios.get("/api/shows/all");
      if (data.success) setShows(data.shows);
      else toast.error(data.message);
    } catch (error) {
      console.error("Error fetching shows:", error);
      toast.error("Failed to fetch shows");
    }
  };

  const fetchFavoriteMovies = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get("/api/user/favorites", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) setFavoriteMovies(data.favorites || []);
    } catch (error) {
      console.error("Error fetching favorite movies:", error);
      toast.error("Failed to fetch favorite movies");
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  useEffect(() => {
    if (user) {
      fetchIsAdmin();
      fetchFavoriteMovies();
    }
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        axios,
        navigate,
        getToken,
        user,
        isAdmin,
        shows,
        favoriteMovies,
        fetchShows,
        fetchFavoriteMovies,
        image_base_url
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
