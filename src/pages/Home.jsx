import {useEffect,useState} from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import axios from "axios";


function Home(){
  const[Blogs,setBlogs]=useState([]);
  async function fetchBlogs(){
    const response =await axios.get("https://687af394abb83744b7ee4905.mockapi.io/Blogs")
    console.log(response)
    if(response.status==200){
      setBlogs(response.data)

    }
    else{
      alert("Error aayoo!!!")
    }
  }
  useEffect(()=>{
    fetchBlogs();
  },[])

  console.log(Blogs,"This is blogs")
  

  return (
    <>
    <NavBar/>
    <div className="flex  justify-between flex-wrap p-5 gap-4">
        {Blogs.map(function(Blog){
          return(
            <Card key={Blog.id} Blog={Blog} />
          )
        })}
    </div>
</>

  );
}

export default Home;