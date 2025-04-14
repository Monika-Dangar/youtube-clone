import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YouTubeApp from './components/layout/YouTubeApp';
import SearchLayout from './components/layout/SearchLayout';
import VideoPlayerPage from './pages/VideoPlayerPage';
import SignInModal from './components/auth/SignInModal';
import SignUpModal from './components/auth/SignUpModal';
import ChannelModal from './components/layout/ChannelModal';
import ChannelDetails from './components/layout/ChannelDetails';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<YouTubeApp />}>
          <Route index element={<SearchLayout />} />
          <Route path="search" element={<SearchLayout />} />
          <Route path="watch/:id" element={<VideoPlayerPage />} />
          <Route path="signin" element={<SignInModal />} />
          <Route path="signup" element={<SignUpModal />} />
          <Route path="channel" element={<ChannelModal />} />
          <Route path="channel/:channelId" element={<ChannelDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
