import { SkillResult } from "@/styles/components/ResultsCard"
import { ISkillResult } from "./ResultSummaryCard"
import Image from "next/image"

export default function SkillResultComponent({category, icon, score}: ISkillResult){

  return(
    <SkillResult category={category}>
      <span>
        <Image src={icon} alt="" width={20} height={20}/>
        {category}
      </span>
        <span>{score} <span className="text-muted">/ 100</span>
      </span>      
    </SkillResult>
  )
}