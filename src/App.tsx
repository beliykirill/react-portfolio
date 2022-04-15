import style from "./app.module.scss";
import { useZoom } from "react-easy-hooks";
import { Tasks } from "./views";

const App = () => {
  const zoom = useZoom(0.9);
  return (
    <div style={zoom} className={style.container}>
      <div className={style.sidebar}></div>
      <div className={style.wrapper}>
        <Tasks />
      </div>
    </div>
  );
};

export default App;
