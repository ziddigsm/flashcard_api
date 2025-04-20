const axios = require('axios');
const nspell = require('nspell');
const dict = require('dictionary-en-us');

require('dotenv').config()

const getQuestionsService = async(topic, questionsCount) => {
    let response = {};
    // const MODEL_NAME = process.env.MODEL_NAME.trim();
    // const API_URL = process.env.API_URL.trim();
    // const API_TOKEN = process.env.API_TOKEN.trim()
    // const payload = {
    //     "model": MODEL_NAME,
    //     "messages": [
    //         {
    //             "role": "user",
    //             "content": `You are an expert quiz master. Read the following topic and generate ${questionsCount} questions and answers to each of them with four options each of which only one is right. Begin with questions straightway in json format. The answer should always be the position of the answer in options. Done include any beginning line.\n\n${topic}`
    //         }
    //     ],
    //     "temperature": 0.7
    // }
    // const headers = {
    //     "Authorization": `Bearer ${API_TOKEN}`,
    //     "Content-Type": "application/json"
    // }
    
    const GOOGLE_API_BASE_URL = process.env.GOOGLE_API_URL
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

    const API_URL = GOOGLE_API_BASE_URL + GOOGLE_API_KEY

    const payload = {
        "contents": [{
            "parts": [{"text": `You are an expert quiz master. Read the following topic and generate ${questionsCount} questions and answers to each of them with four options each of which only one is right. Begin with questions straightway in json format. Ensure to not enclose the json response in any additional syntax. The answer should always be the position of the answer in options. Do not include any beginning line. The question's key should be question. The options' key should be options. The answer's key should be answer. ${topic}`}]
        }]
    }
    const headers = {
         "Content-Type": "application/json"
    }

    await axios.post(API_URL, payload, {
        headers
    }).then(res => {    
        //response = JSON.parse(res.data.choices[0].message.content); 
        const data = res.data.candidates[0].content.parts[0].text.match(/```json\s*([\s\S]*?)\s*```/);
        response = JSON.parse(data[1]);
    }).catch(err => {
        response = {
            message: err.message || "Internal AI server error. Please try again."
        }
    })
    return response;
}

const textValidatorService = (text) => {
    const hasSpecialCharOrNumbers = /[^a-zA-Z\s]/.test(text);
    if(hasSpecialCharOrNumbers)
        return {isValid: false, message: "Invalid Characters", charFault: true};
    return new Promise((resolve, reject) => {
        const suggestions = [];
        dict((err, words) => {
            if(err) reject(err);
            const spell = nspell(words);
            const inputWords = text.trim().split(/\s+/);
            for (let word of inputWords) {
                if(!spell.correct(word)) {
                    suggestions.push({
                        word,
                        suggestions: spell.suggest(word).slice(0, 3),
                      })
                }
            }
            if(suggestions.length > 0){
                resolve({isValid: false, message: "Invalid text.", wordFault: true, suggestions});
            }
            resolve({isValid: true, message: "validation successful"});
        })
    })
}

module.exports = {getQuestionsService, textValidatorService};