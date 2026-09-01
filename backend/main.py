# ==========================================
# ResumeIQ - FastAPI Backend
# ==========================================

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from resume_parser import extract_text_from_pdf

from analyzer import (
    find_skills,
    find_education,
    find_projects,
    find_experience,
    calculate_ats_score,
    match_job_description,
    generate_suggestions
)

from ai_analyzer import improve_resume_with_ai

import shutil
import os


# ==========================================
# CREATE FASTAPI APPLICATION
# ==========================================

app = FastAPI(
    title="ResumeIQ API",
    description="AI Resume Analyzer and Job Matcher",
    version="2.0.0"
)


# ==========================================
# CORS
# ==========================================

app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)


# ==========================================
# HOME
# ==========================================

@app.get("/")
def home():

    return {
        "message": "ResumeIQ Backend is running!",
        "version": "2.0"
    }


# ==========================================
# HEALTH CHECK
# ==========================================

@app.get("/health")
def health():

    return {
        "status": "ok",
        "message": "ResumeIQ API is healthy"
    }


# ==========================================
# UPLOAD RESUME
# ==========================================

@app.post("/upload-resume")
async def upload_resume(
    file: UploadFile = File(...)
):

    if not file.filename:

        return {
            "error": "No file selected."
        }


    if not file.filename.lower().endswith(".pdf"):

        return {
            "error": "Please upload a PDF resume."
        }


    safe_filename = os.path.basename(
        file.filename
    )


    file_path = os.path.join(
        os.getcwd(),
        f"uploaded_{safe_filename}"
    )


    try:

        # Save uploaded PDF

        with open(
            file_path,
            "wb"
        ) as buffer:

            shutil.copyfileobj(
                file.file,
                buffer
            )


        # Extract text

        text = extract_text_from_pdf(
            file_path
        )


        if not text or not text.strip():

            return {
                "error":
                    "Could not extract text from the PDF."
            }


        # Find skills

        skills = find_skills(
            text
        )


        # Find education

        education = find_education(
            text
        )


        # Find projects

        projects = find_projects(
            text
        )


        # Find experience

        experience = find_experience(
            text
        )


        # Calculate ATS score

        ats_score = calculate_ats_score(

            text,

            skills,

            education,

            projects,

            experience

        )


        return {

            "filename": safe_filename,

            "resume_text": text,

            "skills": skills,

            "education": education,

            "projects": projects,

            "experience": experience,

            "ats_score": ats_score

        }


    except Exception as e:

        print(
            "Resume processing error:",
            str(e)
        )

        return {

            "error":
                f"Resume processing failed: {str(e)}"

        }


    finally:

        if os.path.exists(file_path):

            try:

                os.remove(file_path)

            except Exception:

                pass


# ==========================================
# JOB DESCRIPTION MODEL
# ==========================================

class JobDescriptionRequest(BaseModel):

    resume_text: str

    job_description: str


# ==========================================
# JOB MATCHING
# ==========================================

@app.post("/match-job")
def match_job(
    data: JobDescriptionRequest
):

    try:

        result = match_job_description(

            data.resume_text,

            data.job_description

        )


        suggestions = generate_suggestions(

            data.resume_text,

            result.get(
                "matching_skills",
                []
            ),

            result.get(
                "missing_skills",
                []
            )

        )


        return {

            "match_percentage":
                result.get(
                    "match_percentage",
                    0
                ),

            "matching_skills":
                result.get(
                    "matching_skills",
                    []
                ),

            "missing_skills":
                result.get(
                    "missing_skills",
                    []
                ),

            "suggestions":
                suggestions

        }


    except Exception as e:

        print(
            "Job matching error:",
            str(e)
        )

        return {

            "error":
                f"Job matching failed: {str(e)}"

        }


# ==========================================
# AI RESUME IMPROVEMENT MODEL
# ==========================================

class AIResumeRequest(BaseModel):

    resume_text: str

    job_description: str


# ==========================================
# GEMINI AI ENDPOINT
# ==========================================

@app.post("/ai-improve-resume")
def ai_improve_resume(
    data: AIResumeRequest
):

    try:

        print("Gemini AI analysis started...")


        ai_result = improve_resume_with_ai(

            data.resume_text,

            data.job_description

        )


        print("Gemini AI analysis completed.")


        return {

            "success": True,

            "ai_analysis": ai_result

        }


    except Exception as e:

        print(
            "Gemini AI error:",
            str(e)
        )

        return {

            "success": False,

            "error":
                f"AI analysis failed: {str(e)}"

        }


# ==========================================
# API INFORMATION
# ==========================================

@app.get("/api-info")
def api_info():

    return {

        "application": "ResumeIQ",

        "version": "2.0.0",

        "status": "running",

        "ai": "Gemini",

        "endpoints": [

            "/",

            "/health",

            "/upload-resume",

            "/match-job",

            "/ai-improve-resume"

        ]

    }