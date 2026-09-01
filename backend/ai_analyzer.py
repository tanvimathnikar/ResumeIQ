import os
from dotenv import load_dotenv
from google import genai


# Load environment variables
load_dotenv()


# Get Gemini API key
API_KEY = os.getenv("GEMINI_API_KEY")


if not API_KEY:
    raise ValueError(
        "GEMINI_API_KEY is missing. "
        "Please add it to the .env file."
    )


# Create Gemini client
client = genai.Client(
    api_key=API_KEY
)


def improve_resume_with_ai(
    resume_text,
    job_description
):

    prompt = f"""
You are an expert resume writer and ATS specialist.

Analyze the candidate's resume against the provided job description.

RESUME:
{resume_text}

JOB DESCRIPTION:
{job_description}

Provide a professional analysis.

Return the response with these sections:

1. Overall Assessment

2. Missing Skills

3. Missing Keywords

4. Resume Improvement Suggestions

5. Skills To Highlight

6. Improved Resume Bullet Points

7. ATS Optimization Tips

Make the suggestions specific to this candidate.
Do not invent experience that is not present in the resume.

Keep the response clear, professional and practical.
"""


    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )


    return response.text