interface IMatchesService {
  listAll(): void;
  updateGoals(id: string, homeTeamGoals: string, awayTeamGoals: string): void;
  listAllByProgress(inProgress: boolean): void;
  patchProgress(id: string): void;
  registerMatch(
    homeTeamId: string,
    awayTeamId: string,
    homeTeamGoals: string,
    awayTeamGoals: string
  ): void;
}

export default IMatchesService;
