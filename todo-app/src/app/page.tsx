import { Task } from "@/types";
import axios from "axios";
import React from "react";

const getData = async (): Promise<Task[] | null> => {
  try {
    const resp = await axios.get("http://localhost:8000/api/tasks");
    return resp.data;
  } catch (e: any) {
    console.error(e);
    return null;
  }
};
const Home = async () => {
  const data = await getData();

  if (!data) {
    return <h1> No data</h1>;
  }

  return (
    <div>
      <h1 className="text-3xl mt-5 text-center font-bold">Todo task</h1>
      <div className="flex gap-3 flex-col justify-center items-center mt-5">
        {data.map((item) => (
          <div>
            {item.title} - {String(item.completed)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
