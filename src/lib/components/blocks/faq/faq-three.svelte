<script lang="ts">
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "$lib/components/ui/accordion";

  import type { Icon } from "@lucide/svelte";
  import Clock from "@lucide/svelte/icons/clock";
  import CreditCard from "@lucide/svelte/icons/credit-card";
  import Truck from "@lucide/svelte/icons/truck";
  import Globe from "@lucide/svelte/icons/globe";
  import Package from "@lucide/svelte/icons/package";

  type FAQItem = {
    id: string;
    icon: typeof Icon;
    question: string;
    answer: string;
  };

  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: Clock,
      question: "What are your business hours?",
      answer:
        "Our customer service team is available Monday through Friday from 9:00 AM to 8:00 PM EST, and weekends from 10:00 AM to 6:00 PM EST. During holidays, hours may vary and will be posted on our website.",
    },
    {
      id: "item-2",
      icon: CreditCard,
      question: "How do subscription payments work?",
      answer:
        "Subscription payments are automatically charged to your default payment method on the same day each month or year, depending on your billing cycle. You can update your payment information and view billing history in your account dashboard.",
    },
    {
      id: "item-3",
      icon: Truck,
      question: "Can I expedite my shipping?",
      answer:
        "Yes, we offer several expedited shipping options at checkout. Next-day and 2-day shipping are available for most U.S. addresses if orders are placed before 2:00 PM EST. International expedited shipping options vary by destination.",
    },
    {
      id: "item-4",
      icon: Globe,
      question: "Do you offer localized support?",
      answer:
        "We offer multilingual support in English, Spanish, French, German, and Japanese. Our support team can assist customers in these languages via email, chat, and phone during standard business hours for each respective region.",
    },
    {
      id: "item-5",
      icon: Package,
      question: "How do I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number on our website or the carrier's website to track your package. You can also view order status and tracking information in your account dashboard under \"Order History\".",
    },
  ];
</script>

<section class="bg-muted dark:bg-background py-20">
  <div class="mx-auto max-w-5xl px-4 md:px-6">
    <div class="flex flex-col gap-10 md:flex-row md:gap-16">
      <div class="md:w-1/3">
        <div class="sticky top-20">
          <h2 class="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p class="text-muted-foreground mt-4">
            Can't find what you're looking for? Contact our{" "}
            <a href="/" class="text-primary font-medium hover:underline">
              customer support team
            </a>
          </p>
        </div>
      </div>
      <div class="md:w-2/3">
        <Accordion type="single" class="w-full space-y-2">
          {#each faqItems as item}
            {@const Icon = item.icon}
            <AccordionItem
              value={item.id}
              class="bg-background shadow-xs rounded-lg border px-4 last:border-b"
            >
              <AccordionTrigger
                class="cursor-pointer items-center py-5 hover:no-underline"
              >
                <div class="flex items-center gap-3">
                  <div class="flex size-6">
                    <Icon class="m-auto size-4" />
                  </div>
                  <span class="text-base">{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent class="pb-5">
                <div class="px-9">
                  <p class="text-base">{item.answer}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          {/each}
        </Accordion>
      </div>
    </div>
  </div>
</section>
