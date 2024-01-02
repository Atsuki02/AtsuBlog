import GoogleButton from "@/app/components/Button/GoogleButton";
import SignUpForm from "@/app/components/Form/SignUpForm";

export default function Signup() {
  return (
    <div className="relative overflow-hidden px-6 pb-28 pt-6 sm:py-28">
      <div className="mx-auto max-w-screen-md px-4 py-12 sm:px-6 md:max-w-screen-xl md:px-8 md:py-20 lg:py-32">
        <div className="md:w-1/2 md:pe-8 xl:w-5/12 xl:pe-0">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
            Share Your Story, Make an {""}
            <span className="text-blue-600 dark:text-blue-500">Impact!</span>
          </h1>
          <p className="mt-3 text-base text-gray-500">
            Embark on an exciting journey of self-expression and global
            connection. Sign up now and start sharing your unique voice with the
            world!
          </p>

          <div className="mt-8 grid">
            <GoogleButton />
          </div>

          <div className="flex items-center py-6 text-sm uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t after:ms-6 after:flex-[1_1_0%] after:border-t dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
            Or
          </div>

          <SignUpForm />
        </div>
      </div>

      <div className="h-full bg-[url('/signup.png')] bg-cover bg-center bg-no-repeat md:absolute md:end-0 md:start-1/2 md:top-0 md:block"></div>
    </div>
  );
}
