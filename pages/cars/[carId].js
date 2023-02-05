import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarDetails from "@/components/templates/CarDetails";

function CarDetail() {
	const router = useRouter();
	const { carId } = router.query;

	const getCar = (id) => {
		return carsData.find((car) => car.id === id);
	};

	const allCarDetail = getCar(parseInt(carId));

	return <CarDetails {...allCarDetail} />;
}

export default CarDetail;
