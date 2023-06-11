import Layout from "@/components/Layout";

function about() {
  return (
    <Layout>
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-md p-6 mt-10">
        <div className="text-2xl font-bold mb-6 text-center text-gray-400">
          <h1>About</h1>
        </div>

        <div>
          <p className="text-justify text-gray-400">
          Nobasys is a company dedicated to the development of software and web pages, our job is to design and develop desktop applications, Web applications, mobile applications, all tailored and according to the needs of our clients, Online Marketing, SEO and SEM Web positioning, we have with a solid, innovative and prepared work team in different specialties such as: Programming, Web Development, Graphic Design, Community Managers, Google AdWords, etc.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default about;
