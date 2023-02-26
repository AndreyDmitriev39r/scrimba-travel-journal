import Card from "./main-children/Card";

import data from "../data.js"

function Main() {
  const mainContent = data.map((item) => 
    <Card
      key={item.id}
      imageURL={item.imageURL}
    />
  )
  console.log(mainContent);
  return (
    <main>    
      {mainContent}
    </main>
  );
}

export default Main;