"use client";

import type { UseAssistantHelpers, UseChatHelpers } from "ai/react";
import { type FC, type PropsWithChildren, useEffect } from "react";
import { useAssistantContext } from "../../context/AssistantContext";
import { AssistantRuntimeProvider } from "../core/AssistantRuntimeProvider";
import { useVercelUseChatRuntime } from "../core/vercel-use-chat/useVercelUseChatRuntime";

export type VercelAIAssistantProviderProps = PropsWithChildren<
  | {
      chat: UseChatHelpers;
    }
  | {
      assistant: UseAssistantHelpers;
    }
>;

export const VercelAIAssistantProvider: FC<VercelAIAssistantProviderProps> = ({
  children,
  ...rest
}) => {
  const vercel = "chat" in rest ? rest.chat : rest.assistant;
  const runtime = useVercelUseChatRuntime(vercel);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <ComposerSync vercel={vercel} />
      {children}
    </AssistantRuntimeProvider>
  );
};

const ComposerSync = ({
  vercel,
}: { vercel: UseChatHelpers | UseAssistantHelpers }) => {
  const { useComposer } = useAssistantContext();

  useEffect(() => {
    useComposer.setState({
      value: vercel.input,
      setValue: vercel.setInput,
    });
  }, [useComposer, vercel.input, vercel.setInput]);

  return null;
};