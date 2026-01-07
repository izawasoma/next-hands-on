const TaskEditIdPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <div>TaskEditIdPage - {id}</div>;
};

export default TaskEditIdPage;
