import { useParams } from "react-router-dom";
import useWeatherForecast from "../../utils/useWeatherForecast";
import { AllDaysWrapper } from "./style";

const AllDays = () => {
  const { id } = useParams();
  const { days, isLoading } = useWeatherForecast(id ? id : "seoul");
  console.log(days);

  return (
    <AllDaysWrapper>
      <div>AllDays</div>
    </AllDaysWrapper>
  );
};

export default AllDays;
