import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useState } from "react"
import { Hook1 } from "../components/hooks/Hook1"
import { Hook2 } from "../components/hooks/Hook2"
import { Hook3 } from "../components/hooks/Hooks3"
import { Navbar } from "../components/navbar/Navbar"
import Card from "react-bootstrap/esm/Card"
import Carousel from "react-bootstrap/esm/Carousel"



export const AllLessons:React.FC<{}>=()=>{
    let [value,setValue]=useState('3')
    return<Box>

    <TabContext value={`${value}`}>
  
    <TabList onChange={(e,num)=>{setValue(num)}}>
      <Tab label="useState" value="1" />
      <Tab label="useEffect" value="2" />
      <Tab label="props" value="3" />
      <Tab label="navbar" value="4" />
      <Tab label="carousel" value="5" />
      <Tab label="card" value="6" />

    </TabList>

  <TabPanel value="1"><Hook1/></TabPanel>


  <TabPanel value="2"><Hook2/></TabPanel>
  <TabPanel value="3"><Hook3/></TabPanel>
  <TabPanel value="4"><Navbar/></TabPanel>
  <TabPanel value="5"><Carousel/></TabPanel>
  <TabPanel value="6"><Card/></TabPanel>
</TabContext>
    </Box>
}


      
