"use client";

import { createTask } from "@/actions/sampleActions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const ServerActionPage = () => {
  const useId = 1;
  const createTaskWithId = createTask.bind(null, useId);

  // フォームステート
  const initialState = { error: "" };
  const [state, formAction] = useActionState(createTaskWithId, initialState);

  // フォームステータス
  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={pending}
      >
        送信
      </button>
    );
  };

  return (
    <div className="flex px-8 py-8">
      <form
        action={formAction}
        className="w-full space-y-4 p-8 rounded-lg border-gray-300 border"
      >
        <input
          type="text"
          id="name"
          name="name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default ServerActionPage;
