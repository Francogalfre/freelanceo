import { ForgotPasswordForm } from "../components/forgot-form";

const page = () => {
  return (
    <div className="flex w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default page;
