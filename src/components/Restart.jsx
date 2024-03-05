/* eslint-disable react/prop-types */
export default function Restart({ onRestart, score, highScore }) {
  return (
    <div className="game-over">
      <h2>Game Over!</h2>
      <p>Your Score: {score}</p>
      <p>Highest Score: {highScore}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}
