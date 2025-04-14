import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuggestedVideos = ({ videos }) => {
    const navigate = useNavigate();

    return (
        <div>
            {videos.map(video => (
                <div
                    key={video._id}
                    className="flex gap-3 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded"
                    onClick={() => navigate(`/watch/${video._id}`)}
                >
                    <img src={video.thumbnailUrl} alt={video.title} className="w-40 h-24 object-cover rounded" />
                    <div>
                        <h4 className="text-sm font-medium">{video.title}</h4>
                        <p className="text-xs text-gray-500">{video.channel.channelName}</p>
                        <p className="text-xs text-gray-500">{video.views} views</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SuggestedVideos;
