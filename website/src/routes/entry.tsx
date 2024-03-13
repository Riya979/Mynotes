import { Button, Paper } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { AllLessons } from "../pages/Allessons";
import { Layout } from "../layout/Layout";
import { Login } from "../pages/Login";

export  const EntryRoads={
    path:'/',
    element:(
        <div>
            <Paper>
                <h1>Topic:</h1>
                <Link to='/lessons'><Button color="secondary">Lessons</Button></Link><br/><br/>
                <Link to='/project/login'><Button color="secondary">Projects</Button></Link>
            </Paper>
        </div>
    )
}
export const alllessons={
    path:'/lessons',
    element:<AllLessons/>
}
export const AllProject={
    path:'/project',
    element:<><Layout><Outlet/></Layout></>,
    children:[
{
    path:'login',
    element:<Login/>
}
]
}