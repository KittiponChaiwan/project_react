"use client"; // ทำให้ใช้ MUI ได้
import styles from "../page.module.css";
import "./styles.css";
import { Box, Button, IconButton, Paper, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Table from "@mui/joy/Table";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* sidebar ด้านซ้ายมือ */}
      <Box sx={{ background: "#ff9800", width: "200px", height: "100vh" }}>
      <Box sx={{display:'flex',flexDirection:'row'}}> 
        <PersonIcon sx={{ml:2,mt: 7}} ></PersonIcon>
        <Link href="/datauser">
          <Typography sx={{ fontWeight: "bold", fontFamily: "Noto Sans Thai", mx:1,mt: 7, fontSize:'18'}}>
           ข้อมูลผู้ใช้งาน
        </Typography></Link>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row'}}> 
        <FileCopyRoundedIcon sx={{ml:2,mt: 3}} ></FileCopyRoundedIcon>
        <Link href="/report_date"><Typography sx={{ fontWeight: "bold", fontFamily: "Noto Sans Thai", mx:1,mt: 3, fontSize:'18'}}>
          รายงานผล
        </Typography></Link>
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
        <Link href="/login_admin">
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: "18px",
              ml: 130,
              mt: 2,
              fontFamily: "Noto Sans Thai",
            }}
          >
            ออกจากระบบได้เลย
          </Typography></Link>
        </Box>

        {/* ส่วนค้นหาข้อมูล */}
        <Box sx={{ width: "100%", height: "27vh", backgroundColor: "white" }}>
          <Card
            sx={{
              width: 1120,
              height: 110,
              ml: 5,
              mt: 2,
              borderRadius: 7,
              backgroundColor: "#f0f0f0",
            }}
          >
            <CardContent>
              <Box>
                <Typography
                  sx={{
                    mx: 2,
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "18px",
                    fontFamily: "Noto Sans Thai",
                  }}
                >
                  ค้นหาข้อมูลจากรหัสนักศึกษา หรือ สาขาวิชา
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Paper
                  component="form"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                    ml: 10,
                    mt: 1,
                    borderRadius: 5,
                  }}
                >
                  <IconButton type="button" sx={{ ml: 1 }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1, fontFamily: "Noto Sans Thai" }}
                    placeholder="ค้นหาจากรหัสนักศึกษา"
                    inputProps={{ "aria-label": "กรอกรหัสนักศึกษา" }}
                  />
                </Paper>

                <Paper
                  component="form"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                    ml: 5,
                    mt: 1,
                    borderRadius: 5,
                  }}
                >
                  <IconButton type="button" sx={{ ml: 1 }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1, fontFamily: "Noto Sans Thai" }}
                    placeholder="ค้นหาจากสาขาวิชา"
                    inputProps={{ "aria-label": "กรอกรหัสนักศึกษา" }}
                  />
                </Paper>
                <Button
                  variant="contained"
                  sx={{
                    ml: 4,
                    mt: 1,
                    fontFamily: "Noto Sans Thai",
                    backgroundColor: "#ff9800",
                    ":hover": { bgcolor: "#faab37" },
                    borderRadius: 4,
                    fontSize: 16,
                    height: 40,
                    width: 100,
                  }}
                >
                  ค้นหา
                </Button>
              </Box>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>

        {/* Box สุดท้ายแสดงข้อมูล */}
        <Box sx={{ width: "100%", backgroundColor: "white", height: "100vh" }}>
          <Card
            sx={{
              width: 1120,
              height: 415,
              ml: 5,
              mt: 1,
              borderRadius: 7,
              backgroundColor: "#f0f0f0",
            }}
          >
            <CardContent>
              <Table aria-label="basic table">
                <thead>
                  <tr style={{width: '40%'}}>
                    <th style={{ textAlign: "center", color: "black", }}>
                      รหัสนักศึกษา
                    </th>
                    <th style={{ textAlign: "center", color: "black" }}>
                      ชื่อ
                    </th>
                    <th style={{ textAlign: "center", color: "black" }}>
                      นามสกุล
                    </th>
                    <th style={{ textAlign: "center", color: "black" }}>
                      สาขาวิชา
                    </th>
                    <th style={{ textAlign: "center", color: "black" }}>
                      รายละเอียด
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td >63543206077-3</td>
                    <td>นายสมชาย</td>
                    <td>ใจดี</td>
                    <td>วศ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>รายละเอียด</td>
                  </tr>
                  <tr>
                    <td>63543206012-3</td>
                    <td>นายตะวัน</td>
                    <td>ส่องแสง</td>
                    <td>วศ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>รายละเอียด</td>
                  </tr>
                  <tr>
                    <td>635432060822-9</td>
                    <td>นายเปรมชัย</td>
                    <td>เสือดำ</td>
                    <td>วศ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>รายละเอียด</td>
                  </tr>
                  <tr>
                    <td>635432060004-7</td>
                    <td>นางสาวพอใจ</td>
                    <td>พอดี</td>
                    <td>วศ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>รายละเอียด</td>
                  </tr>
                  <tr>
                    <td>63543206028-9</td>
                    <td>นางสาวของขวัญ</td>
                    <td>สีขาว</td>
                    <td>วศ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>รายละเอียด</td>
                  </tr>
                  <tr>
                    <td>63543206072-8</td>
                    <td>นายภานุ</td>
                    <td>สุดแสบ</td>
                    <td>คอ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>รายละเอียด</td>
                  </tr>
                  <tr>
                    <td>63543206038-9</td>
                    <td>นางสาวทับทิม</td>
                    <td>ชมพู</td>
                    <td>คอ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>รายละเอียด</td>
                  </tr>
                  <tr>
                    <td>63543206048-1</td>
                    <td>นางสาวพู่กัน</td>
                    <td>มั่นคง</td>
                    <td>คอ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>รายละเอียด</td>
                  </tr>
                  <tr>
                    <td>63543206011-6</td>
                    <td>นายแม็กเวล</td>
                    <td>ซนมาก</td>
                    <td>คอ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>รายละเอียด</td>
                  </tr>
                </tbody>
              </Table>
            </CardContent>
          </Card>

          <Stack spacing={1} sx={{fontFamily:"Noto Sans Thai", mt:2, ml:4, fontWeight:'bold'}}>
            <Pagination count={10} />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
