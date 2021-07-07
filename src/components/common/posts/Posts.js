import React from 'react';
import { Post } from '../../common'
import './styles.scss'


const Posts = ({ posts, columns }) => {
  return (
    <div className='posts' style={{ gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))` }}>
      {
        posts.map((post, index) => (
          <Post {...{ post, index, key: index }} />
        ))
      }
    </div>
  );
}

export default Posts;
