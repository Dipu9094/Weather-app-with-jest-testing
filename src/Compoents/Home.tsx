import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Home = () => {
    const [countryName, setcountryName] = useState<string>("");
    let href = `/country/${countryName}`;

    return (
        <div data-testid="home">
            <Box
                style={{
                    display: "grid",
                    justifyContent: "center",
                    alignContent: "center",
                    gap: "10px",
                    height: "100vh",
                    width: "100%",
                }}
            >
                <Typography style={{ textAlign: "center" }}> Home</Typography>
                <TextField
                    placeholder="Enter country"
                    onChange={(e) => setcountryName(e.target.value)}
                    defaultValue={countryName}
                    inputProps={{
                        "data-testid": "country_input",
                    }}
                />
                <Link
                    href={href}
                    style={{ textDecoration: "none" }}
                    data-testid="link"
                >
                    <Button
                        color="primary"
                        disabled={!countryName}
                        variant="contained"
                        data-testid="submit"
                    >
                        Submit
                    </Button>
                </Link>
            </Box>
        </div>
    );
};

export default Home;
