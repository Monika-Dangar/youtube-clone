import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import MainLayout from './MainLayout';

const YouTubeApp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // 👇 Auto-collapse sidebar on /watch/:id
    useEffect(() => {
        if (location.pathname.startsWith('/watch')) {
            setIsSidebarOpen(false); // auto-close sidebar
        } else {
            setIsSidebarOpen(true);  // open sidebar on other pages
        }
    }, [location.pathname]);

    const handleSearch = (searchQuery) => {
        if (!searchQuery.trim()) {
            navigate('/');
        } else {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <MainLayout
            onSearch={handleSearch}
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
        >
            <Outlet />
        </MainLayout>
    );
};

export default YouTubeApp;
