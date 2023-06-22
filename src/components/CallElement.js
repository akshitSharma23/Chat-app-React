import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import StyledBadge from "./Conversation/StyledBadge";
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from "phosphor-react";

const CallLogElement = ({ online, incoming, missed }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          // height:60,
          borderRadius: 1,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack spacing={2} direction={"row"} alignItems={"center"}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              {/* <Typography variant="caption">{msg}</Typography> */}
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Yesterday 21:29</Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
            <Phone color="green" />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

const CallElement = ({online}) => {
    const theme = useTheme();
    return(
        <Box
        sx={{
          width: "100%",
          // height:60,
          borderRadius: 1,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack spacing={2} direction={"row"} alignItems={"center"}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              {/* <Typography variant="caption">{msg}</Typography> */}
              
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
          <IconButton>
            <Phone color="green" />
          </IconButton>
          <IconButton>
            <VideoCamera color="green"/>
          </IconButton>
          </Stack>
        </Stack>
      </Box>
    )
};

export { CallElement, CallLogElement };