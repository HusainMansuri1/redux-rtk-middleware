import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getPosts, postsData } from "./store/features/posts";
import PostList from "./store/components/PostList";

function App() {
  const dispatch = useDispatch();  
  const postListData = useSelector(postsData);  

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="app">
      {
         postListData.loading || !postListData.data.length 
         ?
         "Loading..." 
         :
         <PostList data={postListData.data}/>
      }
    </div>
  )
}

export default App
