export default function index() {
  return <></>;
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "https://github.com/eduardopinheiromr/rating-scrapper",
      permanent: true,
    },
  };
}
