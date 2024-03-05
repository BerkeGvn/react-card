/* eslint-disable react/prop-types */
export default function Restart({ onRestart }) {
  return (
    <div className="game-over">
      <h2>Game Over!</h2>
      <p>Your Score: 5</p>
      <p>Highest Score: 12</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}
