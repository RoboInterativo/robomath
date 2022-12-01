from typing import Union

from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates



class Item(BaseModel):
    type: str

    a: float
    b: float
    c: float

class ResOut(BaseModel):
    result: str

    x1: float
    x2: float
    d: float



app = FastAPI()
app.mount("/static", StaticFiles(directory="../front/build/static"), name="static")
templates = Jinja2Templates(directory="../front/build/")


@app.post("/equation/",response_model=ResOut)
async def calc_square(item: Item):
    d=item.b*item.b -4*item.a*item.c
    rez=ResOut(result='',x1=0,x2=0,d=d)


    return rez


@app.get("/", response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
