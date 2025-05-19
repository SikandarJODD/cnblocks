<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";

  const enterpriseLinks = [
    { href: "#", label: "About" },
    { href: "#", label: "Customers" },
    { href: "#", label: "Enterprise" },
    { href: "#", label: "Partners" },
    { href: "#", label: "Jobs" },
  ];

  const productLinks = [
    { href: "#", label: "Security" },
    { href: "#", label: "Customization" },
    { href: "#", label: "Enterprise" },
    { href: "#", label: "Partners" },
  ];

  const docsLinks = [
    { href: "#", label: "Introduction" },
    { href: "#", label: "Installation" },
    { href: "#", label: "Utils" },
    { href: "#", label: "Principles" },
    { href: "#", label: "Jargon" },
    { href: "#", label: "Plugin" },
    { href: "#", label: "Customizer" },
    { href: "#", label: "Boilerplates" },
  ];

  const communityLinks = [
    { href: "#", label: "GitHub" },
    { href: "#", label: "Discord" },
    { href: "#", label: "Slack" },
    { href: "#", label: "X / Twitter" },
  ];

  const footerLinks = [
    {
      name: "Enterprise",
      links: enterpriseLinks,
    },
    {
      name: "Product",
      links: productLinks,
    },
    {
      name: "Docs",
      links: docsLinks,
    },
  ];
</script>

<footer class="m-1 rounded-3xl border">
  <div class="mx-auto max-w-5xl space-y-16 px-5 py-16">
    <div
      class="flex flex-wrap items-center justify-between gap-4 border-b pb-8"
    >
      <a href="/" aria-label="go home">
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
      <div class="flex gap-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Threads"
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
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4"
              color="currentColor"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
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
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
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
              d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {#each footerLinks as linksGroup, index}
        <div>
          <span class="font-medium">{linksGroup.name}</span>
          <ul class="mt-4 list-inside space-y-4">
            {#each linksGroup.links as link, index}
              <li>
                <a
                  href={link.href}
                  class="hover:text-primary text-muted-foreground text-sm duration-150"
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
      <div>
        <span class="text-sm font-medium">Community</span>
        <ul class="mt-4 list-inside space-y-4">
          {#each communityLinks as link}
            <li>
              <a
                href={link.href}
                class="hover:text-primary text-muted-foreground text-sm duration-150"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>

        <form class="mt-12 w-full max-w-xs">
          <div class="space-y-2.5">
            <Label class="block text-sm font-medium" for="email">
              Subscribe to our newsletter
            </Label>
            <Input
              class="input variant-mixed sz-md"
              placeholder="Your email"
              type="email"
              id="email"
              required
              name="email"
            />
          </div>
          <Button type="submit" class="mt-3">
            <span>Subscribe</span>
          </Button>
        </form>
      </div>
    </div>
    <div
      class="bg-muted mt-16 flex items-center justify-between rounded-md p-4 px-6 py-3"
    >
      <span class="text-title">&copy; tailus 2021 - Present</span>
      <a href="#" class="text-muted-foreground hover:text-primary text-sm">
        Licence
      </a>
    </div>
  </div>
</footer>
