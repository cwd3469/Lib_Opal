import Dotenv from 'dotenv';
Dotenv.config();
import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const embedding = await openai.embeddings.create({
    model: 'text-embedding-3-large',
    input: 'The quick brown fox jumped over the lazy dog',
});
console.log(embedding);
