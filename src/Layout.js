import React from "react";
import { useDrawerState } from "./constants/Constants";
import DataContainer from "./component/body/DataContainer";
import SearchAppBar from "./component/appbar/SearchAppBar";
import DraggableDrawer from "./component/body/DraggableDrawer";

const Layout = () => {
  const {
    isOpen,
    toggleDrawer,
    handleDrawerClose,
    handleItemClick,
    selectedItem,
  } = useDrawerState();

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <SearchAppBar onMenuClick={() => toggleDrawer()} />
      <div style={{ display: "flex", flexGrow: 1, marginTop: 64 }}>
        <DraggableDrawer
          selectedItem={selectedItem}
          isOpen={isOpen}
          handleDrawerClose={handleDrawerClose}
          onItemClick={handleItemClick}
          toggleDrawer={toggleDrawer}
        />
        <DataContainer isOpen={isOpen} selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default Layout;
