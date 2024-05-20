import MealItem from "./meal-item";
import { MealsGridProps } from "@/types";

//  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className=" w-[90%] max-w-[90rem] grid grid-cols-3 gap-20 my-8 mx-auto list-none p-0 ">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
