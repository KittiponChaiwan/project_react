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
import FileCopyRoundedIcon from "@mui/icons-material/FileCopyRounded";
import PersonIcon from "@mui/icons-material/Person";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <PersonIcon sx={{ ml: 2, mt: 7 }}></PersonIcon>
          <Link href="/datauser">
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
          </Typography></Link>
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
        <Link href="/login_admin">
          <Typography
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
          </Typography></Link>
        </Box>

        {/* ส่วนค้นหาข้อมูล */}
        <Box sx={{ width: "100%", height: "27vh", backgroundColor: "white" }}>
          <Card
            sx={{
              width: 1120,
              height: 100,
              ml: 5,
              mt: 2,
              borderRadius: 7,
              backgroundColor: "#f0f0f0",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    mx: 2,
                    mt:3,
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "18px",
                    fontFamily: "Noto Sans Thai",
                  }}
                >
                  รายวัน
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]} sx={{ ml: 1 }}>
                    <DatePicker label="" />
                  </DemoContainer>
                </LocalizationProvider>
                <Button
                  variant="contained"
                  sx={{
                    ml: 2,
                    mt: 3,
                    fontFamily: "Noto Sans Thai",
                    backgroundColor: "#ff9800",
                    ":hover": { bgcolor: "#faab37" },
                    borderRadius: 4,
                    fontSize: 16,
                    height: 30,
                    width: 80,
                  }}
                >
                  ตกลง
                </Button>

                <Typography
                  sx={{
                    ml: 7,
                    mt:3,
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "18px",
                    fontFamily: "Noto Sans Thai",
                  }}
                >
                รายเดือน
                </Typography>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer sx={{ ml: 2}}
                    components={["DatePicker", "DatePicker", "DatePicker"]}
                  >
                    <DatePicker
                      label={''}
                      views={["month", "year"]}
                    />
                  </DemoContainer>
                </LocalizationProvider>

                <Link href="/report_month">
                <Button
                  variant="contained"
                  sx={{
                    ml: 2,
                    mt: 3,
                    fontFamily: "Noto Sans Thai",
                    backgroundColor: "#ff9800",
                    ":hover": { bgcolor: "#faab37" },
                    borderRadius: 4,
                    fontSize: 16,
                    height: 30,
                    width: 80,
                  }}
                >
                  ตกลง
                </Button></Link>

                <Button
                  variant="contained"
                  sx={{
                    ml: 2,
                    mt: 2,
                    fontFamily: "Noto Sans Thai",
                    backgroundColor: "#ff9800",
                    ":hover": { bgcolor: "#faab37" },
                    borderRadius: 4,
                    color:'black',
                    fontSize: 16,
                    height: 40,
                    width: 120,
                  }}
                >
                  ส่งข้อมูลออก
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
                  <tr>
                    <th style={{ textAlign: "center", color: "black" }}>
                      รหัสนักศึกษา
                    </th>
                    <th style={{ textAlign: "center", color: "black" }}>
                      {" "}
                      ชื่อ
                    </th>
                    <th style={{ textAlign: "center", color: "black" }}>
                      นามสกุล
                    </th>
                    <th style={{ textAlign: "center", color: "black" }}>
                      สาขาวิชา
                    </th>
                    <th style={{ textAlign: "center", color: "black" }}>
                      เวลา
                    </th>
                    <th style={{ textAlign: "center", color: "black" }}>
                      อุณหภูมิ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>63543206077-3</td>
                    <td>นายสมชาย</td>
                    <td>ใจดี</td>
                    <td>วศ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>08.13 น.</td>
                    <td>36.6</td>
                  </tr>
                  <tr>
                    <td>63543206012-3</td>
                    <td>นายตะวัน</td>
                    <td>ส่องแสง</td>
                    <td>วศ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>08.15 น.</td>
                    <td>37.0</td>
                  </tr>
                  <tr>
                    <td>63543206082-9</td>
                    <td>นายเปรมชัย</td>
                    <td>เสือดำ</td>
                    <td>วศ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>08.16 น.</td>
                    <td>36.3</td>
                  </tr>
                  <tr>
                    <td>63543206004-7</td>
                    <td>นางสาวพอใจ</td>
                    <td>พอดี</td>
                    <td>วศ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>08.23 น.</td>
                    <td>35.9</td>
                  </tr>
                  <tr>
                    <td>63543206028-9</td>
                    <td>นางสาวของขวัญ</td>
                    <td>สีขาว</td>
                    <td>วศ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>08.26 น.</td>
                    <td>36.5</td>
                  </tr>
                  <tr>
                    <td>63543206072-8</td>
                    <td>นายภานุ</td>
                    <td>สุดแสบ</td>
                    <td>คอ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>08.49น.</td>
                    <td>36.3</td>
                  </tr>
                  <tr>
                    <td>63543206038-9</td>
                    <td>นางสาวทับทิม</td>
                    <td>ชมพู</td>
                    <td>คอ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>08.57 น.</td>
                    <td>36.8</td>
                  </tr>
                  <tr>
                    <td>63543206048-1</td>
                    <td>นางสาวพู่กัน</td>
                    <td>มั่นคง</td>
                    <td>คอ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>09.02 น.</td>
                    <td>36.5</td>
                  </tr>
                  <tr>
                    <td>63543206011-6</td>
                    <td>นายแม็กเวล</td>
                    <td>ซนมาก</td>
                    <td>คอ.บ.วิศวกรรมคอมพิวเตอร์</td>
                    <td>09.10 น.</td>
                    <td>36.4</td>
                  </tr>
                </tbody>
              </Table>
            </CardContent>
          </Card>

          <Stack
            spacing={1}
            sx={{
              fontFamily: "Noto Sans Thai",
              mt: 2,
              ml: 4,
              fontWeight: "bold",
            }}
          >
            <Pagination count={10} />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
