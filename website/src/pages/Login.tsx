import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Login:React.FC<{}>=()=>{
    let [email,setEmail] =useState<any>()
    let [password,setPassword] =useState<any>()
    let navigate=useNavigate()
   let handleSubmit=()=>{
     alert(email+" "+password)
     navigate('/project/home')
   }
   return<>

<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
    <h2>Login page</h2>
    <TextField id="standard-basic" label="email" variant="standard" onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
    <TextField id="standard-basic" label="password" variant="standard" onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
    <Button variant="text" onClick={handleSubmit}>Submit</Button>
    <Link to={'/project/register'}>
 <Button variant="text">Register</Button>
 
 </Link>
</Grid>

   </>
}