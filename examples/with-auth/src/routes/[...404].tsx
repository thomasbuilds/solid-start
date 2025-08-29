import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";

export default function NotFound() {
  return (
    <main class="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-50 text-gray-700">
      <Title>Page Not Found (404)</Title>
      <h1 class="text-6xl font-thin uppercase text-sky-700">Not Found</h1>
      <p class="font-medium">
        Sorry, the page you’re looking for doesn't exist.
      </p>
      <A
        href="/"
        class="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors duration-200"
      >
        Go Home
      </A>
    </main>
  );
}
