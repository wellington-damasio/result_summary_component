import { Button, ResultInfo, ResultsCard, ResultsCardBody, ResultsCardHeader, ResultScore, SkillsResultContainer } from '@/styles/components/ResultsCard'
import SkillResultComponent from './SkillResult'
import utils from '@/utils/ResultSummary/utils'

export interface ISkillResult  {
  id?: string
  category: 'Reaction' | 'Memory' | 'Verbal' | 'Visual'
  score: number,
  icon: string
}

interface ResultsCardProps {
  results: ISkillResult[] 
}

export default function ResultSummaryCard({results}: ResultsCardProps) {
  const {getScore, getResultIcon} = utils
  const score = getScore(results)

  return(
    <ResultsCard>
      <ResultsCardHeader>
        <h1>Your Result</h1>

        <ResultScore>
          <span>{score}</span>
          <span>of 100</span>
        </ResultScore>

        <ResultInfo>
          <h2>Great</h2>
          <p>
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </ResultInfo>
      </ResultsCardHeader>
      <ResultsCardBody>
        <h2>Summary</h2>

        <SkillsResultContainer>
          {results.map(result => {
            const icon = getResultIcon(result.category)

            return(
              <SkillResultComponent 
                key={result.id}
                category={result.category}
                icon={icon}
                score={result.score}
              />
            )
          })}
        </SkillsResultContainer>
        <Button>Continue</Button>
      </ResultsCardBody>
    </ResultsCard>
  )
}