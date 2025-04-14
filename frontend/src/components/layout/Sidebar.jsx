import React from 'react';
import { Link } from 'react-router-dom';
import {
    AiFillHome,
    AiOutlinePlaySquare,
    AiOutlineLike,
    AiOutlineClockCircle,
    AiOutlineHistory,
    AiOutlineFire
} from 'react-icons/ai';
import {
    MdOutlineSubscriptions,
    MdOutlineVideoLibrary,
    MdOutlineWatchLater,
    MdOutlineSettings,
    MdOutlineFeedback,
    MdOutlineHelpOutline
} from 'react-icons/md';
import {
    FiYoutube,
    FiMusic,
    FiFilm,
    FiPlayCircle,
    FiRadio,
    FiAward
} from 'react-icons/fi';
import { SiYoutubegaming } from 'react-icons/si';
import { BsNewspaper } from 'react-icons/bs';
import { ImTrophy } from 'react-icons/im';
import { RiAccountCircleLine } from "react-icons/ri";
import { BiMoviePlay } from 'react-icons/bi';

const Sidebar = ({ isSidebarOpen }) => {
    // Main sections (visible in both collapsed and expanded states)
    const mainSections = [
        { icon: <AiFillHome size={24} />, label: 'Home', path: '/' },
        { icon: <FiYoutube size={24} />, label: 'Shorts', path: '/shorts' },
        { icon: <MdOutlineSubscriptions size={24} />, label: 'Subscriptions', path: '/subscriptions' },
    ];

    // You sections (visible only in expanded state)
    const youSections = [
        { icon: <AiOutlinePlaySquare size={24} />, label: 'Your channel', path: '/channel' },
        { icon: <AiOutlineHistory size={24} />, label: 'History', path: '/history' },
        { icon: <MdOutlineVideoLibrary size={24} />, label: 'Your videos', path: '/videos' },
        { icon: <MdOutlineWatchLater size={24} />, label: 'Watch later', path: '/playlist?list=WL' },
        { icon: <AiOutlineLike size={24} />, label: 'Liked videos', path: '/playlist?list=LL' },
        { icon: <AiOutlineClockCircle size={24} />, label: 'Watch history', path: '/history' },
    ];

    // Explore sections (visible only in expanded state)
    const exploreSections = [
        { icon: <AiOutlineFire size={24} />, label: 'Trending', path: '/trending' },
        { icon: <FiMusic size={24} />, label: 'Music', path: '/music' },
        { icon: <FiFilm size={24} />, label: 'Movies & TV', path: '/movies' },
        { icon: <FiPlayCircle size={24} />, label: 'Live', path: '/live' },
        { icon: <SiYoutubegaming size={24} />, label: 'Gaming', path: '/gaming' },
        { icon: <BsNewspaper size={24} />, label: 'News', path: '/news' },
        { icon: <ImTrophy size={24} />, label: 'Sports', path: '/sports' },
        { icon: <BiMoviePlay size={24} />, label: 'Learning', path: '/learning' },
        { icon: <FiAward size={24} />, label: 'Fashion & Beauty', path: '/fashion' },
        { icon: <FiRadio size={24} />, label: 'Podcasts', path: '/podcasts' },
    ];

    // More from YouTube sections (visible only in expanded state)
    const moreYoutubeSections = [
        { icon: <FiYoutube size={24} />, label: 'YouTube Premium', path: '/premium' },
        { icon: <FiYoutube size={24} className="text-red-600" />, label: 'YouTube Studio', path: '/studio' },
        { icon: <FiYoutube size={24} className="text-red-600" />, label: 'YouTube Music', path: '/music' },
        { icon: <FiYoutube size={24} className="text-red-600" />, label: 'YouTube Kids', path: '/kids' },
    ];

    // Settings, help, etc. (visible only in expanded state)
    const settingsSections = [
        { icon: <MdOutlineSettings size={24} />, label: 'Settings', path: '/settings' },
        { icon: <MdOutlineFeedback size={24} />, label: 'Send feedback', path: '/feedback' },
        { icon: <MdOutlineHelpOutline size={24} />, label: 'Help', path: '/help' },
    ];

    return (
        <div className={`${isSidebarOpen ? 'w-54' : 'w-20'} transition-all duration-300 border-r border-gray-200 overflow-y-auto`}>
            <div className="flex flex-col h-full py-2">
                {/* Main navigation items (always visible) */}
                <div className="px-1 mb-2">
                    {mainSections.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="flex items-center px-3 py-2.5 rounded-lg hover:bg-gray-100 cursor-pointer"
                        >
                            <div className="flex justify-center w-10 text-lg">
                                {item.icon}
                            </div>
                            {isSidebarOpen && (
                                <span className="ml-5 text-sm font-medium">{item.label}</span>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Divider */}
                <div className={`${isSidebarOpen ? 'mx-4' : 'mx-2'} border-b border-gray-200 my-1`}></div>

                {/* "You" section - visible only when expanded */}
                {isSidebarOpen && (
                    <>
                        <div className="px-4 py-2">
                            <h3 className="font-medium text-base mb-1">You</h3>
                            {youSections.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                                >
                                    <div className="flex justify-center w-6 text-lg">
                                        {item.icon}
                                    </div>
                                    <span className="ml-5 text-sm">{item.label}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="mx-4 border-b border-gray-200 my-2"></div>

                        {/* Sign-in Section visible only when expanded and user not logged in */}
                        <div className="px-4 py-2">
                            <p className="text-sm mb-3">Sign in to like videos, comment, and subscribe.</p>
                            <button className="flex items-center justify-center text-blue-600 px-4 py-1.5 border border-blue-600 rounded-full hover:bg-blue-50">
                                <RiAccountCircleLine className="mr-1" size={20} />
                                <span className="font-medium">Sign in</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="mx-4 border-b border-gray-200 my-2"></div>

                        {/* Explore section - visible only when expanded */}
                        <div className="px-4 py-2">
                            <h3 className="font-medium text-base mb-1">Explore</h3>
                            {exploreSections.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                                >
                                    <div className="flex justify-center w-6 text-lg">
                                        {item.icon}
                                    </div>
                                    <span className="ml-5 text-sm">{item.label}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="mx-4 border-b border-gray-200 my-2"></div>

                        {/* More from YouTube section */}
                        <div className="px-4 py-2">
                            <h3 className="font-medium text-base mb-1">More from YouTube</h3>
                            {moreYoutubeSections.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                                >
                                    <div className="flex justify-center w-6 text-lg">
                                        {item.icon}
                                    </div>
                                    <span className="ml-5 text-sm">{item.label}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="mx-4 border-b border-gray-200 my-2"></div>

                        {/* Settings section */}
                        <div className="px-1">
                            {settingsSections.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                                >
                                    <div className="flex justify-center w-6 text-lg">
                                        {item.icon}
                                    </div>
                                    <span className="ml-5 text-sm">{item.label}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Footer section */}
                        <div className="px-4 py-4 text-xs text-gray-500">
                            <div className="flex flex-wrap gap-x-2 mb-3">
                                <a href="#" className="hover:underline">About</a>
                                <a href="#" className="hover:underline">Press</a>
                                <a href="#" className="hover:underline">Copyright</a>
                                <a href="#" className="hover:underline">Contact us</a>
                                <a href="#" className="hover:underline">Creators</a>
                                <a href="#" className="hover:underline">Advertise</a>
                                <a href="#" className="hover:underline">Developers</a>
                            </div>

                            <div className="flex flex-wrap gap-x-2 mb-3">
                                <a href="#" className="hover:underline">Terms</a>
                                <a href="#" className="hover:underline">Privacy</a>
                                <a href="#" className="hover:underline">Policy & Safety</a>
                                <a href="#" className="hover:underline">How YouTube works</a>
                                <a href="#" className="hover:underline">Test new features</a>
                            </div>

                            <p className="mt-4">&copy; 2025 Google LLC</p>
                        </div>
                    </>
                )}

                {/* Mini-sidebar for collapsed state */}
                {!isSidebarOpen && (
                    <>
                        <div className="px-1">
                            <Link
                                to="/library"
                                className="flex flex-col items-center justify-center py-4 hover:bg-gray-100 rounded-lg"
                            >
                                <MdOutlineVideoLibrary size={24} />
                                <span className="text-xs mt-1">Library</span>
                            </Link>

                            <Link
                                to="/history"
                                className="flex flex-col items-center justify-center py-4 hover:bg-gray-100 rounded-lg"
                            >
                                <AiOutlineHistory size={24} />
                                <span className="text-xs mt-1">History</span>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sidebar;