import Previoussearchs from "../components/Previoussearchs"
import Recipiecard from "../components/Recipiecard"

const Recipies = () => {
  const recipies=[
    {
      title:"chicken pan pizza",
      image:"/img/gallery/img_1.jpg",
      authorImg:"/img/top-chiefs/img_1.jpg"
    },
    {
      title:"spanghetti and meatball",
      image:"/img/gallery/img_4.jpg",
      authorImg:"/img/top-chiefs/img_2.jpg"
    },
    {
      title:"chicken pan pizza",
      image:"/img/gallery/img_5.jpg",
      authorImg:"/img/top-chiefs/img_3.jpg"
    },
    {
      title:"American cheese Burger",
      image:"/img/gallery/img_6.jpg",
      authorImg:"/img/top-chiefs/img_5.jpg"
    },
    {
      title:"spanghetti and meatball",
      image:"/img/gallery/img_3.jpg",
      authorImg:"/img/top-chiefs/img_4.jpg"
    },
    {
      title:"chicken pan pizza",
      image:"/img/gallery/img_2.jpg",
      authorImg:"/img/top-chiefs/img_6.jpg"
    }
  ].sort(()=> Math.random() * 0.5)
  return (
    <div>
       <Previoussearchs />
       <div className="recipie-container">
          {recipies.map((recip,index) =>(
              <Recipiecard key={index} recip={recip}/>
          ))}
          
           
       </div>
    </div>
  )
}

export default Recipies
