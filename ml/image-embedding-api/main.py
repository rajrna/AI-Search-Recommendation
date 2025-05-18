from fastapi import FastAPI, File, UploadFile
from embedding_utils import extract_embedding

app = FastAPI()

@app.post("/extract-embedding/")
async def get_embedding(file: UploadFile = File(...)):
    image_bytes = await file.read()
    embedding = extract_embedding(image_bytes)
    return {"embedding": embedding}
