import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useStyles } from "../../component/drawer/useStyles";

const MainContentArea = () => {
  const pathParams = useParams();
  const { Main } = useStyles();
  console.log("pathParams", pathParams);

  const [searchParams] = useSearchParams();
  console.log("tab", searchParams.get("tab"));
  console.log("country", searchParams.get("country"));
  console.log("state", searchParams.get("state"));
  return (
    <Main open={isOpen}>
      <h1>Project: {pathParams.projectId}</h1>;
    </Main>
  );
};

export default MainContentArea;
