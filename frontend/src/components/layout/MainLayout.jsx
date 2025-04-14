import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = ({ children, onSearch, toggleSidebar, isSidebarOpen }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header onSearch={onSearch} toggleSidebar={toggleSidebar} />
            <div className="flex flex-1 pt-16 overflow-hidden">
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <main className="flex-1 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
