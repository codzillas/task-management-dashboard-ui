import DataContainer from "../../component/body/DataContainer";
import DraggableDrawer from "../../component/body/DraggableDrawer";

function Home({
  selectedItem,
  isOpen,
  handleDrawerClose,
  handleItemClick,
  toggleDrawer,
}) {
  return (
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
  );
}

export default Home;
