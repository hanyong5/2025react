import React, { useEffect, useState } from "react";
import { getCompany } from "../../api/comApi";

function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    getCompany().then((res) => {
      console.log(res);

      setAbout(res);
    });
  }, []);

  return (
    <div>
      about자료 출력하기
      {about && (
        <div>
          <h1>{about}</h1>
        </div>
      )}
    </div>
  );
}

export default About;
