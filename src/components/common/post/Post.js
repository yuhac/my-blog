import React from 'react';
import './styles.scss'

import china from '../../../assets/images/china.png'


const Post = ({ index, post }) => {
  const backgroundImage = { backgroundImage: `url(${china})` }
  const style = { ...post.style }

  return (
    <div className='post' style={style}>
      <div className='title'>{post.title}</div>
    </div>
  );
}

export default Post;
