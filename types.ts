export type Meal = {
  id?: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

export type MealsGridProps = {
  meals: Meal[];
};

export type SaveMealProps = {
  meal: {
    title: string;
    image: {
      size: number;
      type: string;
      name: string;
      lastModified: number;
    };
    summary: string;
    instructions: string;
    creator?: null;
    creator_email?: null;
  };
};
