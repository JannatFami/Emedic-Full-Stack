import axios from "axios";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import initializeAuthentication from "../../firebase/firebase.init";
import useAuth from "../../hooks/useAuth";
initializeAuthentication();
export const SignUp = () => {
  const MySwal = withReactContent(Swal);
  const { registerUser, SetUser, auth, updateProfile, logout } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const genRandom = (num) => {
    return Math.floor(Math.random() * num) + 1;
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios.post("https://ruseable.onrender.com/users/", user);
  };
  const onSubmit = (data) => {
    const pass = data.password1;
    const pass2 = data.password2;
    const email = data.mail;
    const name = data.displayName;
    data.img_url = `https://randomuser.me/api/portraits/men/${genRandom(
      100
    )}.jpg`;
    const img_url = `https://randomuser.me/api/portraits/men/${genRandom(
      100
    )}.jpg`;
    if (pass !== pass2) {
      alert("Password Not Matched");
      return;
    }
    axios.post("https://ruseable.onrender.com/reg-user-info", data);
    registerUser(name, email, pass)
      .then((userCredential) => {
        const updatedUser = { email, displayName: name };
        SetUser(updatedUser);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: img_url,
        }).then(() => {
          localStorage.setItem("isAuth", "true");
          saveUser(email, name);
          MySwal.fire({
            title: (
              <p>
                Signup Successfull
                <br />
                Please Login !
              </p>
            ),
            didOpen: () => {},
          }).then(() => {
            return logout();
          });
          navigate(location.state?.from || "/login");
        });
      })
      .catch((error) => {});
  };
  console.log(errors);

  const handleGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName);
        localStorage.setItem("isAuth", "true");
        Navigate(location.state?.from || "/home");
      })
      .catch((error) => {});
  };

  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">SignUp Now!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex : Rifat Sishir"
                  class="input input-bordered"
                  {...register("displayName", {})}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex : abc@gmail.com"
                  class="input input-bordered"
                  {...register("mail", {})}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Contact</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex : +0181100000"
                  class="input input-bordered"
                  {...register("contact", {})}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Age</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex : 21"
                  class="input input-bordered"
                  {...register("Age", {})}
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
                  {...register("password1", {})}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                  {...register("password2", {})}
                />
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">
                  SignUp
                </button>
                <button onClick={handleGoogle} class="btn btn-success mt-4">
                  SignUp with google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
