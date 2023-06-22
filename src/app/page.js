"use client"; // ทำให้ใช้ MUI ได้
import styles from "./page.module.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from 'next/link';

export default function Home() {
  return (
    
    <Box sx={{width: "100%", height: "100vh", display: 'flex',  }}>
      <Box sx={{ width: "100%", mx:45}}>
        <Box
          sx={{
            fontFamily: "Noto Sans Thai",
            display: "flex",
            flexDirection: "column",
            width: 700,
            mt: 20,
            mb: 2,
          }}
        >
          <Typography sx={{fontWeight: "bold",fontFamily: "Noto Sans Thai"}} variant="h5" mb={2}>
            กรุณากรอกรหัสนักศึกษาของคุณ
          </Typography>
          <TextField 
            label="รหัสนักศึกษา"
            variant="outlined"
            inputProps={{ maxLength: 13, fontFamily: "Noto Sans Thai"}}
            sx={{ width: "100%",fontFamily: "Noto Sans Thai" }}
          ></TextField>
          <Box sx={{width: "100%", height: 100, textAlign: "center"}}>
          
          <Link href="/register">
          <Button variant="contained" sx={{mt:2,fontFamily: "Noto Sans Thai",backgroundColor: "#ff9800",
            ":hover": { bgcolor: "#faab37" },
            borderRadius: 3.5,
            fontSize: 16,
            height: 40,
            width: "20%",}}>ลงทะเบียน
            </Button></Link>
          </Box>
          
        </Box>
      </Box>
      
    </Box>
  );
}
