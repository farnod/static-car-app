import carsData from "@/data/carsData"
 

function hatchback() {
    const hatchbackCars = carsData.filter(car => car.category === "hatchback" )
  return (
    <div>hatchback</div>
  )
}

export default hatchback