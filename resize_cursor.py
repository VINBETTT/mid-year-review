from PIL import Image
import os

input_path = '/Users/bettywu/.gemini/antigravity-ide/brain/7d72f182-244e-4148-a8b6-9f6abb48e173/media__1782501854620.png'
output_path = '/Users/bettywu/Desktop/1st project/ZA7ZA8/mid-year-review-dashboard/cursor.png'

try:
    img = Image.open(input_path).convert("RGBA")
    # Resize keeping aspect ratio, max 32x32
    img.thumbnail((32, 32), Image.Resampling.LANCZOS)
    img.save(output_path, "PNG")
    print("Successfully created cursor.png")
except Exception as e:
    print("Error:", e)
