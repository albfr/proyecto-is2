import { getSession } from "next-auth/react";

// This is how to get props using session context

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function Component(props) {
    return <p>{JSON.stringify(props)}</p>
}
