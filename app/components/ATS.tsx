import React from 'react'

interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
  // Determine message based on score
  const getMessage = (score: number) => {
    if (score >= 80) return 'Excellent!';
    if (score >= 70) return 'Great Job!';
    if (score >= 60) return 'Good Start';
    if (score >= 50) return 'Needs Work';
    return 'Needs Improvement';
  };

  return (
    <div className="ats-section">
      <div className="ats-header">
        <div className="ats-title">ATS Score</div>
        <div className="ats-score">{score}/100</div>
        <div className="ats-message">{getMessage(score)}</div>
        <div className="ats-description">
          This score represents how well your resume is likely to perform in Applicant Tracking Systems used by employers.
        </div>
      </div>

      {/* Suggestions list */}
      <div className="tips-list">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="tip-item">
            <div className={`tip-icon ${suggestion.type === "good" ? "check" : "warning"}`}>
              {suggestion.type === "good" ? "✓" : "⚠"}
            </div>
            <div className="tip-text">{suggestion.tip}</div>
          </div>
        ))}
      </div>

      {/* Closing encouragement */}
      <div className="text-center mt-6">
        <p className="text-gray-600 italic">
          Keep refining your resume to improve your chances of getting past ATS filters and into the hands of recruiters.
        </p>
      </div>
    </div>
  )
}

export default ATS
