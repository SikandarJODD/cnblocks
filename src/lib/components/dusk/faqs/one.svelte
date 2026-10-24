<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
	} from "#lib/components/ui/accordion/index.js";

	const faqItems = [
		{
			id: "item-1",
			question: "How long does shipping take?",
			answer: "Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.",
		},
		{
			id: "item-2",
			question: "What payment methods do you accept?",
			answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.",
		},
		{
			id: "item-3",
			question: "Can I change or cancel my order?",
			answer: "You can modify or cancel your order within 1 hour of placing it. After this window, please contact our customer support team who will assist you with any changes.",
		},
		{
			id: "item-4",
			question: "Do you ship internationally?",
			answer: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Additional customs fees may apply depending on your country's import regulations.",
		},
		{
			id: "item-5",
			question: "What is your return policy?",
			answer: "We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some specialty items may have different return terms, which will be noted on the product page.",
		},
	];
</script>

<section class="py-16 md:py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid gap-12 md:grid-cols-2 md:gap-6">
			<h2 class="max-w-sm text-4xl font-medium tracking-tight text-balance text-foreground">
				Frequently Asked Questions
			</h2>

			<div>
				<Accordion type="single" class="w-full">
					{#each faqItems as item (item.id)}
						<AccordionItem value={item.id} class="border-dashed">
							<AccordionTrigger class="cursor-pointer text-base hover:no-underline">
								{item.question}
							</AccordionTrigger>
							<AccordionContent>
								<p class="text-base text-muted-foreground">{item.answer}</p>
							</AccordionContent>
						</AccordionItem>
					{/each}
				</Accordion>

				<p class="mt-6 text-muted-foreground">
					Can't find what you're looking for? Contact our
					<a href="/" class="font-medium text-primary hover:underline">
						customer support team
					</a>
				</p>
			</div>
		</div>
	</div>
</section>
