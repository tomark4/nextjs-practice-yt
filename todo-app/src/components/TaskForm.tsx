import { getApiUrl } from "@/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import { toast } from "react-hot-toast";

interface Props<T> {
  values: { title: string; desc: string; completed?: boolean; _id?: string };
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleCheckChange?: (e: any) => void;
  editMode?: boolean;
}

const TaskForm = <T,>({
  values,
  handleChange,
  handleSubmit,
  handleCheckChange,
  editMode,
}: Props<T>) => {
  const router = useRouter();

  const deleteTask = async (id: string) => {
    try {
      if (!id) {
        toast.error("Id required");
        return;
      }

      await deleteTask(id);
      toast.success("Task deleted");
      router.push("/");
    } catch (e) {
      toast.error("Something went wrong");
      console.error(e);
    }
  };

  return (
    <form
      className="bg-zinc-100 p-10 rounded-md drop-shadow-md w-[600px]"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl mb-4">
          {editMode ? "Update task" : "Add new task"}
        </h1>
        {editMode && (
          <button
            type="button"
            onClick={() => deleteTask(values._id as string)}
            className="bg-red-600 rounded p-2 text-white font-bold"
          >
            Delete
          </button>
        )}
      </div>

      <p className="mb-7 text-slate-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
        enim?
      </p>
      <div className="mb-10">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title task
        </label>
        <input
          autoFocus
          type="text"
          placeholder="Title"
          name="title"
          id="title"
          value={values.title}
          className="input"
          required
          onChange={handleChange}
        />
      </div>
      <div className="mb-10">
        <label
          htmlFor="desc"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Task description
        </label>
        <textarea
          name="desc"
          value={values.desc}
          placeholder="Description"
          onChange={handleChange}
          id="desc"
          rows={3}
          className="textarea"
        ></textarea>
      </div>
      {editMode && (
        <div className="mb-5">
          <label
            htmlFor="
          "
          >
            <input
              type="checkbox"
              onChange={handleCheckChange}
              defaultChecked={values.completed}
            />
            <span className="ml-4">Completed</span>
          </label>
        </div>
      )}
      <div>
        <button
          type="submit"
          className="bg-blue-600 rounded p-2 w-full text-white font-bold"
        >
          {editMode ? "Update" : "Save"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
