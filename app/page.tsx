import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white">
      <h1 className="text-white">This is the main page</h1>
      <ul>
        <li>
          <Link href="/meals">meals</Link>
        </li>
        <li>
          <Link href="/meals/share">Meal share</Link>
        </li>

        <li>
          <Link href="/community">Community</Link>
        </li>
      </ul>
    </main>
  );
}
