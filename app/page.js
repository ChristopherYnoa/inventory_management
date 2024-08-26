'use client'
import Image from "next/image";
import {useState, useEffect} from 'react'
import {firestore} from '@/firebase'
import { Box, Typography } from "@mui/material";
import { collection, getDocs, query } from "firebase/firestore";


export default function Home() {

  //state variable for storing inventory as well as helper function
  const [inventory, setInventory] = useState([])

  //state variable for adding and removing items as well as helper functions
  const [open, setOpen] = useState(false)

  //storing names of items and setting item names
  const [itemName, setItemName] = useState('')


  //fetch inventory from firebase
  const updateInventory = async () => {

    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []

    //add every doc to inventory list
    docs.forEach((doc)=> {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      })
      })

      setInventory(inventoryList)
      console.log(inventoryList)
    


  }

  //runs when dependancy array changes
  useEffect(()=> {
    updateInventory()
  }, [])

  return(
  <Box>
    <Typography variant = "h1">Inventory Management</Typography>
    {
      inventory.forEach((item)=>{
        return(
        
        <>
          {item.name}
          {item.count}
        </>
        )
      })}
    </Box>
    )
  
}
