import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import VideoCard from '../video/VideoCard';
import SearchResults from '../searchbar/SearchResults ';
import TopicButtons from '../video/TopicButtons';
import { getAllVideos, searchVideos } from '../../services/video.service';

const SearchLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [videos, setVideos] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q');

    useEffect(() => {
        const fetchData = async () => {
            if (query) {
                const results = await searchVideos({ title: query });
                setSearchResults(results);
                setIsSearchActive(true);
            } else {
                const data = await getAllVideos();
                setVideos(data);
                setIsSearchActive(false);
            }
        };

        fetchData();
    }, [query]);

    return (
        <div>
            <TopicButtons onTopicClick={(topic) => navigate(`/search?q=${topic}`)} />
            {isSearchActive ? (
                <SearchResults videos={searchResults} />
            ) : (
                <div className="grid grid-cols-3 gap-4 p-4">
                    {videos.map((video) => (
                        <VideoCard key={video._id} video={video} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchLayout;