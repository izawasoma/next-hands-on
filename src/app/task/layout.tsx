const TaskLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-blue-300 p-4">
      <div>タスクレイアウト</div>
      <div>{children}</div>
    </div>
  );
};

export default TaskLayout;
