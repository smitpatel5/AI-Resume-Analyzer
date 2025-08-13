import ScoreGauge from "~/components/ScoreGauge";
import ScoreBadge from "~/components/ScoreBadge";

const Category = ({ title, score }: { title: string, score: number }) => {
    const getStatus = (score: number) => {
        if (score >= 80) return 'Strong';
        if (score >= 70) return 'Good Start';
        if (score >= 50) return 'Needs Work';
        return 'Poor';
    };

    const getStatusColor = (score: number) => {
        if (score >= 80) return 'text-green-600';
        if (score >= 70) return 'text-blue-600';
        if (score >= 50) return 'text-yellow-600';
        return 'text-red-600';
    };

    return (
        <div className="category-card">
            <div className="category-header">
                <div className="category-name">{title}</div>
                <div className="category-score">{score}/100</div>
            </div>
            <div className={`category-status ${getStatusColor(score)}`}>
                {getStatus(score)}
            </div>
        </div>
    )
}

const Summary = ({ feedback }: { feedback: Feedback }) => {
    return (
        <div className="modern-resume-review">
            <div className="score-display">
                <div className="score-number">{feedback.overallScore}/100</div>
                <div className="score-label">Your Resume Score</div>
                <div className="score-description">
                    This score is calculated based on the variables listed below.
                </div>
            </div>

            <div className="category-grid">
                <Category title="Tone & Style" score={feedback.toneAndStyle.score} />
                <Category title="Content" score={feedback.content.score} />
                <Category title="Structure" score={feedback.structure.score} />
                <Category title="Skills" score={feedback.skills.score} />
            </div>
        </div>
    )
}
export default Summary
