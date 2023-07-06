"use client";
import { getTaskById, updateTask } from "@/api/tasks";
import TaskForm from "@/components/TaskForm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface FormValues {
  title: string;
  desc: string;
  completed?: boolean;
}

interface Props {
  params: { id: string };
}
const EditTask = ({ params }: Props) => {
  const [values, setValues] = useState<FormValues>({
    title: "",
    desc: "",
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const resp = await getTaskById(params.id);
        const task = resp.data;
        setValues({ ...task });
      } catch (e) {
        console.error(e);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    })();
  }, [params.id]);

  const handleChange = (e: any) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await updateTask(params.id, values);
      toast.success("Task updated");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (e) {
      toast.error("Something went wrong");
      console.error(e);
    }
  };

  const handleCheckChange = (e: any) => {
    setValues((prev) => ({ ...prev, completed: e.target.checked }));
  };

  if (loading) {
    return <h1 className="text-3xl text-center mt-4">Loading...</h1>;
  }

  return (
    <div className="flex items-center justify-center h[calc(100vh-10rem)] mt-10">
      <TaskForm
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCheckChange={handleCheckChange}
        editMode
      />
    </div>
  );
};

export default EditTask;
