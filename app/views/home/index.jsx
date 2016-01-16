function PostSummary(postSummary) {
  return (
    <div>
      <h2>{postSummary.title}</h2>
    </div>
  );
}

function PostSummaries(postSummaries) {
  return map(postSummaries, PostSummary);
}

export default function Index({ postSummaries }) {
  return (
    <div>
      <h1>Homepage</h1>

      {PostSummaries(postSummaries)}
    </div>
  );
}
