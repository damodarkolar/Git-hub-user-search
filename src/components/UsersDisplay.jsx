import { useSelector} from "react-redux";
import { UserCard } from "./UserCard";
import { SearchBar } from "./SearchBar";
export const UsersDisplay = ( ) => {


const result=useSelector(state=>state);
const {loading, error, data}=result
console.log(data.items)





    return loading? (<div>{".....loading"}</div>) : error ? <div>{"....ERROR"}</div> : (

        <div style={{display:"grid", gridTemplateColumns:"auto auto auto" }}>{data.items.map((ele,i)=> <UserCard key={i} user={ele}/>)}</div> 
    )

   
}