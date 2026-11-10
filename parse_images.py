import base64
import os
import google.generativeai as genai

# Setup the Gemini API
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("GEMINI_API_KEY environment variable not set.")
    exit(1)

genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-2.5-pro')

def analyze_image(image_path, prompt):
    print(f"Analyzing {image_path}...")
    try:
        sample_file = genai.upload_file(path=image_path)
        response = model.generate_content([sample_file, prompt])
        print(response.text)
        print("-" * 40)
    except Exception as e:
        print(f"Error analyzing {image_path}: {e}")

# The user uploaded 9 images named image.png, image (1).png... wait, the metadata says:
# - image.png
# - image.png (actually they might be named something else in the filesystem or not?)
# Let's list the directory first.
