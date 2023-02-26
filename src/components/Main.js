import Card from "./main-children/Card";

import data from "../data.js"

function Main() {
  const mainContent = data.map((item) => 
    <Card
      key={item.id}
      imageURL={item.imageURL}
      title={item.title}
      firstDate={item.date.firstDate}
      lastDate={item.date.secondDate}
      text={item.text}
    />
  )
 
  return (
    <main>    
      {mainContent}
    </main>
  );
}

export default Main;