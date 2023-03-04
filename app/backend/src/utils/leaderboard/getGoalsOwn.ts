import Matches from '../../database/models/Matches';
import getMatchesByTeamId from './getMatchesByTeamId';

export default function getGoalsOwn(teamId: number, matches: Matches[]) {
  let goals = 0;
  const matchesByTeamId = getMatchesByTeamId(teamId, matches);

  matchesByTeamId.forEach((e) => {
    if (e.homeTeamId === teamId) {
      goals += e.awayTeamGoals;
    } else {
      goals += e.homeTeamGoals;
    }
  });

  return goals;
}
