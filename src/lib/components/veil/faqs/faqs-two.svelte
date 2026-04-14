<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
	} from "$lib/components/ui/accordion";

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
	<div class="mx-auto max-w-3xl px-6">
		<div class="flex flex-col gap-8 @xl:flex-row @xl:items-start @xl:gap-12">
			<div class="shrink-0 @xl:sticky @xl:top-24 @xl:w-64">
				<h2 class="font-serif text-3xl font-medium">FAQs</h2>
				<p class="mt-3 text-sm text-muted-foreground">Your questions answered</p>
				<p class="mt-6 hidden text-sm text-muted-foreground @xl:block">
					Need more help?
					<a href="/" class="font-medium text-primary hover:underline"> Contact us </a>
				</p>
			</div>

			<div class="flex-1">
				<Accordion type="single" collapsible>
					{#each faqItems as item (item.id)}
						<AccordionItem value={item.id} class="border-dashed">
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
				<p class="mt-6 text-sm text-muted-foreground @xl:hidden">
					Need more help?
					<a href="/" class="font-medium text-primary hover:underline"> Contact us </a>
				</p>
			</div>
		</div>
	</div>
</section>
