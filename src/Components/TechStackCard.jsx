function TachStackCard(data) {
  // console.log(data.data);
  const TechData = data.data;
  return (
    <div
      className="card flex items-center w-26 bg-base-100 shadow-xl py-3 border transition-transform transform hover:border-blue-500 hover:scale-105 animate-fadeIn"
      style={{ animationDelay: data.animationDelay }}
    >
      <div className="h-25 w-30 object-cover">
        <img
          className="h-12 object-cover rounded-md w-half"
          src={TechData?.logo}
          alt={TechData?.name}
        />
      </div>
      <div className="p-3 text-center">
        <h3 className="md:card-title lg:card-title">{TechData?.name}</h3>
      </div>
    </div>
  );
}

export default TachStackCard;
