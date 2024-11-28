import { Button, TextInput } from "@mantine/core";
import { useForm, UseFormInput } from "@mantine/form";
import { SignInSignUpWithEmailAndPasswordParams } from "@/app/shared/api/fireabse/auth/emailAndPassword/types";

const formConfig: UseFormInput<SignInSignUpWithEmailAndPasswordParams> = {
  initialValues: {
    email: "",
    password: "",
  },
};

type Props = {
  onSubmit: (params: SignInSignUpWithEmailAndPasswordParams) => void;
};
export const SignUpSignInForm = ({ onSubmit }: Props) => {
  const form = useForm(formConfig);

  return (
    <form
      onSubmit={form.onSubmit(onSubmit)}
      className={"flex flex-col gap-2 min-w-80"}
    >
      <TextInput
        {...form.getInputProps("email")}
        key={form.key("email")}
        label={"Email"}
        placeholder={"Email"}
      />
      <TextInput
        {...form.getInputProps("password")}
        key={form.key("password")}
        label={"Password"}
        placeholder={"Password"}
        type={"password"}
      />
      <Button type={"submit"}>Submit</Button>
    </form>
  );
};
