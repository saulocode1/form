import * as React from "react";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const MyButton = styled(Button)({
   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
   border: 0,
   borderRadius: 3,
   boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
   color: "white",
   height: 48,
   padding: "0 60px",
   marginInline: "auto",
   display: "block",
   fontSize: "15px",
   fontWeight: "600",
   borderRadius: "10px",
});

export const StyledButton = ({ isLoading, isSuccess, isDefault }) => {
   return (
      <MyButton type="submit" variant="contained" color="primary" size="large">
         {isLoading ? "Loading..." : "Sign Up"}
      </MyButton>
   );
};
