"use client"; // ทำให้ใช้ MUI ได้
import styles from "../page.module.css";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    Dialog,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";

export default function Home() {
    const [open, setOpen] = useState(false); //open มีค่าเป็น false / setOpen
    return (
        <Box sx={{ mx: 10, width: "100%", height: "100vh" }}>
            <Box sx={{ mx: 30, mt: 10 }}>
                <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", fontFamily: "Noto Sans Thai" }}
                >
                    ลงทะเบียนเพื่อสแกนใบหน้าและวัดอุณหภูมิเพื่อเข้าเรียน
                </Typography>
            </Box>

            {/* //Select prefix */}
            <Box sx={{ mx: 35, mt: 5 }} display="flex" flexWrap="wrap">
                <Box sx={{ width: "20%" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            คำนำหน้า
                        </InputLabel>
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
                </Box>

                {/* //TextField name surname idStudent */}
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
                    sx={{ width: "35%", ml: 24, mt: 2, mx: 22 }}
                ></TextField>

                <Box sx={{ width: "40%", ml: 24, mt: 2, mr: 20, mx: 22 }}>
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
                            <MenuItem value={10}>
                                วศ.บ.วิศวกรรมคอมพิวเตอร์
                            </MenuItem>
                            <MenuItem value={20}>
                                คอ.บ.วิศวกรรมคอมพิวเตอร์
                            </MenuItem>
                        </Select>
                    </FormControl>
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
                        fontSize: 18,
                        height: 50,
                        width: "15%",
                    }}
                >
                    ยกเลิก
                </Button>

                <Button
                    variant="contained"
                    onClick={() => setOpen(true)}
                    sx={{
                        ml: 1,
                        mt: 4,
                        mr: 5,
                        fontFamily: "Noto Sans Thai",
                        backgroundColor: "#ff9800",
                        ":hover": { bgcolor: "#faab37" },
                        borderRadius: 3.5,
                        fontSize: 18,
                        height: 50,
                        width: "15%",
                    }}
                >
                    ยืนยัน
                </Button>
            </Box>

            <Dialog
                fullWidth
                maxWidth="xs"
                sx={{
                    padding: "-1px",
                    alignContent: "center",
                    Radius: 50,
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
                onClose={() => setOpen(false)}
                open={open}
            >
                <Box
                    sx={{
                        padding: "-1px",
                        alignContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >
                    <CheckCircleOutlineIcon
                        sx={{
                            width: " 2em",
                            mx: 20,
                            fontSize: "60px",
                            justifyContent: "center",
                        }}
                    />
                    ลงทะเบียนเรียบร้อย
                    <Button
                        variant="contained"
                        onClick={() => setOpen(false)}
                        sx={{
                            justifyContent: "center",
                            mx: 20,
                            my: 1,
                            fontFamily: "Noto Sans Thai",
                            backgroundColor: "#ff9800",
                            ":hover": { bgcolor: "#faab37" },
                            borderRadius: 5,
                            fontSize: 16,
                            px: 3,
                            py: 1,
                        }}
                    >
                        ตกลง
                    </Button>
                </Box>
            </Dialog>
        </Box>
    );
}
