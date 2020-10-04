import React, { useEffect, useState } from 'react';
import { getStoriesBarItems } from '../../../services/storiesService';
import Loader from '../Loader';
import StoriesBarList from './StoriesBarList';

const loggedUserId = 'beniooYudym';

export default function StoriesBar() {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();

    async function fetchStories() {
      setLoading(true);
      const fetchedStories = await getStoriesBarItems(loggedUserId);
      setLoading(false);
      setStories(fetchedStories);
    }
  }, []);

  return (
    <div className="stories-bar">
      {loading ? <Loader /> : <StoriesBarList stories={stories} />}
    </div>
  );
}
