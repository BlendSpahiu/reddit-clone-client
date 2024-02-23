import { ReactElement } from "react";
import { Container } from "../components/base/Container";
import logo from "../assets/images/logo.png";
import { Button } from "../components/base/Button";
import { Input } from "../components/base/Input";
import { useForm } from "react-hook-form";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../hooks/Auth/useAuth";
import { ProfileHeader } from "./ProfileHeader";
import { useNavigate } from "react-router-dom";

export const Header = (): ReactElement => {
  const { setIsLogin, isAuthenticated } = useAuth();
  const { register } = useForm<any>();
  const navigate = useNavigate();

  return (
    <Container className="header space-x-40 border-b border-gray-700">
      <Container
        whileTap={{
          scale: 0.95,
        }}
        whileHover={{
          cursor: "pointer",
        }}
        onClick={() => navigate("/r/home")}
      >
        <img src={logo} alt="Logo" width={148} height={148} />
      </Container>
      <Input
        className="my-2"
        icon={
          <MagnifyingGlassIcon className="absolute ml-2 h-5 w-5 text-gray-500" />
        }
        name="search"
        register={register}
        placeholder="Search Reddit"
      />
      {!isAuthenticated && (
        <Container>
          <Button
            className="w-[80px] text-white"
            onClick={() => setIsLogin(true)}
            size="sm"
          >
            Log In
          </Button>
        </Container>
      )}
      {isAuthenticated && <ProfileHeader />}
    </Container>
  );
};
