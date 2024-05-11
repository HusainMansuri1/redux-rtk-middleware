const PostList = ({ data }) => {
    
    return (
    <>
        {
            data 
            ?
            data.map((row) => (
                <div key={row.id}>
                    <p>{row.title}</p>
                    <hr / >
                </div>
            ))
            : null
        }
    </>
  )
}

export default PostList