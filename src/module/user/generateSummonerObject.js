import { serverToHumanReadable } from "../../func/server"
import { intToTier } from "../../func/tierFunctions"

export default function generateSummonerObject(summoner) {
    return {
        tier: intToTier(summoner.tier),
        summonerIcon: summoner.icon,
        summonerName: summoner.name,
        selections: summoner.selections,
        titles: summoner.title,
        challenges: summoner.challenges,
        categories: summoner.categoryPoints,
        points: summoner.points,
        id: summoner.id,
        server: serverToHumanReadable(summoner.region)
    }
}