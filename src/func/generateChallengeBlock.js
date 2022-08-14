import { Fragment } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import aboutChallenge from "../css/aboutChallenge.module.css"
import goTo from "./goTo"
import capstone from "../img/capstone.svg"


/**
     * Function to generate a react object which shows a challenge
     * @param {object} content 
     * @param {boolean} genLine 
     * @returns React object containing the name and the image of a challenge
     */
export default function generateObject(content, genLine = true, challengeId = -1) {

    // Additional stylesheet might be needed, as the challenge will be colored blue if it is the current one
    let additionalStylesheet = ""

    if (content.id === challengeId) {

        additionalStylesheet = " " + aboutChallenge.this

    }

    let imageurl = "https://lolcdn.darkintaqt.com/s/C-" + (content.id * 3).toString(16) + "-master"
    if (content.id < 10 || content.id === 2022000) {
        if (content.id !== 0) {
            imageurl = "https://cdn.darkintaqt.com/lol/static/challenges/" + content.translation.name.toLowerCase().replace(" ", "") + ".webp"
        }
    }

    return <Fragment key={content.id}>

        {genLine ?
            <div className={aboutChallenge.line}></div>
            : null}

        <a href={"/challenge/" + content.id} className={aboutChallenge.category + additionalStylesheet} onClick={goTo}>

            {typeof content.tags.isCapstone !== "undefined"
                ? <img src={capstone} alt="" className={aboutChallenge.capstone} /> :
                null}

            <LazyLoadImage height={28} width={28} src={imageurl} alt={""} />

            <p>

                {content.translation.name}

            </p>

        </a>

    </Fragment>
}