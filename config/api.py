import json
from ninja import NinjaAPI, Schema

api = NinjaAPI()

@api.get("/toast")
def hello(request):
    return "If you start to smell burning toast \ You're having a stroke \ Or overcooking your toast"
