'use server';
/**
 * @fileOverview A Genkit flow for administrators to generate inspiring text suggestions for various content types.
 *
 * - adminContentGenerator - A function that generates inspiring text based on given context and key points.
 * - AdminContentGeneratorInput - The input type for the adminContentGenerator function.
 * - AdminContentGeneratorOutput - The return type for the adminContentGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdminContentGeneratorInputSchema = z.object({
  contentType: z
    .enum(['social media post', 'event description', 'news update'])
    .describe('The type of content to generate (e.g., social media post, event description, news update).'),
  keyPoints: z.array(z.string()).describe('A list of key points or messages to include in the content.'),
  tone: z
    .enum(['inspirational', 'informative', 'urgent', 'celebratory'])
    .optional()
    .describe('The desired tone for the generated content (e.g., inspirational, informative, urgent). Defaults to inspirational.'),
});
export type AdminContentGeneratorInput = z.infer<typeof AdminContentGeneratorInputSchema>;

const AdminContentGeneratorOutputSchema = z.object({
  generatedText: z.string().describe('The AI-generated inspiring text content.'),
});
export type AdminContentGeneratorOutput = z.infer<typeof AdminContentGeneratorOutputSchema>;

export async function adminContentGenerator(
  input: AdminContentGeneratorInput
): Promise<AdminContentGeneratorOutput> {
  return adminContentGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adminContentGeneratorPrompt',
  input: {schema: AdminContentGeneratorInputSchema},
  output: {schema: AdminContentGeneratorOutputSchema},
  prompt: `You are an expert content creator for 'Vôlei na Quebrada', a project focused on transforming lives through volleyball in Carapicuíba, promoting empowerment, health, well-being, and gender equality.

Generate an inspiring and engaging {{{tone}}} text for a {{{contentType}}}. The content should reflect the project's mission and values, specifically tailored to girls in Carapicuíba.

Key points to include:
{{#each keyPoints}}- {{{this}}}
{{/each}}

Ensure the text is concise, impactful, and encourages community engagement or participation.
`,
});

const adminContentGeneratorFlow = ai.defineFlow(
  {
    name: 'adminContentGeneratorFlow',
    inputSchema: AdminContentGeneratorInputSchema,
    outputSchema: AdminContentGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt({
      ...input,
      tone: input.tone || 'inspirational', // Default to 'inspirational' if not provided
    });
    return output!;
  }
);
