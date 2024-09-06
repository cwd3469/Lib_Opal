import Dotenv from 'dotenv';
Dotenv.config();
import OpenAI from 'openai';

//TODO: env 추가 작업
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

/** 추론하기 */
const get_completion = async (prompt) => {
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0,
    });
    console.log(response.choices[0].message.content);
};

const prod_review = `Got this panda plush toy for my daughter's birthday, \
who loves it and takes it everywhere. It's soft and \ 
super cute, and its face has a friendly look. It's \ 
a bit small for what I paid though. I think there \ 
might be other options that are bigger for the \ 
same price. It arrived a day earlier than expected, \ 
so I got to play with it myself before I gave it \ 
to her.`;

const prompt = `Your task is to generate a short summary of a product \
review from an ecommerce site. 

Summarize the review below, delimited by triple 
backticks, in at most 30 words. 

Review: ${prod_review}`;

get_completion(prompt);
