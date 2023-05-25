//import utilitiesData from "@/content/utilitiesData";

export const metadata = {
  title: "Utilities",
  description:
    "In case you are wondering What tech I use, Here's the list of what tech I'm currently using for coding on the daily basis. This list is always changing.",
};

function utlities() {
  return (
    <section className="container mx-auto px-2">
      <h1>Utilities</h1>
      <p>
        In case you are wondering What tech I use, Here&apos;s the list of what
        tech I&apos;m currently using for coding on the daily basis. This list
        is always changing.
      </p>
      {/* <div className="flex flex-col gap-14">
        <utilities utility={utilities.system} />
        <UtilitySection utility={utilities.tools} />
        <UtilitySection utility={utilities.software} />
      </div> */}
    </section>
  );
}

export default utlities;
