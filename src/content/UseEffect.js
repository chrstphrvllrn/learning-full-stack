import { useState, useEffect } from 'react';
import CodeBlock from '../components/CodeBlock'

function HookUseEffect() {
    const [joke, setJoke] = useState();
    const [update, setUpdate] = useState(false);

    useEffect(() => {

        let didCancel = false;

        async function fetchJoke() {
            if (!didCancel) {
                let response = await fetch('https://api.chucknorris.io/jokes/random');
                let data = await response.json();
                setJoke(data);
            }
        }
        fetchJoke();

        return () => {
            didCancel = true;
        }

    }, [update])


    return (
        <div>

            <div className='border p-4 rounded-lg bg-white'>
                {joke && (
                    <div className='p-4 '>
                        <h1>{joke.value}</h1>
                    </div>
                )}
                <br></br>
                <button onClick={() => setUpdate((prevState) => {
                    return !prevState;
                })}
                    className="p-4 border rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600">Get New Joke</button>
                <br></br>
                <p className="p-4 rounded-lg">{update ? 'State is change to true' : 'State is change to false'}</p>
            </div>


            <br></br>


            <div>

                <code>
                    <pre>
                        {`useEffect() =>{
    //first argument - callback function
    //update state, perform async actions, etc

    return() =>{
        //anonymous cleanup function    
    }
},[dependencyArray]);
`}</pre>
</code>
<br></br>
<br></br>
<li>The first argument to useEffect is a function that contains the side effect code.</li>
<li>[update] or [dependencyArray] The second argument is an optional array of dependencies. If provided, the effect will only re-run if any of the dependencies change.</li>
<li>Providing an empty array [] as the dependency list ensures that the effect runs only once after the initial render (equivalent to componentDidMount in class components).</li>
<li>Specifying dependencies allows you to control when the effect runs based on changes to specific values.</li>
<li>[] Empty dependency array makes it run once on mount</li>
<li>didCancel is for???</li>
<li>why it renders twice when onload/when click the tab to show the page??? In Strict Mode, React will call your component function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. Each ref object will be created twice, but one of the versions will be discarded. If your component function is pure (as it should be), this should not affect the behavior.</li>
<br></br>

<h1>How it works:</h1>
<br></br>
- `didCancel` is initially set to `false`.<br></br>
- The async `fetchJoke` function checks `!didCancel` before updating the state.<br></br>
- The cleanup function sets `didCancel` to `true` when the component unmounts or before the effect runs again.<br></br>
<br></br>
<h1>Sequence of events:</h1>
<br></br>
- When the effect runs, it immediately declares `didCancel = false`.<br></br>
- It then starts the asynchronous `fetchJoke` function.<br></br>
- If the component unmounts (or the effect is about to run again) before `fetchJoke` completes, the cleanup function runs, setting `didCancel = true`.<br></br>
- When `fetchJoke` finally resolves, it checks `!didCancel`. If the component has unmounted, `didCancel` will be `true`, and the state update is skipped.<br></br>

            </div>
            <CodeBlock>{`import { useState, useEffect } from 'react';

function App(){
    const [joke, setJoke] = useState();
    const [update, setUpdate] = useState(false);

    useEffect(() => {

        let didCancel = false;

        async function fetchJoke() {
            if(!didCancel){
            let response = await fetch('https://api.chucknorris.io/jokes/random');
            let data = await response.json();
            setJoke(data);
            }
        }
        fetchJoke();

        return () => {
            didCancel = true;
        }

    }, [update])

    return (
        <>
            { joke && (
                <>
                    <h1>{joke.value}</h1>
                </>
            )}
             <button onClick={()=>setUpdate((prevState) => !prevState)}>Get New Joke</button>
        </>
    )
}`}</CodeBlock>



            <iframe width="560" height="315" src="https://www.youtube.com/embed/Yl0hbt_kK_I?si=dfzFKnZRnnnb3LjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
       <br></br>
       <h1>Example fetching data with loading and error</h1>
       <CodeBlock>{`  const [socialMediaData, setSocialMediaData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
    useEffect(() => {
     const fetchSocialMedia = async () => {
       try {
         const response = await axios.get('http://localhost:5000/api/socials');
         setSocialMediaData(response.data);
         console.log(response.data)
         setLoading(false);
       } catch (err) {
         setError('Failed to fetch beats. Please try again later.');
         setLoading(false);
       }
     };
      fetchSocialMedia();
   }, []);`}</CodeBlock>
       
        </div>
    )
}

export default HookUseEffect