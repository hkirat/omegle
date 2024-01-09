import { useState } from "react"
import { Link } from "react-router-dom";
import {Box, TextField, Typography, Button} from '@mui/material';

export const Landing = () => {
    const [name, setName] = useState("");
    const cardStyle = {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }

    return <div>
      <div style={cardStyle}>
      <Box margin={2} style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Typography margin={3} variant="h5" style={{color:'white'}}>Enter Your Name:- </Typography>
        <TextField value={name} id="outlined-basic" label="Name" variant="outlined" style={{background:'white', borderRadius:'19px'}} onChange={(e)=> setName(e.target.value)}/>
        </Box>
        <Button variant="contained"><Link to={`/room/?name=${name}`} style={{color:'white'}}>Join</Link></Button>
    </div>
    </div>
}
