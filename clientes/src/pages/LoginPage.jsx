import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, errors: registerError, isAuthenticated } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    login(values);
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);
  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center rounded-md">
      <div className="bg-zinc-800 max-w-md p-7 rounded-md">
        {registerError.map((error, i) => (
          <div
            className="bg-red-500 p-2 text-white rounded-md text-center my-2"
            key={i}
          >
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <h2 className="text-3xl font-bold text-white ">Login</h2>
          <br></br>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-7 py-1 rounded-md my-1 text-left"
            placeholder="Email"
            maxLength="28"
          />
          <br></br>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-7 py-1 rounded-md my-1 text-left"
            placeholder="Password"
          />
          <br></br>
          <br></br>
          <button
            type="Submit"
            className="w-full bg-zinc-700 text-white px-7 py-1
             rounded-md"
          >
            Login
          </button>
        </form>
        <p className="text-left">
          Create new Account{" "}
          <Link to="/register" className="text-blue-500 text-right">
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
