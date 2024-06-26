import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-details">
        <div className="team-logo-container">
          <div className="match-details-container">
            <p className="team-name">{competingTeam}</p>
            <p className="match-date">{date}</p>
            <p className="match-venue">{venue}</p>
            <p className="match-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="team-logo"
          />
        </div>
        <div className="additional-details-container">
          <p className="match-first-innings">First Innings: {firstInnings}</p>
          <p className="match-second-innings">
            Second Innings: {secondInnings}
          </p>
          <p className="match-man-of-the-match">
            Man of the Match: {manOfTheMatch}
          </p>
          <p className="match-umpires">Umpires: {umpires}</p>
          <p className="match-status">{matchStatus}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
