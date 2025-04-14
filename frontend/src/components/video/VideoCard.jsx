import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video, isSidebarOpen }) => {

    const { _id, title, thumbnailUrl, channel, views } = video;

    // Format view count
    const formatViews = (count) => {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + 'M';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count;
    };

    return (
        <div className='w-full md:w-94 flex flex-col h-72'>
            {/* Thumbnail with fixed aspect ratio */}
            <Link to={`/watch/${_id}`} className='block relative w-full h-58'>
                <img
                    src={thumbnailUrl}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                />
            </Link>

            {/* Video Info with fixed height */}
            <div className="mt-2 flex flex-col h-20 overflow-hidden">
                {/* Title with ellipsis for overflow */}
                <h3 className="text-sm font-medium line-clamp-2 h-10 overflow-hidden">
                    {title}
                </h3>

                {/* Channel and stats */}
                <div className="mt-1 text-xs text-gray-500">
                    <div className="font-medium">{channel.channelName}</div>
                    <div>{formatViews(views)} views • 3 weeks ago</div>
                </div>
            </div>
        </div >
    );
};

export default VideoCard;