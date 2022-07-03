import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import initializeAuthentication from "../../firebase/firebase.init";
import useAuth from "../../hooks/useAuth";
/* eslint-disable jsx-a11y/anchor-is-valid */
initializeAuthentication();
export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const onSubmit = (data) => {
    login(data.mail, data.pass).then((res) => {
      localStorage.setItem("isAuth", "true");
      navigate("/home");
    });
    navigate("/home");
  };
  console.log(errors);
  const handleGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("isAuth", "true");
        navigate("/home");
      })
      .catch((error) => {});
  };
  const signUpPage = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos enim
              doloribus, possimus nam cupiditate nemo quia? Praesentium tempore
              tempora ex voluptatem, numquam accusamus modi est explicabo
              perferendis iste accusantium odio.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                  {...register("mail", {})}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                  {...register("pass", {})}
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button
                  onClick={signUpPage}
                  class="btn bg-purple-700 text-pink-50 mb-3"
                >
                  SignUp
                </button>
                <button type="submit" class="btn btn-primary">
                  Login
                </button>
                <button onClick={handleGoogle} class="btn btn-success  mt-3">
                  Login with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
