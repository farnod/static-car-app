// import Categories from "../../components/module/Categories";
import carsData from "@/data/carsData";
import CarsPage from "@/components/templates/CarsPage";
import Categories from "@/components/module/Categories";
import AllButton from "@/components/module/AllButton";
import SearchBar from "../components/module/SearchBar";

function Index() {
  const cars = carsData.slice(0, 3);
	return (
		<div>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
		</div>
	);
}

export default Index;
