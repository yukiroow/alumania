import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import HomeLayout from "./layouts/HomeLayout";
import SearchPage from "./pages/SearchPage";
import AddPostPage from "./pages/AddPostPage";
import NotificationsPage from "./pages/NotificationsPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import AlbumsPage from "./pages/AlbumsPage";
import EventsPage from "./pages/EventsPage";
import JobsPage from "./pages/JobsPage";
import Notifications from "./components/Notifications";
import SearchBar from "./components/SearchBar";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<AuthLayout />}>
                        <Route index element={<SearchBar />} />
                        <Route path="signup" element={<SignupPage />} />
                    </Route>
                    <Route
                        path="/app"
                        element={
                            <ProtectedRoute>
                                <RootLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="home" element={<HomeLayout />}>
                            <Route
                                path="experiences"
                                element={<ExperiencesPage />}
                            />
                            <Route path="albums" element={<AlbumsPage />} />
                            <Route path="events" element={<EventsPage />} />
                            <Route
                                path="opportunities"
                                element={<JobsPage />}
                            />
                        </Route>
                        <Route path="search" element={<SearchPage />} />
                        <Route path="post" element={<AddPostPage />} />
                        <Route
                            path="notifications"
                            element={<NotificationsPage />}
                        />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
);
