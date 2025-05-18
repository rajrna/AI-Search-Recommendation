import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
import io

# Load pretrained model
model = models.resnet50(pretrained=True)
model.eval()

# Preprocessing
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225])
])

def extract_embedding(image_bytes):
    image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
    image_tensor = transform(image).unsqueeze(0)
    with torch.no_grad():
        embedding = model(image_tensor)
    return embedding.squeeze().numpy().tolist()
