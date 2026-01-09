"use client";
import { Suspense } from "react";
import Button from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      username,
      password,
    });
    console.log("res", res);
  }

  useEffect(() => {
    console.log("error", error);
  }, [error]);

  return (
    <section className="bg-background lg:py-64 py-30 container">
      <form
        onSubmit={handleSubmit}
        className="bg-surface flex flex-col md:max-w-3/6 p-6 rounded-xl gap-4 mx-auto border border-foreground/10"
      >
        <h3>Login</h3>
        {error !== null && (
          <p className="text-xl text-red-600 text-center">
            Incorrect Credentials
          </p>
        )}
        <input
          className="bg-background h-12 p-2 border border-foreground/10"
          placeholder="Username"
          name="username"
          type="text"
          required
        />
        <input
          className="bg-background h-12 p-2 border border-foreground/10"
          placeholder="Password"
          name="password"
          type="password"
          required
        />
        <Button type="submit">Sign In</Button>
      </form>
    </section>
  );
}

export default function LoginPageWrapper() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
