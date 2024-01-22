import ChatComponent from "./ChatComponent";
import NavigationComponent from "./NavigationComponent";

import "../App.css";

function App() {
  return (
    <div>
      {/* {alertVisible && <Alert children={"Shamboo"} onClick={() => setAlertVisibility(false)}></Alert>}
      <MyBtn color="danger" children={"my Button"} onClick={() => setAlertVisibility(true)} /> */}
      {/* <ChatComponent></ChatComponent> */}
      <div className="chatComponent">
        <ChatComponent></ChatComponent>
      </div>
      <div className="navigation">
        <NavigationComponent />
      </div>
    </div>
  );
}

export default App;
