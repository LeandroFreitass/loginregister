"use client";

import { ChangeEvent, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  Box,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Field, Form, Formik, useFormikContext } from "formik";

function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const loginHandler = async () => {
    console.log("Bem vindo: " 
    + user.email + ' Sua senha é : '
    + user.password
    );
  };
  return (
    <Box bg="tomato" w="50%" p="6" ml="25%" mt="10%" color="white">
      <div style={{ width: "50%", marginLeft: "25%" }}>
        <Heading ml="35%">Login</Heading>

        <FormControl mt="6%">
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="name"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <Input
            placeholder="name"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </FormControl>
        <Stack>
          <Button
            mt="5%"
            colorScheme="teal"
            variant="solid"
            onClick={loginHandler}
          >
            Button
          </Button>
        </Stack>
      </div>
    </Box>
  );
}

export default SignIn;
