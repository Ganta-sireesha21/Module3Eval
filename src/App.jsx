import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomeDashboar from "./pages/CustomerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin/dashboard" element={
                        <ProtectedRoute role="admin">
                            <AdminDashboard />
                        </ProtectedRoute>
                    } />
                    <Route path="/customer/home" element={
                        <ProtectedRoute role="customer">
                            <CustomeDashboar />
                        </ProtectedRoute>
                    } />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}     


