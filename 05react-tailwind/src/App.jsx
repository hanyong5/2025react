import React from "react";
import data from "./assets/data";

function App() {
  return (
    <>
      <div className="container m-auto">
        <ul className="flex flex-row flex-wrap sm:flex-row sm:flex-wrap gap-2">
          {data.map((item, i) => {
            return (
              <>
                <li className="flex-1 min-w-[45%] sm:min-w-[30%] ">
                  <div className="w-[100%] h-[200px] relative overflow-hidden flex justify-center items-center border">
                    {item.firstimage ? (
                      <>
                        <img
                          src={item.firstimage}
                          className="max-w-[200%] sm:max-w-[100%] bsolute "
                        />
                      </>
                    ) : (
                      "noimage"
                    )}
                  </div>
                  <h3 className="py-3">{item.title}</h3>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
