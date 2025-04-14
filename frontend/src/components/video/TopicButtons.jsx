import React from 'react';

const TopicButtons = ({ onTopicClick }) => {
    const topics = [
        'All', 'JavaScript', 'React', 'Programming', 'Web Development',
        'Computer Science', 'AI', 'Machine Learning', 'Gaming', 'Music'
    ];

    const handleClick = (topic) => {
        // If "All", disable search mode
        if (topic === 'All') {
            onTopicClick('');
        } else {
            onTopicClick(topic);
        }
    };

    return (
        <div className="flex space-x-3 p-4 overflow-x-auto scrollbar-hide">
            {topics.map((topic, index) => (
                <button
                    key={index}
                    className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap cursor-pointer ${index === 0
                        ? 'bg-black text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-black'
                        }`}
                    onClick={() => handleClick(topic)}
                >
                    {topic}
                </button>
            ))}
        </div>
    );
};

export default TopicButtons;
