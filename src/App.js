import Feed from "./components/Feed/Feed";
import SidebarLeft from "./components/SidebarLeft/SidebarLeft";
import SidebarRight from "./components/SidebarRight/SidebarRight";

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
