import { Box, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useGetUserDetails from "../../hooks/useGetUser";
import { fetchDecodedToken } from "../../util/commonUtils";

function Profile() {
  const { apiData: userDetails, getUserDetails } = useGetUserDetails();
  const decodedToken = fetchDecodedToken();

  React.useEffect(() => {
    getUserDetails({ userId: decodedToken.id });
  }, [decodedToken?.id]);

  const minWidth = { minWidth: "250px" };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Card sx={{ height: "100%" }}>
        <Typography variant="h4" sx={{ py: 2 }}>
          Profile Details
        </Typography>
        <CardContent>
          <Box>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              disabled
            />

            <TextField
              id="outlined-basic"
              label={userDetails?.first_name}
              variant="outlined"
              sx={minWidth}
              disabled
            />
          </Box>
          <Box>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              disabled
            />

            <TextField
              id="outlined-basic"
              label={userDetails?.last_name}
              variant="outlined"
              sx={minWidth}
              disabled
            />
          </Box>
          <Box>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              disabled
            />

            <TextField
              id="outlined-basic"
              label={userDetails?.email}
              variant="outlined"
              disabled
              sx={minWidth}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Profile;
