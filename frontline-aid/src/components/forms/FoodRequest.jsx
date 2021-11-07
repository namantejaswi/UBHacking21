import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../theme";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string("Enter the food item")
    .min(1, "Enter at least one character")
    .required("Food name is required"),
  address: yup
    .string("Enter Address")
    .min(8, "Address should be atlease of 8 characters")
    .required("Address is required"),
});

const FoodRequestForm = () => {
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      name: "",
      address: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid
      container
      direction="column"
      sx={{
        marginTop: "2rem",
        padding: `2rem 20rem 0rem 20rem`,
      }}
    >
      <Card
        sx={{
          backgroundColor: "#FAFAFA",
        }}
      >
        <Typography variant="h5" color={theme.palette.primary.main}>
          Request Food
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box mt="1rem" mb="1rem" padding="2rem">
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  id="address"
                  name="address"
                  label="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
              <Grid item>
                <Button fullWidth variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Card>
    </Grid>
  );
};

export default FoodRequestForm;