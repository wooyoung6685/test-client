const Login = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={() =>
          (window.location.href = "http://localhost:5003/auth/google")
        }
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
