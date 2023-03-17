export default function StatusInfo({ pokemon }) {
  return (
    <div className="pt-10">
      
      {pokemon.stats.map((stats, index) => {
        const statBar = stats.base_stat;
        let greenWidth, yellowWidth, redWidth;

        if (statBar <= 100) {
          greenWidth = statBar;
          yellowWidth = 0;
          redWidth = 0;
        } else if (statBar <= 200) {
          greenWidth = 100;
          yellowWidth = statBar - 100;
          redWidth = 0;
        } else {
          greenWidth = 0;
          yellowWidth = 100 - Math.min(100, statBar - 200);
          redWidth = Math.min(100, statBar - 200);
        }

        const barElements = [];

        if (redWidth > 0) {
          barElements.push(
            <div
              key={`${index}-red`}
              className="bg-red-400 justify-center  flex h-[25px]"
              style={{ width: `${redWidth}%` }}
            >
             
            </div>
          );
        }

        if (yellowWidth > 0) {
          barElements.push(
            <div
              key={`${index}-yellow`}
              className="bg-yellow-400 justify-center flex h-[25px]"
              style={{ width: `${yellowWidth}%` }}
            >
           
            </div>
          );
        }

        if (greenWidth > 0) {
          barElements.push(
            <div
              key={`${index}-green`}
              className="bg-green-400 justify-center flex h-[25px]"
              style={{ width: `${greenWidth}%` }}
            >
              
            </div>
          );
        }

        return (
          <div
            key={index}
            className="flex items-center"
            style={{ width: `${statBar}%` }}
          >
            <div
              className="bg-white h-[40px]  p-2 m-2 rounded-xl items-center flex justify-between min-w-[200px] max-w-[200px]"
              style={{ width: `${statBar}%` }}
            >
             
              <div className="fixed text-[20px] font-semibold font ">{stats.stat.name}</div> 
              {barElements}
           
            </div>
            <div className="text-[20px] font-semibold">{statBar}</div>
          </div>
        );
      })}
    </div>
  );
}
