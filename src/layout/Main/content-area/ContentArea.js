import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useStyles } from "../drawer/useStyles";
import { AppContext } from "../../../context/store";
import SubHeader from "../../../component/subheaders/SubHeaders";

const MainContentArea = () => {
  const { isOpen } = React.useContext(AppContext);
  const pathParams = useParams();
  const { CustomContentArea } = useStyles();

  const [searchParams] = useSearchParams();
  return (
    <CustomContentArea open={isOpen}>
      <SubHeader projectName={pathParams.projectId} />
    </CustomContentArea>
  );
};

export default MainContentArea;
