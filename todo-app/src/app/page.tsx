import { getTasks } from "@/api/tasks";
import TaskList from "@/components/TaskList";
import { Task } from "@/types";
import React from "react";

const getData = async (): Promise<Task[] | null> => {
  try {
    const resp = await getTasks();
    return resp.data;
  } catch (e: any) {
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
        <TaskList tasks={data} />
      </div>
      <div className="h-[50px]" />
    </div>
  );
};

export default Home;
