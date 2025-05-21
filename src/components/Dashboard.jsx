function Dashboard({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>waad log in garaysantahay!</p>
      ) : (
        <p>fadlan log in garee.</p>
      )}
      {isLoggedIn ? <p>yes true</p> : <p>no false</p> }
    </div>
  );
}
export default Dashboard;
