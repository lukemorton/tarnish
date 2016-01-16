function PostSummary(postSummary) {
  return (
    <div>
      <h2>{postSummary.title}</h2>
    </div>
  );
}

function PostSummaries(postSummaries) {
  return postSummaries.map(PostSummary);
}

export default function Index({ postSummaries }) {
  return (
    <div>
      <h1>Homepage</h1>

      {PostSummaries(postSummaries)}
    </div>
  );
}
