<script lang="ts">
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "$lib/components/ui/accordion";
  const faqItems = [
    {
      id: "item-1",
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.",
    },
    {
      id: "item-2",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.",
    },
    {
      id: "item-3",
      question: "Can I change or cancel my order?",
      answer:
        "You can modify or cancel your order within 1 hour of placing it. After this window, please contact our customer support team who will assist you with any changes.",
    },
    {
      id: "item-4",
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Additional customs fees may apply depending on your country's import regulations.",
    },
    {
      id: "item-5",
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some specialty items may have different return terms, which will be noted on the product page.",
    },
  ];
</script>

<section class="py-16 md:py-24">
  <div class="mx-auto max-w-5xl px-4 md:px-6">
    <div class="mx-auto max-w-xl text-center">
      <h2 class="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
        Frequently Asked Questions
      </h2>
      <p class="text-muted-foreground mt-4 text-balance">
        Discover quick and comprehensive answers to common questions about our
        platform, services, and features.
      </p>
    </div>

    <div class="mx-auto mt-12 max-w-xl">
      <Accordion
        type="single"
        class="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
      >
        {#each faqItems as item}
          <div class="group">
            <AccordionItem
              value={item.id}
              class="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
            >
              <AccordionTrigger
                class="cursor-pointer text-base hover:no-underline"
                >{item.question}</AccordionTrigger
              >
              <AccordionContent>
                <p class="text-base">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
            <hr
              class="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0"
            />
          </div>
        {/each}
      </Accordion>

      <p class="text-muted-foreground mt-6 mx-auto w-fit text-sm">
        Can't find what you're looking for? Contact our{" "}
        <a href="#" class="text-primary font-medium hover:underline">
          customer support team
        </a>
      </p>
    </div>
  </div>
</section>
