import { TextField, Typography } from '@mui/material'
import React from 'react'
import "./addblogs.css"

const AddBlogs = () => {
  return (
    <div>
      <br></br><br></br>
      <form className='addblogform'><br></br>
        <Typography variant="h6">Add Blogs</Typography><br></br>
        <TextField id="standard-basic" color='error' className='textbox' label="Blog Name" variant="standard" /><br></br><br></br>
        <TextField id="standard-basic" className='textbox' label="Description" variant="standard" /><br></br><br></br>
        <TextField id="standard-basic" className='textbox' label="Blog Name" variant="standard" /><br></br><br></br><br></br>
        <button class='addblogbtn'>Upload</button>
      </form>
    </div>
  )
}

export default AddBlogs
