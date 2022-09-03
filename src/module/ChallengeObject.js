import css from "../css/challengeObject.module.css"
import { checkExists } from "../func/arrayManipulationFunctions.ts"
import goTo from "../func/goTo";
import ProgressBar from "./ProgressBar";

export default function ChallengeObject(params) {


    const variables = [
        ["tier"],
        ["nexttier", false, ""],
        ["title"],
        ["subtitle"],
        ["description"],
        ["href"],
        ["queueIds", false, null],
        ["progressCurrent", false, false],
        ["progressNext", false, false]
    ];


    let challenge = variables.map(function (content) {
        const exists = checkExists(params[content[0]])
        if (!checkExists(content[1]) && !exists) {
            throw new Error(`Missing attribute "${content[0]}"`)
        }
        if (!exists) {
            return content[2]
        }
        return params[content[0]]

    })

    let extraTags = challenge[1];
    if (challenge[0] !== "") {
        if (typeof challenge[1] === "object") {
            extraTags = " " + challenge[1].map(function (tag) {
                return css[tag]
            }).join(" ")
        } else {
            extraTags = " " + css[challenge[1]]
        }
    }


    return <a
        className={challenge[0] + " " + css.challenge + extraTags} href={challenge[5]}
        onClick={goTo}
    >
        <p className={css.title}>

            {challenge[2]}
            {challenge[3]}

        </p>

        <p className={css.description}>{challenge[4]}</p>

        {challenge[6]}
        {
            challenge[7] !== false ?
                <ProgressBar
                    progress={challenge[7]}
                    max={challenge[8]}
                    width={120}
                />
                : null
        }
    </a>
}