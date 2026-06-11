You have two types of sources attached:

1. A markdown lesson plan file: `h200-deep-dive-lesson.md`  
   - This contains a detailed slide-by-slide plan for a video titled  
     **“Inside the NVIDIA H200: How a Data Center GPU Powers Modern AI”**.

2. One official NVIDIA H200 datasheets / whitepapers.
   -  includes accurate specifications, performance numbers, and architecture diagrams for the H200.

Your task is to generate two artifacts:
1.  **complete, beginner-friendly educational & visual video** about the NVIDIA H200, based on these sources.
2.  **complete, beginner-friendly educational & visual slide deck** about the NVIDIA H200, based on these sources.

**the slide deck & video both should be detailed and match in content & narration on the depth of clarty & knowledge passed**

### Overall goal
Produce a detailed, self-contained educational video & slide deck that:

- Explains what the NVIDIA H200 is and how it differs from consumer GPUs.
- Teaches H200’s internal architecture: SMs, memory hierarchy, HBM3e, NVLink.
- Shows why H200 is especially strong for large LLM training and inference.
- Walks through matrix multiplication and backpropagation in enough detail that a newcomer can visualize how parallelism on H200 works.
- Leaves the viewer with a clear mental model of H200 as a “massively parallel matrix engine” for AI and HPC.

### Core requirements

1. **Use the markdown lesson plan as the primary structure.**
   - Treat each “Slide” in `h200-deep-dive-lesson.md` as one segment of the video.
   - For each slide:
     - Expand the “Talking points” into a detailed narration in voiceover.
     - Use **“Visuals”** section describing exactly what should appear on screen for video guidance.

2. **Use the H200 whitepapers/datasheets as the primary factual source.**
   - Pull all numeric specs (memory size, bandwidth, FP8/FP16 throughput, NVLink bandwidth, etc.) from the attached official H200 documents.
   - Make sure values are consistent and realistic. If multiple sources disagree, prefer NVIDIA datasheets.
   - Whenever the lesson plan says “approximate from datasheet”, fill in concrete numbers and clearly explain what they mean in plain language.

3. **Design for absolute beginners.**
   - Introduce and define every acronym the first time it appears, e.g.:
     - **GPU** (Graphics Processing Unit)
     - **HBM3e** (High Bandwidth Memory 3e)
     - **SM** (Streaming Multiprocessor)
     - **FP8 / FP16 / FP32 / FP64** (floating-point precisions)
     - **NVLink** (NVIDIA’s high-speed GPU interconnect)
     - **SIMT** (Single Instruction, Multiple Threads)
     - **GEMM** (General Matrix Multiply)
   - Avoid unexplained jargon. When a concept is advanced (e.g., backpropagation), explain it with analogies and step-by-step reasoning before using it in deeper explanations.

4. **Visual / slide guidance with dark-mode design.**
   - Assume dark backgrounds with light, high-contrast text.
   - For each slide, and corresponding video segment:
     - create & use one or more visuals that could show:
       - H200 module photos or renders.
       - Hopper SM block diagrams.
       - Memory hierarchy diagrams.
       - NVLink topology diagrams.
       - Charts comparing H200 vs H100 where helpful.
     - Where possible, base visuals off diagrams from the attached H200 whitepapers (e.g., HBM stack layout, GPU block diagrams).
   - Focus on clarity and pedagogy, not flashy effects.

5. **Emphasize H200’s strengths for LLMs.**
   - Clearly explain why:
     - 141 GB HBM3e capacity matters for large language models (fewer offloads, larger models, larger batch sizes).
     - 4.8 TB/s memory bandwidth helps feed tensor cores efficiently during large matrix operations.
     - FP8/FP16 tensor performance and NVLink scaling make H200 well-suited for training and serving big LLMs.
   - Use examples from public data (e.g., tokens per second on Llama 2 70B vs H100) to contextualize performance where appropriate.

6. **Matrix multiplication and backpropagation walkthrough.**
   - Slides 13–18 of the lesson plan focus on GEMM and backpropagation.
   - For these slides:
     - Provide a step-by-step, intuitive explanation of how H200 executes large matrix multiplications:
       - How matrices are tiled.
       - How tiles are mapped to thread blocks and SMs.
       - How data flows from HBM3e → L2 cache → shared memory/L1 → registers.
       - How warps and Tensor Cores perform the actual multiply-accumulate operations.
     - Explain backpropagation at a conceptual level and show how it boils down to repeated GEMMs and elementwise operations.
     - Show how H200’s parallelism (many SMs, many warps) and memory bandwidth accelerate both forward and backward passes.

7. **Script style and attribution.**
   - Use a clear, calm teaching tone—like a patient instructor narrating a lesson.
   - Avoid marketing language; focus on understanding and practical intuition.
   - Do not add any AI/tool branding to the script.

