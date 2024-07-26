var posts=["posts/495e9668/","posts/ae757f77/","posts/73469c90/","posts/8808646a/","posts/f68c8a97/","posts/b877eea4/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };