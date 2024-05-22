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
    slug?: string;
    title?: string;
    summary?: string;
    instructions?: string;
    image?: File | string;
    creator?: string;
    creator_email?: string;
  };
};
