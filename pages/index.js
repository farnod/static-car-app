// import Categories from "../../components/module/Categories";
import carsData from "@/data/carsData";
import CarsPage from "@/components/templates/CarsPage";
import Categories from "@/components/module/Categories";
import AllButton from "@/components/module/AllButton";

function Index() {
  const cars = carsData.slice(0, 3);
	return (
		<div>
      <AllButton />
      <Categories />
			<CarsPage data={cars} />
		</div>
	);
}

export default Index;
