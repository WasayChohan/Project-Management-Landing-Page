// ==============================
// React Imports
// ==============================
import { createContext, useContext, useEffect, useState } from "react";

// ==============================
// Import Axios Instance
// ==============================
import api from "../api/axios";

// ==============================
// Create Authentication Context
// ==============================
const AuthContext = createContext();

// ==============================
// Authentication Provider
// ==============================
function AuthProvider({ children }) {
  // ==============================
  // Current Logged-in User
  // ==============================
  const [user, setUser] = useState(null);

  // ==============================
  // Loading State
  // ==============================
  const [loading, setLoading] = useState(true);

  // ==============================
  // Check Logged-in User
  // ==============================
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Get current user from backend
        const response = await api.get("/auth/me");

        // Save user in state
        setUser(response.data.user);
      } catch (error) {
        // User is not logged in
        setUser(null);
      } finally {
        // Authentication check completed
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // ==============================
  // Provide Authentication Data
  // ==============================
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ==============================
// Custom Hook
// ==============================
export const useAuth = () => {
  return useContext(AuthContext);
};

// ==============================
// Export Provider
// ==============================
export default AuthProvider;
