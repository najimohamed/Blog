import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2 style={{ 
          color: 'red',
          marginBottom: '20px', 
        }}>Sorry</h2>
      <p style={{ 
          color: 'red',
          marginBottom: '20px',  
        }}>The page cannot be found.</p> 
      
      <Link style ={{ 
          color: 'green',
          fontSize: '24px'
        }} to="/">Back to the homepage.</Link>
    </div>
  );
}
 
export default NotFound;