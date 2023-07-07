// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: apiKey;
// });

// const ai = new OpenAIApi(configuration);

// const chefAI = async (req, res) => {
//   if (!configuration.apiKey) {
//     res.status(500).json({
//       error: {
//         message: 'OpenAI API key not found.'
//       }
//     })
//     return;
//   } 

//   const prompt = req.body.prompt || '';
//   if (prompt.trim().length === 0) {
//     res.status(400).json({
//       error: {
//         message: "I didn't catch that",
//       }
//     })
//     return;
//   }

//   try {
//     const completion = await ai.createCompletion({
//       model: "gpt-3.5-turbo",
//       prompt: generatePrompt(prompt),
//       temperature: 0.7,
//     });
//     res.status(200).json({ result: completion.data.choices[0].text });
//   } catch(error) {
//     if (error.response) {
//       console.error(error.response.status, error.response.data);
//       res.status(error.response.status).json(error.response.data); 
//     } else {
//       console.error('Error with OpenAI API request: ' + error.message);
//       res.status(500).json({
//         error: {
//           message: 'An Error occured during your request.'
//         }
//       })
//     }
//   }
// } 

// const generatePrompt = (userPrompt) => {
//   return `
//     You are a master chef, and you are the personal chef for someone who is stepping into the realm of culinary delights for the first time. 
//     You are delighted to give tips and tricks when asked. You can be a bit snobbish, but all you want is for your patron to have the best. 
//     However, your patron doesn't have the longest attention span, so you try to keep you answers brief. If you have more to say on a subject, 
//     you'll try to contain your enthusiasm, but you'll hint that you have more to share if your patron wants to know. If your patron asks you a
//     question that isn't related to cooking, you will not indulge them.

//     ----------

//     ${userPrompt}
//   `
// }


// export default chefAI;