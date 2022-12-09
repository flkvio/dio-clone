import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Column,
  Container,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
  Texto,
  TextoMenor,
} from "./styles";
import { api } from "../../services/api";
import { IFormData } from "./types";

const schema = yup
  .object({
    nome: yup
      .string()
      .required("Este campo é obrigatório!"),
    email: yup
      .string()
      .email("E-mail inválido!")
      .required("Este campo é obrigatório!"),
    password: yup
      .string()
      .min(3, "A senha deve ter no mínimo 3 caracteres!")
      .required("Este campo é obrigatório!"),
  })
  .required();

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  console.log(errors);
  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("E-mail ou senha inválidos!");
      }
      console.log("retorno api", data);
    } catch {
      alert("Houve um erro. Tente novamente!");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                errorMessage={errors?.nome?.message}
                control={control}
                placeholder="Nome Completo"
                leftIcon={<MdPerson/>}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="Email"
                leftIcon={<MdEmail/>}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Criar minha conta" variant="secondary" type="submit" />
              <Texto>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Texto>
            </form>

            <Row>
               <TextoMenor>
                Já tenho uma conta. <a className="link" href="../login/" >Fazer Login</a>
              </TextoMenor>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
