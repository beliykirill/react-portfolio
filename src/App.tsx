import style from "./app.module.scss";
import { useZoom } from "react-easy-hooks";

const App = () => {
  const zoom = useZoom(0.9);
  return (
    <div style={zoom} className={style.container}>
      <div className={style.sidebar}>
        <div className={style.profile}></div>
        <ul className={style.navigation}>
          <li className={style.category}></li>
          <li className={style.category}></li>
          <li className={style.category}></li>
          <li className={style.category}></li>
        </ul>
      </div>
      <div className={style.wrapper}>
        
      </div>
    </div>
  );
};

export default App;
