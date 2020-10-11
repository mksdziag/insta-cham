import React, { useEffect, useState } from 'react';

import Loader from '../Loader';
import Comment from './Comment';

import { getCommentsToPost } from '../../../services/commentsService';

import { Comment as IComment } from '../../../interfaces/Comment';

interface IProps {
  id: string;
}

export default function CommentsBlock(props: IProps) {
  const { id } = props;

  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadComments();

    async function loadComments() {
      setLoading(true);

      const fetchedComments = await getCommentsToPost(id);
      setComments(fetchedComments);

      setLoading(false);
    }
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="comments-block">
      {comments.map((c) => (
        <Comment
          key={c.id}
          author={c.author}
          comment={{
            content: c.content,
            created: c.created,
            stats: c.stats,
          }}
        />
      ))}
    </div>
  );
}
