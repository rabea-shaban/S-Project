const Home = () => {
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome, {userName}</p>
      <p>Email: {userEmail}</p>
    </div>
  );
};

export default Home;
