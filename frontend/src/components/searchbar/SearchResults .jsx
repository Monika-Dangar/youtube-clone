import SearchResultItem from "./SearchResultItem ";

const SearchResults = ({ videos }) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            {videos.length > 0 ? (
                videos.map((video) => (
                    <SearchResultItem key={video._id} video={video} />
                ))
            ) : (
                <div className="py-10 text-center">
                    <h3 className="text-lg font-medium">No results found</h3>
                    <p className="text-gray-500">Try different keywords or check your spelling</p>
                </div>
            )}
        </div>
    );
};

export default SearchResults