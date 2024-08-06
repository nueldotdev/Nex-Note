import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
  LogoutLink
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserNav from "./UserNav";

export async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  const userEmail = `${user?.email}`;
  const userFullname = `${user?.given_name} ${user?.family_name}`
  const userImg = `${user?.picture}`;


  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            <span className="text-primary">Nex</span>Note
          </h1>
        </Link>

        <div className="flex items-center gap-x-5">
          <ThemeToggle />

          {(await isAuthenticated()) ? (
            <UserNav fullname={userFullname} email={userEmail} image={userImg} />
          ) : (
            <AuthInUpBtns />
          )}
        </div>
      </div>
    </nav>
  );
}

const AuthInUpBtns = () => {
  return (
    <div className="flex items-center gap-x-2">
      <LoginLink>
        <Button>Sign In</Button>
      </LoginLink>
      <RegisterLink>
        <Button variant={"secondary"}>Sign Up</Button>
      </RegisterLink>
    </div>
  );
};
