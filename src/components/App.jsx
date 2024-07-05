import { useState } from "react";
import Decsription from "./Description/Decsription";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  console.log(totalFeedback);

  return (
    <div>
      <Decsription />
      <Options updateFeedback={updateFeedback} />
      {totalFeedback ? <Feedback feedback={feedback} /> : <Notification />}
    </div>
  );
};

export default App;
