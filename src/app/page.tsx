import { GitHubLogo } from "@/components/svgs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello NextJS!</h1>
      <GitHubLogo className="fill-black" height={50} width={50} />
      <h2>fsdf</h2>
    </main>
  );
}
