const MealDetailsPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return <main className="text-white">MealDetailsPage - {slug}</main>;
};

export default MealDetailsPage;
