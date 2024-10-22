import React from 'react'
import CodeBlock from '../components/CodeBlock'


function useQuery() {
  return (
 <div>
    <div className='leading-8'>
<h1>Key Functions of useQuery</h1>
<br></br>
<strong>Data Fetching:</strong> Automatically fetches data when the component mounts or the query key changes.
<br></br>
<strong>Query Key:</strong> Unique identifier for the query, determining which data to fetch.
<br></br>
<strong>Query Function:</strong> Function to fetch data, returning a promise.
<br></br>
<strong>Caching:</strong> Stores fetched data for quick access, reducing unnecessary network requests.
<br></br>
<strong>Loading and Error States:</strong> Provides isLoading, isError, data, and error for managing UI states.
<br></br>
<strong>Stale and Cache Time:</strong> Controls freshness and cache duration with staleTime and cacheTime.
<br></br>
<strong>Refetching:</strong> Configurable automatic refetching based on window focus and network changes
<br></br>
</div>
<CodeBlock>{`npm i @tanstack/react-query`}</CodeBlock>

<CodeBlock>{`import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}`}</CodeBlock>
<CodeBlock>{`import { useQuery } from '@tanstack/react-query';

//put outside the function 
const fetchPricing = async () => {
    const response = await axios.get('http://localhost:5000/api/pricing');
    return response.data;
};
function Pricing() {

const { data: pricingData, error, isLoading } = useQuery({
        queryKey: ['dataKeyPricing'],  // The unique key for this query
        queryFn: fetchPricing,     // Function to fetch the beats
        staleTime: 1000 * 60 * 5,  // 5 minutes, data will stay fresh for 5 minutes
        cacheTime: 1000 * 60 * 10, // 10 minutes, the cache will be kept for 10 minutes
        refetchOnWindowFocus: false,  // Disable refetching on window focus
        refetchOnReconnect: false,    // Disable refetching on reconnect
    });

if (isLoading) return <div>Loading...</div>;
if (isError) return <div>Error loading users</div>;

return (
    <ul>
      {pricingData.map(item => (
        <li key={item.title}>{item.price}</li>
      ))}
    </ul>
  );

`}
</CodeBlock>
source: https://tanstack.com/query/latest/docs/framework/react/examples/react-router

    </div>
  )
}

export default useQuery