// import Categories from "../../components/module/Categories";
import carsData from "@/data/carsData";
import CarsPage from "@/components/templates/CarsPage";
import Categories from "@/components/module/Categories";

function Index() {
  const cars = carsData.slice(0, 3);
	return (
		<div>
      <Categories />
			<CarsPage data={cars} />
		</div>
	);
}

export default Index;
