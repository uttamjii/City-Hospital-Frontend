const Loader = () => {
  return (
    <section className="w-full h-full flex justify-center items-center drop-shadow-lg  p-4">
         <div className="animate-spin h-8 w-8 mr-3 border-4 border-b-4 border-b-blue-500 rounded-full" ></div>
         <h1 className="text-gray-400">Please Wait...</h1>
    </section>
  );
};

export default Loader;
