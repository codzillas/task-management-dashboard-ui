import React from "react";
import { useStyles } from "../drawer/useStyles";
import { AppContext } from "../../../context/store";
import SubHeader from "./subheaders/SubHeaders";

const MainContentArea = () => {
  const { isOpen } = React.useContext(AppContext);
  const { CustomContentArea } = useStyles();

  // const [searchParams] = useSearchParams();
  return (
    <CustomContentArea open={isOpen}>
      <SubHeader />
    </CustomContentArea>
  );
};

export default MainContentArea;
