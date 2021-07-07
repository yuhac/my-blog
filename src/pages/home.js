import React from 'react';
import { Posts } from '../components/common';
import { posts } from '../assets/mocks/posts'

const trendingConfig = {
  1: {
    gridArea: '1 / 2 / 3 / 3'
  }
}

const mergeStyles = (posts, config) => {
  posts.forEach((post, index) => {
    post.style = config[index]
  })
}
mergeStyles(posts, trendingConfig)

const home = () => {
  return (
    <section className='home-container'>
      {/* <Posts posts={posts} columns={3} /> */}
    </section>
  );
}

export default home;
