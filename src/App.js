import Feed from "./HomePage/Feed/Feed";
import SidebarLeft from "./HomePage/SidebarLeft/SidebarLeft";
import SidebarRight from "./HomePage/SidebarRight/SidebarRight";

function App() {
  return (
    <div className="App">
      <SidebarLeft />
      <Feed />
      <SidebarRight />
    </div>
  );
}

export default App;
