import { useRouter } from "next/router";
import carsData from "@/data/carsData";
// import CarsPage from "@/components/templates/CarsPage";
import CarsList from "@/components/templates/CarsList";
 

function hatchback() {
    const router = useRouter();
    const {carModels} = router.query

    const filteredModels = carsData.filter(car => car.category === carModels )
  return (
    <div> <CarsList data={filteredModels} /> </div>
  )
}

export default hatchback