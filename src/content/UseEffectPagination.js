import React, { useEffect, useState } from 'react'
import CodeBlock from '../components/CodeBlock'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

function UseEffectPagination() {

    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState();
    const [page, setPage] = useState(0);


    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`${BASE_URL}/posts?page=${page}`)
                const posts = await response.json()
                setPosts(posts);
            }
            catch (e) {
                setError(e)
            }
            finally {
                setIsLoading(false)
            }
        };
        fetchPosts();
    }, [page])

    if (isLoading) { return <div>Loading....</div> }
    if (error) { return <div>Something went wrong!</div> }



    return (
        <div>


            <CodeBlock>{`import React, { useEffect, useState } from 'react'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

function App() {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState();
    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(\`\${BASE_URL}/posts?page=\${page}\`)
                const posts = await response.json()
                setPosts(posts);
            }
            catch (e) {
                setError(e)
            }
            finally {
                setIsLoading(false)
            }
        };
        fetchPosts();
    }, [page])

    if(isLoading){ return <div>Loading....</div>}
    if(error){ return <div>Something went wrong!</div>}

    return (
        <>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>
                })}

            </ul>
            <button onClick={()=>setPage(page + 1)} className='px-4 py-2 border rounded-md'>Increase Page ({page})</button>
        
        </>

    )
}
`}</CodeBlock>
  <button onClick={()=>setPage(page + 1)} className='px-4 py-2 border rounded-md'>Increase Page ({page})</button>
        
            <ul>
                {posts && posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>
                })}

            </ul>


            <iframe width="560" height="315" src="https://www.youtube.com/embed/00lxm_doFYw?si=fJ2bU7xupW2fSXFN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}
export default UseEffectPagination