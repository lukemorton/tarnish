function handleButtonClick(dispatch) {
  return function () {
    dispatch('toggleColor');
  };
}

export default function Index({ dispatch, color }) {
  return (
    <div>
      <h1 className="type--page_title">Toggle a color with a button</h1>

      <button onClick={handleButtonClick(dispatch)}
              style={{ background: color }} />
    </div>
  );
}
