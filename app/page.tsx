import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect('/dashboard')
  }

  return (
    <section className="bg-background flex justify-center items-center flex-col h-[90vh]">
      <h1 className="font-bold text-5xl mt-16">
        Welcome To <span className="text-primary">Nex</span>Note.
      </h1>
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-2xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-5">
            <span className="w-auto px-6 py-3 rounded-full bg-secondary m-2">
              <span className="text-sm font-medium">Track your Tasks</span>
            </span>
            <span className="w-auto px-6 py-3 rounded-full bg-primary text-primary-foreground m-2">
              <span className="text-sm font-medium">Sort your notes</span>
            </span>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary m-2">
              <span className="text-sm font-medium">Set reminders</span>
            </span>
          </div>
          <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            nostrum maxime quas accusamus tenetur similique.
          </p>
        </div>
        <div className="flex justify-center max-w-sm mx-auto mt-10">
          <RegisterLink>
            <Button size={"lg"} className="w-full">
              Sign Up For Free
            </Button>
          </RegisterLink>
        </div>
      </div>
    </section>
  );
}
