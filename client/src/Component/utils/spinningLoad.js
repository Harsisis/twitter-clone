import CircularProgress from '@mui/material/CircularProgress';
import '../../Style/loading.css'
function spinningLoad(){
 return (
   <div className="loadCenter">
     <CircularProgress />
   </div>
  
 );
}

export default spinningLoad;