import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useStyles } from "../drawer/useStyles";
import { AppContext } from "../../../context/store";

const MainContentArea = () => {
  const { isOpen } = React.useContext(AppContext);
  console.log("isOpen", isOpen);
  const pathParams = useParams();
  const { CustomContentArea } = useStyles();
  console.log("pathParams", pathParams);

  const [searchParams] = useSearchParams();
  console.log("tab", searchParams.get("tab"));
  console.log("country", searchParams.get("country"));
  console.log("state", searchParams.get("state"));
  return (
    <CustomContentArea open={isOpen}>
      <h1>Project: {pathParams.projectId}</h1>
    </CustomContentArea>
  );
};

export default MainContentArea;
