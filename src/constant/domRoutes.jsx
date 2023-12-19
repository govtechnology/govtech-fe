import LoginPage from "@/pages/public/auth/LoginPage";
import NoPage from "@/pages/public/general/NoPage";
import DashboardPage from "@/pages/user/dashboard/DashboardPage";
import SignUpPage from "@/pages/public/auth/SignUpPage";
import ProfilePage from "@/pages/user/profile/ProfilePage";
import AdminDashboard from "@/pages/admin/dashboard/AdminDashboard";
import HomePage from "@/pages/public/homepage/HomePage";
import FaqPage from "@/pages/public/faq/FaqPage";

export const PUBLIC_ROUTES = [
  { index: true, element: <HomePage /> },
  { path: "/faq", element: <FaqPage /> },
  { path: "/auth/signin", element: <LoginPage /> },
  { path: "/auth/signup", element: <SignUpPage /> },
  { path: "*", element: <NoPage /> },
];

export const ADMIN_ROUTES = [
  { path: "/dashboard", element: <AdminDashboard /> },
];

export const USER_ROUTES = [
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/dashboard/profile", element: <ProfilePage /> },
];
