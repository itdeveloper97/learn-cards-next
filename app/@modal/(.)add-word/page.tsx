"use client";
import { useRouter } from "next/navigation";
import { Modal } from "@mantine/core";
import { AddWordForm } from "@/app/features/form/addWordForm/AddWordForm";

export default function Page() {
  const router = useRouter();
  return (
    <Modal title={"Add Word"} opened={true} onClose={router.back}>
      <AddWordForm />
    </Modal>
  );
}
