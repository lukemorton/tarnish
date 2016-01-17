function PostSummary(postSummary) {
  return (
    <div className="post_summary">
      <h2 className="post_summary__title type--heading_link">{postSummary.title}</h2>
    </div>
  );
}

function PostSummaries(postSummaries) {
  return postSummaries.map(PostSummary);
}

export default function Index({ postSummaries }) {
  return (
    <div>
      <h1 className="type--page_title">Homepage</h1>

      {PostSummaries(postSummaries)}
    </div>
  );
}
