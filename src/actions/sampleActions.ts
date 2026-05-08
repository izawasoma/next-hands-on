"use server";

interface FormState {
  error: string;
}

export const createTask = async (
  userId: number,
  _: FormState,
  formData: FormData,
) => {
  // フォームデータからタスク名を取得
  const name = formData.get("name") as string;
  console.log("Post Data:", name);
// バインドした値をログに出力
console.log("User ID:", userId);
// 2秒待機
await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    error: "タスクの作成に失敗しました。",
  };
};
