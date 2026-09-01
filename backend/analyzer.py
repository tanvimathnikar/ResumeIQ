# ==========================================
# ResumeIQ - Resume Analyzer
# ==========================================


SKILLS = [
    "Python",
    "C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "SQL",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Vue",
    "Node.js",
    "Express",
    "FastAPI",
    "Django",
    "Flask",
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "PyTorch",
    "IoT",
    "REST API",
    "Linux"
]


# ==========================================
# Find Skills
# ==========================================

def find_skills(resume_text):

    found_skills = []

    text = resume_text.lower()

    for skill in SKILLS:

        skill_lower = skill.lower()

        if skill_lower in text:

            found_skills.append(skill)

    return found_skills


# ==========================================
# Find Education
# ==========================================

def find_education(resume_text):

    education_keywords = [
        "B.Tech",
        "B.E.",
        "Bachelor",
        "Bachelors",
        "M.Tech",
        "M.E.",
        "Master",
        "MCA",
        "BCA",
        "MBA",
        "Computer Science",
        "Information Technology"
    ]

    found_education = []

    text = resume_text.lower()

    for keyword in education_keywords:

        if keyword.lower() in text:

            found_education.append(keyword)

    return found_education


# ==========================================
# Find Projects
# ==========================================

def find_projects(resume_text):

    project_keywords = [
        "Projects",
        "Project",
        "Developed",
        "Built",
        "Created",
        "Application",
        "System"
    ]

    found_projects = []

    text = resume_text.lower()

    for keyword in project_keywords:

        if keyword.lower() in text:

            found_projects.append(keyword)

    return found_projects


# ==========================================
# Find Experience
# ==========================================

def find_experience(resume_text):

    experience_keywords = [
        "Experience",
        "Internship",
        "Intern",
        "Work Experience",
        "Software Developer",
        "Developer",
        "Engineer"
    ]

    found_experience = []

    text = resume_text.lower()

    for keyword in experience_keywords:

        if keyword.lower() in text:

            found_experience.append(keyword)

    return found_experience


# ==========================================
# Calculate ATS Score
# ==========================================

def calculate_ats_score(
    resume_text,
    skills,
    education,
    projects,
    experience
):

    score = 0

    skill_score = min(
        len(skills) * 3,
        30
    )

    score += skill_score

    education_score = min(
        len(education) * 10,
        20
    )

    score += education_score

    project_score = min(
        len(projects) * 3,
        20
    )

    score += project_score

    experience_score = min(
        len(experience) * 5,
        20
    )

    score += experience_score

    word_count = len(
        resume_text.split()
    )

    if word_count >= 300:

        content_score = 10

    elif word_count >= 150:

        content_score = 7

    elif word_count >= 75:

        content_score = 5

    else:

        content_score = 2

    score += content_score

    return {
        "total_score": score,
        "skills_score": skill_score,
        "education_score": education_score,
        "projects_score": project_score,
        "experience_score": experience_score,
        "content_score": content_score
    }


# ==========================================
# Job Description Matcher
# ==========================================

def match_job_description(
    resume_text,
    job_description
):

    resume_lower = resume_text.lower()

    job_lower = job_description.lower()

    matching_skills = []

    missing_skills = []

    for skill in SKILLS:

        skill_lower = skill.lower()

        if skill_lower in job_lower:

            if skill_lower in resume_lower:

                matching_skills.append(skill)

            else:

                missing_skills.append(skill)

    total_required = (
        len(matching_skills)
        + len(missing_skills)
    )

    if total_required > 0:

        match_percentage = round(
            (
                len(matching_skills)
                / total_required
            ) * 100
        )

    else:

        match_percentage = 0

    return {
        "match_percentage": match_percentage,
        "matching_skills": matching_skills,
        "missing_skills": missing_skills
    }


# ==========================================
# Generate Resume Suggestions
# ==========================================

def generate_suggestions(
    resume_text,
    matching_skills,
    missing_skills
):

    suggestions = []

    # Missing skills

    for skill in missing_skills:

        suggestions.append(
            f"Consider learning or adding {skill} "
            f"to your resume if you have relevant experience."
        )

    # Missing skills project suggestion

    if len(missing_skills) >= 2:

        suggestions.append(
            "Build a project using some of the "
            "missing skills to strengthen your resume."
        )

    # Resume length suggestion

    word_count = len(
        resume_text.split()
    )

    if word_count < 150:

        suggestions.append(
            "Your resume appears short. Add more "
            "details about projects, achievements, "
            "and experience."
        )

    # Achievement suggestion

    suggestions.append(
        "Use measurable achievements in project "
        "descriptions, such as performance improvements, "
        "users served, or features implemented."
    )

    # No missing skills

    if len(missing_skills) == 0:

        suggestions.append(
            "Great job! Your resume covers the major "
            "skills mentioned in the job description."
        )

    return suggestions