const MealDetailsPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return <main>MealDetailsPage - {slug}</main>;
};

export default MealDetailsPage;
