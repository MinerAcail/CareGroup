import "../../assets/styles/style.scss";
import "../../App.scss";
import CareForm from "@/components/forms/carepersonForm";

function SignCareForm() {
 //try
  return (
    <div className="section">
      <div className="_divLg py-10">
        <CareForm />
      </div>
    </div>
  );
}

export default SignCareForm;
