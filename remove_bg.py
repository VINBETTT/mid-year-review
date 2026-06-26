from PIL import Image
import os

input_path = '/Users/bettywu/.gemini/antigravity-ide/brain/7d72f182-244e-4148-a8b6-9f6abb48e173/media__1782501854620.png'
output_path = '/Users/bettywu/Desktop/1st project/ZA7ZA8/mid-year-review-dashboard/cursor.png'

try:
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    bg_color = data[0]
    new_data = []
    tolerance = 25
    
    for item in data:
        # Check if color is close to background color
        if abs(item[0] - bg_color[0]) < tolerance and \
           abs(item[1] - bg_color[1]) < tolerance and \
           abs(item[2] - bg_color[2]) < tolerance:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.thumbnail((32, 32), Image.Resampling.LANCZOS)
    img.save(output_path, "PNG")
    print("Successfully created transparent cursor.png")
except Exception as e:
    print("Error:", e)
