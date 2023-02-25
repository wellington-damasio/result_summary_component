import reactionIcon from '/public/images/icon-reaction.svg'
import memoryIcon from '/public/images/icon-memory.svg'
import verbalIcon from '/public/images/icon-verbal.svg'
import visualIcon from '/public/images/icon-visual.svg'
import { ISkillResult } from '@/components/ResultSummaryCard'

const getResultIcon = (category: string) => {
  switch(category) {
    case 'Reaction':
      return reactionIcon
    case 'Memory':
      return memoryIcon
    case 'Verbal':
      return verbalIcon
    case 'Visual':
      return visualIcon
    default:
      return ''
  }
}

const getScore = (results: ISkillResult[]) => {
  const score = Math.round(
    results
      .map(result => result.score)
      .reduce((total, score) => total + score, 0)
  
      / results.length
    )

  return score
}

const utils = {
  getResultIcon,
  getScore
}

export default utils