export default function Description({
  tulisan,
  gantiTulisanMenjadiHelloWorld,
}) {
  return (
    <h2>
      tulisan dari parent {tulisan} <br />
      <button onClick={gantiTulisanMenjadiHelloWorld}>ubah tulisan</button>
    </h2>
  );
}
