import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelectors";
import {
  setUserName,
  setUser,
  setPassword,
} from "../../store/slices/userSlice";
import { FormContainer, Form, Input, Lable, Subtitle, DataContainer, Button } from "./styles";

export const Profile = () => {
  const { register, handleSubmit } = useForm();
  const { name, email } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch(setUserName(data.name));
        dispatch(setUser(data.email));
        dispatch(setPassword(data.password));
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Subtitle>Profile</Subtitle>
        <FormContainer>
          <DataContainer>
            <Lable>Name</Lable>
            <Input type="text" placeholder={name} {...register("name")} />
          </DataContainer>
          <DataContainer>
            <Lable>Email</Lable>
            <Input placeholder={email} type="email" {...register("email")} />
          </DataContainer>
        </FormContainer>
        <Button type="submit">Save changes</Button>
      </Form>
    </>
  );
};
