/* eslint-disable react/prop-types */
export default function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}
