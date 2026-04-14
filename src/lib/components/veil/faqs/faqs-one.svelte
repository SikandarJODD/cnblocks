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
			answer: "Start with a 14-day free trial with full access to all features. No credit card required. You can upgrade to a paid plan at any time during or after the trial.",
		},
		{
			id: "item-2",
			question: "Can I change my plan later?",
			answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference.",
		},
		{
			id: "item-3",
			question: "What payment methods do you accept?",
			answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay via invoice.",
		},
		{
			id: "item-4",
			question: "Is there a setup fee?",
			answer: "No, there are no setup fees or hidden costs. You only pay for your subscription plan.",
		},
		{
			id: "item-5",
			question: "Do you offer refunds?",
			answer: "We offer a 30-day money-back guarantee. If you're not satisfied, contact us within 30 days for a full refund.",
		},
	];
</script>

<section class="@container bg-background py-24">
	<div class="mx-auto max-w-2xl px-6">
		<div class="text-center">
			<h2 class="font-serif text-4xl font-medium text-balance">Frequently Asked Questions</h2>
			<p class="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
				Find answers to common questions about our platform.
			</p>
		</div>
		<Card variant="outline" class="mt-12 p-2">
			<Accordion type="single" collapsible>
				{#each faqItems as item (item.id)}
					<AccordionItem value={item.id} class="border-b-0 px-4">
						<AccordionTrigger
							class="cursor-pointer py-4 text-sm font-medium hover:no-underline"
						>
							{item.question}
						</AccordionTrigger>
						<AccordionContent>
							<p class="pb-2 text-sm text-muted-foreground">{item.answer}</p>
						</AccordionContent>
					</AccordionItem>
				{/each}
			</Accordion>
		</Card>
		<p class="mt-6 text-center text-sm text-muted-foreground">
			Still have questions?
			<a href="/" class="font-medium text-primary hover:underline"> Contact support </a>
		</p>
	</div>
</section>
