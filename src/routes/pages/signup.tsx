
import "../../assets/styles/style.scss";
import "../../App.scss";
import SignUpForm from "@/components/forms/signUp";

function SignUp() {

  return (
    <div className="section">
      <div className="_divLg p-20">
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
