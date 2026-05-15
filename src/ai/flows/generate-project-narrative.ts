'use server';
/**
 * @fileOverview An AI agent to assist the portfolio owner in crafting varied, audience-specific narratives and summaries for each project.
 *
 * - generateProjectNarrative - A function that handles the project narrative generation process.
 * - GenerateProjectNarrativeInput - The input type for the generateProjectNarrative function.
 * - GenerateProjectNarrativeOutput - The return type for the generateProjectNarrative function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateProjectNarrativeInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  technicalDetails: z
    .string()
    .describe(
      'Detailed technical specifications, technologies used, and architectural decisions.'
    ),
  impactStatements: z
    .string()
    .describe('Key achievements, outcomes, and the impact of the project.'),
  audience: z
    .string()
    .describe(
      'The target audience for the narrative (e.g., recruiters, fellow developers, potential clients).'
    ),
  style: z
    .string()
    .describe(
      'The desired narrative style (e.g., professional, creative, concise, technical).'
    ),
});

export type GenerateProjectNarrativeInput = z.infer<
  typeof GenerateProjectNarrativeInputSchema
>;

const GenerateProjectNarrativeOutputSchema = z
  .string()
  .describe('The generated project narrative.');

export type GenerateProjectNarrativeOutput = z.infer<
  typeof GenerateProjectNarrativeOutputSchema
>;

export async function generateProjectNarrative(
  input: GenerateProjectNarrativeInput
): Promise<GenerateProjectNarrativeOutput> {
  return generateProjectNarrativeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectNarrativePrompt',
  input: { schema: GenerateProjectNarrativeInputSchema },
  output: { schema: GenerateProjectNarrativeOutputSchema },
  prompt: `You are an expert copywriter specializing in crafting compelling project narratives for professional portfolios. Your task is to generate a project description tailored to a specific audience and style, using the provided project details.

Project Name: "{{{projectName}}}"

Technical Details:
{{{technicalDetails}}}

Impact Statements:
{{{impactStatements}}}

Target Audience: "{{{audience}}}"
Desired Style: "{{{style}}}"

Please generate a professional and engaging narrative for this project, keeping the target audience and desired style firmly in mind. Ensure the narrative highlights the project's key features, technologies used, and the impact it achieved. Focus on presenting the information in a way that resonates with the specified audience and adheres to the requested style.`,
});

const generateProjectNarrativeFlow = ai.defineFlow(
  {
    name: 'generateProjectNarrativeFlow',
    inputSchema: GenerateProjectNarrativeInputSchema,
    outputSchema: GenerateProjectNarrativeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
