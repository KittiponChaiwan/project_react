"use client"; // ทำให้ใช้ MUI ได้
import styles from "../page.module.css";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  MenuItem,
  Select,
  Dialog,
  InputLabel,
} from "@mui/material";
import FileCopyRoundedIcon from "@mui/icons-material/FileCopyRounded";
import PersonIcon from "@mui/icons-material/Person";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

export default function Home() {
  const [open, setOpen] = useState(false); //open มีค่าเป็น false / setOpen
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor:'white'

      }}
    >
      {/* sidebar ด้านซ้ายมือ */}
      <Box sx={{ background: "#ff9800", width: "200px", height: "100vh" }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <PersonIcon sx={{ ml: 2, mt: 7 }}></PersonIcon>
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Noto Sans Thai",
              mx: 1,
              mt: 7,
              fontSize: "18",
            }}
          >
            ข้อมูลผู้ใช้งาน
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <FileCopyRoundedIcon sx={{ ml: 2, mt: 3 }}></FileCopyRoundedIcon>
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Noto Sans Thai",
              mx: 1,
              mt: 3,
              fontSize: "18",
            }}
          >
            รายงานผล
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar ออกจากระบบ */}
        <Box sx={{ width: "100%", height: "7vh", backgroundColor: "white" }}>
          <Button
            variant="text"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: "18px",
              ml: 130,
              mt: 2,
              fontFamily: "Noto Sans Thai",
            }}
          >
            ออกจากระบบ
          </Button>
        </Box>

        <Card
          sx={{
            width: 1120,
            height: 570,
            ml: 5,
            mt: 2,
            borderRadius: 7,
            backgroundColor: "#f0f0f0",
          }}
        >
          <CardContent>
            <Box
              sx={{ mx: 10, mt: 1, }}
              display="flex"
              flexWrap="wrap"
            >
              <FormControl sx={{ fontFamily: "Noto Sans Thai", width: "25%" }}>
                <InputLabel id="demo-simple-select-label">คำนำหน้า</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={0}
                  label="คำนำหน้า"
                  // onChange={handleChange}
                >
                  <MenuItem value={0}>คำนำหน้า</MenuItem>
                  <MenuItem value={10}>นาย</MenuItem>
                  <MenuItem value={20}>นางสาว</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="ชื่อ"
                variant="outlined"
                sx={{ width: "35%", mx: 2 }}
              ></TextField>
              <TextField
                label="นามสกุล"
                variant="outlined"
                sx={{ width: "35%" }}
              ></TextField>
              <TextField
                label="รหัสนักศึกษา"
                variant="outlined"
                inputProps={{ maxLength: 13, fontFamily: "Noto Sans Thai" }}
                sx={{ width: "35%", ml: 31, mt: 2 }}
              ></TextField>

              <Box sx={{ width: "40%", ml: 31, mt: 2, mr: 20 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    สาขาวิชา
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={0}
                    label="สาขาวิชา"
                    // onChange={handleChange}
                  >
                    <MenuItem value={0}>สาขาวิชา</MenuItem>
                    <MenuItem value={10}>วศ.บ.วิศวกรรมคอมพิวเตอร์</MenuItem>
                    <MenuItem value={20}>คอ.บ.วิศวกรรมคอมพิวเตอร์</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="อุณหภูมิ"
                  variant="outlined"
                  inputProps={{ maxLength: 13, fontFamily: "Noto Sans Thai" }}
                  sx={{ width: "35%", mt: 2 }}
                ></TextField>
              </Box>
              <Button
                variant="contained"
                sx={{
                  ml: 30,
                  mt: 2,
                  mr: 20,
                  fontFamily: "Noto Sans Thai",
                  backgroundColor: "#bbbfbc",
                  ":hover": { bgcolor: "#bbbfbc" },
                  borderRadius: 3.5,
                  fontSize: 18,
                  height: 150,
                  width: "20%",
                }}
              >
                เลือกรูปภาพ
              </Button>

              <Button
                variant="contained"
                sx={{
                  ml: 25,
                  mt: 4,
                  mr: 3,
                  fontFamily: "Noto Sans Thai",
                  backgroundColor: "#696b69",
                  ":hover": { bgcolor: "#9b9e9b" },
                  borderRadius: 3.5,
                  fontSize: 16,
                  height: 50,
                  width: "13%",
                }}
              >
                ยกเลิก
              </Button>

              <Button
                variant="contained"
                sx={{
                  ml: 1,
                  mt: 4,
                  mr: 5,
                  fontFamily: "Noto Sans Thai",
                  backgroundColor: "#ff9800",
                  ":hover": { bgcolor: "#faab37" },
                  borderRadius: 3.5,
                  fontSize: 16,
                  height: 50,
                  width: "13%",
                }}
              >
                อัปเดท
              </Button>

              <Button
                variant="contained"
                onClick={() => setOpen(true)}
                sx={{
                  ml: 5,
                  mt: 4,
                  mr: 5,
                  fontFamily: "Noto Sans Thai",
                  backgroundColor: "red",
                  ":hover": { bgcolor: "#fa4c34" },
                  borderRadius: 3.5,
                  fontSize: 16,
                  height: 50,
                  width: "13%",
                }}
              >
                ลบข้อมูล
              </Button>
            </Box>
            {/* Box card */}
          </CardContent>
        </Card>
      </Box>
      {/* // Box ส้ม */}
      <Dialog
        fullWidth
        maxWidth="xs"
        sx={{
          borderRadius: 50,
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
        onClose={() => setOpen(false)}
        open={open}
      >
        <Box
          sx={{ p: 4, display: "flex", flexDirection: "column", width: "100%" }}>
          <WarningAmberRoundedIcon sx={{ mx: 20, fontSize: "60px" }} />
          คุณต้องการลบข้อมูลหรือไม่
          


          <Box sx={{display: "flex", flexDirection: "row",width: "100%",p:2, }}>

          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            sx={{
                ml:10,
              justifyContent: "center",
              fontFamily: "Noto Sans Thai",
              backgroundColor: "#696b69",
              ":hover": { bgcolor: "#9b9e9b" },
              borderRadius: 5,
              fontSize: 16,
              px: 3,
              width: "20%",
              py: 1,
            }}
          >
            ยกเลิก
          </Button>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            sx={{
              justifyContent: "center",
              ml: 5,
              fontFamily: "Noto Sans Thai",
              backgroundColor: "#ff9800",
              ":hover": { bgcolor: "#faab37" },
              borderRadius: 5,
              fontSize: 16,
              px: 3,
              width: "20%",
              py: 1,
            }}
          >
            ตกลง
          </Button>
          
          </Box>



        </Box>
      </Dialog>
    </Box>
    // Box ใหญ่อยู่นี่
  );
}
