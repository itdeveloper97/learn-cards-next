"use client";
import { Button, TextInput, Textarea } from "@mantine/core";
import { addPost } from "@/app/shared/api/fireabse/posts/add-post";
import { useForm, UseFormInput } from "@mantine/form";
import { AddPostRequest } from "@/app/shared/api/fireabse/posts/types";

const formConfig: UseFormInput<AddPostRequest> = {
  initialValues: {
    title: "",
    description: "",
    tags: "",
  },
};
export const AddPostForm = () => {
  const form = useForm<AddPostRequest>(formConfig);

  return (
    <form
      onSubmit={form.onSubmit(addPost)}
      className={"flex flex-col gap-2 min-w-80"}
    >
      <TextInput
        {...form.getInputProps("title")}
        key={form.key("title")}
        label={"Title"}
        placeholder={"Title"}
        className={"w-80"}
      />
      <Textarea
        {...form.getInputProps("description")}
        key={form.key("description")}
        label={"Content"}
        placeholder={"Content"}
      />
      <TextInput
        {...form.getInputProps("tags")}
        key={form.key("tags")}
        label={"Tags"}
        placeholder={"tag1, tag2"}
      />
      <Button type={"submit"}>Submit</Button>
    </form>
  );
};
