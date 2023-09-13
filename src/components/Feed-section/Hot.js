import React from 'react';
import Post from './Post';


const posts = [
  { id: 1, username: 'John Doe', handle: '@user1', content: 'This is the first post.' , picsrc: "https://pbs.twimg.com/profile_images/1215754529574137858/uwBymUxY_400x400.jpg"},
  { id: 2, username: 'John Doe', handle: '@user2', content: 'This is the first post.' , picsrc: "https://pbs.twimg.com/profile_images/1215754529574137858/uwBymUxY_400x400.jpg"},
  { id: 3, username: 'John Doe', handle: '@user3', content: 'This is the first post.' , picsrc: "https://pbs.twimg.com/profile_images/1215754529574137858/uwBymUxY_400x400.jpg"},
  { id: 4, username: 'John Doe', handle: '@user4', content: 'This is the first post.' , picsrc: "https://pbs.twimg.com/profile_images/1215754529574137858/uwBymUxY_400x400.jpg"},
  { id: 5, username: 'John Doe', handle: '@user5', content: 'This is the first post.' , picsrc: "https://pbs.twimg.com/profile_images/1215754529574137858/uwBymUxY_400x400.jpg"},
  
];

function Hot() {
    console.log('Hotcomponent rendered');
    return (
      <div>
        <h2>Hot Page</h2>
        {posts.map(post => (
        <Post key={post.id} username={post.username} content={post.content} handle={post.handle} picsrc={post.picsrc}/>
        ))}
      </div>
    );
};

export default Hot;