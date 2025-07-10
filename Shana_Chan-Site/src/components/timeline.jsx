

function Timeline({ experienceArr = [] }) {
  return (
    <div className="relative flex items-start justify-between w-full overflow-x-auto px-4 py-10">
      {/* Timeline line */}
      <div className="absolute top-8 left-0 w-full h-1 bg-green-500 z-0"></div>

      {experienceArr.map((exp, index) => {
        const bgColor = exp.type === "industry" ? "#B3E5FC" : "#E6E6FA";

        return (
          <div key={index} className={`mb-10 p-4 rounded-lg shadow-md relative`} style={{ backgroundColor: bgColor }}>
            {/* Dot */}
            <div className="w-4 h-4 bg-green-500 rounded-full mb-2 z-10"></div>

            {/* Content */}
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-500">{exp.company}</p>
              <p className="text-xs text-gray-400">{exp.duration}</p>
              <p className="mt-2 text-gray-700 text-sm">{exp.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}



export default Timeline;
