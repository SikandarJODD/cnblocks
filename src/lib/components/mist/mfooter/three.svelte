<script lang="ts">
  const links = [
    {
      group: "Product",
      items: [
        {
          title: "Features",
          href: "/",
        },
        {
          title: "Solution",
          href: "/",
        },
      ],
    },
    {
      group: "Company",
      items: [
        {
          title: "About",
          href: "/",
        },
        {
          title: "Licence",
          href: "/",
        },
        {
          title: "Privacy",
          href: "/",
        },
        {
          title: "Cookies",
          href: "/",
        },
      ],
    },
  ];
</script>

<footer
  class="bg-background border-b py-8 sm:py-20 [--color-primary:var(--color-indigo-500)]"
>
  <div class="mx-auto max-w-5xl px-6">
    <div class="grid gap-12 md:grid-cols-5">
      <div class="space-y-6 md:col-span-2">
        <a href="/" aria-label="go home" class="block size-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            role="img"
            color="currentColor"
          >
            <path
              d="M22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18Z"
              stroke="currentColor"
              stroke-width="1.5"
            ></path>
            <path
              d="M22 10C22 11.4001 22 12.1002 21.7275 12.635C21.4878 13.1054 21.1054 13.4878 20.635 13.7275C20.1002 14 19.4001 14 18 14C16.5999 14 15.8998 14 15.365 13.7275C14.8946 13.4878 14.5122 13.1054 14.2725 12.635C14 12.1002 14 11.4001 14 10C14 8.59987 14 7.8998 14.2725 7.36502C14.5122 6.89462 14.8946 6.51217 15.365 6.27248C15.8998 6 16.5999 6 18 6C19.4001 6 20.1002 6 20.635 6.27248C21.1054 6.51217 21.4878 6.89462 21.7275 7.36502C22 7.8998 22 8.59987 22 10Z"
              stroke="currentColor"
              stroke-width="1.5"
            ></path>
            <path
              d="M14 18C14 19.4001 14 20.1002 13.7275 20.635C13.4878 21.1054 13.1054 21.4878 12.635 21.7275C12.1002 22 11.4001 22 10 22C8.59987 22 7.8998 22 7.36502 21.7275C6.89462 21.4878 6.51217 21.1054 6.27248 20.635C6 20.1002 6 19.4001 6 18C6 16.5999 6 15.8998 6.27248 15.365C6.51217 14.8946 6.89462 14.5122 7.36502 14.2725C7.8998 14 8.59987 14 10 14C11.4001 14 12.1002 14 12.635 14.2725C13.1054 14.5122 13.4878 14.8946 13.7275 15.365C14 15.8998 14 16.5999 14 18Z"
              stroke="currentColor"
              stroke-width="1.5"
            ></path>
            <path
              opacity="0.4"
              d="M10 6C10 7.40013 10 8.1002 9.72752 8.63497C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72751C2.89462 9.48783 2.51217 9.10538 2.27248 8.63497C2 8.10019 2 7.40013 2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6Z"
              stroke="currentColor"
              stroke-width="1.5"
            ></path>
          </svg>
        </a>

        <div class="order-first flex flex-wrap gap-6 text-sm md:order-last">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            class="text-muted-foreground hover:text-primary block"
          >
            <svg
              class="size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
              ></path>
            </svg>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="aedIn"
            class="text-muted-foreground hover:text-primary block"
          >
            <svg
              class="size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="col-span-3 grid gap-6 sm:grid-cols-3">
        {#each links as link}
          <div class="space-y-4">
            <span class="block font-medium">{link.group}</span>

            <div class="flex flex-wrap gap-4 sm:flex-col">
              {#each link.items as item}
                <a
                  href={item.href}
                  class="text-muted-foreground hover:text-primary block duration-150"
                >
                  <span>{item.title}</span>
                </a>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</footer>
