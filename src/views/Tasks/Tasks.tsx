import style from "./tasks.module.scss";

const Tasks = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>TODO LIST</header>
      <main className={style.main}>
          <div className={style.filter}>
              <input className={style.input} />
          </div>
          <div className={style.content}>
              <div className={style.exercise}></div>
          </div>
      </main>
    </div>
  );
};

export { Tasks };
