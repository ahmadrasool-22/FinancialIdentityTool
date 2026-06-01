import templates from "../data/templates";

const calculateResult = (answers) => {
  const scores = {
    wealthBuilder: 0,
    securitySeeker: 0,
    freedomPursuer: 0,
  };

  answers.forEach((answer) => {
    scores[answer] += 1;
  });

  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  return templates[winner];
};

export default calculateResult;