import RegistrationForm from "@/feature/register/form/registrationForm";

const Register = () => {
    return (
        <div className="h-screen relative flex justify-center">
            <div className="flex flex-col w-90 h-full justify-center gap-2">
                <h1 className="text-2xl font-extrabold tracking-tight text-balance w-fit">Register</h1>
                <RegistrationForm />
            </div>
        </div>
    );
};
export default Register;
