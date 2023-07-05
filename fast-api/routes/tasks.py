from fastapi import APIRouter,HTTPException
from db import (
  get_all_tasks,
  get_task_by_id,
  add_task,
  update_task,
  delete_task
)
from models import (
  Task,
  TaskUpdate
)

task = APIRouter()

@task.get("/api/tasks")
async def list():
  tasks = await get_all_tasks()
  return tasks


@task.get("/api/tasks/{id}", response_model=Task)
async def retrieve(id):
  task = await get_task_by_id(id)
  
  if task:
    return task
  
  raise HTTPException(404,f"Task with id {id} not found")


@task.post("/api/tasks", response_model=Task)
async def create(payload: Task, ):
  new_task = await add_task(payload.dict())

  # search = await get_task_by_title(payload.title)
  # if(search):
  #   raise HTTPException(409, 'Task already exists')
  
  if(new_task):
    return new_task
  raise HTTPException(400,'Something went wrong')


@task.put("/api/tasks/{id}", response_model=TaskUpdate)
async def update(id, payload: TaskUpdate):
  resp = await update_task(id, payload)
  if resp:
    return resp
  
  raise HTTPException(404,f"Task with id {id} not found")


@task.delete("/api/tasks/{id}")
async def destroy(id):
  resp = await delete_task(id)
  
  if resp:
    return "Deleted success!"
  
  raise HTTPException(404,f"Task with id {id} not found")