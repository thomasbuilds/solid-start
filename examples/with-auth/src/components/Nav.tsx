import { useLocation } from "@solidjs/router";
import { Show } from "solid-js";
import { useSession } from "~/lib/Context";

export default function Nav() {
  const location = useLocation();
  const { signedIn, signOut } = useSession();

  const active = (path: string) =>
    path === location.pathname
      ? "border-b-2 border-sky-400 text-white"
      : "border-b-2 border-transparent text-gray-200 hover:border-sky-400";

  return (
    <nav class="fixed top-0 left-0 w-full bg-sky-800 shadow-md z-50">
      <ul class="container mx-auto flex items-center p-3">
        <li class={`mx-2 sm:mx-6 ${active("/")}`}>
          <a href="/">Home</a>
        </li>
        <li class={`mx-2 sm:mx-6 ${active("/about")}`}>
          <a href="/about">About</a>
        </li>
        <li class="ml-auto px-2 sm:px-6 text-white">
          <Show when={signedIn()} fallback={<a href="/login">Login</a>}>
            <button onclick={signOut} class="cursor-pointer">
              Logout
            </button>
          </Show>
        </li>
      </ul>
    </nav>
  );
}
