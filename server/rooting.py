from fastapi import FastAPI

from backend import get_posts

app = FastAPI()


@app.get("/")
async def root():
    return str(get_posts())



#python3 -m uvicorn rooting:app --reload