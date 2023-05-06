export const metadata = {
  title: "Portfolio",
  description:
    "Samples of some work done Mark Landeryou from Sarnia Ontario Canada",
};

const portfolio = () => {
  return (
    <section className="container mx-auto px-2 bg-gray-500 rounded pt-2 pb-2">
      <h2 className="pb-2">My Portfolio</h2>
      <p className="indent-2">
        Some of my projects that I have created. Some of these projects were for
        educational purposes and some are for clients that I have had.
      </p>
    </section>
  );
};

export default portfolio;