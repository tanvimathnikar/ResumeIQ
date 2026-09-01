import { useState } from "react";
import "./App.css";

const API_URL = "https://resumeiq-backend-jdni.onrender.com";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const navigation = [
    { name: "Dashboard", icon: "⌂" },
    { name: "Create Resume", icon: "✦" },
    { name: "Analyze Resume", icon: "◈" },
    { name: "Job Match", icon: "⚡" },
    { name: "My Resumes", icon: "▤" },
  ];

  const renderPage = () => {
    switch (activePage) {
      case "Create Resume":
        return <CreateResume />;

      case "Analyze Resume":
        return <AnalyzeResume />;

      case "Job Match":
        return <JobMatch />;

      case "My Resumes":
        return <MyResumes />;

      default:
        return <Dashboard setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">R</div>

          <div>
            <h2>ResumeIQ</h2>
            <span>AI Career Studio</span>
          </div>
        </div>

        <div className="nav-section">
          <p className="nav-title">WORKSPACE</p>

          {navigation.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-icon">✦</div>

            <h3>Build your career</h3>

            <p>
              Create an impressive resume and improve your chances of getting
              noticed.
            </p>

            <button onClick={() => setActivePage("Create Resume")}>
              Create Resume →
            </button>
          </div>

          <div className="user-card">
            <div className="avatar">T</div>

            <div>
              <strong>Welcome!</strong>
              <span>Resume Builder</span>
            </div>

            <span className="more">•••</span>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main-content">
        <header className="topbar">
          <p className="breadcrumb">
            Workspace / {activePage}
          </p>

          <div className="top-actions">
            <button className="notification">♢</button>

            <div className="profile">
              <div className="small-avatar">T</div>
              <span>My Profile</span>
            </div>
          </div>
        </header>

        <section className="page-content">
          {renderPage()}
        </section>
      </main>
    </div>
  );
}

/* =====================================================
   DASHBOARD
===================================================== */

function Dashboard({ setActivePage }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="welcome-badge">
            <span>✦</span>
            AI-powered career assistant
          </div>

          <h1>
            Build a resume
            <br />
            <span>that gets noticed.</span>
          </h1>

          <p>
            Create, analyze and optimize your resume with AI-powered tools
            designed to help you stand out from the competition.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => setActivePage("Create Resume")}
            >
              ✦ Create My Resume
            </button>

            <button
              className="secondary-button"
              onClick={() => setActivePage("Analyze Resume")}
            >
              Analyze Resume →
            </button>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="orb orb-one"></div>
          <div className="orb orb-two"></div>

          <div className="resume-preview-card">
            <div className="mini-top">
              <div className="mini-photo"></div>

              <div>
                <div className="mini-line large"></div>
                <div className="mini-line medium"></div>
              </div>
            </div>

            <div className="mini-heading">EXPERIENCE</div>

            <div className="mini-line full"></div>
            <div className="mini-line full"></div>
            <div className="mini-line medium"></div>

            <div className="mini-heading">SKILLS</div>

            <div className="mini-tags">
              <span>Python</span>
              <span>React</span>
              <span>SQL</span>
            </div>

            <div className="score-floating">
              <span>ATS SCORE</span>
              <strong>87%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        <StatCard
          icon="◎"
          title="ATS Score"
          value="87%"
          description="Resume readiness"
          type="purple"
        />

        <StatCard
          icon="✦"
          title="Skills Found"
          value="12"
          description="Technical skills"
          type="blue"
        />

        <StatCard
          icon="⚡"
          title="Job Match"
          value="71%"
          description="Current match"
          type="green"
        />

        <StatCard
          icon="▤"
          title="Resumes"
          value="3"
          description="Created resumes"
          type="orange"
        />
      </section>

      <section className="dashboard-grid">
        <div className="feature-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">POWERED BY AI</p>
              <h2>What would you like to do?</h2>
            </div>
          </div>

          <div className="feature-grid">
            <FeatureCard
              icon="✦"
              title="Create Resume"
              text="Build a professional resume from scratch with AI assistance."
              button="Start creating"
              onClick={() => setActivePage("Create Resume")}
              color="purple"
            />

            <FeatureCard
              icon="◎"
              title="Analyze Resume"
              text="Check your resume's ATS score, skills and improvement areas."
              button="Analyze now"
              onClick={() => setActivePage("Analyze Resume")}
              color="blue"
            />

            <FeatureCard
              icon="⚡"
              title="Match a Job"
              text="Compare your resume with a job description and discover gaps."
              button="Find match"
              onClick={() => setActivePage("Job Match")}
              color="green"
            />
          </div>
        </div>

        <div className="suggestion-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">AI INSIGHTS</p>
              <h2>Quick tips</h2>
            </div>

            <span className="sparkle">✦</span>
          </div>

          <Tip
            title="Use measurable achievements"
            text="Add numbers such as performance improvements, users served or projects completed."
          />

          <Tip
            title="Keep your skills relevant"
            text="Highlight technologies that appear in your target job description."
          />

          <Tip
            title="Make your summary powerful"
            text="Explain your strengths and the value you can bring to the company."
          />
        </div>
      </section>
    </>
  );
}

/* =====================================================
   STAT CARD
===================================================== */

function StatCard({ icon, title, value, description, type }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${type}`}>{icon}</div>

      <div className="stat-info">
        <span>{title}</span>
        <strong>{value}</strong>
        <small>{description}</small>
      </div>

      <div className="stat-arrow">↗</div>
    </div>
  );
}

/* =====================================================
   FEATURE CARD
===================================================== */

function FeatureCard({
  icon,
  title,
  text,
  button,
  onClick,
  color,
}) {
  return (
    <div className="feature-card">
      <div className={`feature-icon ${color}`}>
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

      <button onClick={onClick}>
        {button} <span>→</span>
      </button>
    </div>
  );
}

/* =====================================================
   TIP
===================================================== */

function Tip({ title, text }) {
  return (
    <div className="tip">
      <div className="tip-icon">✓</div>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

/* =====================================================
   CREATE RESUME
===================================================== */

function CreateResume() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    title: "",
    summary: "",
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    experience: "",
    skills: "",
    projects: "",
    education: "",
    targetJob: "",
  });

  const updateField = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="tool-page">
      <div className="tool-header">
        <div>
          <p className="eyebrow">AI RESUME CREATOR</p>

          <h1>Create your professional resume</h1>

          <p>
            Tell us about yourself and let ResumeIQ help you create
            professional resume content.
          </p>
        </div>

        <div className="ai-badge">✦ AI Powered</div>
      </div>

      <div className="creator-layout">
        <div className="form-panel">

          <div className="stepper">
            <Step number="1" text="Personal" active={step === 1} />
            <Step number="2" text="Experience" active={step === 2} />
            <Step number="3" text="Skills" active={step === 3} />
            <Step number="4" text="Generate" active={step === 4} />
          </div>

          {step === 1 && (
            <div className="form-content">
              <h2>Let's start with the basics</h2>

              <p className="form-subtitle">
                Enter your basic information.
              </p>

              <div className="form-grid">
                <Input
                  label="Full Name"
                  placeholder="Alex Johnson"
                  value={formData.name}
                  onChange={(e) =>
                    updateField("name", e.target.value)
                  }
                />

                <Input
                  label="Email"
                  placeholder="alex@example.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    updateField("email", e.target.value)
                  }
                />

                <Input
                  label="Phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) =>
                    updateField("phone", e.target.value)
                  }
                />

                <Input
                  label="Location"
                  placeholder="Nagpur, Maharashtra"
                  value={formData.location}
                  onChange={(e) =>
                    updateField("location", e.target.value)
                  }
                />
              </div>

              <Input
                label="Professional Title"
                placeholder="Computer Science Engineering Student"
                value={formData.title}
                onChange={(e) =>
                  updateField("title", e.target.value)
                }
              />

              <TextArea
                label="Professional Summary"
                placeholder="Tell recruiters about yourself, your strengths and career goals..."
                value={formData.summary}
                onChange={(e) =>
                  updateField("summary", e.target.value)
                }
              />

              <div className="form-actions">
                <button
                  className="primary-button"
                  onClick={() => setStep(2)}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-content">
              <h2>Tell us about your experience</h2>

              <p className="form-subtitle">
                Add internships, jobs or important experience.
              </p>

              <Input
                label="Job / Internship Title"
                placeholder="Software Development Intern"
                value={formData.jobTitle}
                onChange={(e) =>
                  updateField("jobTitle", e.target.value)
                }
              />

              <Input
                label="Company"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) =>
                  updateField("company", e.target.value)
                }
              />

              <div className="form-grid">
                <Input
                  label="Start Date"
                  placeholder="June 2025"
                  value={formData.startDate}
                  onChange={(e) =>
                    updateField("startDate", e.target.value)
                  }
                />

                <Input
                  label="End Date"
                  placeholder="August 2025"
                  value={formData.endDate}
                  onChange={(e) =>
                    updateField("endDate", e.target.value)
                  }
                />
              </div>

              <TextArea
                label="What did you do?"
                placeholder="Describe your responsibilities and achievements..."
                value={formData.experience}
                onChange={(e) =>
                  updateField("experience", e.target.value)
                }
              />

              <div className="form-actions">
                <button
                  className="secondary-button"
                  onClick={() => setStep(1)}
                >
                  ← Back
                </button>

                <button
                  className="primary-button"
                  onClick={() => setStep(3)}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-content">
              <h2>Showcase your skills</h2>

              <p className="form-subtitle">
                Add the technologies and skills you know.
              </p>

              <TextArea
                label="Technical Skills"
                placeholder="Python, Java, C++, SQL, React, HTML, CSS, Git..."
                value={formData.skills}
                onChange={(e) =>
                  updateField("skills", e.target.value)
                }
              />

              <TextArea
                label="Projects"
                placeholder="Project name — what you built, technologies used and results..."
                value={formData.projects}
                onChange={(e) =>
                  updateField("projects", e.target.value)
                }
              />

              <TextArea
                label="Education"
                placeholder="B.Tech Computer Science Engineering — ABC Institute — 2023-2027"
                value={formData.education}
                onChange={(e) =>
                  updateField("education", e.target.value)
                }
              />

              <Input
                label="Target Job"
                placeholder="Software Developer / Data Analyst / Web Developer"
                value={formData.targetJob}
                onChange={(e) =>
                  updateField("targetJob", e.target.value)
                }
              />

              <div className="form-actions">
                <button
                  className="secondary-button"
                  onClick={() => setStep(2)}
                >
                  ← Back
                </button>

                <button
                  className="primary-button"
                  onClick={() => setStep(4)}
                >
                  ✦ Generate Resume
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="generation-screen">
              <div className="success-icon">✓</div>

              <h2>Your resume information is ready!</h2>

              <p>
                Your information has been collected successfully.
                AI resume generation can now be connected to your
                Gemini-powered backend.
              </p>

              <button
                className="primary-button"
                onClick={() =>
                  alert(
                    "AI Resume Generator will be connected next."
                  )
                }
              >
                ✦ Generate Final Resume
              </button>

              <button
                className="text-button"
                onClick={() => setStep(1)}
              >
                Start again
              </button>
            </div>
          )}
        </div>

        <div className="preview-panel">
          <div className="preview-header">
            <span>LIVE PREVIEW</span>
            <span className="preview-dot">●</span>
          </div>

          <div className="resume-paper">
            <div className="paper-header">
              <div className="paper-avatar">
                {formData.name
                  ? formData.name.charAt(0).toUpperCase()
                  : "A"}
              </div>

              <div>
                <h2>
                  {formData.name || "Alex Johnson"}
                </h2>

                <p>
                  {formData.title || "Software Developer"}
                </p>
              </div>
            </div>

            <div className="paper-section">
              <h4>PROFILE</h4>

              <p>
                {formData.summary ||
                  "Your professional summary will appear here."}
              </p>
            </div>

            <div className="paper-section">
              <h4>SKILLS</h4>

              <div className="paper-skills">
                {formData.skills
                  ? formData.skills
                      .split(",")
                      .slice(0, 6)
                      .map((skill) => (
                        <i key={skill}>
                          {skill.trim()}
                        </i>
                      ))
                  : (
                    <>
                      <i>Python</i>
                      <i>React</i>
                      <i>SQL</i>
                      <i>Git</i>
                    </>
                  )}
              </div>
            </div>

            <div className="paper-section">
              <h4>EXPERIENCE</h4>

              <p>
                {formData.jobTitle
                  ? `${formData.jobTitle} at ${formData.company}`
                  : "Your experience will appear here."}
              </p>
            </div>

            <div className="paper-section">
              <h4>PROJECTS</h4>

              <p>
                {formData.projects ||
                  "Your projects will appear here."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   ANALYZE RESUME
===================================================== */

function AnalyzeResume() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const analyzeResume = async () => {
    if (!file) {
      setError("Please select a resume first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch(
        `${API_URL}/upload-resume`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();

        throw new Error(
          errorText || "Resume analysis failed."
        );
      }

      const data = await response.json();

      console.log("Backend response:", data);

      setResult(data);
    } catch (err) {
      console.error(err);

      setError(
        err.message ||
          "Unable to connect to the ResumeIQ backend."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tool-page">
      <div className="tool-header">
        <div>
          <p className="eyebrow">RESUME ANALYZER</p>

          <h1>Understand your resume</h1>

          <p>
            Upload your resume and get an ATS score, skill analysis
            and actionable suggestions.
          </p>
        </div>

        <div className="ai-badge">
          ✦ AI Analysis
        </div>
      </div>

      <div className="upload-container">
        <div
          className="upload-box"
          onClick={() =>
            document
              .getElementById("resume-upload")
              .click()
          }
        >
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            hidden
            onChange={(e) => {
              const selectedFile =
                e.target.files?.[0];

              setFile(selectedFile);
              setResult(null);
              setError("");
            }}
          />

          <div className="upload-icon">↑</div>

          <h2>
            {file
              ? file.name
              : "Drop your resume here"}
          </h2>

          <p>
            {file
              ? "Your resume is ready to analyze."
              : "or click to browse from your computer"}
          </p>

          <span className="file-types">
            PDF, DOC or DOCX • Maximum 10MB
          </span>
        </div>

        {file && (
          <button
            className="primary-button analyze-button"
            onClick={analyzeResume}
            disabled={loading}
          >
            {loading
              ? "⏳ Analyzing..."
              : "✦ Analyze My Resume"}
          </button>
        )}

        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}
      </div>

      {/* RESULTS */}

      <div className="analysis-preview">

        <div className="analysis-card">
          <div className="analysis-card-icon purple">
            ◎
          </div>

          <h3>ATS Score</h3>

          <strong>
            {result?.ats_score ??
              result?.score ??
              "--"}
            {result &&
            (result.ats_score !== undefined ||
              result.score !== undefined)
              ? "%"
              : ""}
          </strong>

          <p>
            {result
              ? "Resume analysis complete"
              : "Upload your resume to calculate"}
          </p>
        </div>

        <div className="analysis-card">
          <div className="analysis-card-icon blue">
            ✦
          </div>

          <h3>Skills</h3>

          <strong>
            {result?.skills
              ? Array.isArray(result.skills)
                ? result.skills.length
                : "--"
              : "--"}
          </strong>

          <p>
            {result?.skills
              ? "Skills identified"
              : "Skills will appear here"}
          </p>
        </div>

        <div className="analysis-card">
          <div className="analysis-card-icon green">
            ✓
          </div>

          <h3>Suggestions</h3>

          <strong>
            {result?.suggestions
              ? Array.isArray(result.suggestions)
                ? result.suggestions.length
                : "✓"
              : "--"}
          </strong>

          <p>
            {result
              ? "AI recommendations"
              : "AI recommendations"}
          </p>
        </div>
      </div>

      {/* DETAILED RESULT */}

      {result && (
        <div className="result-section">

          <div className="result-card">
            <p className="eyebrow">
              AI ANALYSIS RESULT
            </p>

            <h2>
              Resume Analysis
            </h2>

            {result.summary && (
              <div className="result-block">
                <h3>Summary</h3>
                <p>{result.summary}</p>
              </div>
            )}

            {result.skills && (
              <div className="result-block">
                <h3>Skills Found</h3>

                <div className="result-tags">
                  {Array.isArray(result.skills)
                    ? result.skills.map(
                        (skill, index) => (
                          <span key={index}>
                            {typeof skill ===
                            "string"
                              ? skill
                              : skill.name ||
                                JSON.stringify(skill)}
                          </span>
                        )
                      )
                    : (
                      <p>
                        {JSON.stringify(
                          result.skills
                        )}
                      </p>
                    )}
                </div>
              </div>
            )}

            {result.suggestions && (
              <div className="result-block">
                <h3>Suggestions</h3>

                {Array.isArray(
                  result.suggestions
                ) ? (
                  <ul>
                    {result.suggestions.map(
                      (suggestion, index) => (
                        <li key={index}>
                          {typeof suggestion ===
                          "string"
                            ? suggestion
                            : JSON.stringify(
                                suggestion
                              )}
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <p>
                    {JSON.stringify(
                      result.suggestions
                    )}
                  </p>
                )}
              </div>
            )}

            {/* Show complete response for fields
                that your backend may return */}
            <details>
              <summary>
                View complete AI response
              </summary>

              <pre>
                {JSON.stringify(
                  result,
                  null,
                  2
                )}
              </pre>
            </details>
          </div>
        </div>
      )}
    </div>
  );
}

/* =====================================================
   JOB MATCH
===================================================== */

function JobMatch() {
  const [jobDescription, setJobDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const [error, setError] =
    useState("");

  const analyzeJob = async () => {
    if (!jobDescription.trim()) {
      setError(
        "Please enter a job description."
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      /*
       * IMPORTANT:
       * Change this endpoint if your FastAPI
       * backend uses another Job Match endpoint.
       */

      const response = await fetch(
        `${API_URL}/job-match`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            job_description: jobDescription,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Job match request failed."
        );
      }

      const data = await response.json();

      setResult(data);
    } catch (err) {
      console.error(err);

      setError(
        err.message ||
          "Unable to analyze job description."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tool-page">
      <div className="tool-header">
        <div>
          <p className="eyebrow">
            JOB MATCH
          </p>

          <h1>
            Match your resume with a job
          </h1>

          <p>
            Paste a job description and ResumeIQ
            will compare it with your resume.
          </p>
        </div>

        <div className="ai-badge">
          ⚡ Smart Matching
        </div>
      </div>

      <div className="job-match-grid">

        <div className="job-input-card">
          <label>
            Job Description
          </label>

          <textarea
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(
                e.target.value
              )
            }
            placeholder={`Paste the job description here...

Example:
We are looking for a Software Developer with experience in Python, React, SQL, Git and AWS...`}
          ></textarea>

          <button
            className="primary-button"
            onClick={analyzeJob}
            disabled={loading}
          >
            {loading
              ? "⏳ Analyzing..."
              : "⚡ Analyze Job Match"}
          </button>

          {error && (
            <div className="error-message">
              ❌ {error}
            </div>
          )}
        </div>

        <div className="match-result-card">
          <p className="eyebrow">
            MATCH RESULT
          </p>

          <div className="big-score">
            {result?.match_score ??
              result?.score ??
              "--"}
            {result ? "%" : ""}
          </div>

          <h2>
            {result
              ? "Analysis complete"
              : "Upload a resume first"}
          </h2>

          <p>
            {result
              ? "Your job match results are ready."
              : "Your matching skills, missing skills and recommendations will appear here."}
          </p>

          <div className="match-placeholder">
            <span>✓</span>
            Matching skills
          </div>

          <div className="match-placeholder">
            <span>!</span>
            Missing skills
          </div>

          {result && (
            <details>
              <summary>
                View complete result
              </summary>

              <pre>
                {JSON.stringify(
                  result,
                  null,
                  2
                )}
              </pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   MY RESUMES
===================================================== */

function MyResumes() {
  const resumes = [
    {
      name: "Software Developer Resume",
      date: "Created recently",
      score: "87%",
    },

    {
      name: "Python Developer Resume",
      date: "Created recently",
      score: "78%",
    },

    {
      name: "General Resume",
      date: "Created recently",
      score: "71%",
    },
  ];

  return (
    <div className="tool-page">
      <div className="tool-header">
        <div>
          <p className="eyebrow">
            MY RESUMES
          </p>

          <h1>
            Your resume collection
          </h1>

          <p>
            Keep track of your resumes and their
            ATS performance.
          </p>
        </div>
      </div>

      <div className="resume-list">
        {resumes.map((resume) => (
          <div
            className="resume-list-card"
            key={resume.name}
          >
            <div className="document-icon">
              ▤
            </div>

            <div className="resume-details">
              <h3>{resume.name}</h3>
              <p>{resume.date}</p>
            </div>

            <div className="resume-score">
              <span>ATS</span>
              <strong>
                {resume.score}
              </strong>
            </div>

            <button className="outline-button">
              View →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =====================================================
   SMALL COMPONENTS
===================================================== */

function Step({
  number,
  text,
  active,
}) {
  return (
    <div
      className={`step ${
        active ? "active" : ""
      }`}
    >
      <div className="step-number">
        {number}
      </div>

      <span>{text}</span>
    </div>
  );
}

function Input({
  label,
  placeholder,
  type = "text",
  value = "",
  onChange,
}) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function TextArea({
  label,
  placeholder,
  value = "",
  onChange,
}) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default App;