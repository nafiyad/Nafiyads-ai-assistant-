const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = 'your-openai-api-key'; // Replace with your actual API key

app.post('/api/chat', async (req, res) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', req.body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

