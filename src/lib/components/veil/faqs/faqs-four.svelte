<script lang="ts">
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "$lib/components/ui/accordion";
  import { Card } from "$lib/components/ui/veil/card";

  type FAQItem = {
    id: string;
    question: string;
    answer: string;
  };

  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      question: "How does the free trial work?",
      answer:
        "Start with a 14-day free trial with full access to all features. No credit card required.",
    },
    {
      id: "item-2",
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      id: "item-3",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    },
    {
      id: "item-4",
      question: "Is there a setup fee?",
      answer:
        "No, there are no setup fees or hidden costs. You only pay for your subscription plan.",
    },
    {
      id: "item-5",
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee. Contact us within 30 days for a full refund.",
    },
    {
      id: "item-6",
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel anytime from your account settings. Your access continues until the billing period ends.",
    },
  ];
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-3xl px-6">
    <div class="text-center">
      <h2 class="text-balance font-serif text-4xl font-medium">
        Common Questions
      </h2>
      <p class="text-muted-foreground mx-auto mt-4 max-w-md text-balance">
        Everything you need to know about our platform.
      </p>
    </div>

    <Card variant="outline" class="mt-12 p-2">
      <Accordion type="single" collapsible>
        {#each faqItems as item (item.id)}
          <AccordionItem value={item.id} class="border-b-0 px-4">
            <AccordionTrigger class="cursor-pointer py-4 text-sm font-medium hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <p class="text-muted-foreground pb-2 text-sm">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        {/each}
      </Accordion>
    </Card>

    <p class="text-muted-foreground mt-8 text-center text-sm">
      Have another question?
      <a href="#" class="text-primary font-medium hover:underline">Get in touch</a>
    </p>
  </div>
</section>
