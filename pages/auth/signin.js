import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://hottelecom.biz/wp-content/uploads/2021/07/Twitter.png"
        alt="twitter image inside a phone"
        className="hidden object-cover md:w-44 h-80 rotate-6 md:inline-flex"
      />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"
              alt="twitter logo"
              className="w-36 object-cover"
            />
            <p className="text-center text-sm italic my-10">
              This app is created for Learning purposes
            </p>
            <button
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              onClick={() =>
                signIn(
                  provider.id,
                  { callbackUrl: "/" },
                  {
                    prompt: "select_account",
                  }
                )
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
