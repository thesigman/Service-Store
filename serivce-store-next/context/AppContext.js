
import React from "react";

// Default ρύθμιση για την κατάσταση αυθεντικοποίησης του χρήστη. 
const AppContext = React.createContext({ isAuthenticated: false });
export default AppContext;