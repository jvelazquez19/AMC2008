import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";



function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
 
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-zinc-800 max-w-md p-7 rounded-md">
        {
          registerError.map((error, i) => (
            <div className="bg-red-500 p-2 text-white rounded-md" key={i}>
              { error}
            </div>
          ))
        }
        <form onSubmit={onSubmit}>
          <h2 className="text-3xl font-bold text-white ">Registrar</h2>
          <br></br>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-7 py-1 rounded-md"
            placeholder="Username"
          />

          <br></br>
          <br></br>

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-7 py-1 rounded-md"
            placeholder="Password"
          />
          <br></br>
          <br></br>

          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-7 py-1 rounded-md"
            placeholder="Email"
          />

          <br></br>
          <br></br>

          <button
            type="Submit"
            className="w-full bg-zinc-700 text-white px-7 py-2
             rounded-md"
          >
            Finalizar
          </button>
        </form>
        <p className="text-left">
          Already have an Account?{" "}
          <Link to="/login" className="text-blue-500 text-right">
            {" "}
           Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default RegisterPage;
