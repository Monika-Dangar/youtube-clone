import React from 'react';

// SearchResultItem Component - Used for search results page layout
const SearchResultItem = ({ video }) => {
    const { _id, title, thumbnailUrl, description, channel, views } = video;

    // Format view count
    const formatViews = (count) => {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + 'M';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count;
    };

    // Truncate description for display
    const truncateDescription = (text, maxLength = 120) => {
        if (text && text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 w-full py-4 border-b border-gray-200 h-68">
            {/* Thumbnail - Left side */}
            <div className="flex-shrink-0 h-full">
                <a href={`/watch/${_id}`} className="block w-full h-full">
                    <img
                        src={thumbnailUrl}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </a>
            </div>

            {/* Content - Right side */}
            <div className="flex flex-col flex-grow">
                {/* Title */}
                <a href={`/watch/${_id}`} className="block">
                    <h3 className="text-lg font-medium text-gray-900 mb-1 line-clamp-2">
                        {title}
                    </h3>
                </a>

                {/* Meta information */}
                <div className="text-sm text-gray-500 mb-2">
                    {formatViews(views)} views • 3 weeks ago
                </div>

                {/* Channel information */}
                <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                        <img
                            src={channel?.avatar}
                            alt={channel?.channelName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <a href={`/channel/${channel?._id}`} className="text-sm text-gray-700">
                        {channel?.channelName}
                    </a>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2">
                    {truncateDescription(description)}
                </p>
            </div>
        </div>
    );
};


export default SearchResultItem