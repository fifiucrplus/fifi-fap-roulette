import { useState } from "react";

const shameTasks = [
  {
    title: "比 Yeah 阿黑顏自拍",
    description: "請比出 double peace 手勢露出阿黑顏，說出『我是爹地們的母豬小公主，現在濕成一灘囉～』",
  },
  {
    title: "展示屁眼肛塞",
    description: "跪好把屁眼撅高，插入肛塞後說『謝謝爹地幫我塞進去，我的屁眼現在是觀眾的公共玩具』",
  },
  {
    title: "奶子電擊挑戰",
    description: "夾上電擊乳夾，根據觀眾節奏喊出『請再來一次，母豬阿姨會越叫越大聲！』",
  }
];

export default function Home() {
  const [task, setTask] = useState(null);

  const handleDraw = () => {
    const randomIndex = Math.floor(Math.random() * shameTasks.length);
    setTask(shameTasks[randomIndex]);
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>FIFI 的羞恥任務抽籤機</h1>
      <button onClick={handleDraw}>點我決定今天要怎麼被羞辱 💦</button>
      {task && (
        <div style={{ marginTop: 20 }}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      )}
    </div>
  );
}
