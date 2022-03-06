import { Formik } from "formik";
import { Button, Card, CardContent } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import "./signup.css";
import app_config from "../config";
import Swal from "sweetalert2";

const AddImage = () => {
  const url = app_config.api_url;

  // Two important thing to use with Formik
  // 1. formObject
  const imageForm = {
    title: "",
    description: "",
    tags: [],
    file: "",
    author: "62247888b723646bbec9672b",
  };

  // 2. submit callback function
  const imageSubmit = (formdata) => {
    console.log(formdata);

    // three things are required to request
    // 1. address
    // 2. http request method
    // 3. data and its format

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/image/add", reqOpt)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have added image successfully!",
        });
      });
  };

  return (
    <div className="signup-bg">
      <h1 className="text-center">Signup Here</h1>
      <hr />
      <div className="col-md-4 mx-auto">
        <Card>
          <CardContent>
            <Formik initialValues={imageForm} onSubmit={imageSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <label className="mt-3">Title</label>
                  <input
                    placeholder="title"
                    className="form-control"
                    id="title"
                    value={values.titlte}
                    onChange={handleChange}
                  />

                  <label className="mt-3">Description</label>
                  <input
                    placeholder="description"
                    className="form-control"
                    id="description"
                    value={values.description}
                    onChange={handleChange}
                  />

                  <Button
                    type="submit"
                    className="w-100 mt-5"
                    variant="contained"
                    color="secondary"
                    startIcon={<GoogleIcon />}
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddImage;
