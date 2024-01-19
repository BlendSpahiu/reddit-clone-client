import { ReactElement } from "react";
import { Container } from "../components/base/Container";
import logo from "../assets/images/logo.png";
import { Button } from "../components/base/Button";
import { Input } from "../components/base/Input";
import { useForm } from "react-hook-form";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../hooks/Auth/useAuth";

export const Header = (): ReactElement => {
  const { setIsLogin } = useAuth();
  const { register } = useForm<any>();

  return (
    <Container className="header space-x-40">
      <img src={logo} alt="Logo" width={120} />
      <Input
        icon={
          <MagnifyingGlassIcon className="absolute ml-2 h-5 w-5 text-gray-500" />
        }
        name="search"
        register={register}
        placeholder="Search Reddit"
      />
      <Container>
        <Button
          className="w-[80px] text-white"
          onClick={() => setIsLogin(true)}
          size="sm"
        >
          Log In
        </Button>
      </Container>
    </Container>
  );
};
