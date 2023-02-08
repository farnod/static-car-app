import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarsPage from "@/components/templates/CarsPage";
 

function hatchback() {
    const router = useRouter();
    const {carModels} = router.query

    const filteredModels = carsData.filter(car => car.category === carModels )
  return (
    <div> <CarsPage data={filteredModels} /> </div>
  )
}

export default hatchback