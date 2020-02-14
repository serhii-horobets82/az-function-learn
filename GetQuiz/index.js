const questions = require("../data/category9.json");

module.exports = async function(context, req) {
  context.log("Request for all questions");

  context.res = {
    body: questions.map(item => {
      return {
        question: item.question,
        answers: item.incorrect_answers.concat([item.correct_answer]).sort()
      };
    })
  };
};
