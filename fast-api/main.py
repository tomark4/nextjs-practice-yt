from fastapi import FastAPI
from routes.tasks import task

app = FastAPI()

@app.get("/")
def home():
  return {'message':'success'}

app.include_router(task)