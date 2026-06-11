You have two key sources attached:

1. A markdown file named `rtx-5090-deep-dive-lesson.md`, with a slide-by-slide structure for a video titled “Inside the RTX 5090: How a GPU Really Works”.
2. One official whitepaper named `nvidia-rtx-blackwell-gpu-architecture.pd` for the NVIDIA GeForce RTX 5090 (including architecture/Blackwell documentation), which provide accurate diagrams, specifications, and block-level details.

Your task is to generate a complete, beginner-friendly educational video based on these sources. Please follow these instructions carefully:

1. Use the markdown file as the PRIMARY structural guide.
   - Treat each “Slide” in `rtx-5090-deep-dive-lesson.md` as a segment in the video.
   - Preserve the section sequence, titles, and major talking points.

2. Use the RTX 5090 whitepapers (file `nvidia-rtx-blackwell-gpu-architecture.pd`) as the PRIMARY factual source.
   - Populate all technical details (e.g., CUDA core counts, VRAM capacity, memory bandwidth, SM structure descriptions) from the attached whitepapers or official technical docs for RTX 5090.
   - When using numbers or specific claims, make sure they are consistent with the whitepapers.
   - When the markdown plan says “from whitepaper”, fill in the exact, correct values from those documents.

3. Design the video for learners with NO prior GPU background.
   - The video must explicitly define every acronym the first time it is used, for example:
     - CPU (Central Processing Unit)
     - GPU (Graphics Processing Unit)
     - SM (Streaming Multiprocessor)
     - VRAM (Video Random Access Memory)
     - L1 / L2 cache
     - SIMT (Single Instruction, Multiple Threads)
     - GEMM (General Matrix Multiply), if mentioned
   - Avoid unexplained jargon. Explain concepts with simple language and concrete examples before using them in more advanced contexts.

4. Visual / slide guidance:
   - For each slide in the markdown file:
     - Propose one or more concrete visuals: diagrams, charts, or images.
     - Where possible, base these visuals on diagrams from the RTX 5090 / Blackwell whitepapers (e.g., SM diagrams, chip block diagrams, memory hierarchy, card photos).
   - Use DARK MODE design assumptions:
     - Assume dark backgrounds with light, high-contrast text.
     - Visuals should be clean and minimal; avoid busy or decorative elements.

5. Use the RTX 5090 as the ONLY GPU example.
   - This video is a deep dive on “how a GPU works” using the RTX 5090 as the anchor example.
   - You may briefly reference “a CPU” for comparison, but do not bring in other GPU models as detailed case studies.

6. Matrix multiplication walkthrough:
   - For slides 12–15 in the markdown file, produce a detailed, step-by-step explanation of how a matrix multiplication (e.g. C = A × B) is executed on the GPU:
     - How the matrices are tiled.
     - How tiles are assigned to thread blocks and SMs.
     - How data moves from VRAM to L2, to shared memory, to registers.
     - How warps and threads cooperate within an SM.
     - How tensor cores or ALUs perform the repeated multiply-accumulate operations.
   - Provide narration that is intuitive and visual, suitable for animation.

7. Style and attribution:
   - Use a clear, calm teaching tone.
   - Use first-person plural (“we”) sparingly and only when it aids explanation.
   - Do NOT add any tool or model branding in the script.

Your ultimate goal is to produce a comprehensive, self-contained video that:
- Explains what a GPU is.
- Uses RTX 5090 as the concrete example.
- Teaches the memory hierarchy (registers, shared memory, L1, L2, VRAM).
- Teaches SMs, warps, threads, and SIMT.
- Walks through a matrix multiplication example.
- Leaves a beginner with a solid mental model of how a modern GPU works internally.