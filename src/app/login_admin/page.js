"use client"; // ทำให้ใช้ MUI ได้
import { AccountCircle } from "@mui/icons-material";
import styles from "../page.module.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import Link from 'next/link';

export default function Home() {
  return (
    <Box sx={{width: "100%", height: "100vh", display: 'flex', flexDirection:'column'}}>
      <Box sx={{textAlign:'center'}}>
      <Typography variant="h5"
          sx={{ mx:55, mb:5, mt:10,fontWeight: "bold", fontFamily: "Noto Sans Thai",justifyContent:'center'}}>
          เข้าสู่ระบบผู้ใช้งาน
        </Typography>
      </Box>
      
      <Box sx={{ mx:55,mb:1,display: 'flex',flexDirection:'column'}}>
        <Typography sx={{mb:1,fontFamily: "Noto Sans Thai",}}>ชื่อผู้ใช้งาน</Typography>
        <TextField  label="ชื่อผู้ใช้งาน" variant="outlined" sx={{mb:1,}}/>
        <Typography sx={{mb:1,fontFamily: "Noto Sans Thai",}}>รหัสผ่าน</Typography>
      <TextField
          id="outlined-password-input"
          label="รหัสผ่าน"
          type="password"
          autoComplete="current-password"
        />
      </Box>

      <Box sx={{ mx:70,mb:1,display: 'flex',flexDirection:'column', justifyContent:'center'}}>
      <Link href="/datauser">
      <Button variant="contained" sx={{mx:6,mt:2,fontFamily: "Noto Sans Thai",backgroundColor: "#ff9800",
            ":hover": { bgcolor: "#faab37" },
            borderRadius: 3.5,
            fontSize: 16,
            height: 40,
            width: "60%",}}>เข้าสู่ระบบ</Button></Link>
      </Box>


    </Box>
  );
}
