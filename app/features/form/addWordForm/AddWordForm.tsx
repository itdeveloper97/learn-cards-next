"use client";
import { useForm, UseFormInput } from "@mantine/form";
import { Word } from "@/app/shared/api/fireabse/words/types";
import { Button, TextInput } from "@mantine/core";
import { addWordRequest } from "@/app/shared/api/fireabse/words/add-word-request";

const formConfig: UseFormInput<Pick<Word, "ru" | "en">> = {
  initialValues: {
    ru: "",
    en: "",
  },
};
export const AddWordForm = () => {
  const form = useForm(formConfig);
  return (
    <form
      onSubmit={form.onSubmit(addWordRequest)}
      className={"flex flex-col gap-2 min-w-80"}
    >
      <TextInput
        {...form.getInputProps("ru")}
        key={form.key("ru")}
        label="ru"
        placeholder={"Russian"}
      />
      <TextInput
        {...form.getInputProps("en")}
        key={form.key("en")}
        label="en"
        placeholder={"English"}
      />
      <Button type={"submit"}>Add</Button>
    </form>
  );
};
